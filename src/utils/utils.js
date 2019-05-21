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

/**
 *
 * @typedef MdxEdge
 * @type {import("../graphql-types").MdxEdge & { node?: { parent?: import("../graphql-types").File }}}
 */

/**
 * @param {MdxEdge} edge
 */
function getEdgeTimestamp(edge) {
	if (!edge.node) {
		throw new Error("Invalid edge");
	}

	return new Date(
		(edge.node.frontmatter && edge.node.frontmatter.date) ||
			(edge.node.parent && edge.node.parent.birthTime),
	).valueOf();
}

/**
 * @param {MdxEdge} e1
 * @param {MdxEdge} e2
 */
function compareEntryEdges(e1, e2) {
	const t1 = getEdgeTimestamp(e1);
	const t2 = getEdgeTimestamp(e2);

	if (t1 !== t2) {
		return t2 - t1;
	} else {
		const title1 = (e1.node && e1.node.frontmatter && e1.node.frontmatter.title) || "";
		const title2 = (e2.node && e2.node.frontmatter && e2.node.frontmatter.title) || "";

		return title1.localeCompare(title2);
	}
}

/**
 *	Turns this kind of stuff into this-kind-of-stuff
 *
 * @param {string} text
 * @returns {string} slugified text
 */
function slugify(text) {
	return text.toLowerCase().replace(/\s+/, "-");
}

module.exports = {
	formatDate,
	getEdgeTimestamp,
	compareEntryEdges,
	slugify,
};
