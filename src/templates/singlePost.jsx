import * as React from "react";
import { Entry } from "../components/Entry";
import { Helmet } from "react-helmet";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { generateLinkedDataTag } from "../components/LinkedData";
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

	const linkedData = {
		"@context": "http://schema.org",
		"@type": "BlogPosting",
		mainEntityOfPage: {
			"@type": "Blog",
			"@id": siteUrl,
		},
		headline: title,
		datePublished: date,
		author: {
			"@type": "Person",
			name,
		},
		description: excerpt,
	};

	return (
		<DefaultLayout>
			<Helmet>{generateLinkedDataTag(linkedData)}</Helmet>
			<Entry
				toc={toc}
				title={title}
				fileName={fileName}
				folderName={relativeDirectory}
				subtitle={description}
				publishDate={new Date(date || birthTime)}
				authors={[{ name, url: siteUrl }]}
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
