/**
 * Generic tagged template literal that does the bare minimum
 *
 * @param {TemplateStringsArray} template
 * @param {string[]} subs
 * @returns string
 */
function highlighter(template, ...subs) {
	return template
		.map((piece, i) => piece + (subs[i] || ""))
		.reduce((acc, el) => acc + el, "");
}

module.exports = {
	css: highlighter,
	graphql: highlighter,
};
