// A legal page's meta description is the opening of its own summary, unless it sets one.
module.exports = {
  eleventyComputed: {
    description: (data) => {
      if (data.description || !data.summary) return data.description;
      const text = data.summary.replace(/\s+/g, " ").trim();
      if (text.length <= 155) return text;
      return text.slice(0, text.lastIndexOf(" ", 154)).replace(/[,;:]$/, "") + "...";
    },
  },
};
