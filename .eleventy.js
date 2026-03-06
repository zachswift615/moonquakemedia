const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Date filter for year in footer
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Date formatting filters for blog
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Reading time filter
  eleventyConfig.addFilter("readingTime", (content) => {
    const text = (content || '').replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).filter(w => w.length > 0).length;
    const minutes = Math.max(1, Math.round(words / 250));
    return `${minutes} min read`;
  });

  // Excerpt filter - first paragraph of content
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return '';
    const text = content.replace(/<[^>]*>/g, '');
    const firstParagraph = text.split('\n\n')[0];
    return firstParagraph.length > 200 ? firstParagraph.slice(0, 200) + '...' : firstParagraph;
  });

  // Blog collection sorted by date descending
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  // Lucide icon shortcode
  eleventyConfig.addShortcode("icon", function(iconName, className = "") {
    const iconPath = path.join(__dirname, 'node_modules/lucide-static/icons', `${iconName}.svg`);
    try {
      let svg = fs.readFileSync(iconPath, 'utf8');
      // Add classes to the SVG element
      const defaultClasses = "lucide-icon";
      const allClasses = className ? `${defaultClasses} ${className}` : defaultClasses;
      svg = svg.replace('<svg', `<svg class="${allClasses}" aria-hidden="true" focusable="false"`);
      return svg;
    } catch (e) {
      console.warn(`Icon not found: ${iconName}`);
      return `<!-- icon not found: ${iconName} -->`;
    }
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
