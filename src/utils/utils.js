const dateFormatter = new Intl.DateTimeFormat(
	(typeof navigator !== "undefined" && navigator.language) || "pt-BR",
	{
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	},
);

/**
 * @param {string | Date} date ISO date string to localize
 * @returns {string} formatted date
 */
function formatDate(date) {
	return dateFormatter.format(date instanceof Date ? date : new Date(date));
}

function getEdgeTimestamp(edge) {
	return new Date(
		edge.node.frontmatter.date || edge.node.parent.birthTime,
	).valueOf();
}

function compareEntryEdges(e1, e2) {
	const t1 = getEdgeTimestamp(e1);
	const t2 = getEdgeTimestamp(e2);

	if (t1 !== t2) {
		return t2 - t1;
	} else {
		return e1.node.parent.name.localeCompare(e2.node.parent.name);
	}
}

/**
 *	Turns this kind of stuff into this-kind-of-stuff
 *
 * @param {string} text
 * @returns {string} slugified text
 */
function slugify(text) {
	return text
		.toLowerCase()
		.split(" ")
		.join("-");
}

module.exports = {
	formatDate,
	getEdgeTimestamp,
	compareEntryEdges,
	slugify,
};
