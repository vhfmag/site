import type { GetStaticPaths, GetStaticPathsItem, Page } from "astro";
import type { CollectionEntry } from "astro:content";
import type { AnyCollectionEntry, CollectionSlug } from "../content/config";
import { defaultPageSize } from "../data/config";
import { parseCollection, ParseCollectionOptions } from "./parseCollection";

interface GenerateGetStaticPathsForCollectionOptions extends ParseCollectionOptions {
	pageSize?: number;
}

export function generateGetStaticPathsForCollection(
	getCollectionResult: AnyCollectionEntry[],
	{
		pageSize = defaultPageSize,
		...parseCollectionOptions
	}: GenerateGetStaticPathsForCollectionOptions = {},
): GetStaticPaths {
	return async function generatedGetStaticPathsForCollection({ paginate }) {
		const pages = parseCollection(getCollectionResult, parseCollectionOptions);

		const paginationResult = paginate(pages, { pageSize });

		return [
			...paginationResult.map(
				(entry): GetStaticPathsItem => ({
					...entry,
					props: { ...entry.props, type: "page" } as const,
				}),
			),
			...getCollectionResult.map(
				(entry): GetStaticPathsItem => ({
					params: { page: entry.slug },
					props: { entry, type: "entry" } as const,
				}),
			),
		];
	};
}

export interface PageProps<T extends CollectionSlug> {
	type: "page";
	page: Page<CollectionEntry<T>>;
}

export interface EntryProps<T extends CollectionSlug> {
	type: "entry";
	entry: CollectionEntry<T>;
}

export type EntryOrPageProps<T extends CollectionSlug> = PageProps<T> | EntryProps<T>;
