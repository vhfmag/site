const path = require("path");

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
						fileAbsolutePath
					}
				}
			}
		}
	`;
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql: graphqlQuerier }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve(`src/templates/singlePost.tsx`);
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphqlQuerier(buildPageQuery("posts")).then(result => {
				if (result.errors) {
					reject(result.errors);
				}

				// Create pages for each markdown file.
				result.data.allMarkdownRemark.edges.forEach(({ node }) => {
					const markdownPath = node.fileAbsolutePath;
					const slug = extractFileNameFromPath(markdownPath);
					createPage({
						path: `/post/${slug}`,
						component: blogPostTemplate,
						context: {
							slug,
							markdownPath,
						},
					});
				});
			}),
		);
	});
};
