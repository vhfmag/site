declare module "typography";
declare module "rehype-react";
declare module "gray-percentage";
declare module "typography-breakpoint-constants";
declare module "gatsby-mdx/mdx-renderer";

declare module "@reach/visually-hidden" {
	import * as React from "react";
	const VisuallyHidden: React.ComponentType;
	export default VisuallyHidden;
}

declare module "@reach/skip-nav" {
	import * as React from "react";
	export const SkipNavContent: React.ComponentType;
	export const SkipNavLink: React.ComponentType<
		React.HTMLProps<HTMLAnchorElement>
	>;
}
