import { PromisePool } from "minimal-promise-pool";
import { withDynamicName } from "./hof";

export function decorateWithPooling<Args extends unknown[], Result>(
	fn: (...args: Args) => PromiseLike<Result>,
	poolSize: number = 5,
) {
	const promisePool = new PromisePool(poolSize);
	const fnName = `${fn.name || "anonymousFunction"}WithPooling`;
	return withDynamicName(
		async (...args: Args): Promise<Result> => runInPromisePool(promisePool, () => fn(...args)),
		fnName,
	);
}

export const runInPromisePool = <T>(promisePool: PromisePool, fn: () => PromiseLike<T>) =>
	new Promise<T>((resolve, reject) =>
		promisePool.run(async () => {
			try {
				resolve(await fn());
			} catch (error) {
				reject(error);
			}
		}),
	);
