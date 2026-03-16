import type { CollectionEntry } from "astro:content";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { frontmatterSchema, likeFrontmatterSchema, noteFrontmatterSchema } from "./utils/schemas";

const generalCollection = (base: string) =>
	defineCollection({
		type: "content",
		loader: glob({ base, pattern: "**/*.{md,mdx}" }),
		schema: frontmatterSchema,
	});

const noteCollection = defineCollection({
	type: "content",
	loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
	schema: noteFrontmatterSchema,
});

const likeCollection = defineCollection({
	type: "content",
	loader: glob({ base: "./src/content/likes", pattern: "**/*.{md,mdx}" }),
	schema: likeFrontmatterSchema,
});

export const collections = {
	apresentacoes: generalCollection("./src/content/apresentacoes"),
	bookmarks: generalCollection("./src/content/bookmarks"),
	likes: likeCollection,
	notes: noteCollection,
	posts: generalCollection("./src/content/posts"),
};

export type CollectionSlug = keyof typeof collections;
export const allCollectionSlugs = Object.keys(collections) as CollectionSlug[];

export type AnyCollectionEntry =
	| CollectionEntry<"apresentacoes">
	| CollectionEntry<"bookmarks">
	| CollectionEntry<"likes">
	| CollectionEntry<"notes">
	| CollectionEntry<"posts">;
