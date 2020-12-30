const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);  

    eleventyConfig.addLiquidFilter("formatDate", function(value) { 
      return DateTime.fromObject(value).toISODate();
    })

    eleventyConfig.setFrontMatterParsingOptions({
      excerpt: true,
      excerpt_separator: "<!-- excerpt -->"
    });

    eleventyConfig.addCollection("tagList", collection => {
      const tagsSet = new Set();
      collection.getAll().forEach(item => {
        if (!item.data.tags) return;
        item.data.tags
          .filter(tag => !['post', 'all'].includes(tag))
          .forEach(tag => tagsSet.add(tag));
      });
      return Array.from(tagsSet).sort();
    });

    return {
      dir: {
          output: "docs"
      }
    }
  }
