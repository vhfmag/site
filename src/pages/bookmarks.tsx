import * as React from "react";
import { EntryItem } from "../components/EntryItem";
import Markdown from "react-markdown";
import Helmet from "react-helmet";

interface IBookmarkListProps {
	data: {
		allMarkdownRemark: {
			edges: Array<{
				node: {
					fileAbsolutePath: string;
					excerpt: string;
					frontmatter: {
						title: string;
						author: string;
						link: string;
					};
				};
			}>;
		};
	};
}

export default class BookmarkList extends React.Component<
	IBookmarkListProps,
	{}
> {
	public render() {
		const {
			allMarkdownRemark: { edges: posts },
		} = this.props.data;

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
							title={title}
							content={excerpt}
							url={link}
						/>
					),
				)}
			</>
		);
	}
}

export const pageQuery = graphql`
	query BookmarksQuery {
		allMarkdownRemark(
			filter: {
				fileAbsolutePath: { regex: "//bookmarks//" }
				frontmatter: { draft: { ne: true } }
			}
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					fileAbsolutePath
					excerpt
					frontmatter {
						title
						author
						link
					}
				}
			}
		}
	}
`;
