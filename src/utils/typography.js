import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";

grandViewTheme.googleFonts.push({
	name: "Zilla Slab",
	styles: ["400", "400i", "700", "700i"],
});

const typography = new Typography({
	...grandViewTheme,
	bodyFontFamily: ["Zilla Slab", ...grandViewTheme.bodyFontFamily],
});

export default typography;
