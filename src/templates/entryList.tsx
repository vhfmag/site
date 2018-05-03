import * as React from "react";
import { EntryItem } from "../components/EntryItem";
import Markdown from "react-markdown";
import Helmet from "react-helmet";
import { Paginator } from "../components/Paginator";
import { extractFileNameFromPath } from "../utils/utils";

interface IEntryNode {
	node: {
		fileAbsolutePath: string;
		excerpt: string;
		frontmatter: {
			title: string;
			author: string;
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
							frontmatter: { title, author, link },
						},
					}) => (
						<EntryItem
							key={fileAbsolutePath}
							info={<Markdown source={`Por ${author}`} />}
							subtitle={
								link && <a href={link}>Link para original</a>
							}
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
