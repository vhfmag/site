import * as React from "react";
import { formatDate } from "../utils/utils";
import { Article } from "../components/Article";

interface IPostTemplateProps {
	data: {
		markdownRemark: {
			html: string;
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
					html,
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
				html={html}
				url="#"
			/>
		);
	}
}

export const pageQuery = graphql`
	query SinglePostQuery($markdownPath: String!) {
		markdownRemark(fileAbsolutePath: { eq: $markdownPath }) {
			html
			frontmatter {
				title
				description
				date
			}
		}
	}
`;
