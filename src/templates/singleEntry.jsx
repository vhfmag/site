import * as React from "react";
import { Entry } from "../components/Entry";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { isFolder } from "../utils/types";

/**
 * @typedef {Object} IEntryTemplateProps
 * @property {import("../fragments").IGeneralMetadataFragment & { mdx: import("../fragments").IMarkdownEntryFragment, code: { body: any } }} data
 * @property {import("@reach/router").WindowLocation} location
 */

/**
 * @param {IEntryTemplateProps} props
 */
const SingleEntryTemplate = ({
	location,
	pathContext: { slug: fileName, folder: relativeDirectory },
	data: {
		site: {
			siteMetadata: { siteUrl },
		},
		personalJson: { name },
		mdx: {
			excerpt,
			headings,
			frontmatter: { title, toc, authors, link, date, tags },
			parent: { birthTime },
			timeToRead,
			count: { words },
			code: { body },
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
				entryUrl={location.pathname}
				toc={toc}
				title={title}
				excerpt={excerpt}
				selfAuthor={{ name, url: siteUrl }}
				authors={authors}
				fileName={fileName}
				folderName={relativeDirectory}
				publishDate={new Date(date || birthTime)}
				replyTo={link}
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

export default SingleEntryTemplate;

export const pageQuery = graphql`
	query($markdownPath: String!) {
		...GeneralMetadata
		mdx(fileAbsolutePath: { eq: $markdownPath }) {
			...MarkdownEntry
		}
	}
`;
