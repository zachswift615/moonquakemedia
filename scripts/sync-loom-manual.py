#!/usr/bin/env python3
"""Publish LOOM's user manual as web pages, both editions: the Mac edition at
/loom/manual/<chapter>/ and the Windows edition at /loom/manual/windows/<chapter>/.

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

One run renders BOTH editions (the renderer's `--edition mac|windows`). The Mac edition keeps the
URLs it has always had, because release notes, the app and old posts link to them and GitHub
Pages cannot redirect. The Windows edition is the same chapters under /loom/manual/windows/. The
screenshots are drawn once and shared: both renders read the same shots directory, so a scene has
one picture and one WebP whichever edition uses it.

    python3 scripts/sync-loom-manual.py \\
        --loom ~/projects/loom \\
        --shots-dir ~/projects/loom/build/Debug/manual/shots

`--shots-dir` is a directory `LOOM --loom-manual-shots` wrote (the build's `manual_shots` step
writes one under build/<config>/manual/shots). Pass `--app <LOOM binary>` instead to draw fresh.

Output, all generated, all overwritten on every run (scripts/release.sh in the LOOM repository
stages exactly these three paths, so nothing may be written outside them):
    src/loom-manual/<slug>.html            one page per chapter, Mac edition
    src/loom-manual/windows/<slug>.html    one page per chapter, Windows edition
    src/_data/loomManual.json              the Mac chapter list, version and source commit at the
                                           top level, as before; the Windows edition under "windows"
    src/assets/loom/manual/*.webp          the screenshots, shared by both editions

The hand-written src/loom-manual/index.njk and src/loom-manual/windows/index.njk (the two landing
pages) are not .html, so a run never deletes them.
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
# Where each edition's pages are written and served. The Mac URLs are the ones that existed before
# there was a second edition; they must not move.
EDITIONS = {
    "mac": {"dir": PAGES_DIR, "url": "/loom/manual/"},
    "windows": {"dir": PAGES_DIR / "windows", "url": "/loom/manual/windows/"},
}
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
        scratch = Path(scratch)
        if args.app:
            # Draw the pictures once, with the Mac render, and hand that directory to the
            # Windows render. The shots do not depend on the edition (the renderer never rewrites
            # a shot's target or callouts), so drawing twice would only cost time.
            shots = scratch / "mac" / "shots"
            source = ["--app", str(args.app.expanduser().resolve())]
        else:
            shots = args.shots_dir.expanduser().resolve()
            source = ["--shots-dir", str(shots)]

        documents = {}
        for edition in EDITIONS:
            out = scratch / edition
            render = [sys.executable, str(loom / "tools" / "manual" / "render_manual.py"),
                      "--html-only", "--edition", edition, "--out-dir", str(out)]
            render += source if (edition == "mac" or not args.app) else ["--shots-dir", str(shots)]
            print(f"[{edition}] " + run(*render).strip())
            found = list(out.glob("*.html"))
            if len(found) != 1:
                sys.exit(f"FAIL: the {edition} render wrote {len(found)} HTML files to {out}, "
                         f"expected one.")
            documents[edition] = found[0]

        version = re.search(r"LOOM-Manual-(\d[^/]*)\.html", documents["mac"].name).group(1)
        windows_version = re.search(r"LOOM-Manual-Windows-(\d[^/]*)\.html",
                                    documents["windows"].name).group(1)
        if windows_version != version:
            sys.exit(f"FAIL: the Mac edition is {version} and the Windows edition is "
                     f"{windows_version}; they are rendered from one tree and must agree.")

        IMAGES_DIR.mkdir(parents=True, exist_ok=True)
        for old in IMAGES_DIR.glob("*.webp"):
            old.unlink()
        for edition in EDITIONS.values():
            edition["dir"].mkdir(parents=True, exist_ok=True)
            for old in edition["dir"].glob("*.html"):
                old.unlink()

        # Each WebP name and the PNG it was made from. Both editions read one shots directory, so
        # a scene's name always means one picture; this refuses the day that stops being true
        # rather than letting one edition's picture silently overwrite the other's.
        converted: dict[str, Path] = {}
        listings = {}
        for edition, where in EDITIONS.items():
            text = documents[edition].read_text(encoding="utf-8")
            listings[edition] = publish(edition, text, where["dir"], where["url"], shots,
                                        converted)

    mac = listings["mac"]
    DATA_FILE.write_text(json.dumps({
        "version": version,
        "sourceCommit": commit,
        "chapters": mac,
        "windows": {
            "version": version,
            "url": EDITIONS["windows"]["url"],
            "chapters": listings["windows"],
        },
    }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    images = len(list(IMAGES_DIR.glob("*.webp")))
    size = sum(p.stat().st_size for p in IMAGES_DIR.glob("*.webp"))
    print(f"OK: LOOM {version} manual at {commit}: {len(mac)} Mac chapters, "
          f"{len(listings['windows'])} Windows chapters, "
          f"{images} screenshots ({size / 1e6:.1f} MB of WebP)")
    return 0


def publish(edition: str, text: str, pages_dir: Path, url_base: str, shots: Path,
            converted: dict) -> list:
    """Split one edition's document into chapter pages under `pages_dir`, served at
    `url_base<slug>/`, and return its chapter list for loomManual.json."""
    chapters = [{"order": int(n), "file": f"{n}-{name}", "slug": name, "body": body}
                for n, name, body in SECTION.findall(text)]
    if not chapters:
        sys.exit(f"FAIL: found no <section class=\"page\"> in the {edition} render. Its "
                 "format has changed; update SECTION in this script.")

    # Which page owns each id, so a link to a heading in another chapter goes to that page.
    owner = {}
    for chapter in chapters:
        chapter["url"] = f"{url_base}{chapter['slug']}/"
        owner[f"page-{chapter['file']}"] = (chapter, None)
        for anchor in re.findall(r'\sid="([^"]+)"', chapter["body"]):
            owner[anchor] = (chapter, anchor)

    for chapter in chapters:
        body = chapter["body"]

        def link(match: re.Match) -> str:
            target = match.group(1)
            if target not in owner:
                sys.exit(f"FAIL: {edition} {chapter['file']} links to #{target}, which no "
                         f"chapter has.")
            page, anchor = owner[target]
            if page is chapter and anchor:
                return f'href="#{anchor}"'
            return f'href="{page["url"]}{"#" + anchor if anchor else ""}"'

        body = re.sub(r'href="#([^"]+)"', link, body)

        def image(match: re.Match) -> str:
            scene = match.group(1)
            src = shots / f"{scene}.png"
            out = IMAGES_DIR / f"{scene}.webp"
            if scene in converted and converted[scene] != src:
                sys.exit(f"FAIL: {scene}.webp would be made from both {converted[scene]} and "
                         f"{src}. The editions share one picture per scene name.")
            if scene not in converted:
                width = int(re.search(r"pixelWidth: (\d+)", run("sips", "-g", "pixelWidth", str(src))).group(1))
                resize = ["-resize", str(MAX_IMAGE_WIDTH), "0"] if width > MAX_IMAGE_WIDTH else []
                run("cwebp", "-quiet", "-q", "82", "-m", "6", *resize, str(src), "-o", str(out))
                converted[scene] = src
            # The binary draws at two pixels per UI unit, so the picture's CSS size is half
            # its pixel size, the web's version of the PDF's `image-resolution: 288dpi`.
            dims = run("sips", "-g", "pixelWidth", "-g", "pixelHeight", str(src))
            w = int(re.search(r"pixelWidth: (\d+)", dims).group(1)) // 2
            h = int(re.search(r"pixelHeight: (\d+)", dims).group(1)) // 2
            return (f'<img src="{IMAGE_URL}{scene}.webp" width="{w}" height="{h}" '
                    f'loading="lazy" decoding="async"')

        body = re.sub(r'<img src="generated-shots/([^"]+)\.png"', image, body)
        if "generated-shots/" in body:
            sys.exit(f"FAIL: {edition} {chapter['file']} has a picture this script did not "
                     f"convert.")

        title = plain(re.search(r"<h1[^>]*>(.*?)</h1>", body, re.S).group(1))
        chapter["title"] = title
        chapter["description"] = describe(body)
        # The page supplies its own <h1> from the title, so the chapter's own is dropped.
        body = re.sub(r"<h1[^>]*>.*?</h1>\s*", "", body, count=1, flags=re.S)
        # Raw, so a `{{` in the manual's prose can never be read as a template tag.
        page = (f"---\nlayout: layouts/loom-manual.njk\n"
                f"permalink: {chapter['url']}\n"
                f"manualSlug: {chapter['slug']}\n"
                f"manualEdition: {edition}\n"
                f"---\n{{% raw %}}\n{body}\n{{% endraw %}}\n")
        (pages_dir / f"{chapter['slug']}.html").write_text(page, encoding="utf-8")

    return [{k: c[k] for k in ("order", "slug", "url", "title", "description")}
            for c in chapters]


if __name__ == "__main__":
    sys.exit(main())
