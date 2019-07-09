const excerptPlugin = require("eleventy-plugin-excerpt");
const pwaPlugin = require("eleventy-plugin-pwa");

const fs = require("fs");

const { figureShortcode } = require("./src/_shortcodes/figure");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");

	eleventyConfig.addPlugin(excerptPlugin);
	eleventyConfig.addPlugin(pwaPlugin);

	const collectionNames = fs
		.readdirSync("./src/")
		.filter(path => !path.startsWith("_") && fs.statSync(`./src/${path}`).isDirectory);

	for (const collectionName of collectionNames) {
		eleventyConfig.addCollection(collectionName, collection => {
			let files = [...collection.getFilteredByGlob(`./src/${collectionName}/**/*.md`)];

			if (process.env.NODE_ENV !== "development") {
				files = files.filter(p => !p.data.draft);
			}

			return files.reverse();
		});
	}

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

	eleventyConfig.addShortcode("figure", figureShortcode);

	return {
		templateFormats: ["md", "njk", "pug"],
		dir: {
			input: "src",
			output: "public",
			layouts: "_layouts",
		},
	};
};
