const dateFormatter = new Intl.DateTimeFormat(undefined, {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
});

/**
 * @param {string | Date} date ISO date string to localize
 * @returns {string} formatted date
 */
function formatDate(date) {
	return dateFormatter.format(date instanceof Date ? date : new Date(date));
}

const slugRegex = /\/([^/]*?)(\.\w+)?$/;

/**
 * @param {string} path Path to file
 * @returns {string|null} File name
 */
function extractFileNameFromPath(path) {
	const result = slugRegex.exec(path);

	if (!result) {
		return null;
	}

	const [, slug] = result;
	return slug;
}

module.exports = {
	formatDate,
	extractFileNameFromPath,
};
