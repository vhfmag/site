import * as React from "react";
import { EntryItem } from "../components/EntryItem";
import Markdown from "react-markdown";
import Helmet from "react-helmet";

interface IndexPageProps {
	data: {
		allMarkdownRemark: {
			edges: Array<{
				node: {
					fileAbsolutePath: string;
					html: string;
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

export default class BookList extends React.Component<IndexPageProps, {}> {
	public render() {
		const {
			allMarkdownRemark: { edges: posts },
		} = this.props.data;

		return (
			<>
				<Helmet title="Livros" />
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							html,
							frontmatter: { title, author, link },
						},
					}) => (
						<EntryItem
							key={fileAbsolutePath}
							info={<Markdown source={`Por ${author}`} />}
							title={title}
							html={html}
							url={link}
						/>
					),
				)}
			</>
		);
	}
}

export const pageQuery = graphql`
	query BooksQuery {
		allMarkdownRemark(
			filter: {
				fileAbsolutePath: { regex: "//books//" }
				frontmatter: { draft: { ne: true } }
			}
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					fileAbsolutePath
					html
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
