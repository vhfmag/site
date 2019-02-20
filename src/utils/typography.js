import Typography from "typography";
// import { textColor, themeColor, backgroundColor } from "../utils/consts";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

const typography = new Typography({
	title: "Grand View",
	baseFontSize: "16px",
	baseLineHeight: 1.6875,
	headerFontFamily: ["Montserrat", "sans-serif"],
	bodyFontFamily: ["Zilla Slab", "sans-serif"],
	headerColor: "var(--theme-color)",
	bodyColor: "var(--text-color)",
	backgroundColor: "var(--background-color)",
	headerWeight: 700,
	bodyWeight: 400,
	boldWeight: 700,
	// @ts-ignore
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
		em: {
			opacity: 0.9,
		},
		"html, body": {
			backgroundColor: options.backgroundColor,
		},
		blockquote: {
			...scale(1 / 5),
			paddingLeft: rhythm(13 / 16),
			marginLeft: 0,
			borderLeft: `${rhythm(3 / 16)} solid ${options.headerColor}`,
			fontSize: "inherit",
		},
		"blockquote > :last-child": {
			marginBottom: 0,
		},
		"blockquote cite": {
			...adjustFontSizeTo(options.baseFontSize),
			color: options.bodyColor,
			fontWeight: options.bodyWeight,
		},
		"blockquote cite:before": {
			content: '"— "',
		},
		"h1, h2, h3, h4, h5, h6": {
			lineHeight: 1.25,
		},
		"caption, figcaption, label, legend": {
			lineHeight: 1.375,
		},
		p: {
			lineHeight: 1.5,
		},
		"p iframe": {
			maxWidth: "100%",
		},
		[MOBILE_MEDIA_QUERY]: {
			blockquote: {
				marginLeft: rhythm(-3 / 4),
				marginRight: 0,
				paddingLeft: rhythm(9 / 16),
			},
		},
	}),
});

export default typography;
