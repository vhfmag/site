import * as React from "react";
import { extractFileNameFromPath, formatDate } from "../utils/utils";
import { EntryItem } from "../components/EntryItem";

interface IndexPageProps {
	data: {
		allMarkdownRemark: {
			edges: Array<{
				node: {
					fileAbsolutePath: string;
					frontmatter: {
						title: string;
						description: string;
						date: string;
					};
				};
			}>;
		};
	};
}

export default class DefaultLayout extends React.Component<IndexPageProps, {}> {
	constructor(props: IndexPageProps, context: any) {
		super(props, context);
	}
	public render() {
		const {
			allMarkdownRemark: { edges: posts },
		} = this.props.data;

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
			</>
		);
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			filter: {
				fileAbsolutePath: { regex: "//posts//" }
				frontmatter: { draft: { ne: true } }
			}
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					fileAbsolutePath
					frontmatter {
						title
						description
						date
					}
				}
			}
		}
	}
`;
