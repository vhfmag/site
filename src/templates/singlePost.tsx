import * as React from "react";
import { formatDate } from "../utils/utils";
import { Article } from "../components/Article";
import { Helmet } from "react-helmet";

interface IPostTemplateProps {
	data: {
		site: {
			siteMetadata: {
				siteUrl: string;
			};
		};
		personalJson: {
			name: string;
		};
		markdownRemark: {
			htmlAst: string;
			excerpt: string;
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
				site: {
					siteMetadata: { siteUrl },
				},
				personalJson: { name },
				markdownRemark: {
					htmlAst,
					excerpt,
					frontmatter: { date, title, description },
				},
			},
		} = this.props;

		const formattedDate = formatDate(date);

		const linkedData = `{
			"@context": "http://schema.org",
			"@type": "BlogPosting",
			"mainEntityOfPage": {
				"@type": "Blog",
				"@id": "${siteUrl}"
			},
			"headline": "${title}",
			"datePublished": "${date}",
			"author": {
				"@type": "Person",
				"name": "${name}"
			},
			"publisher": {
				"@type": "Person",
				"name": "${name}"
			},
			"description": "${excerpt}"
		}`;

		return (
			<>
				<Helmet>
					<script type="application/ld+json">{linkedData}</script>
				</Helmet>
				<Article
					title={title}
					subtitle={description}
					info={formattedDate}
					htmlAst={htmlAst}
					url="#"
				/>
			</>
		);
	}
}

export const pageQuery = graphql`
	query SinglePostQuery($markdownPath: String!) {
		site {
			siteMetadata {
				siteUrl
			}
		}
		personalJson {
			name
		}
		markdownRemark(fileAbsolutePath: { eq: $markdownPath }) {
			htmlAst
			excerpt
			frontmatter {
				title
				description
				date
			}
		}
	}
`;
