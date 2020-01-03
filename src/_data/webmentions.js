require("dotenv").config();
const fetch = require("make-fetch-happen").defaults({ cacheManager: "./.wm-cache" });
const _ = require("lodash");

const apiBase = "https://webmention.io/api/mentions.jf2";
const token = process.env.WEBMENTIONIO_TOKEN;

/**
 * @typedef {"in-reply-to" | "like-of" | "repost-of" | "bookmark-of" | "mention-of" | "rsvp"} WebMentionType
 */

/**
 * @typedef Author
 * @prop {string} type - normalmente, `"card"`
 * @prop {string} name
 * @prop {string} [photo]
 * @prop {string} url
 */

/**
 * @typedef Content
 * @prop {string} html
 * @prop {string} text
 */

/**
 * @typedef WebMention
 * @prop {WebMentionType} type
 * @prop {Author} author
 * @prop {string} url
 * @prop {Date} [published]
 * @prop {Date} `wm-received`
 * @prop {number} `wm-id`
 * @prop {string} `wm-source`
 * @prop {?string} `wm-target`
 * @prop {Content} content
 * @prop {string} `mention-of`
 * @prop {string} `wm-property`
 * @prop {boolean} `wm-private`
 * @prop {string} `like-of`
 * @prop {string} `repost-of`
 */

/**
 * @typedef Response
 * @prop {"feed"} type
 * @prop {string} name
 * @prop {WebMention[]} children
 */

/**
 * Makes target look like `page.url`
 *
 * @param {string} target
 * @returns {string}
 */
function normalizeTarget(target) {
	const path = target.replace(/https?:\/\/victormagalhaes\.codes/, "");
	return path.endsWith("/") ? path : path + "/";
}

/**
 * WebMentions grouped by url and type (as in `wms[url][type]`)
 *
 * @typedef {Object.<string, Object.<string, WebMention[]>>} GroupedWebMentions
 */

/**
 * Fetches the page-th WebMentions page
 *
 * @param {number} page
 * @returns {Promise<Response>}
 */
async function fetchWebMentionsPage(page) {
	if (!token) {
		throw new Error("Environment variable isn't available");
	}

	const url = `${apiBase}?domain=victormagalhaes.codes&token=${token}&page=${page}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(
			`Error when fetching WebMentions.\n${response.status}: ${response.statusText}`,
		);
	}

	return response.json();
}

/**
 * A function for fetching WebMentions
 *
 * @returns {Promise<GroupedWebMentions>} a promise for a feed
 */
module.exports = async function fetchWebMentions() {
	if (process.env.ELEVENTY_ENV === "production") {
		return {};
	}

	/**
	 * @type {WebMention[]}
	 */
	const allWms = [];
	let lastWms = null;
	let page = 0;

	do {
		lastWms = await fetchWebMentionsPage(page);
		allWms.push(...lastWms.children);
		page += 1;
	} while (lastWms.children.length > 0);

	return _.mapValues(
		_.groupBy(allWms, l => normalizeTarget(l[l["wm-property"]])),
		links => ({
			..._.groupBy(links, l => l["wm-property"]),
			all: links,
		}),
	);
};
