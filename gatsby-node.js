const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

const {
	graphql
} = require("./src/utils/taggedUtils");
const {
	getEdgeTimestamp
} = require("./src/utils/utils");

const postTemplate = path.resolve(`src/templates/singlePost.tsx`);
const entryTemplate = path.resolve(`src/templates/singleEntry.tsx`);
const entryListTemplate = path.resolve(`src/templates/entryList.tsx`);

const folderToPageTemplate = {
	posts: postTemplate,
	books: entryTemplate,
	bookmarks: entryTemplate,
};

function buildPageQuery(pageKind = ".*") {
	return graphql `
		{
			allMarkdownRemark(
					filter: {${
						process.env.NODE_ENV === "production"
							? `frontmatter: { draft: { ne: true } },`
							: ""
					}, fileAbsolutePath: {regex: "/${pageKind}/.*\.md/"}}
			) {
				edges {
					node {
						htmlAst
						excerpt
						timeToRead
						count: wordCount {
							words
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
	graphqlQuerier(buildPageQuery(pageKind)).then((result) => {
		if (result.errors) {
			console.error(result.errors);
			throw result.errors[0];
		}

		const postEdges = result.data.allMarkdownRemark.edges;
		const sortedEdges = [...postEdges].sort((a, b) => getEdgeTimestamp(b) - getEdgeTimestamp(a));

		// @ts-ignore
		createPaginatedPages({
			createPage,
			pageTemplate: entryListTemplate,
			edges: sortedEdges,
			pathPrefix,
			pageLength: 5,
			context: {
				listTitle,
			},
		});

		if (!disableSinglePage) {
			postEdges.forEach(({
				node: {
					fileAbsolutePath: markdownPath,
					parent: {
						name: slug,
						relativeDirectory: folder
					}
				}
			}) => {
				createPage({
					path: `/${folder}/${slug}`,
					component: folderToPageTemplate[folder],
					context: {
						markdownPath
					},
				});
			});
		}
	}).catch(err => {
		console.error(err);
		process.exit(1);
	});
}

exports.onCreateNode = ({
	node,
	actions
}) => {
	if (node.internal.owner === "gatsby-transformer-json")
		recurseOnObjectProcessingImages({
			node,
			actions,
		});
};

function recurseOnObjectProcessingImages({
	node,
	content = node,
	actions,
}) {
	const {
		createNodeField
	} = actions;

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

exports.createPages = ({
	actions,
	graphql: graphqlQuerier
}) => {
	const {
		createPage
	} = actions;

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
					listTitle: "Bookmarks",
					pathPrefix: "bookmarks",
				}),
			]),
		);
	});
};