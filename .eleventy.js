module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");

	return {
		dir: {
			input: "src",
			layouts: "_layouts",
		},
	};
};
