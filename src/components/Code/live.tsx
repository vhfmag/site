import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export interface LiveCodeProps {
	code: string;
}

export const LiveCode = ({ code }: LiveCodeProps) => {
	return (
		<LiveProvider code={code}>
			<LiveEditor />
			<LiveError />
			<LivePreview />
		</LiveProvider>
	);
};
