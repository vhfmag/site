declare type DeepNonNullable<T> = { [K in keyof T]-?: NonNullable<T[K]> };
declare type NonNullableNode = NonNullable<React.ReactNode>;
declare type HTMLOrString =
	| { content: NonNullableNode; htmlAst?: undefined }
	| { htmlAst: Object; content?: undefined };

declare interface GatsbyPaginatorProps<T> {
	group: Array<T>;
	pathPrefix: string;
	additionalContext: { [key: string]: any };
}

declare interface IAuthor {
	name: string;
	url?: string;
}

type ObjectOmit<Obj, Props extends keyof Obj> = Pick<
	Obj,
	Exclude<keyof Obj, Props>
>;

declare module "@mdx-js/tag";
