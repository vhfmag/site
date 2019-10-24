const WebMention = require("@remy/webmention");

const wm = new WebMention({ limit: 10, send: true });

exports.handler = async function sendWebmentions(event, context, callback) {
	console.log("[sendWebmentions] Successfully called!");
	wm.fetch("https://victormagalhaes.codes/feed.all.xml");

	wm.on("end", () => {
		console.log("[sendWebmentions] Success! ");
		callback(null, { statusCode: 200 });
	});

	wm.on("error", error => {
		console.error("[sendWebmentions] Error! ", error);
		callback(null, { statusCode: 500 });
	});
};
