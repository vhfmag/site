const POOL_SIZE = 4;
function createPool(size = POOL_SIZE) {
	const poolTracker = [];

	return fn => (...args) => {
		const promise = new Promise(async resolve => {
			// this forces the async function to yield, making sure promise is initialized before being used
			await 0;
			if (poolTracker.length < size) {
				poolTracker.push(promise);
			}

			while (poolTracker.length >= size) {
				await Promise.race(poolTracker);

				if (poolTracker.length < size) {
					poolTracker.push(promise);
				}
			}

			const result = await fn(...args);
			poolTracker.splice(poolTracker.indexOf(promise), 1);
			resolve(result);
		});
		promise.catch(() => poolTracker.splice(poolTracker.indexOf(promise), 1));
		return promise;
	};
}

module.exports = { createPool };
