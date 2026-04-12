#!/usr/bin/env python3
"""
Promote the current beta Listen 2 Reader guide to latest release and
create a new beta guide at the given version.

What this does:
  1. Finds the current beta and latest entries in guideVersions.json.
  2. Renames the beta guide file (drops the "-beta" suffix).
  3. Updates frontmatter in the promoted file (guideVersion, permalink).
  4. Copies the promoted file as the new beta guide.
  5. Updates frontmatter in the new beta file.
  6. Demotes the old latest to legacy and writes guideVersions.json.

Usage:
    python3 scripts/promote-guide.py v1.9.0

The argument is the version number for the NEW beta guide (e.g. v1.9.0).
"""

import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GUIDES_DIR = ROOT / "src" / "guides" / "listen2"
VERSIONS_FILE = ROOT / "src" / "_data" / "guideVersions.json"
GUIDE_KEY = "listen2"


def die(msg: str) -> None:
    print(f"Error: {msg}", file=sys.stderr)
    sys.exit(1)


def load_versions() -> dict:
    with open(VERSIONS_FILE) as f:
        return json.load(f)


def save_versions(data: dict) -> None:
    with open(VERSIONS_FILE, "w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")


def find_by_status(versions: list[dict], status: str) -> dict | None:
    for v in versions:
        if v["status"] == status:
            return v
    return None


def update_frontmatter(path: Path, old_version: str, new_version: str) -> None:
    """Replace guideVersion and permalink values in YAML frontmatter."""
    text = path.read_text()

    # Only modify content between the first pair of --- delimiters
    parts = text.split("---", 2)
    if len(parts) < 3:
        die(f"Could not parse frontmatter in {path}")

    fm = parts[1]
    fm = re.sub(
        r"(guideVersion:\s*).*",
        rf"\g<1>{new_version}",
        fm,
    )
    fm = re.sub(
        r"(permalink:\s*).*",
        rf"\g<1>/guides/listen2/{new_version}/",
        fm,
    )
    path.write_text("---" + fm + "---" + parts[2])


def main() -> None:
    if len(sys.argv) != 2:
        die("Usage: python3 scripts/promote-guide.py <new-beta-version>\n"
            "  e.g. python3 scripts/promote-guide.py v1.9.0")

    new_beta_version = sys.argv[1]
    if not re.match(r"^v\d+\.\d+\.\d+$", new_beta_version):
        die(f"Version must match vX.Y.Z (got '{new_beta_version}')")

    new_beta_slug = f"{new_beta_version}-beta"

    # --- Load current state ---------------------------------------------------
    data = load_versions()
    versions = data.get(GUIDE_KEY)
    if not versions:
        die(f"No '{GUIDE_KEY}' key in {VERSIONS_FILE}")

    current_beta = find_by_status(versions, "beta")
    current_latest = find_by_status(versions, "latest")

    if not current_beta:
        die("No entry with status 'beta' found in guideVersions.json")
    if not current_latest:
        die("No entry with status 'latest' found in guideVersions.json")

    beta_slug = current_beta["version"]           # e.g. "v1.8.0-beta"
    promoted_slug = beta_slug.replace("-beta", "") # e.g. "v1.8.0"

    beta_file = GUIDES_DIR / f"{beta_slug}.md"
    promoted_file = GUIDES_DIR / f"{promoted_slug}.md"
    new_beta_file = GUIDES_DIR / f"{new_beta_slug}.md"

    if not beta_file.exists():
        die(f"Beta guide file not found: {beta_file}")
    if promoted_file.exists():
        die(f"Target file already exists: {promoted_file}")
    if new_beta_file.exists():
        die(f"New beta file already exists: {new_beta_file}")

    # --- 1. Rename beta file to release file ----------------------------------
    print(f"Renaming {beta_file.name} -> {promoted_file.name}")
    beta_file.rename(promoted_file)

    # --- 2. Update frontmatter in promoted file -------------------------------
    print(f"Updating frontmatter in {promoted_file.name}")
    update_frontmatter(promoted_file, beta_slug, promoted_slug)

    # --- 3. Copy promoted file as new beta ------------------------------------
    print(f"Creating {new_beta_file.name} from {promoted_file.name}")
    shutil.copy2(promoted_file, new_beta_file)
    update_frontmatter(new_beta_file, promoted_slug, new_beta_slug)

    # --- 4. Update guideVersions.json -----------------------------------------
    new_versions = [
        {"version": new_beta_slug, "label": f"{new_beta_version} Beta", "status": "beta"},
        {"version": promoted_slug, "label": promoted_slug, "status": "latest"},
    ]
    for v in versions:
        if v["status"] in ("beta", "latest"):
            # demote old latest to legacy; skip old beta (replaced above)
            if v["status"] == "latest":
                new_versions.append({**v, "status": "legacy"})
        else:
            new_versions.append(v)

    data[GUIDE_KEY] = new_versions
    save_versions(data)
    print(f"Updated {VERSIONS_FILE.name}:")
    for v in new_versions:
        print(f"  {v['label']:20s} [{v['status']}]")

    print("\nDone.")


if __name__ == "__main__":
    main()
