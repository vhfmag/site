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
