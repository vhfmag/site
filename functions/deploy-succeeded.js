const { promisify } = require("util");
const { join } = require("path");
const { exec } = require("child_process");

const promiseExec = promisify(exec);

exports.handler = async function sendWebmentions(event, context, callback) {
	console.log("[sendWebmentions] Successfully called!");
	const binPath = join(require.resolve("@remy/webmention"), "../../bin/wm.js");
	console.log("[sendWebmentions] bin path: ", binPath);
	const results = await promiseExec(
		`${binPath} https://victormagalhaes.codes/feed.all.xml --send --debug`,
	);
	console.log("[sendWebmentions] results: ", results);
	callback(null, { statusCode: 200, body: JSON.stringify(results) });
};
