import * as React from "react";
import { Entry } from "../components/Entry";
import { renderAuthors, folderNameToReviewedItemType } from "../components/EntryHeader";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { isFolder } from "../utils/types";
import { IGeneralMetadataFragment, IMarkdownEntryFragment } from "../fragments";
import { WindowLocation } from "@reach/router";

interface IEntryTemplateProps {
	data: IGeneralMetadataFragment & { mdx: IMarkdownEntryFragment };
	location: WindowLocation;
	pathContext: any;
}

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
			tableOfContents,
			frontmatter: { title, toc, authors, link, date, tags },
			parent: { birthTime },
			timeToRead,
			count: { words },
			code: { body },
		},
	},
}: IEntryTemplateProps) => {
	if (!isFolder(relativeDirectory)) {
		throw new Error(
			`There is an unhandled directory. Update 'folderToCategory' to include '${relativeDirectory}'`,
		);
	}

	const replyTo = (
		<span
			itemProp="itemReviewed"
			itemScope
			itemType={folderNameToReviewedItemType(relativeDirectory)}
		>
			<meta itemProp="headline title" content={title} />
			Em resposta a{" "}
			<span>
				<a
					itemProp="url"
					rel="bookmark"
					title={title}
					className="u-in-reply-to"
					href={link}
				>
					{title}
				</a>
			</span>{" "}
			{authors && renderAuthors(authors)}
		</span>
	);

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
				tableOfContents={tableOfContents}
				tags={tags}
				wordCount={words}
				timeToRead={timeToRead}
			>
				{replyTo}
				<hr style={{ margin: "1em 0" }} />
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
