const { backgroundColor, themeColor } = require("./src/utils/consts");

const { graphql } = require("./src/utils/taggedUtils");

const { compareEntryEdges } = require("./src/utils/utils");

const serializeFeed = ({ query: { site, allMarkdownRemark } }) => {
	return allMarkdownRemark.edges.sort(compareEntryEdges).map(edge => {
		const url = `${site.siteMetadata.siteUrl}/${
			edge.node.parent.relativeDirectory
		}/${edge.node.parent.name}`;

		return Object.assign({}, edge.node.frontmatter, {
			description: edge.node.excerpt,
			url,
			category: edge.node.parent.relativeDirectory,
			guid: url,
			custom_elements: [
				{
					"content:encoded": edge.node.html,
				},
			],
		});
	});
};

const netlifyCacheControlHeader =
	"Cache-Control: public, max-age=31536000, immutable";

const makeFeedQuery = (pageKind = ".*") => graphql`
{
	site {
		siteMetadata {
			title
			description
			siteUrl
			site_url: siteUrl
		}
	}
	allMarkdownRemark(
		limit: 1000
		filter: {
			frontmatter: { draft: { ne: true } }
			fileAbsolutePath: {regex: "/${pageKind}/.*\.md/"}
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
`;

module.exports = {
	siteMetadata: {
		title: "Victor Magalhães",
		siteUrl: "https://victormagalhaes.codes",
		sourceUrl: "https://gitlab.com/vhfmag/vhfmag.gitlab.io/",
		description:
			"desenvolvedor em <a href='https://cubos.io/'>cubos.io</a> e entusiasta da web, p2p e privacidade",
	},
	plugins: [
		"gatsby-plugin-typescript",
		{
			resolve: "gatsby-plugin-webpack-bundle-analyzer",
			options: {
				production: true,
				analyzerMode: "static",
				defaultSizes: "gzip",
				openAnalyzer: false,
			},
		},
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
		"gatsby-plugin-brotli",
		"gatsby-plugin-zopfli",
		"gatsby-plugin-sri",
		"gatsby-transformer-sharp",
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
						serialize: serializeFeed,
						query: makeFeedQuery(),
						output: "/rss.xml",
					},
					{
						serialize: serializeFeed,
						query: makeFeedQuery("posts"),
						output: "/rss.posts.xml",
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-netlify",
			options: {
				headers: {
					"/*.js": [
						"X-Content-Type-Options: nosniff",
						"Content-Type: text/javascript; charset=utf-8",
						netlifyCacheControlHeader,
					],
					"/sw.js": ["Cache-Control: no-cache"],
					"/*.webmanifest": [
						"Content-Type: application/manifest+json; charset=utf-8",
					],
					"/*.css": [
						"X-Content-Type-Options: nosniff",
						netlifyCacheControlHeader,
					],
					"/*.png": [netlifyCacheControlHeader],
					"/*.jpg": [netlifyCacheControlHeader],
					"/*.jpeg": [netlifyCacheControlHeader],
					"/*.gif": [netlifyCacheControlHeader],
					"/*.svg": [netlifyCacheControlHeader],
				},
				allPageHeaders: ["Strict-Transport-Security: max-age=31536000"],
			},
		},
		"gatsby-plugin-netlify-cache",
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
	],
};
