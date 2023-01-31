import { decorateWithClosureCache } from "../../utils/cache";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, existsSync, statSync } from "node:fs";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../");
const pagesFolder = path.resolve(projectRoot, "./src/pages");

function uncachedReadCollectionData(collectionFolderName: string) {
	const filePath = path.resolve(
		pagesFolder,
		collectionFolderName,
		`${collectionFolderName}.json`,
	);

	if (existsSync(filePath) && statSync(filePath).isFile()) {
		const data = JSON.parse(readFileSync(filePath, { encoding: "utf8" }));
		return data;
	}
}
const readCollectionData = decorateWithClosureCache(uncachedReadCollectionData);

const getLayoutPath = (layoutName: string) =>
	path.resolve(projectRoot, `src/layouts/${layoutName}.astro`);

const uncachedGetLayoutPathWithFallback = (layoutName: string, fallbackLayoutName = "Entry") => {
	const layoutPath = getLayoutPath(layoutName);
	if (existsSync(layoutPath) && statSync(layoutPath).isFile()) {
		return layoutPath;
	}

	const fallbackLayoutPath = getLayoutPath(fallbackLayoutName);
	if (existsSync(fallbackLayoutPath) && statSync(fallbackLayoutPath).isFile()) {
		return fallbackLayoutPath;
	}

	throw new Error(
		`The fallback layout name for markdown files wasn't found: ${fallbackLayoutPath}`,
	);
};
const getLayoutPathWithFallback = decorateWithClosureCache(uncachedGetLayoutPathWithFallback);

export const addAutomaticLayoutPlugin: RemarkPlugin = () => {
	return function addAutomaticLayoutPluginVisitor(_tree, file) {
		const astroData = file.data.astro as {
			frontmatter?: {
				layout?: string;
				// TODO: use zod for stricter parsing
				collectionData?: unknown;
			};
		};

		if (!astroData.frontmatter) return;

		const pathRelativeToPages = path.relative(pagesFolder, file.path);
		const splitRelativePath = pathRelativeToPages.split(path.sep);

		if (splitRelativePath.length === 1) return;

		const collectionFolderName = splitRelativePath[0];
		const collectionFolderData = readCollectionData(collectionFolderName);
		astroData.frontmatter.collectionData = collectionFolderData;

		if (!astroData.frontmatter.layout && collectionFolderData?.layout) {
			astroData.frontmatter.layout = getLayoutPathWithFallback(collectionFolderData.layout);
		}

		// FIXME: cleanup
		// if (file.path.includes("posts"))
		// 	console.log("🎉".repeat(30), {
		// 		collectionFolder: collectionFolderName,
		// 		projectRoot,
		// 		pathRelativeToPages,
		// 		splitRelativePath,
		// 		path: file.path,
		// 		layout: astroData.frontmatter.layout,
		// 	});
	};
};
