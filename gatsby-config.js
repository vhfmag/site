const {
	backgroundColor,
	themeColor,
	textColor,
} = require("./src/utils/consts");

const {
	extractFileNameFromPath
} = require("./src/utils/utils");

module.exports = {
	siteMetadata: {
		title: "Victor Magalhães",
		siteUrl: "https://victormagalhaes.codes",
		sourceUrl: "https://gitlab.com/vhfmag/vhfmag.gitlab.io/",
		description: "javascript engineer at [cubos.io](https://cubos.io/) and web, p2p, and decentralization enthusiast",
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
					{
						resolve: "gatsby-remark-emoji",
						options: {
							emojiConversion: "shortnameToImage",
						},
					},
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
		// "gatsby-plugin-purify-css",
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
				query: `
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
				feeds: [{
					serialize: ({
						query: {
							site,
							allMarkdownRemark
						}
					}) => {
						return allMarkdownRemark.edges.map(edge => {
							const slug = extractFileNameFromPath(
								edge.node.fileAbsolutePath,
							);
							const url = `${
									site.siteMetadata.siteUrl
								}/post/${slug}`;

							return Object.assign({},
								edge.node.frontmatter, {
									description: edge.node.excerpt,
									url,
									guid: url,
									custom_elements: [{
										"content:encoded": edge.node.html,
									}, ],
								},
							);
						});
					},
					query: `
					{
					  allMarkdownRemark(
						limit: 1000,
						sort: { order: DESC, fields: [frontmatter___date] },
						filter: {
							frontmatter: { draft: { ne: true } },
							fileAbsolutePath: {regex: "/posts/"}
						}
					  ) {
						edges {
						  node {
							excerpt
							html
							fileAbsolutePath
							frontmatter {
							  title
							  date
							}
						  }
						}
					  }
					}
				  `,
					output: "/rss.xml",
				}, ],
			},
		},
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
	],
};