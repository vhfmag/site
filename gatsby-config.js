const {
	backgroundColor,
	themeColor,
	textColor,
} = require("./src/utils/consts");

module.exports = {
	siteMetadata: {
		title: "Victor Magalhães",
		siteUrl: "https://vhfmag.gitlab.io",
		description: "web dev, decentralized web & p2p enthusiast",
	},
	plugins: [
		"gatsby-plugin-react-next",
		"gatsby-plugin-react-helmet",
		// Add typescript stack into webpack
		"gatsby-plugin-typescript",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-component",
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
					{
						resolve: "gatsby-remark-prismjs",
						options: {
							inlineCodeMarker: "^",
						},
					},
				],
			},
		},
		"gatsby-transformer-json",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Victor Magalhães",
				short_name: "Victor",
				start_url: "/",
				background_color: backgroundColor,
				theme_color: themeColor,
				display: "minimal_ui",
			},
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-netlify",
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
};