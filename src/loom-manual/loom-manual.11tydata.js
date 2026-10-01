// Page data for the web manual. The chapter pages are GENERATED (scripts/sync-loom-manual.py) and
// carry only their slug; everything a search result shows is computed here from two data files:
// loomManual.json (generated: the chapter's own title and first paragraph) and loomManualSeo.json
// (written by hand: the search title and description). The hand-written one wins.
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
