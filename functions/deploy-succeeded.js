const { promisify } = require("util");
const { join } = require("path");
const { exec } = require("child_process");

const promiseExec = promisify(exec);

const binPath = join(__dirname, "../node_modules/@remy/webmention/bin/wm.js");

exports.handler = async function sendWebmentions(event, context, callback) {
	console.log("sendWebmentions was successfully called!");
	const results = await promiseExec(
		`${binPath} https://victormagalhaes.codes/feed.all.xml --send --debug`,
	);
	callback(null, { statucCode: 200, body: JSON.stringify(results) });
};
