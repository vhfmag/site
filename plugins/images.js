const { JSDOM } = require("jsdom");
const { promisify } = require("util");
const { join } = require("path");
const { memoize } = require("lodash");
const sizeOf = memoize(promisify(require("image-size")));

/* TODO: use https://npm.im/webp-converter to add a webp source */
/* TODO: use https://npm.im/cacache or what else to cache this shit */

const EMEBD_CONTAINER_CLASS = "embed-container";

/**
 * @param {string} src
 * @param {string} outputPath
 * @returns {string}
 */
const getSrcPathFromDest = (/** @type {string} */ src, outputPath) => {
	if (src.startsWith("/") && !src.startsWith("//")) {
		return `.${src}`;
	} else {
		const outputDir = join(outputPath, "..").replace("/public/", "/src/");
		return `${outputDir}/${src}`;
	}
};

const cachePath = "../node_modules/.cache/optimize-images-11ty-plugin";

/**
 * @param {string} outputPath
 * @returns {(img: HTMLImageElement) => Promise<void>}
 */
const processImage = outputPath => async img => {
	if (img.src.match(/^https?:\/.*/)) return;

	const srcPath = getSrcPathFromDest(img.src.split("?")[0], outputPath);
	const { width, height } = await sizeOf(srcPath);
	img.setAttribute("width", width);
	img.setAttribute("height", height);
	img.setAttribute("loading", "lazy");
};

/**
 * @param {string} originalContent
 * @param {string} outputPath
 * @returns {string}
 */
async function transformMarkup(originalContent, outputPath) {
	if (!outputPath.endsWith(".html")) {
		return originalContent;
	}

	const dom = new JSDOM(originalContent);
	/** @type {Window} */
	const { window } = dom;
	/** @type {HTMLImageElement[]} */
	const images = [...window.document.querySelectorAll("img")];

	/** @type {HTMLIFrameElement[]} */
	const iframes = [...window.document.querySelectorAll("iframe")];

	if (images.length > 0) {
		console.log(`found ${images.length} images in ${outputPath}`);
		await Promise.all(images.map(processImage(outputPath)));
		console.log(`processed ${images.length} images in ${outputPath}`);
	}

	for (const iframe of iframes) {
		iframe.setAttribute("loading", "lazy");

		// makes sure it's responsive
		if (!iframe.parentElement.classList.contains(EMEBD_CONTAINER_CLASS)) {
			const wrapper = window.document.createElement("div");
			wrapper.classList.add(EMEBD_CONTAINER_CLASS);
			iframe.parentElement.replaceChild(wrapper, iframe);
			wrapper.appendChild(iframe);
		}
	}

	return dom.serialize();
}

module.exports = {
	initArguments: {},
	configFunction: (eleventyConfig, pluginOptions = {}) => {
		eleventyConfig.addTransform("optimize-images", transformMarkup);
	},
};
