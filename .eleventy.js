const pwaPlugin = require("eleventy-plugin-pwa");
const excerptPlugin = require("eleventy-plugin-excerpt");
const cacheBusterPlugin = require("@mightyplow/eleventy-plugin-cache-buster");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const nestingTocPlugin = require("eleventy-plugin-nesting-toc");
const eleventyPluginReadingTimePlugin = require("eleventy-plugin-reading-time");
// const eleventyPluginLazyimagesPlugin = require("eleventy-plugin-lazyimages");

const markdownIt = require("markdown-it");
const mdPluginPrism = require("markdown-it-prism");
const mdPluginAttrs = require("markdown-it-attrs");
const mdPluginAnchor = require("markdown-it-anchor");
const mdPluginFootnote = require("markdown-it-footnote");
const mdPluginCodesandboxEmbed = require("markdown-it-codesandbox-embed");

const urlInfoScraper = require("url-info-scraper");
const { memoize } = require("lodash");

const wmTypeStrings = require("./src/_data/wmType.json");

const addAsyncShortcode = require("./utils/add-async-shortcode");
const { figureShortcode } = require("./src/_shortcodes/figure");
const { embedShortcode } = require("./src/_shortcodes/embed");
const { bridgyLinksShortcode } = require("./src/_shortcodes/bridgy");

/**
 *
 * @template T
 * @template U
 * @param {T[]} arr
 * @param {(v: T) => U[]} fn
 * @returns {U[]}
 */
const flatMap = (arr, fn) =>
	arr.reduce((acc, el) => {
		acc.push(...fn(el));
		return acc;
	}, []);

const IS_DEV = process.env.NODE_ENV === "development";

function addCollection(eleventyConfig, collectionName, collectionFolders) {
	eleventyConfig.addCollection(collectionName, collection => {
		let files = flatMap(collectionFolders, folder => [
			...collection.getFilteredByGlob(`./src/${folder}/**/*.md`),
		]);

		if (!IS_DEV) {
			files = files.filter(p => !p.data.draft);
		}

		files.sort((f1, f2) => f2.date - f1.date);

		return files;
	});
}

module.exports = function(eleventyConfig) {
	eleventyConfig.addAsyncShortcode = addAsyncShortcode;

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
		{
			folders: ["photos"],
			name: "photos",
		},
		{
			folders: ["likes"],
			name: "likes",
			removeFromAll: true,
		},
	];

	addCollection(
		eleventyConfig,
		"tudo",
		flatMap(collections.filter(x => !x.removeFromAll), x => x.folders),
	);
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

	eleventyConfig.addAsyncShortcode(
		"titleFromUrl",
		memoize(url => {
			return new Promise((res, rej) => {
				urlInfoScraper(url, (error, linkInfo) => {
					if (error || !linkInfo.title) {
						console.error(error);
						res(url);
					} else {
						res(linkInfo.title);
					}
				});
			});
		}),
	);

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
	eleventyConfig.addShortcode("siloEmbed", embedShortcode);
	eleventyConfig.addShortcode("bridgyLinks", bridgyLinksShortcode);

	return {
		templateFormats: ["md", "njk", "pug"],
		dir: {
			input: "src",
			output: "public",
			layouts: "_layouts",
		},
	};
};
