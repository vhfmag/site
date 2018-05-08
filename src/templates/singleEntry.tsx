import * as React from "react";
import { Article } from "../components/Article";
import Markdown from "react-markdown";

interface IEntryTemplateProps {
	data: {
		markdownRemark: {
			htmlAst: string;
			frontmatter: {
				title: string;
				author: string;
				link: string;
			};
		};
	};
	pathContext: {
		markdownPath: string;
		slug: string;
	};
}

export default class SingleEntryTemplate extends React.Component<
	IEntryTemplateProps
> {
	public render() {
		const {
			data: {
				markdownRemark: {
					htmlAst,
					frontmatter: { title, author, link },
				},
			},
		} = this.props;

		return (
			<Article
				title={title}
				info={<Markdown source={`Por ${author}`} />}
				subtitle={
					link && (
						<a rel="external" href={link}>
							Link para original
						</a>
					)
				}
				htmlAst={htmlAst}
				url="#"
			/>
		);
	}
}

export const pageQuery = graphql`
	query SingleEntryQuery($markdownPath: String!) {
		markdownRemark(fileAbsolutePath: { eq: $markdownPath }) {
			htmlAst
			frontmatter {
				title
				author
				link
			}
		}
	}
`;
