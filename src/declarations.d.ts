declare const graphql: (query: TemplateStringsArray) => void;
declare type DeepNonNullable<T> = { [K in keyof T]-?: NonNullable<T[K]> };
declare type NonNullableNode = NonNullable<React.ReactNode>;

declare module "typography";
declare module "typography-theme-grand-view";
