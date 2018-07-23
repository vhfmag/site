const dateFormatter = new Intl.DateTimeFormat((typeof navigator !== "undefined" && navigator.language) || "pt-BR", {
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

function getEdgeTimestamp(edge) {
	return new Date(edge.node.frontmatter.date || edge.node.parent.birthTime).valueOf();
}

module.exports = {
	formatDate,
	getEdgeTimestamp,
};