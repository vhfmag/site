export interface ParseCollectionOptions {
	requireTitle?: boolean;
}

export function parseCollection(
	collection: MD[],
	{ requireTitle = true }: ParseCollectionOptions = {},
) {
	return collection
		.filter(p => (!requireTitle || p.frontmatter.title) && !p.frontmatter.draft)
		.sort(
			(p1, p2) =>
				new Date(p2.frontmatter.date).valueOf() - new Date(p1.frontmatter.date).valueOf(),
		);
}
