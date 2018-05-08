const {
	backgroundColor,
	themeColor,
	textColor,
} = require("./src/utils/consts");

const {
	extractFileNameFromPath,
} = require("./src/utils/utils");

module.exports = {
	siteMetadata: {
		title: "Victor Magalhães",
		siteUrl: "https://victormagalhaes.codes",
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
				display: "minimal-ui",
				icon: "src/assets/images/icons/icon.png",
			},
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
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
							const slug = extractFileNameFromPath(edge.node.fileAbsolutePath);
							const url = `${site.siteMetadata.siteUrl}/post/${slug}`;

							return Object.assign({}, edge.node.frontmatter, {
								description: edge.node.excerpt,
								url,
								guid: url,
								custom_elements: [{
									"content:encoded": edge.node.html
								}],
							});
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
	],
};