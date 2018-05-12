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
		};
	};
}

interface IndexPageProps {
	data: {
		site: { siteMetadata: { siteUrl: string } };
		personalJson: { name: string };
	};
	pathContext: GatsbyPaginatorProps<IPostNode>;
}

export default class PostList extends React.Component<IndexPageProps, {}> {
	public render() {
		const {
			site: {
				siteMetadata: { siteUrl },
			},
			personalJson: { name },
		} = this.props.data;
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
						<EntrySummary
							key={fileAbsolutePath}
							publishDate={new Date(date)}
							title={title}
							authors={[{ name, url: siteUrl }]}
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

export const pageQuery = graphql`
	query PostListQuery {
		site {
			siteMetadata {
				siteUrl
			}
		}
		personalJson {
			name
		}
	}
`;
