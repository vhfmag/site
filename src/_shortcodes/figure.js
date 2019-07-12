const { html } = require("../_utils/templateLiterals");

const figureShortcode = (src, alt, caption) => html`
	<figure>
		<img src="${src}" alt="${alt}" />
		${caption &&
			html`
				<figcaption>${caption}</figcaption>
			`}
	</figure>
`;

module.exports = { figureShortcode };
