const { backgroundColor, themeColor } = require("./src/utils/consts");

const { graphql } = require("./src/utils/taggedUtils");

const { getEdgeTimestamp } = require("./src/utils/utils");

module.exports = {
	siteMetadata: {
		title: "Victor Magalhães",
		siteUrl: "https://victormagalhaes.codes",
		sourceUrl: "https://gitlab.com/vhfmag/vhfmag.gitlab.io/",
		description:
			"desenvolvedor em [cubos.io](https://cubos.io/) e entusiasta da web, p2p, decentralização e privacidade",
	},
	plugins: [
		"gatsby-plugin-typescript",
		"gatsby-plugin-react-helmet",
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
					"gatsby-remark-autolink-headers",
					"gatsby-remark-emoji-unicode",
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: "gatsby-remark-prismjs",
						options: {
							inlineCodeMarker: "^",
						},
					},
					{
						resolve: "gatsby-remark-a11y-emoji",
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
				display: "minimal-ui",
				icon: "src/assets/images/icons/icon.png",
			},
		},
		"gatsby-plugin-offline",
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/assets/images/icons/icon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: true,
					favicons: true,
					firefox: true,
					twitter: true,
					yandex: true,
					windows: true,
				},
			},
		},
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
				omitGoogleFont: true,
			},
		},
		"gatsby-plugin-sitemap",
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: graphql`
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
								site_url: siteUrl
							}
						}
					}
				`,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges
								.sort(
									(a, b) =>
										getEdgeTimestamp(b) -
										getEdgeTimestamp(a),
								)
								.map(edge => {
									const url = `${site.siteMetadata.siteUrl}/${
										edge.node.parent.relativeDirectory
									}/${edge.node.parent.name}`;

									return Object.assign(
										{},
										edge.node.frontmatter,
										{
											description: edge.node.excerpt,
											url,
											category:
												edge.node.parent
													.relativeDirectory,
											guid: url,
											custom_elements: [
												{
													"content:encoded":
														edge.node.html,
												},
											],
										},
									);
								});
						},
						query: graphql`
							{
								allMarkdownRemark(
									limit: 1000
									filter: {
										frontmatter: { draft: { ne: true } }
									}
								) {
									edges {
										node {
											excerpt
											html
											fileAbsolutePath
											parent {
												... on File {
													name
													relativeDirectory
												}
											}
											frontmatter {
												title
												title
												description
												date
												authors {
													name
													url
												}
											}
										}
									}
								}
							}
						`,
						output: "/rss.xml",
					},
				],
			},
		},
		// {
		// 	resolve: `gatsby-plugin-favicon`,
		// 	options: {
		// 		logo: "./src/assets/images/icons/icon.png",
		// 		injectHTML: true,
		// 		icons: {
		// 			android: true,
		// 			appleIcon: true,
		// 			appleStartup: true,
		// 			coast: true,
		// 			favicons: true,
		// 			firefox: true,
		// 			twitter: true,
		// 			yandex: true,
		// 			windows: true,
		// 		},
		// 	},
		// },
	],
};
