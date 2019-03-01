import * as React from "react";
import { Entry } from "../components/Entry";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { isFolder } from "../utils/types";
import { IGeneralMetadataFragment, IMarkdownEntryFragment } from "../fragments";
import { WindowLocation } from "@reach/router";

interface IPostTemplateProps {
	data: IGeneralMetadataFragment & { mdx: IMarkdownEntryFragment };
	location: WindowLocation;
	pathContext: any;
}

const SinglePostTemplate = ({
	location,
	pathContext: { slug: fileName, folder: relativeDirectory },
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
			parent: { birthTime },
			count: { words } = { words: -1 },
		},
	},
}: IPostTemplateProps) => {
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
