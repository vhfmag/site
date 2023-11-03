import { useEffect } from "react";
import { useRefCallback } from "./useRefCallback";

export const useRaf = (callback: FrameRequestCallback) => {
	const stableCallback = useRefCallback(callback);

	useEffect(() => {
		let rafRef: number;

		const updateAmplitude: FrameRequestCallback = (...args) => {
			stableCallback(...args);
			rafRef = requestAnimationFrame(updateAmplitude);
		};

		rafRef = requestAnimationFrame(updateAmplitude);

		return () => cancelAnimationFrame(rafRef);
	}, [stableCallback]);
};
