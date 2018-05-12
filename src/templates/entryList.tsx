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
		const {
			pageCount,
			index,
			additionalContext: { listTitle, singlePath },
		} = paginationProps;

		if (!listTitle) throw new Error("Context is missing listTitle");
		if (!singlePath) throw new Error("Context is missing singlePath");

		return (
			<>
				<Helmet
					title={`${listTitle} ${index}/${pageCount}`}
					bodyAttributes={{ className: "h-feed" }}
				/>
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
							url={`/${singlePath}/${extractFileNameFromPath(
								fileAbsolutePath,
							)}`}
						/>
					),
				)}
				<Paginator {...paginationProps} />
			</>
		);
	}
}
