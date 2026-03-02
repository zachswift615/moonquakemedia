#!/usr/bin/env python3
"""
Export the Listen2 user guide as a clean .docx for external review.

Strips all HTML/template markup and converts semantic boxes (tip-box,
feature-box, warning-box) to simple text markers that survive a Word
round-trip. Pandoc converts the cleaned markdown to .docx, preserving
headings, bold, italic, and lists.

Usage:
    python scripts/export-guide-for-review.py [output.docx]

If no output path is given, writes to the current directory as
"Listen2 User Guide - For Review.docx".
"""

import re
import subprocess
import sys
import tempfile
from pathlib import Path

GUIDE_PATH = Path(__file__).resolve().parent.parent / "src" / "guides" / "listen2.md"


def strip_frontmatter(text: str) -> str:
    """Remove YAML frontmatter delimited by ---."""
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            return text[end + 3:].lstrip("\n")
    return text


def convert_boxes(text: str) -> str:
    """Convert styled div boxes to simple text markers.

    <div class="tip-box">
    <h4>{% icon "lightbulb", "inline-icon" %} Title Here</h4>
    <p>Content here.</p>
    </div>

    becomes:

    [TIP: Title Here]
    Content here.
    [/TIP]
    """
    box_types = {
        "tip-box": "TIP",
        "feature-box": "NOTE",
        "warning-box": "WARNING",
    }

    for css_class, label in box_types.items():
        # Match the full box pattern (may span multiple lines)
        pattern = (
            r'<div\s+class="' + re.escape(css_class) + r'">\s*'
            r'<h4>(?:\s*\{%.*?%\}\s*)?(.+?)</h4>\s*'
            r'(.*?)'
            r'</div>'
        )
        for match in re.finditer(pattern, text, re.DOTALL):
            title = match.group(1).strip()
            body = match.group(2).strip()
            # Clean up body: strip <p> tags, <ul>/<li> → markdown
            body = _clean_html_body(body)
            replacement = f"\n[{label}: {title}]\n{body}\n[/{label}]\n"
            text = text.replace(match.group(0), replacement)

    return text


def _clean_html_body(html: str) -> str:
    """Convert simple HTML inside boxes to plain text/markdown."""
    text = html
    # <strong> → **
    text = re.sub(r"<strong>(.*?)</strong>", r"**\1**", text)
    # <li> → bullet
    text = re.sub(r"<li>(.*?)</li>", r"- \1", text, flags=re.DOTALL)
    # Strip remaining tags: <p>, </p>, <ul>, </ul>
    text = re.sub(r"</?(?:p|ul|ol)>", "", text)
    # Clean up extra whitespace
    lines = [line.strip() for line in text.strip().splitlines()]
    return "\n".join(line for line in lines if line)


def strip_content_section_divs(text: str) -> str:
    """Remove <div class="content-section" ...> and their closing </div>."""
    # Opening tags
    text = re.sub(r'<div\s+class="content-section"[^>]*>\s*', "", text)
    # Closing </div> on its own line (leftover from content-section divs)
    text = re.sub(r"\n</div>\s*$", "", text, flags=re.MULTILINE)
    return text


def strip_template_tags(text: str) -> str:
    """Remove Nunjucks/Liquid template tags like {% icon ... %}."""
    return re.sub(r"\{%.*?%\}\s*", "", text)


def strip_span_tags(text: str) -> str:
    """Remove <span> tags but keep their inner text."""
    text = re.sub(r'<span[^>]*>(.*?)</span>', r"\1", text)
    return text


def strip_remaining_html(text: str) -> str:
    """Convert any remaining simple HTML to markdown equivalents."""
    # <strong> → **
    text = re.sub(r"<strong>(.*?)</strong>", r"**\1**", text)
    # <em> → *
    text = re.sub(r"<em>(.*?)</em>", r"*\1*", text)
    # <h4> → ####
    text = re.sub(r"<h4>(.*?)</h4>", r"#### \1", text)
    # <p> → just the text
    text = re.sub(r"<p>(.*?)</p>", r"\1", text, flags=re.DOTALL)
    # <ul>/<li> → markdown lists
    text = re.sub(r"<li>(.*?)</li>", r"- \1", text, flags=re.DOTALL)
    text = re.sub(r"</?(?:ul|ol)>", "", text)
    # Strip any other stray tags
    text = re.sub(r"</?div[^>]*>", "", text)
    return text


def clean_whitespace(text: str) -> str:
    """Normalize excessive blank lines."""
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    return text.strip() + "\n"


def add_title_header(text: str) -> str:
    """Add a document title at the top."""
    return "# Listen2 User Guide\n\n**Your Complete Guide to Personal Audiobooks**\n\n" + text


def export(source: Path, output: Path) -> None:
    raw = source.read_text(encoding="utf-8")

    text = strip_frontmatter(raw)
    text = convert_boxes(text)
    text = strip_content_section_divs(text)
    text = strip_template_tags(text)
    text = strip_span_tags(text)
    text = strip_remaining_html(text)
    text = clean_whitespace(text)
    text = add_title_header(text)

    # Write cleaned markdown to a temp file, then convert with pandoc
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".md", delete=False, encoding="utf-8"
    ) as tmp:
        tmp.write(text)
        tmp_path = tmp.name

    try:
        subprocess.run(
            [
                "pandoc",
                tmp_path,
                "-o",
                str(output),
                "--from=markdown",
                "--to=docx",
            ],
            check=True,
            capture_output=True,
            text=True,
        )
        print(f"Exported: {output}")
        print(f"  Source:  {source}")
        print(f"  Size:   {output.stat().st_size / 1024:.0f} KB")
    except subprocess.CalledProcessError as e:
        print(f"pandoc error: {e.stderr}", file=sys.stderr)
        sys.exit(1)
    finally:
        Path(tmp_path).unlink(missing_ok=True)

    # Also save the cleaned markdown alongside for reference
    md_output = output.with_suffix(".md")
    md_output.write_text(text, encoding="utf-8")
    print(f"  Clean markdown also saved: {md_output}")


def main() -> None:
    if not GUIDE_PATH.exists():
        print(f"Guide not found: {GUIDE_PATH}", file=sys.stderr)
        sys.exit(1)

    if len(sys.argv) > 1:
        output = Path(sys.argv[1])
    else:
        output = Path("Listen2 User Guide - For Review.docx")

    export(GUIDE_PATH, output)


if __name__ == "__main__":
    main()
