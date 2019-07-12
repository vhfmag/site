const excerptPlugin = require("eleventy-plugin-excerpt");
const pwaPlugin = require("eleventy-plugin-pwa");
const cacheBusterPlugin = require("@mightyplow/eleventy-plugin-cache-buster");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

const markdownIt = require("markdown-it");
const mdPluginPrism = require("markdown-it-prism");
const mdPluginAttrs = require("markdown-it-attrs");
const mdPluginTocDoneRight = require("markdown-it-toc-done-right");
const mdPluginAnchor = require("markdown-it-anchor");
const mdPluginFootnote = require("markdown-it-footnote");

const fs = require("fs");

const { figureShortcode } = require("./src/_shortcodes/figure");

const IS_DEV = process.env.NODE_ENV === "development";

function addCollection(eleventyConfig, collectionName, collectionFolders) {
	eleventyConfig.addCollection(collectionName, collection => {
		let files = collectionFolders.flatMap(folder => [
			...collection.getFilteredByGlob(`./src/${folder}/**/*.md`),
		]);

		if (!IS_DEV) {
			files = files.filter(p => !p.data.draft);
		}

		return files.reverse();
	});
}

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("icons");

	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true,
			breaks: true,
			linkify: true,
			typographer: true,
		})
			.use(mdPluginPrism, {})
			.use(mdPluginAttrs, {})
			.use(mdPluginAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: "§" })
			.use(mdPluginTocDoneRight, {})
			.use(mdPluginFootnote, {}),
	);

	eleventyConfig.addPlugin(excerptPlugin);
	eleventyConfig.addPlugin(
		cacheBusterPlugin({
			outputDirectory: "public",
			sourceAttributes: { img: "src", video: "src", source: "srcset" },
			resourceExtensions: [
				"js",
				"css",
				"gif",
				"jpg",
				"jpeg",
				"png",
				"svg",
				"webm",
				"mp4",
				"webp",
			],
		}),
	);
	eleventyConfig.addPlugin(rssPlugin);

	if (!IS_DEV) {
		eleventyConfig.addPlugin(pwaPlugin);
	}

	const collectionNames = fs
		.readdirSync("./src/")
		.filter(
			path =>
				path !== "feed" &&
				!path.startsWith("_") &&
				fs.statSync(`./src/${path}`).isDirectory(),
		);

	addCollection(eleventyConfig, "tudo", collectionNames);
	for (const collectionName of collectionNames) {
		addCollection(eleventyConfig, collectionName, [collectionName]);
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
