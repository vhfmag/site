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

const slugRegex = /\/([^/]*?)(\.\w+)?$/;

/**
 * @param {string} path
 * @returns string
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
