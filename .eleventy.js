const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "en",
		errorMode: "allow-fallback",
	});
	return {
		dir: {
			input: "src",
			output: "dist",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
};
