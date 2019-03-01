import * as React from "react";
import { Entry } from "../components/Entry";
import { renderAuthors, folderNameToReviewedItemType } from "../components/EntryHeader";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { isFolder } from "../utils/types";
import { IGeneralMetadataFragment, IMarkdownEntryFragment } from "../fragments";
import { WindowLocation } from "@reach/router";
import styled from "../styles/styled";

interface IEntryTemplateProps {
	data: IGeneralMetadataFragment & { mdx: IMarkdownEntryFragment };
	location: WindowLocation;
	pathContext: any;
}

const StyledIFrame = styled.iframe`
	width: 70ch;
	max-width: 90vw;
	height: 50ch;
`;

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
}: IEntryTemplateProps) => {
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
				<p>
					<a href={link} rel="external">
						Clique para ver a apresentação
					</a>
					, ou veja daqui mesmo:
				</p>
				<StyledIFrame
					src={link}
					title="Slides da apresentação"
					sandbox="allow-same-origin allow-scripts"
				/>
				{body && (
					<>
						<hr style={{ margin: "1em 0" }} />
						<MDXRenderer>{body}</MDXRenderer>
					</>
				)}
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
