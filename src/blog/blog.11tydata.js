// Blog posts tagged "listen2" wear the Listen2 brand (components/listen2-theme.njk) instead of Moonquake's.
// Every other post is unchanged.
const isListen2 = (data) => Array.isArray(data.tags) && data.tags.includes("listen2");

module.exports = {
  eleventyComputed: {
    listen2Brand: (data) => data.listen2Brand || isListen2(data),
    themeColor: (data) => (isListen2(data) ? "#0B0B0C" : data.themeColor),
  },
};
