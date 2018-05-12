import * as React from "react";
import { EntrySummary } from "../components/EntrySummary";
import Helmet from "react-helmet";
import { Paginator } from "../components/Paginator";
import { extractFileNameFromPath } from "../utils/utils";

interface IEntryNode {
	node: {
		fileAbsolutePath: string;
		excerpt: string;
		frontmatter: {
			title: string;
			authors: IAuthor[];
			link: string;
		};
	};
}

interface IBookmarkListProps {
	pathContext: GatsbyPaginatorProps<IEntryNode>;
}

export default class BookmarkList extends React.Component<
	IBookmarkListProps,
	{}
> {
	public render() {
		const { group: posts, ...paginationProps } = this.props.pathContext;

		return (
			<>
				<Helmet title="Bookmarks" />
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							excerpt,
							frontmatter: { title, authors, link },
						},
					}) => (
						<EntrySummary
							key={fileAbsolutePath}
							replyTo={link}
							authors={authors}
							title={title}
							content={excerpt}
							url={`/${
								paginationProps.additionalContext.singlePath
							}/${extractFileNameFromPath(fileAbsolutePath)}`}
						/>
					),
				)}
				<Paginator {...paginationProps} />
			</>
		);
	}
}
