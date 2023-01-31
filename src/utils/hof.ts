export function withDynamicName<Args extends unknown[], Result>(
	fn: (...args: Args) => Result,
	name: string,
) {
	return { [name]: (...args: Args) => fn(...args) }[name];
}
