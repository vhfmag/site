import * as React from "react";
import { EntrySummary } from "../components/EntrySummary";
import Helmet from "react-helmet";
import { Paginator } from "../components/Paginator";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { GeneralMetadataFragment, MarkdownEntryFragment } from "../fragments";

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
			pageCount,
			index,
			additionalContext: { listTitle },
		} = this.props.pathContext;

		const {
			site: {
				siteMetadata: { siteUrl },
			},
			personalJson: { name },
		} = this.props.data;

		const meAuthor = { name, url: siteUrl };

		if (!listTitle) {
			throw new Error("Context is missing listTitle");
		}

		return (
			<DefaultLayout>
				<Helmet
					title={`${listTitle} ${index}/${pageCount}`}
					bodyAttributes={{ class: "h-feed" }}
				/>
				<h1>{listTitle}</h1>
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							excerpt,
							frontmatter: { title, authors, link, date },
							timeToRead,
							parent: {
								modifiedTime,
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
							publishDate={new Date(date || modifiedTime)}
							title={title}
							fileName={fileName}
							folderName={relativeDirectory}
							content={excerpt}
							wordCount={words}
							timeToRead={timeToRead}
						/>
					),
				)}
				<Paginator {...this.props.pathContext} />
			</DefaultLayout>
		);
	}
}

export const pageQuery = graphql`
	query EntryListQuery {
		...GeneralMetadata
	}
`;
