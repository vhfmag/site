const { html } = require("../_utils/templateLiterals");

const bridgyLinksShortcode = links => {
	return (links && links.map(link => html`<a href="${link}"></a>`).join("")) || "";
};

module.exports = { bridgyLinksShortcode };
