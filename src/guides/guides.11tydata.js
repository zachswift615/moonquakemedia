// Search metadata for the user guides. Every version of a guide is the same document with small
// differences, so only the version marked "latest" in _data/guideVersions.json is indexed; older
// and beta versions stay reachable from the version menu but carry noindex (which also keeps them
// out of sitemap.xml). Unversioned guides (Speak2, Quietus) are always indexed.
function status(data) {
  const versions = (data.guideVersions || {})[data.slug] || [];
  const v = versions.find((x) => x.version === data.guideVersion);
  return v ? v.status : null;
}

function clip(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:]$/, "") + "...";
}

module.exports = {
  eleventyComputed: {
    seoTitle: (data) => {
      if (data.seoTitle || !data.title) return data.seoTitle;
      const s = status(data);
      const version = data.guideVersion && s !== "latest" ? ` (${data.guideVersion})` : "";
      return `${data.title} User Guide${version} | ${data.site.name}`;
    },
    description: (data) => {
      if (data.description || !data.title) return data.description;
      const sections = (data.toc || []).map((t) => t.title).join(", ");
      return clip(`The ${data.title} user guide. ${sections ? "Covers " + sections + "." : ""}`.trim(), 155);
    },
    robots: (data) => {
      if (data.robots) return data.robots;
      const s = status(data);
      return data.guideVersion && s && s !== "latest" ? "noindex, follow" : undefined;
    },
  },
};
