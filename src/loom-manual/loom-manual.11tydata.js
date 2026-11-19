// Page data for the web manual, both editions. The chapter pages are GENERATED
// (scripts/sync-loom-manual.py) and carry only their slug and edition; everything a search result
// shows is computed here from two data files: loomManual.json (generated: each chapter's own title
// and first paragraph, the Mac edition at the top level and the Windows edition under `windows`)
// and loomManualSeo.json (written by hand for the Mac edition: the search title and description).
// The hand-written one wins on Mac pages. It is not used on Windows pages, because it was written
// about the Mac.
function editionOf(data) {
  return data.manualEdition === 'windows' ? 'windows' : 'mac';
}
function chaptersOf(data) {
  return editionOf(data) === 'windows' ? data.loomManual.windows.chapters : data.loomManual.chapters;
}
function chapterOf(data) {
  return data.manualSlug && chaptersOf(data).find((c) => c.slug === data.manualSlug);
}
function seoOf(data) {
  return editionOf(data) === 'mac' && data.manualSlug && data.loomManualSeo[data.manualSlug];
}

module.exports = {
  appStoreId: false,
  selfHostedFonts: true,
  faviconSvg: '/assets/loom/loom-favicon.svg',
  favicon16: '/assets/loom/favicon-16.png',
  favicon: '/assets/loom/favicon-32.png',
  appleTouchIcon: '/assets/loom/apple-touch-icon.png',
  themeColor: '#0B0C0E',
  ogImage: '/images/og-loom-manual.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'LOOM User Manual, for the live looper for Mac',
  eleventyComputed: {
    edition: (data) => editionOf(data),
    chapters: (data) => chaptersOf(data),
    chapter: (data) => chapterOf(data),
    // The same page in the other edition, or that edition's landing page when it has no chapter
    // of this name. The layout's switch links here.
    otherEditionUrl: (data) => {
      const other = editionOf(data) === 'windows' ? 'mac' : 'windows';
      const list = other === 'windows' ? data.loomManual.windows.chapters : data.loomManual.chapters;
      const landing = other === 'windows' ? data.loomManual.windows.url : '/loom/manual/';
      const twin = data.manualSlug && list.find((c) => c.slug === data.manualSlug);
      return twin ? twin.url : landing;
    },
    title: (data) => {
      const c = chapterOf(data);
      return c ? c.title : data.title;
    },
    seoTitle: (data) => {
      const c = chapterOf(data);
      if (!c) return data.seoTitle;
      if (editionOf(data) === 'windows') return `${c.title} | LOOM Manual for Windows`;
      const seo = seoOf(data);
      return `${seo ? seo.title : c.title} | LOOM Manual`;
    },
    description: (data) => {
      const c = chapterOf(data);
      if (!c) return data.description;
      const seo = seoOf(data);
      return seo ? seo.description : c.description;
    },
  },
};
