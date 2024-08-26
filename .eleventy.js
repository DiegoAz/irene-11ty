const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "es",
		errorMode: "allow-fallback",
	});
	eleventyConfig.addPassthroughCopy("src/_redirects");
	eleventyConfig.addPassthroughCopy("src/_worker.js");
	return {
		dir: {
			input: "src",
			output: "dist",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
};
