import { useCallback, useRef } from "react";
import type { AnyFunction } from "./types";

export function useRefCallback<Fn extends AnyFunction>(callback: Fn): Fn;
export function useRefCallback<Args extends unknown[], Ret>(
	callback: (...args: Args) => Ret,
): (...args: Args) => Ret {
	const ref = useRef(callback);
	ref.current = callback;

	return useCallback((...args: Args) => ref.current(...args), []);
}
