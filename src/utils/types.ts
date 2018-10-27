import { folderToCategory } from "./consts";

export type Folder = keyof typeof folderToCategory;

export function isFolder(folder: string): folder is Folder {
	return folder in folderToCategory;
}
