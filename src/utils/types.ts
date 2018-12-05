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

export type WithProps<
	U,
	C extends React.ComponentType<P>
> = C extends React.Component<infer P>
	? React.Component<P & U>
	: C extends React.SFC<infer P>
	? React.SFC<P & U>
	: never;

export function withProps<U, C extends React.ComponentType<any>>(
	comp: C,
): WithProps<U, C> {
	return (comp as unknown) as WithProps<U, C>;
}
