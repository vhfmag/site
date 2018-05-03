declare const graphql: (query: TemplateStringsArray) => void;
declare type DeepNonNullable<T> = { [K in keyof T]-?: NonNullable<T[K]> };
declare type NonNullableNode = NonNullable<React.ReactNode>;
declare type HTMLOrString =
	| { content: NonNullableNode; htmlAst?: undefined }
	| { htmlAst: Object; content?: undefined };

declare interface GatsbyPaginatorProps<T> {
	first: boolean;
	last: boolean;
	index: number;
	pageCount: number;
	group: Array<T>;
	pathPrefix: string;
	additionalContext: { [key: string]: any };
}

declare module "typography";
declare module "rehype-react";
declare module "typography-theme-grand-view";
