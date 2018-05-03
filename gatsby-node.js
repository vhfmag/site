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
