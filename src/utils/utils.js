const { DateTime } = require("luxon");

/**
 * @param {string} date ISO date string to localize
 * @returns {string} formatted date
 */
function formatDate(date) {
	return DateTime.fromISO(date)
		.setLocale("pt-br")
		.toLocaleString(DateTime.DATE_FULL);
}

const slugRegex = /\/([^/]*?)(\.\w+)?$/;

/**
 * @param {string} path Path to file
 * @returns {string|null} File name
 */
function extractFileNameFromPath(path) {
	const result = slugRegex.exec(path);

	if (!result) return null;

	const [, slug] = result;
	return slug;
}

module.exports = {
	formatDate,
	extractFileNameFromPath,
};
