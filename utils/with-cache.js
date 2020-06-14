const cacache = require("cacache");

const CACHE_PATH = require("path").join(__dirname, "../node_modules/.cache/cacache");

const ONE_HOUR = 3_600_000;
const FOUR_HOURS = 4 * ONE_HOUR;

function withCache(key, asyncFn, ttl = FOUR_HOURS) {
	const fnName = `${asyncFn.name || "anonymousFunction"}WithCache`;
	return {
		[fnName]: async () => {
			const hasContent = await cacache.get.info(CACHE_PATH, key);
			if (hasContent) {
				const cacheEntry = await cacache.get(CACHE_PATH, key);
				if (Date.now() - cacheEntry.metadata.timestamp < ttl) {
					return JSON.parse(cacheEntry.data);
				}
			}

			const res = await asyncFn();

			await cacache.put(CACHE_PATH, key, JSON.stringify(res), {
				metadata: { timestamp: Date.now() },
			});

			return res;
		},
	}[fnName];
}

module.exports = { withCache };
