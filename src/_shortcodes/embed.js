const { html } = require("../_utils/templateLiterals");
const url = require("url");
const qs = require("querystring");

const embedShortcode = link => {
	const { query, hostname, pathname } = url.parse(link);
	const { v } = qs.parse(query);

	if (["invidio.us", "www.invidio.us", "youtube.com", "youtu.be"].includes(hostname) && v) {
		return html`
			<div class="embed-container">
				<iframe
					src="https://invidio.us/embed/${v}"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		`;
	} else if ("vimeo.com" === hostname && pathname.split("/")[1].match(/\d+/)) {
		return html`
			<div class="embed-container">
				<iframe
					src="https://player.vimeo.com/video/${pathname.split("/")[1]}"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
				>
				</iframe>
			</div>
		`;
	}

	return "";
};

module.exports = { embedShortcode };
