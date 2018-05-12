import * as React from "react";
import { extractFileNameFromPath } from "../utils/utils";
import { EntrySummary } from "../components/EntrySummary";
import { Paginator } from "../components/Paginator";

interface IPostNode {
	node: {
		fileAbsolutePath: string;
		frontmatter: {
			title: string;
			description: string;
			date: string;
			authors: IAuthor[];
		};
	};
}

interface IndexPageProps {
	pathContext: GatsbyPaginatorProps<IPostNode>;
}

export default class PostList extends React.Component<IndexPageProps, {}> {
	public render() {
		const { group: posts, ...paginationProps } = this.props.pathContext;

		return (
			<>
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							frontmatter: { date, description, title, authors },
						},
					}) => (
						<EntrySummary
							key={fileAbsolutePath}
							publishDate={new Date(date)}
							title={title}
							authors={authors}
							content={description}
							url={`/post/${extractFileNameFromPath(
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
