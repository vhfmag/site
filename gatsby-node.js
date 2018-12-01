const path = require("path");

const { zipObject, mapValues } = require("lodash");
const { graphql } = require("./src/utils/taggedUtils");
const { compareEntryEdges, slugify } = require("./src/utils/utils");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const createPaginatedPages = require("gatsby-paginate");

const postTemplate = path.resolve(`src/templates/singlePost.jsx`);
const entryTemplate = path.resolve(`src/templates/singleEntry.jsx`);
const entryListTemplate = path.resolve(`src/templates/entryList.tsx`);

const tagListTemplate = path.resolve(`src/templates/tagList.tsx`);

const folderToPageTemplate = {
	posts: postTemplate,
	books: entryTemplate,
	bookmarks: entryTemplate,
};

function buildPageQuery(pageKind = ".*") {
	return graphql`
		{
			allMdx(
				filter: {
					${
						process.env.NODE_ENV === "production"
							? `frontmatter: { draft: { ne: true } },`
							: ""
					}
					fileAbsolutePath: {regex: "/${pageKind}/.*\.md/"}
				}
			) {
				edges {
					node {
						excerpt
						timeToRead
						count: wordCount {
							words
						}
						code {
							scope
						}
						fileAbsolutePath
						parent {
							... on File {
								birthTime
								relativeDirectory
								name
							}
						}
						frontmatter {
							title
							description
							date
							tags
							authors {
								name
								url
							}
							link
						}
					}
				}
			}
		}
	`;
}

function createEntryPages({
	pageKind = undefined,
	createPage,
	disableSinglePage = false,
	listTitle,
	graphqlQuerier,
	pathPrefix = "",
}) {
	graphqlQuerier(buildPageQuery(pageKind))
		.then(result => {
			if (result.errors) {
				console.error(result.errors);
				throw result.errors[0];
			}

			/** @type {import("./src/graphql-types").MarkdownRemarkEdge[]} */
			const rawEdges = result.data.allMdx.edges;

			const postEdges = rawEdges
				.map(edge => {
					edge.node.frontmatter.tags =
						edge.node.frontmatter.tags &&
						edge.node.frontmatter.tags.map(tag => tag.trim());
					return edge;
				})
				.sort(compareEntryEdges);

			const tags = Array.from(
				new Set(
					postEdges
						.map(edge => edge.node.frontmatter.tags)
						.filter(maybeArr => maybeArr)
						.reduce((arr, el) => arr.concat(el), []),
				),
			);

			const tagPagesMap = zipObject(
				tags,
				tags.map(tag =>
					postEdges.filter(
						edge =>
							edge.node.frontmatter.tags &&
							edge.node.frontmatter.tags.includes(tag),
					),
				),
			);

			const basePath = `/${pathPrefix}/tags`;
			const getTagPath = tag =>
				`${basePath}/${slugify(tag)}`.replace(/\/{2,}/g, "/");

			createPage({
				path: basePath,
				component: tagListTemplate,
				context: {
					listTitle,
					tags: Object.keys(tagPagesMap).map(tag => ({
						tag,
						count: tagPagesMap[tag].length,
						url: getTagPath(tag),
					})),
				},
			});

			for (const tag in tagPagesMap) {
				const tagEdges = tagPagesMap[tag];
				const path = getTagPath(tag);

				createPage({
					path,
					component: entryListTemplate,
					context: {
						group: tagEdges,
						pathPrefix,
						additionalContext: { listTitle: tag },
					},
				});
			}

			createPaginatedPages({
				createPage,
				pageTemplate: entryListTemplate,
				edges: postEdges,
				pathPrefix,
				pageLength: 20,
				context: {
					listTitle,
				},
			});

			if (!disableSinglePage) {
				postEdges.forEach(
					({
						node: {
							fileAbsolutePath: markdownPath,
							parent: { name: slug, relativeDirectory: folder },
							code: { scope },
						},
					}) => {
						createPage({
							path: `/${folder}/${slug}`,
							component: componentWithMDXScope(
								folderToPageTemplate[folder],
								scope,
							),
							context: {
								markdownPath,
							},
						});
					},
				);
			}
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}

exports.onCreateNode = ({ node, actions }) => {
	if (node.internal.owner === "gatsby-transformer-json")
		recurseOnObjectProcessingImages({
			node,
			actions,
		});
};

function recurseOnObjectProcessingImages({ node, content = node, actions }) {
	const { createNodeField } = actions;

	if (Array.isArray(content)) {
		for (const object of content) {
			recurseOnObjectProcessingImages({
				node,
				content: object,
				actions,
			});
		}
	} else {
		for (const key of Object.keys(content)) {
			const value = content[key];
			if (typeof value !== "string") {
				recurseOnObjectProcessingImages({
					node,
					content: value,
					actions,
				});
			} else {
				// Find all values on the object which end in an extension we recognise, then create a
				// file node for them so that all the standard image processing stuff will kick up
				const extensions = new Set([
					`.jpeg`,
					`.jpg`,
					`.png`,
					`.webp`,
					`.tif`,
					`.tiff`,
					`.svg`,
				]);

				const extension = path.extname(value).toLowerCase();
				if (extensions.has(extension)) {
					// Ok, we're going to create a field for the image with a relative path
					// so that the incompatibility between gatsby-transformer-sharp and
					// NetlifyCMS is avoided.
					const contentPath = path.join(
						__dirname,
						"content",
						"<My directory here where the content lives>",
					);
					const imagePath = path.join(__dirname, "static", value); // (This is my asset path)
					const relative = path.relative(contentPath, imagePath);

					const existingValue =
						node.fields && node.fields[`${key}_image`];

					if (existingValue && typeof existingValue === "string") {
						createNodeField({
							node,
							name: `${key}_image`,
							value: [existingValue, relative],
						});
					} else if (existingValue && Array.isArray(existingValue)) {
						createNodeField({
							node,
							name: `${key}_image`,
							value: [...existingValue, relative],
						});
					} else {
						createNodeField({
							node,
							name: `${key}_image`,
							value: relative,
						});
					}
				}
			}
		}
	}
}

exports.createPages = ({ actions, graphql: graphqlQuerier }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		resolve(
			Promise.all([
				createEntryPages({
					graphqlQuerier,
					createPage,
					listTitle: "Feed",
					disableSinglePage: true,
				}),
				createEntryPages({
					pageKind: "posts",
					graphqlQuerier,
					createPage,
					listTitle: "Posts",
					pathPrefix: "posts",
				}),
				createEntryPages({
					pageKind: "books",
					graphqlQuerier,
					createPage,
					listTitle: "Livros",
					pathPrefix: "books",
				}),
				createEntryPages({
					pageKind: "bookmarks",
					graphqlQuerier,
					createPage,
					listTitle: "Recomendações",
					pathPrefix: "bookmarks",
				}),
			]),
		);
	});
};
