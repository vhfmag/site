const cacache = require("cacache");

const CACHE_PATH = require("path").join(__dirname, "../node_modules/.cache/cacache");

const ONE_HOUR = 3_600_000;

function withCache(key, asyncFn, ttl = ONE_HOUR) {
	const fnName = `${asyncFn.name || "anonymousFunction"}WithCache`;
	return {
		[fnName]: async () => {
			console.log(`${fnName} has been called`);
			const hasContent = await cacache.get.info(CACHE_PATH, key);
			console.log({ hasContent });
			if (hasContent) {
				const cacheEntry = await cacache.get(CACHE_PATH, key);
				console.log({ cacheEntry });
				if (Date.now() - cacheEntry.metadata.timestamp < ttl) {
					console.log(`${key} has been fetched from cache`);
					return JSON.parse(cacheEntry.data);
				}
			}

			const res = await asyncFn();

			await cacache.put(CACHE_PATH, key, JSON.stringify(res), {
				metadata: { timestamp: Date.now() },
			});
			console.log(`Cache for ${key} has been updated`);

			return res;
		},
	}[fnName];
}

module.exports = { withCache };
