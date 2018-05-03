import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";
import { GraphQLString } from "graphql";

const typography = new Typography({
	...grandViewTheme,
	googleFonts: [
		// @ts-ignore
		...grandViewTheme.filter(({ name }) => name !== "Arvo"),
		{
			name: "Zilla Slab",
			styles: ["400", "400i", "700", "700i"],
		},
	],
	bodyFontFamily: ["Zilla Slab", ...grandViewTheme.bodyFontFamily],
});

export default typography;
