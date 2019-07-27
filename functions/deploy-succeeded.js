const { promisify } = require("util");
const { exec } = require("child-process");

const promiseExec = promisify(exec);

module.exports = async function sendWebmentions(event, context, callback) {
	await promiseExec("npx webmention https://victormagalhaes.codes/feed.all.xml --send --debug");
};
