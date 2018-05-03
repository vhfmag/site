import * as React from "react";
import { extractFileNameFromPath, formatDate } from "../utils/utils";
import { EntryItem } from "../components/EntryItem";
import { Paginator } from "../components/Paginator";

interface IPostNode {
	node: {
		fileAbsolutePath: string;
		frontmatter: {
			title: string;
			description: string;
			date: string;
		};
	};
}

interface IndexPageProps {
	pathContext: GatsbyPaginatorProps<IPostNode>;
}

export default class PostList extends React.Component<IndexPageProps, {}> {
	public render() {
		console.log("postlist", this.props);

		const { group: posts, ...paginationProps } = this.props.pathContext;

		return (
			<>
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							frontmatter: { date, description, title },
						},
					}) => (
						<EntryItem
							key={fileAbsolutePath}
							info={formatDate(date)}
							title={title}
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
