const excerptPlugin = require("eleventy-plugin-excerpt");
const pwaPlugin = require("eleventy-plugin-pwa");
const cacheBusterPlugin = require("@mightyplow/eleventy-plugin-cache-buster");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const nestingTocPlugin = require("eleventy-plugin-nesting-toc");
const eleventyPluginReadingTimePlugin = require("eleventy-plugin-reading-time");
const eleventyPluginLazyimagesPlugin = require("eleventy-plugin-lazyimages");

const markdownIt = require("markdown-it");
const mdPluginPrism = require("markdown-it-prism");
const mdPluginAttrs = require("markdown-it-attrs");
const mdPluginAnchor = require("markdown-it-anchor");
const mdPluginFootnote = require("markdown-it-footnote");
const mdPluginCodesandboxEmbed = require("markdown-it-codesandbox-embed");

const wmTypeStrings = require("./src/_data/wmType.json");

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
	eleventyConfig.addPassthroughCopy("uploads");
	eleventyConfig.addPassthroughCopy(".well-known");

	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true,
			breaks: true,
			linkify: true,
			typographer: true,
		})
			.use(mdPluginCodesandboxEmbed, { directory: "code-examples" })
			.use(mdPluginPrism, {})
			.use(mdPluginAttrs, {})
			.use(mdPluginAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: "§" })
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
	eleventyConfig.addPlugin(nestingTocPlugin, { headingText: "Índice" });
	eleventyConfig.addPlugin(eleventyPluginReadingTimePlugin);

	if (!IS_DEV) {
		eleventyConfig.addPlugin(eleventyPluginLazyimagesPlugin);
		eleventyConfig.addPlugin(pwaPlugin, {
			skipWaiting: true,
			clientsClaim: true,
			navigationPreload: true,
			runtimeCaching: [
				{
					urlPattern: ({ event }) => event.request.mode === "navigate",
					handler: "NetworkOnly",
				},
			],
		});
	}

	const collections = [
		{
			folders: ["posts"],
			name: "posts",
		},
		{
			folders: ["apresentacoes"],
			name: "apresentacoes",
		},
		{
			folders: ["notes"],
			name: "notes",
		},
		{
			folders: ["bookmarks"],
			name: "bookmarks",
		},
	];

	addCollection(eleventyConfig, "tudo", collections.flatMap(x => x.folders));
	for (const collection of collections) {
		addCollection(eleventyConfig, collection.name, collection.folders);
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

	eleventyConfig.addFilter("formatDateTime", date => {
		date = new Date(date);

		if (Number.isNaN(date.valueOf())) return "";

		const minute = String(date.getMinutes());
		const hour = String(date.getHours());
		const day = String(date.getDate());
		const month = String(date.getMonth() + 1);

		return `${day.padStart(2, "0")}/${month.padStart(
			2,
			"0",
		)}/${date.getFullYear()} - ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
	});

	eleventyConfig.addFilter("wmTypeString", wmType => wmTypeStrings[wmType]);
	eleventyConfig.addFilter("wmTypeStrings", wmTypes =>
		wmTypes.map(wmType => wmTypeStrings[wmType]),
	);

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
