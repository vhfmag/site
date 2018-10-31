import { folderToCategory } from "./consts";

export type Folder = keyof typeof folderToCategory;

export function isFolder(folder: string): folder is Folder {
	return folder in folderToCategory;
}

export function isNotNullish<T>(
	value: T,
): value is Exclude<T, null | undefined> {
	return value !== undefined && value !== null;
}
