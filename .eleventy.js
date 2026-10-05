const fs = require('fs');
const path = require('path');
const ImageModule = require('@11ty/eleventy-img');
const Image = ImageModule.default || ImageModule;
const generateImageHTML = ImageModule.generateHTML || Image.generateHTML;

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

  // FAQ structured data from a post's own "Frequently asked questions" section: every <h3> under
  // that <h2>, with the text up to the next heading as its answer. Read from the rendered post, so
  // the answer in the markup is the answer on the page and there is no second copy to keep.
  eleventyConfig.addFilter("faqFromHtml", (content) => {
    const html = content || '';
    const start = html.search(/<h2[^>]*>\s*Frequently asked questions\s*<\/h2>/i);
    if (start < 0) return [];
    const rest = html.slice(start).replace(/^<h2[^>]*>.*?<\/h2>/is, '');
    const section = rest.split(/<h2[\s>]/i)[0];
    const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'")
      .replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
    return section.split(/<h3[^>]*>/i).slice(1).map((chunk) => {
      const [q, a] = chunk.split(/<\/h3>/i);
      return { q: strip(q), a: strip(a || '') };
    }).filter((x) => x.q && x.a);
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

  // Responsive screenshots: `{% shot "/assets/loom/shot-eq.png", "alt", "sizes", eager %}` writes a
  // <picture> with AVIF and WebP at several widths, the PNG as the fallback, and the intrinsic
  // width and height so the page does not jump as images arrive. The originals stay where they
  // are and are still served at their old URLs, because og:image and anything already shared
  // points at them. Generated files are cached in .cache/ between builds.
  eleventyConfig.addAsyncShortcode("shot", async function(src, alt, sizes = "(min-width: 1304px) 1240px, calc(100vw - 32px)", eager = false) {
    const metadata = await Image(path.join(__dirname, "src", src), {
      widths: [640, 1024, 1600, 2400],
      formats: ["avif", "webp", "png"],
      outputDir: path.join(__dirname, "_site", "img"),
      urlPath: "/img/",
      cacheOptions: { duration: "30d", directory: ".cache" },
      sharpPngOptions: { compressionLevel: 9 },
      sharpWebpOptions: { quality: 80 },
      sharpAvifOptions: { quality: 55 },
    });
    return generateImageHTML(metadata, {
      alt,
      sizes,
      loading: eager ? "eager" : "lazy",
      decoding: "async",
      ...(eager ? { fetchpriority: "high" } : {}),
      style: "width:100%;height:auto;display:block;",
    });
  });

  // A captioned screenshot in a blog post: `{% blogshot "/images/blog/<post>/x.png", "alt", "caption" %}`.
  // One-off pictures, not kept in sync with the product the way the web manual's are. LOOM draws at
  // two pixels per point, so each picture is shown no wider than half its pixel width: a cropped
  // control stays at the size it is on screen instead of being blown up to the column. Rendered on
  // one line, because a line break inside an HTML block ends it in Markdown.
  // An optional fourth argument sets the shown width in pixels, for a strip too small to read at
  // half size.
  eleventyConfig.addAsyncShortcode("blogshot", async function(src, alt, caption = "", width = 0) {
    const metadata = await Image(path.join(__dirname, "src", src), {
      widths: [640, 1024, 1600, "auto"],
      formats: ["avif", "webp", "png"],
      outputDir: path.join(__dirname, "_site", "img"),
      urlPath: "/img/",
      cacheOptions: { duration: "30d", directory: ".cache" },
      sharpPngOptions: { compressionLevel: 9 },
      sharpWebpOptions: { quality: 82 },
      sharpAvifOptions: { quality: 58 },
    });
    const natural = metadata.png[metadata.png.length - 1].width;
    const shown = Math.min(672, width || Math.round(natural / 2));
    const html = generateImageHTML(metadata, {
      alt,
      sizes: `(min-width: 720px) ${shown}px, min(${shown}px, calc(100vw - 48px))`,
      loading: "lazy",
      decoding: "async",
      style: `width:100%;max-width:${shown}px;height:auto;display:block;margin:0 auto;border-radius:4px;border:1px solid #2A2C33;`,
    }).replace(/\n\s*/g, "");
    const cap = caption ? `<figcaption style="text-align:center;">${caption}</figcaption>` : "";
    // A full window shrunk into the column is too small to read, so it opens at full size.
    const body = natural / 2 > 672 ? `<a href="${src}" title="Open at full size">${html}</a>` : html;
    return `<figure style="margin:2em 0;">${body}${cap}</figure>`;
  });

  // Last-modified date for the sitemap: the newest commit touching the page's source or any
  // layout it names. Falls back to the build date (no git, or a shallow CI clone).
  const { execFileSync } = require('child_process');
  const lastmodCache = new Map();
  eleventyConfig.addFilter("gitLastmod", function(inputPath, layout) {
    const files = [inputPath];
    if (layout) files.push(path.join("src/_includes", layout));
    const key = files.join("|");
    if (!lastmodCache.has(key)) {
      let iso = null;
      try {
        iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files],
                           { encoding: "utf8" }).trim() || null;
      } catch (e) { /* not a git checkout */ }
      lastmodCache.set(key, iso ? new Date(iso).toISOString() : new Date().toISOString());
    }
    return lastmodCache.get(key);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  // IndexNow ownership key (see the IndexNow step in .github/workflows/deploy.yml).
  eleventyConfig.addPassthroughCopy("src/*.txt");
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
