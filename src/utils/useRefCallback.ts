import { useCallback, useRef } from "react";

export function useRefCallback<Fn extends Function>(callback: Fn): Fn;
export function useRefCallback<Args extends unknown[], Ret>(
	callback: (...args: Args) => Ret,
): (...args: Args) => Ret {
	const ref = useRef(callback);
	ref.current = callback;

	return useCallback((...args: Args) => ref.current(...args), []);
}
