import type { AnyCollectionEntry } from "../content/config";

export interface ParseCollectionOptions {
	requireTitle?: boolean;
}

export function parseCollection(
	collection: AnyCollectionEntry[],
	{ requireTitle = true }: ParseCollectionOptions = {},
) {
	return collection
		.filter(p => !requireTitle || p.data.title)
		.filter(p => !import.meta.env.PROD || p.data.draft !== true)
		.sort((p1, p2) => new Date(p2.data.date).valueOf() - new Date(p1.data.date).valueOf());
}
