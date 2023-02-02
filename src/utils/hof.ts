import { assertIsNotNullish } from "./typeGuards";

export function withDynamicName<Args extends unknown[], Result>(
	fn: (...args: Args) => Result,
	name: string,
): (...args: Args) => Result {
	return assertIsNotNullish({ [name]: (...args: Args) => fn(...args) }[name]);
}
