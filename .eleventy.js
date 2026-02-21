const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Date filter for year in footer
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Lucide icon shortcode
  eleventyConfig.addShortcode("icon", function(iconName, className = "") {
    const iconPath = path.join(__dirname, 'node_modules/lucide-static/icons', `${iconName}.svg`);
    try {
      let svg = fs.readFileSync(iconPath, 'utf8');
      // Add classes to the SVG element
      const defaultClasses = "lucide-icon";
      const allClasses = className ? `${defaultClasses} ${className}` : defaultClasses;
      svg = svg.replace('<svg', `<svg class="${allClasses}"`);
      return svg;
    } catch (e) {
      console.warn(`Icon not found: ${iconName}`);
      return `<!-- icon not found: ${iconName} -->`;
    }
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("CNAME");

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
