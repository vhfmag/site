import * as React from "react";
import { EntrySummary } from "../components/EntrySummary";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { GeneralMetadataFragment, MarkdownEntryFragment } from "../fragments";
import styled from "styled-components";

const ListWrapper = styled.div`
	margin: 1rem 0;
`;

interface IEntryNode {
	node: MarkdownEntryFragment;
}

interface IBookmarkListProps {
	data: GeneralMetadataFragment;
	pathContext: GatsbyPaginatorProps<IEntryNode>;
}

export default class EntryList extends React.Component<IBookmarkListProps> {
	public render() {
		const {
			group: posts,
			additionalContext: { listTitle },
		} = this.props.pathContext;

		const {
			personalJson: { name },
		} = this.props.data;

		const meAuthor = { name };

		if (!listTitle) {
			throw new Error("Context is missing listTitle");
		}

		return (
			<DefaultLayout>
				<Helmet
					title={listTitle}
					bodyAttributes={{ class: "h-feed" }}
				/>
				<h1>{listTitle}</h1>
				<ListWrapper>
					{posts.map(
						({
							node: {
								fileAbsolutePath,
								excerpt,
								frontmatter: { title, authors, link, date },
								timeToRead,
								parent: {
									birthTime,
									name: fileName,
									relativeDirectory,
								},
								count: { words },
							},
						}) => (
							<EntrySummary
								key={fileAbsolutePath}
								replyTo={link}
								authors={authors || [meAuthor]}
								publishDate={new Date(date || birthTime)}
								title={title}
								fileName={fileName}
								folderName={relativeDirectory}
								content={excerpt}
								wordCount={words}
								timeToRead={timeToRead}
							/>
						),
					)}
				</ListWrapper>
			</DefaultLayout>
		);
	}
}

export const pageQuery = graphql`
	query EntryListQuery {
		...GeneralMetadata
	}
`;
