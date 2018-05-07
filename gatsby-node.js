const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

const { graphql } = require("./src/utils/taggedUtils");
const { extractFileNameFromPath } = require("./src/utils/utils");

function buildPageQuery(pageKind) {
	return graphql`
		{
			allMarkdownRemark(
					filter: {frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/${pageKind}/.*\.md/"}},
					sort: {fields: [frontmatter___date], order: DESC}
			) {
				edges {
					node {
						excerpt
						fileAbsolutePath
						frontmatter {
							date
							author
							link
							title
							description
						}
					}
				}
			}
		}
	`;
}

function createEntryPages({
	pageKind,
	createPage,
	singlePath,
	graphqlQuerier,
	listTemplatePath,
	singleTemplatePath,
	pathPrefix = "",
}) {
	graphqlQuerier(buildPageQuery(pageKind)).then((result, reject) => {
		if (result.errors) {
			reject(result.errors);
			return;
		}

		const postEdges = result.data.allMarkdownRemark.edges;

		// @ts-ignore
		createPaginatedPages({
			createPage,
			pageTemplate: listTemplatePath,
			edges: postEdges,
			pathPrefix,
			pageLength: 5,
			context: { singlePath },
		});

		postEdges.forEach(({ node }) => {
			const markdownPath = node.fileAbsolutePath;
			const slug = extractFileNameFromPath(markdownPath);
			createPage({
				path: `/${singlePath}/${slug}`,
				component: singleTemplatePath,
				context: {
					slug,
					markdownPath,
				},
			});
		});
	});
}

exports.onCreateNode = ({ node, boundActionCreators }) => {
	if (node.internal.owner === "gatsby-transformer-json")
		recurseOnObjectProcessingImages({ node, boundActionCreators });
};

function recurseOnObjectProcessingImages({
	node,
	content = node,
	boundActionCreators,
}) {
	const { createNodeField } = boundActionCreators;

	if (Array.isArray(content)) {
		for (const object of content) {
			recurseOnObjectProcessingImages({
				node,
				content: object,
				boundActionCreators,
			});
		}
	} else {
		for (const key of Object.keys(content)) {
			const value = content[key];
			if (typeof value !== "string") {
				recurseOnObjectProcessingImages({
					node,
					content: value,
					boundActionCreators,
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

exports.createPages = ({ boundActionCreators, graphql: graphqlQuerier }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve(`src/templates/singlePost.tsx`);
		const postListTemplate = path.resolve(`src/templates/postList.tsx`);
		const entryTemplate = path.resolve(`src/templates/singleEntry.tsx`);
		const entryListTemplate = path.resolve(`src/templates/entryList.tsx`);

		resolve(
			Promise.all([
				createEntryPages({
					pageKind: "posts",
					listTemplatePath: postListTemplate,
					graphqlQuerier,
					createPage,
					singlePath: "post",
					singleTemplatePath: postTemplate,
				}),
				createEntryPages({
					pageKind: "books",
					listTemplatePath: entryListTemplate,
					graphqlQuerier,
					createPage,
					pathPrefix: "books",
					singlePath: "book",
					singleTemplatePath: entryTemplate,
				}),
				createEntryPages({
					pageKind: "bookmarks",
					listTemplatePath: entryListTemplate,
					graphqlQuerier,
					createPage,
					pathPrefix: "bookmarks",
					singlePath: "bookmark",
					singleTemplatePath: entryTemplate,
				}),
			]),
		);
	});
};
