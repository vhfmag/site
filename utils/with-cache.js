const cacache = require("cacache");
globalThis.fetch = require("node-fetch");

const CACHE_PATH = require("path").join(__dirname, "../node_modules/.cache/cacache");

const ONE_HOUR = 3_600_000;
const SIX_HOURS = 6 * ONE_HOUR;

const fetchWithCache = withCache(
	input => (typeof input === "string" ? input : input.url),
	(...args) =>
		fetch(...args).then(res => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(
					`Status code ${res.status}: ${res.statusText} for ${JSON.stringify(
						{ input, init },
						undefined,
						4,
					)}`,
				);
			}
		}),
);

function withCache(key, asyncFn, ttl = SIX_HOURS) {
	const fnName = `${asyncFn.name || "anonymousFunction"}WithCache`;
	return {
		[fnName]: async (...args) => {
			const cacheKey = typeof key === "function" ? key(...args) : key;

			const isCached = await cacache.get.info(CACHE_PATH, cacheKey);
			if (isCached && Date.now() - isCached.metadata.timestamp < ttl) {
				const cacheEntry = await cacache.get(CACHE_PATH, cacheKey);
				return JSON.parse(cacheEntry.data);
			}

			const res = await asyncFn(...args);

			await cacache.put(CACHE_PATH, cacheKey, JSON.stringify(res), {
				metadata: { timestamp: Date.now() },
			});

			return res;
		},
	}[fnName];
}

module.exports = { withCache, fetchWithCache };
