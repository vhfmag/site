const { JSDOM } = require("jsdom");
const { promisify } = require("util");
const { join } = require("path");
const { memoize } = require("lodash");
const sizeOf = memoize(promisify(require("image-size")));

/* TODO: use https://npm.im/webp-converter to add a webp source */
/* TODO: use https://npm.im/cacache or what else to cache this shit */

const EMEBD_CONTAINER_CLASS = "embed-container";

/**
 * @param {string} outputPath
 * @returns {(img: HTMLImageElement) => void}
 */
const processImage = img => {
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
		images.forEach(processImage);
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
