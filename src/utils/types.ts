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
	ProvidedProps,
	Component extends React.ComponentType<any>
> = Component extends React.Component<infer ClassProps>
	? React.Component<ClassProps & ProvidedProps>
	: Component extends React.SFC<infer SFCProps>
	? React.SFC<SFCProps & ProvidedProps>
	: never;

export function withProps<U, C extends React.ComponentType<any>>(
	comp: C,
): WithProps<U, C> {
	return (comp as unknown) as WithProps<U, C>;
}
