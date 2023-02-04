import type { CollectionSlug } from "../content/config";

export interface CollectionMetadata {
	/** Singular */
	collection: string;
	/** Plural */
	collectionName: string;
}

export const collectionData = {
	apresentacoes: {
		collection: "Apresentação",
		collectionName: "Apresentações",
	},
	bookmarks: {
		collection: "Recomendação",
		collectionName: "Recomendações",
	},
	posts: {
		collection: "Post",
		collectionName: "Posts",
	},
	likes: {
		collection: "Curtida",
		collectionName: "Curtidas",
	},
	notes: {
		collection: "Nota",
		collectionName: "Notas",
	},
} as const satisfies Record<CollectionSlug, CollectionMetadata>;
