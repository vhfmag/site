import * as React from "react";
import { formatDate } from "../utils/utils";
import { Article } from "../components/Article";

interface IPostTemplateProps {
	data: {
		markdownRemark: {
			htmlAst: string;
			frontmatter: {
				title: string;
				description: string;
				date: string;
			};
		};
	};
	pathContext: {
		markdownPath: string;
		slug: string;
	};
}

export default class SinglePostTemplate extends React.Component<
	IPostTemplateProps
> {
	public render() {
		const {
			data: {
				markdownRemark: {
					htmlAst,
					frontmatter: { date, title, description },
				},
			},
		} = this.props;

		const formattedDate = formatDate(date);

		return (
			<Article
				title={title}
				subtitle={description}
				info={formattedDate}
				htmlAst={htmlAst}
				url="#"
			/>
		);
	}
}

export const pageQuery = graphql`
	query SinglePostQuery($markdownPath: String!) {
		markdownRemark(fileAbsolutePath: { eq: $markdownPath }) {
			htmlAst
			frontmatter {
				title
				description
				date
			}
		}
	}
`;
