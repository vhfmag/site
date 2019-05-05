const { backgroundColor, themeColor } = require("./src/utils/consts");
const { graphql } = require("./src/utils/taggedUtils");
const { compareEntryEdges } = require("./src/utils/utils");

const serializeFeed = ({ query: { site, allMdx } }) => {
	return allMdx.edges.sort(compareEntryEdges).map(edge => {
		const url = `${site.siteMetadata.siteUrl}/${edge.node.parent.relativeDirectory}/${
			edge.node.parent.name
		}/?utm_source=rss`;

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

const netlifyCacheControlHeader = "Cache-Control: public, max-age=31536000, immutable";

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
	allMdx(
		limit: 1000
		filter: {
			frontmatter: { draft: { ne: true } }
			fileAbsolutePath: {regex: "/${pageKind}/.*\.md/"}
		}
	) {
		edges {
			node {
				excerpt
				fileAbsolutePath
				parent {
					... on File {
						name
						relativeDirectory
					}
				}
				frontmatter {
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
	polyfill: false,
	siteMetadata: {
		title: "Victor Magalhães",
		siteUrl: "https://victormagalhaes.codes",
		sourceUrl: "https://gitlab.com/vhfmag/vhfmag.gitlab.io/",
		description: "desenvolvedor, entusiasta da web, decentralização e privacidade",
	},
	plugins: [
		"gatsby-plugin-preact",
		"gatsby-plugin-typescript",
		"gatsby-plugin-subfont",
		{
			resolve: "gatsby-plugin-polyfill-io",
			options: {
				features: ["es5", "es6", "es7"],
				flags: ["gated"],
			},
		},
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
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: "gatsby-mdx",
			options: {
				defaultLayouts: {
					default: require.resolve("./src/components/layout/index.tsx"),
				},
				gatsbyRemarkPlugins: [
					{ resolve: "gatsby-remark-autolink-headers" },
					{
						resolve: "gatsby-remark-embedded-codesandbox",
						options: {
							directory: `${__dirname}`,
							protocol: "codesandbox://",
							embedOptions: {
								view: "split",
								verticallayout: 1,
								codemirror: 1,
								hidenavigation: 1,
								autoresize: 1,
							},
						},
					},
					{ resolve: "gatsby-remark-emoji-unicode" },
					{ resolve: "gatsby-remark-external-links" },
					{ resolve: "gatsby-remark-unwrap-images" },
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							withWebp: true,
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
		"gatsby-plugin-sri",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-sass",
			options: {
				cssLoaderOptions: {
					localIdentName:
						process.env.NODE_ENV === "production"
							? "[local]--[hash:base64:5]"
							: "[path][name]__[local]--[hash:base64:5]",
				},
			},
		},
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
			resolve: "gatsby-plugin-matomo",
			options: {
				siteId: "1",
				matomoUrl: "https://yuno.victormagalhaes.codes/matomo",
				siteUrl: "https://victormagalhaes.codes",
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
		"gatsby-plugin-webpack-size",
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
					"/*.webmanifest": ["Content-Type: application/manifest+json; charset=utf-8"],
					"/*.css": ["X-Content-Type-Options: nosniff", netlifyCacheControlHeader],
					"/*.png": [netlifyCacheControlHeader],
					"/*.jpg": [netlifyCacheControlHeader],
					"/*.jpeg": [netlifyCacheControlHeader],
					"/*.gif": [netlifyCacheControlHeader],
					"/*.svg": [netlifyCacheControlHeader],
					"/*.woff2": [netlifyCacheControlHeader],
				},
				allPageHeaders: [
					"Strict-Transport-Security: max-age=31536000",
					"Referrer-Policy: no-referrer, same-origin",
				],
			},
		},
	],
};
