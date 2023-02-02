import cacache from "cacache";
import ms from "ms";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { withDynamicName } from "./hof";

export function decorateWithClosureCache<Args extends unknown[], Return extends unknown>(
	fn: (...args: Args) => Return,
): (...args: Args) => Return {
	const cacheMap = new Map<string, Return>();

	return function fnWithCache(...args) {
		const cacheKey = args.map(arg => String(arg)).join("@");

		if (cacheMap.has(cacheKey)) return cacheMap.get(cacheKey) as Return;

		const value = fn(...args);
		cacheMap.set(cacheKey, value);

		return value;
	};
}

const currentDir = globalThis.__dirname ?? path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_CACACHE_CACHE_PATH = path.join(currentDir, "../../../node_modules/.cache/cacache");

export function decorateWithPersistentCache<Args extends unknown[], Result>(
	key: string | ((...args: Args) => string),
	fnToCache: (...args: Args) => Result | PromiseLike<Result>,
	ttl = ms("6 hours"),
	cachePath = DEFAULT_CACACHE_CACHE_PATH,
) {
	const fnName = `${fnToCache.name || "anonymousFunction"}WithCache`;
	return withDynamicName(async (...args: Args): Promise<Result> => {
		const cacheKey = typeof key === "function" ? key(...args) : key;

		const isCached = await cacache.get.info(cachePath, cacheKey);
		if (isCached && Date.now() - isCached.metadata.timestamp < ttl) {
			const cacheEntry = await cacache.get(cachePath, cacheKey);
			const cachedDataString = cacheEntry.data.toString("utf8");
			return JSON.parse(cachedDataString);
		}

		const res = await fnToCache(...args);

		await cacache.put(cachePath, cacheKey, Buffer.from(JSON.stringify(res), "utf8"), {
			metadata: { timestamp: Date.now() },
		});

		return res;
	}, fnName);
}

export const fetchWithCache = decorateWithPersistentCache(
	input => {
		const url = typeof input !== "string" && "url" in input ? input.url : input.toString();
		const method = typeof input !== "string" && "method" in input ? input.method : "GET";
		return `${method} fetch to ${url}`;
	},
	(...args: Parameters<typeof fetch>) =>
		fetch(...args).then(res => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(
					`Status code ${res.status}: ${res.statusText} for ${JSON.stringify(
						{ args },
						undefined,
						4,
					)}`,
				);
			}
		}),
);
