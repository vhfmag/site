import assert from "node:assert";

export function isNotNullish<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

export function assertIsNotNullish<T>(value: T | null | undefined) {
	assert(isNotNullish(value));
	return value;
}
