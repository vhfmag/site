const { JSDOM } = require("jsdom");
const { promisify } = require("util");
const { join } = require("path");
const { memoize } = require("lodash");
const sizeOf = memoize(promisify(require("image-size")));

/* TODO: use https://npm.im/webp-converter to add a webp source */
/* TODO: use https://npm.im/cacache or what else to cache this shit */

const transformImgPath = (/** @type {string} */ src, outputPath) => {
	if (src.startsWith("/") && !src.startsWith("//")) {
		return `.${src}`;
	} else {
		const outputDir = join(outputPath, "..").replace("/public/", "/src/");
		return `${outputDir}/${src}`;
	}
};

const cachePath = "../node_modules/.cache/optimize-images-11ty-plugin";

const processImage = outputPath => async (/** @type {HTMLImageElement} */ img) => {
	if (img.src.match(/^https?:\/.*/)) return;

	const srcPath = transformImgPath(img.src.split("?")[0], outputPath);
	const { width, height } = await sizeOf(srcPath);
	img.setAttribute("width", width);
	img.setAttribute("height", height);
};

/**
 *
 *
 * @param {string} rawContent
 * @param {string} outputPath
 * @returns
 */
async function transformMarkup(rawContent, outputPath) {
	let content = rawContent;

	if (outputPath.endsWith(".html")) {
		const dom = new JSDOM(content);
		/** @type {HTMLImageElement[]} */
		const images = [...dom.window.document.querySelectorAll("img")];

		if (images.length > 0) {
			console.log(`found ${images.length} images in ${outputPath}`);
			await Promise.all(images.map(processImage(outputPath)));
			console.log(`processed ${images.length} images in ${outputPath}`);

			content = dom.serialize();
		}
	}

	return content;
}

module.exports = {
	initArguments: {},
	configFunction: (eleventyConfig, pluginOptions = {}) => {
		eleventyConfig.addTransform("optimize-images", transformMarkup);
	},
};
