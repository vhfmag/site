const WebMention = require("@remy/webmention");

const wm = new WebMention({ limit: 1, send: true });

exports.handler = function sendWebmentions(event, context, callback) {
	console.log("[sendWebmentions] Hook called!", JSON.stringify({ event, context }, undefined, 4));

	wm.on("end", () => {
		console.log("[sendWebmentions] Success!");
		callback(null, { statusCode: 200, body: "Success!" });
	});

	wm.on("error", error => {
		console.error("[sendWebmentions] Error! ", error);
		callback(null, { statusCode: 500, body: "Error!" });
	});

	wm.fetch("https://victormagalhaes.codes/feed.all.xml");
	console.log("[sendWebmentions] Fetch triggered!");
};
