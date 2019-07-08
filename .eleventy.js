module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");

	eleventyConfig.addFilter("formatDateISO", date => {
		date = new Date(date);

		if (Number.isNaN(date.valueOf())) return "";

		return date.toISOString();
	});

	eleventyConfig.addFilter("formatDate", date => {
		date = new Date(date);

		if (Number.isNaN(date.valueOf())) return "";

		const day = String(date.getDate());
		const month = String(date.getMonth() + 1);

		return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${date.getFullYear()}`;
	});

	return {
		templateFormats: ["md", "njk", "pug"],
		dir: {
			input: "src",
			output: "public",
			layouts: "_layouts",
		},
	};
};
