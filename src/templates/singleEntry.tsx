import * as React from "react";
import { Entry } from "../components/Entry";

interface IEntryTemplateProps {
	data: {
		markdownRemark: {
			htmlAst: string;
			frontmatter: {
				title: string;
				authors: Array<{ name: string; url: string }>;
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
					frontmatter: { title, authors, link },
				},
			},
		} = this.props;

		return (
			<Entry
				title={title}
				authors={authors}
				replyTo={link}
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
				authors {
					name
					url
				}
				link
			}
		}
	}
`;
