import { CollectionEntry, defineCollection } from "astro:content";
import { frontmatterSchema, likeFrontmatterSchema, noteFrontmatterSchema } from "../utils/schemas";

const generalCollection = defineCollection({
	schema: frontmatterSchema,
});

const noteCollection = defineCollection({
	schema: noteFrontmatterSchema,
});

const likeCollection = defineCollection({
	schema: likeFrontmatterSchema,
});

export const collections = {
	apresentacoes: generalCollection,
	bookmarks: generalCollection,
	likes: likeCollection,
	notes: noteCollection,
	posts: generalCollection,
};

export type CollectionSlug = keyof typeof collections;
export const allCollectionSlugs = Object.keys(collections) as CollectionSlug[];

export type AnyCollectionEntry =
	| CollectionEntry<"apresentacoes">
	| CollectionEntry<"bookmarks">
	| CollectionEntry<"likes">
	| CollectionEntry<"notes">
	| CollectionEntry<"posts">;
