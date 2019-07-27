const { promisify } = require("util");
const { exec } = require("child-process");

const promiseExec = promisify(exec);

module.exports = async function sendWebmentions(event, context, callback) {
	const results = await promiseExec(
		"npx webmention https://victormagalhaes.codes/feed.all.xml --send --debug",
	);
	callback(null, { statucCode: 200, body: JSON.stringify(results) });
};
