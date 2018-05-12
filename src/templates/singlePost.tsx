import * as React from "react";
import { Entry } from "../components/Entry";
import { Helmet } from "react-helmet";
import { generateLinkedDataTag } from "../components/LinkedData";

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
		category: string;
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
			pathContext: { category },
		} = this.props;

		const linkedData = {
			"@context": "http://schema.org",
			"@type": "BlogPosting",
			mainEntityOfPage: {
				"@type": "Blog",
				"@id": siteUrl,
			},
			headline: title,
			datePublished: date,
			author: {
				"@type": "Person",
				name,
			},
			description: excerpt,
		};

		return (
			<>
				<Helmet>{generateLinkedDataTag(linkedData)}</Helmet>
				<Entry
					title={title}
					category={category}
					subtitle={description}
					publishDate={new Date(date)}
					authors={[{ name, url: siteUrl }]}
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
