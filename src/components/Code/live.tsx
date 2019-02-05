import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview, LiveProviderProps } from "react-live";

export const LiveCode = ({ ref: _, ...providerProps }: LiveProviderProps) => {
	return (
		<LiveProvider {...providerProps}>
			<LiveEditor />
			<LiveError />
			<LivePreview />
		</LiveProvider>
	);
};
