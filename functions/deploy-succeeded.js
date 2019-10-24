const { promisify } = require("util");
const { join } = require("path");
const { exec } = require("child_process");

const promiseExec = promisify(exec);

const binPath = join(require.resolve("@remy/webmention"), "../../bin/wm.js");

exports.handler = async function sendWebmentions(event, context, callback) {
	console.log("sendWebmentions was successfully called!");
	const results = await promiseExec(
		`${binPath} https://victormagalhaes.codes/feed.all.xml --send --debug`,
	);
	callback(null, { statusCode: 200, body: JSON.stringify(results) });
};
