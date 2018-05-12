// @ts-nocheck
import Typography from "typography";
import {
	textColor,
	themeColor,
	backgroundColor,
} from "../utils/consts";
import gray from 'gray-percentage';
import {
	MOBILE_MEDIA_QUERY
} from 'typography-breakpoint-constants';

const typography = new Typography({
	title: 'Grand View',
	baseFontSize: '16px',
	baseLineHeight: 1.6875,
	googleFonts: [{
			name: 'Montserrat',
			styles: ['700'],
		},
		{
			name: 'Zilla Slab',
			styles: ['400', '400i', '700'],
		},
	],
	headerFontFamily: ['Montserrat', 'sans-serif'],
	bodyFontFamily: ['Zilla Slab', 'sans-serif'],
	headerColor: themeColor,
	bodyColor: textColor,
	backgroundColor,
	headerWeight: 700,
	bodyWeight: 400,
	boldWeight: 700,
	overrideStyles: ({
		adjustFontSizeTo,
		scale,
		rhythm
	}, options) => ({
		"a, a:hover, a:visited, a:focus, a:active": {
			color: options.headerColor,
			textDecoration: 'none',
		},
		'a:hover,a:active': {
			opacity: 0.75
		},
		'h1,h2,h3,h4,h5,h6': {
			marginTop: rhythm(2),
		},
		em: {
			color: options.headerColor,
		},
		"html, body": {
			backgroundColor: options.backgroundColor,
		},
		blockquote: {
			...scale(1 / 5),
			color: gray(41),
			paddingLeft: rhythm(13 / 16),
			marginLeft: 0,
			borderLeft: `${rhythm(3 / 16)} solid ${options.themeColor}`,
		},
		'blockquote > :last-child': {
			marginBottom: 0,
		},
		'blockquote cite': {
			...adjustFontSizeTo(options.baseFontSize),
			color: options.bodyColor,
			fontWeight: options.bodyWeight,
		},
		'blockquote cite:before': {
			content: '"— "',
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