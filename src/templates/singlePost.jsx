import * as React from "react";
import { Entry } from "../components/Entry";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { isFolder } from "../utils/types";

/**
 * @typedef {Object} IPostTemplateProps
 * @property {import("../fragments").IGeneralMetadataFragment & { mdx: import("../fragments").IMarkdownEntryFragment, code: { body: any } }} data
 */

/**
 * @param {IPostTemplateProps} props
 */
const SinglePostTemplate = ({
	data: {
		site: {
			siteMetadata: { siteUrl },
		},
		personalJson: { name },
		mdx: {
			headings,
			excerpt,
			code: { body },
			frontmatter: { toc, date, title, description, tags },
			timeToRead,
			parent: { birthTime, name: fileName, relativeDirectory },
			count: { words } = { words: -1 },
		},
	},
}) => {
	if (!isFolder(relativeDirectory)) {
		throw new Error(
			`There is an unhandled directory. Update 'folderToCategory' to include '${relativeDirectory}'`,
		);
	}

	return (
		<DefaultLayout>
			<Entry
				toc={toc}
				title={title}
				excerpt={excerpt}
				fileName={fileName}
				folderName={relativeDirectory}
				subtitle={description}
				publishDate={new Date(date || birthTime)}
				selfAuthor={{ name, url: siteUrl }}
				headings={headings}
				tags={tags}
				wordCount={words}
				timeToRead={timeToRead}
			>
				<MDXRenderer>{body}</MDXRenderer>
			</Entry>
		</DefaultLayout>
	);
};

export default SinglePostTemplate;

export const pageQuery = graphql`
	query($markdownPath: String!) {
		...GeneralMetadata
		mdx(fileAbsolutePath: { eq: $markdownPath }) {
			...MarkdownEntry
		}
	}
`;
