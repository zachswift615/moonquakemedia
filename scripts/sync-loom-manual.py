#!/usr/bin/env python3
"""Publish LOOM's user manual as web pages at /loom/manual/<chapter>/.

The manual's source is `docs/manual/*.md` in the LOOM repository, which is private, so the site's
CI cannot read it at build time. This script runs on a machine that has both checkouts and writes
the result into this repository, where it is committed like any other page.

It does NOT parse the Markdown itself. It runs LOOM's own renderer,
`tools/manual/render_manual.py --html-only`, which is the same code that builds the PDF shipped in
the app bundle. That renderer resolves every cross-reference, places every screenshot, and refuses
a dangling link, a missing picture or a picture drawn for different callouts. So the web manual
fails exactly where the PDF would, and the heading anchors are the PDF's anchors.

What this script adds is only the web half: it splits the one document into one page per
chapter, rewrites the in-document links into links between pages, and converts the screenshots to
WebP.

    python3 scripts/sync-loom-manual.py \\
        --loom ~/projects/loom \\
        --shots-dir ~/projects/loom/build/Debug/manual/shots

`--shots-dir` is a directory `LOOM --loom-manual-shots` wrote (the build's `manual_shots` step
writes one under build/<config>/manual/shots). Pass `--app <LOOM binary>` instead to draw fresh.

Output, all generated, all overwritten on every run:
    src/loom-manual/<slug>.html       one page per chapter
    src/_data/loomManual.json         the chapter list, version and source commit
    src/assets/loom/manual/*.webp     the screenshots
"""
import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
PAGES_DIR = SITE / "src" / "loom-manual"
IMAGES_DIR = SITE / "src" / "assets" / "loom" / "manual"
DATA_FILE = SITE / "src" / "_data" / "loomManual.json"
IMAGE_URL = "/assets/loom/manual/"
MAX_IMAGE_WIDTH = 1600  # full-width shots are drawn at 3200 px; the page column is ~760 px

SECTION = re.compile(r'<section class="page" id="page-(\d\d)-([^"]+)">\n(.*?)\n</section>', re.S)


def run(*args: str) -> str:
    done = subprocess.run(args, capture_output=True, text=True)
    if done.returncode != 0:
        sys.exit(f"FAIL: {' '.join(args)}\n{done.stderr or done.stdout}")
    return done.stdout


def plain(fragment: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()


def describe(body: str) -> str:
    """The chapter's first paragraph, cut at a word boundary to fit a search snippet."""
    match = re.search(r"<p>(.*?)</p>", body, re.S)
    text = re.sub(r"\s+", " ", plain(match.group(1))) if match else ""
    if len(text) <= 155:
        return text
    return text[:152].rsplit(" ", 1)[0].rstrip(",;:") + "..."


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--loom", type=Path, required=True, help="the LOOM repository")
    source = parser.add_mutually_exclusive_group(required=True)
    source.add_argument("--shots-dir", type=Path)
    source.add_argument("--app", type=Path)
    args = parser.parse_args()

    loom = args.loom.expanduser().resolve()
    commit = run("git", "-C", str(loom), "rev-parse", "--short", "HEAD").strip()
    dirty = run("git", "-C", str(loom), "status", "--porcelain", "--", "docs/manual").strip()
    if dirty:
        sys.exit("FAIL: docs/manual has uncommitted changes in the LOOM repository. The web "
                 "manual records the commit it was built from, so build it from a commit.")

    with tempfile.TemporaryDirectory() as scratch:
        render = [sys.executable, str(loom / "tools" / "manual" / "render_manual.py"),
                  "--html-only", "--out-dir", scratch]
        if args.app:
            render += ["--app", str(args.app.expanduser().resolve())]
        else:
            render += ["--shots-dir", str(args.shots_dir.expanduser().resolve())]
        print(run(*render).strip())
        document = next(Path(scratch).glob("LOOM-Manual-*.html"))
        version = re.search(r"LOOM-Manual-(.+)\.html", document.name).group(1)
        text = document.read_text(encoding="utf-8")
        shots = Path(scratch) / "shots" if args.app else args.shots_dir.expanduser().resolve()

        chapters = [{"order": int(n), "file": f"{n}-{name}", "slug": name, "body": body}
                    for n, name, body in SECTION.findall(text)]
        if not chapters:
            sys.exit("FAIL: found no <section class=\"page\"> in the renderer's output. Its "
                     "format has changed; update SECTION in this script.")

        # Which page owns each id, so a link to a heading in another chapter goes to that page.
        owner = {}
        for chapter in chapters:
            chapter["url"] = f"/loom/manual/{chapter['slug']}/"
            owner[f"page-{chapter['file']}"] = (chapter, None)
            for anchor in re.findall(r'\sid="([^"]+)"', chapter["body"]):
                owner[anchor] = (chapter, anchor)

        IMAGES_DIR.mkdir(parents=True, exist_ok=True)
        for old in IMAGES_DIR.glob("*.webp"):
            old.unlink()
        PAGES_DIR.mkdir(parents=True, exist_ok=True)
        for old in PAGES_DIR.glob("*.html"):
            old.unlink()

        for chapter in chapters:
            body = chapter["body"]

            def link(match: re.Match) -> str:
                target = match.group(1)
                if target not in owner:
                    sys.exit(f"FAIL: {chapter['file']} links to #{target}, which no chapter has.")
                page, anchor = owner[target]
                if page is chapter and anchor:
                    return f'href="#{anchor}"'
                return f'href="{page["url"]}{"#" + anchor if anchor else ""}"'

            body = re.sub(r'href="#([^"]+)"', link, body)

            def image(match: re.Match) -> str:
                scene = match.group(1)
                src = shots / f"{scene}.png"
                out = IMAGES_DIR / f"{scene}.webp"
                if not out.exists():
                    width = int(re.search(r"pixelWidth: (\d+)", run("sips", "-g", "pixelWidth", str(src))).group(1))
                    resize = ["-resize", str(MAX_IMAGE_WIDTH), "0"] if width > MAX_IMAGE_WIDTH else []
                    run("cwebp", "-quiet", "-q", "82", "-m", "6", *resize, str(src), "-o", str(out))
                # The binary draws at two pixels per UI unit, so the picture's CSS size is half
                # its pixel size, the web's version of the PDF's `image-resolution: 288dpi`.
                dims = run("sips", "-g", "pixelWidth", "-g", "pixelHeight", str(src))
                w = int(re.search(r"pixelWidth: (\d+)", dims).group(1)) // 2
                h = int(re.search(r"pixelHeight: (\d+)", dims).group(1)) // 2
                return (f'<img src="{IMAGE_URL}{scene}.webp" width="{w}" height="{h}" '
                        f'loading="lazy" decoding="async"')

            body = re.sub(r'<img src="generated-shots/([^"]+)\.png"', image, body)
            if "generated-shots/" in body:
                sys.exit(f"FAIL: {chapter['file']} has a picture this script did not convert.")

            title = plain(re.search(r"<h1[^>]*>(.*?)</h1>", body, re.S).group(1))
            chapter["title"] = title
            chapter["description"] = describe(body)
            # The page supplies its own <h1> from the title, so the chapter's own is dropped.
            body = re.sub(r"<h1[^>]*>.*?</h1>\s*", "", body, count=1, flags=re.S)
            # Raw, so a `{{` in the manual's prose can never be read as a template tag.
            page = (f"---\nlayout: layouts/loom-manual.njk\n"
                    f"permalink: {chapter['url']}\n"
                    f"manualSlug: {chapter['slug']}\n"
                    f"---\n{{% raw %}}\n{body}\n{{% endraw %}}\n")
            (PAGES_DIR / f"{chapter['slug']}.html").write_text(page, encoding="utf-8")

    DATA_FILE.write_text(json.dumps({
        "version": version,
        "sourceCommit": commit,
        "chapters": [{k: c[k] for k in ("order", "slug", "url", "title", "description")}
                     for c in chapters],
    }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    images = len(list(IMAGES_DIR.glob("*.webp")))
    size = sum(p.stat().st_size for p in IMAGES_DIR.glob("*.webp"))
    print(f"OK: LOOM {version} manual at {commit}: {len(chapters)} chapters, "
          f"{images} screenshots ({size / 1e6:.1f} MB of WebP)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
