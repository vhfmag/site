import * as React from "react";
import { Entry } from "../components/Entry";
import { Helmet } from "react-helmet";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { generateLinkedDataTag } from "../components/LinkedData";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { isFolder } from "../utils/types";

/**
 * @typedef {Object} IEntryTemplateProps
 * @property {import("../fragments").IGeneralMetadataFragment & { mdx: import("../fragments").IMarkdownEntryFragment, code: { body: any } }} data
 */

/**
 * @param {IEntryTemplateProps} props
 */
const SingleEntryTemplate = ({
	data: {
		site: {
			siteMetadata: { siteUrl },
		},
		personalJson: { name },
		mdx: {
			excerpt,
			headings,
			frontmatter: { title, toc, authors, link, date, tags },
			parent: { birthTime, name: fileName, relativeDirectory },
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

	const linkedData = {
		"@context": "http://schema.org",
		"@type": "Review",
		mainEntityOfPage: {
			"@type": "Blog",
			"@id": siteUrl,
		},
		itemReviewed: {
			"@id": link,
			url: link,
			name: title,
		},
		reviewBody: excerpt,
		author: {
			"@type": "Person",
			"@id": siteUrl,
			url: siteUrl,
			name,
		},
	};

	return (
		<DefaultLayout>
			<Helmet>{generateLinkedDataTag(linkedData)}</Helmet>
			<Entry
				toc={toc}
				title={title}
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
