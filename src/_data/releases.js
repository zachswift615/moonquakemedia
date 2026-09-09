// LOOM's published releases, read from the GitHub Releases API AT BUILD TIME.
//
// Assets live on github.com/zachswift615/loom-releases and never in this repository: a DMG plus a
// zip is ~13 MB of permanent, unshrinkable git history per release, in a public repo already at
// 152 MB, and GitHub Pages is not a binary CDN. Publishing a release triggers this site's deploy,
// so the version page and the previous-builds list regenerate with no manual edit.
//
// ⛔ THIS THROWS RATHER THAN DEGRADING, AND THAT IS THE SAFE DIRECTION HERE. /loom/version is
// `kLatestVersionUrl`, compiled into every shipped LOOM binary and asserted by a test in
// apps/loom_app/src/Main.cpp; its entire contract is that a human can read a version number off
// it. A page rendering an empty string or "undefined" would satisfy the build and fail the
// contract. A throw fails the deploy instead — and GitHub Pages keeps serving the LAST SUCCESSFUL
// build, so the previous version number stays up and correct while the failure is visible in
// Actions. Degrading gracefully would replace a loud failure with a quiet wrong answer.
const REPO = 'zachswift615/loom-releases';

function megabytes(bytes) {
  return typeof bytes === 'number' ? `${(bytes / 1e6).toFixed(1)} MB` : null;
}

// ⚠️ FORMATTED HERE, IN UTC, RATHER THAN THROUGH THE SITE'S `readableDate` FILTER. That filter
// uses the BUILD MACHINE's timezone, so v1.0.0 — published 00:52 UTC — renders as the 8th on a
// laptop in Chicago and the 9th on the Actions runner that actually deploys. A release date that
// depends on who ran the build is a small wrong answer that nobody would ever think to check.
function releaseDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}

module.exports = async function releases() {
  const headers = {
    accept: 'application/vnd.github+json',
    'user-agent': 'moonquakemedia-site',
  };
  // Unauthenticated GitHub API is 60 requests/hour PER IP, and Actions runners share addresses.
  // The workflow's own GITHUB_TOKEN raises that to 1000/hour and costs nothing to pass through.
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const url = `https://api.github.com/repos/${REPO}/releases?per_page=100`;
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(
      `LOOM releases: GitHub returned ${response.status} for ${url}. ` +
        `/loom/version cannot be built without a version number, and shipping the page without ` +
        `one would break a URL compiled into every LOOM binary.`
    );
  }

  const published = (await response.json())
    .filter((r) => !r.draft && !r.prerelease)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .map((r) => {
      // ⚠️ THE ASSET IS NAMED `LOOM.dmg` IN EVERY RELEASE, ON PURPOSE. `releases/latest/download/
      // <name>` only resolves for a name that is identical across releases, so versioning the
      // filename would destroy the stable download URL the site links at.
      const dmg = (r.assets || []).find((a) => a.name === 'LOOM.dmg');
      return {
        tag: r.tag_name,
        version: String(r.tag_name).replace(/^v/, ''),
        name: r.name || r.tag_name,
        publishedAt: r.published_at,
        publishedOn: releaseDate(r.published_at),
        // Permanent per-version address, which is what makes an old build citable forever.
        dmgUrl: dmg
          ? dmg.browser_download_url
          : `https://github.com/${REPO}/releases/download/${r.tag_name}/LOOM.dmg`,
        dmgSize: megabytes(dmg && dmg.size),
      };
    });

  if (published.length === 0) {
    throw new Error(`LOOM releases: ${REPO} has no published (non-draft, non-prerelease) release.`);
  }

  return {
    // The URL that never changes, and the reason the site needs no edit to ship a new version.
    latestDmgUrl: `https://github.com/${REPO}/releases/latest/download/LOOM.dmg`,
    latest: published[0],
    older: published.slice(1),
    all: published,
  };
};
