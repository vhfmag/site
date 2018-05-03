const { DateTime } = require("luxon");

/**
 * @param {string} date
 * @returns string
 */
function formatDate(date) {
	return DateTime.fromISO(date)
		.setLocale("pt-br")
		.toLocaleString(DateTime.DATE_FULL);
}

const slugRegex = /posts\/(.*?)\.md$/;

/**
 * @param {string} path
 * @returns string
 */
function getSlug(path) {
	const [, slug] = slugRegex.exec(path);
	return slug;
}

module.exports = {
	formatDate,
	getSlug,
};
