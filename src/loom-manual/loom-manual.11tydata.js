// Page data for the web manual. The chapter pages are GENERATED (scripts/sync-loom-manual.py) and
// carry only their slug; everything a search result shows is computed here from two data files:
// loomManual.json (generated: the chapter's own title and first paragraph) and loomManualSeo.json
// (written by hand: the search title and description). The hand-written one wins.
module.exports = {
  appStoreId: false,
  selfHostedFonts: true,
  favicon: '/assets/loom/favicon-32.png',
  appleTouchIcon: '/assets/loom/apple-touch-icon.png',
  themeColor: '#0B0C0E',
  ogImage: '/assets/loom/shot-looper.png',
  ogImageAlt: 'LOOM, a live looper for Mac, with five audio tracks and four instrument tracks',
  eleventyComputed: {
    chapter: (data) =>
      data.manualSlug && data.loomManual.chapters.find((c) => c.slug === data.manualSlug),
    title: (data) => {
      const c = data.manualSlug && data.loomManual.chapters.find((x) => x.slug === data.manualSlug);
      return c ? c.title : data.title;
    },
    seoTitle: (data) => {
      const seo = data.manualSlug && data.loomManualSeo[data.manualSlug];
      const c = data.manualSlug && data.loomManual.chapters.find((x) => x.slug === data.manualSlug);
      if (!c) return data.seoTitle;
      return `${seo ? seo.title : c.title} | LOOM Manual`;
    },
    description: (data) => {
      const seo = data.manualSlug && data.loomManualSeo[data.manualSlug];
      const c = data.manualSlug && data.loomManual.chapters.find((x) => x.slug === data.manualSlug);
      if (!c) return data.description;
      return seo ? seo.description : c.description;
    },
  },
};
