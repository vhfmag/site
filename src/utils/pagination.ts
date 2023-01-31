import type { GetStaticPaths } from "astro";
import { defaultPageSize } from "../data/config";
import { parseCollection, ParseCollectionOptions } from "./parseCollection";

interface GenerateGetStaticPathsForCollectionOptions extends ParseCollectionOptions {
	pageSize?: number;
}

export function generateGetStaticPathsForCollection(
	importMetaGlobResult: Record<string, any>,
	{
		pageSize = defaultPageSize,
		...parseCollectionOptions
	}: GenerateGetStaticPathsForCollectionOptions = {},
): GetStaticPaths {
	return async function generatedGetStaticPathsForCollection({ paginate }) {
		const pages = parseCollection(Object.values(importMetaGlobResult), parseCollectionOptions);

		const paginationResult = paginate(pages, { pageSize });

		return paginationResult;
	};
}
