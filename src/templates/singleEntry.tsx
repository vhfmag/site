import * as React from "react";
import { Entry } from "../components/Entry";
import { Helmet } from "react-helmet";
import { generateLinkedDataTag } from "../components/LinkedData";
import { graphql } from "gatsby";

interface IEntryTemplateProps {
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
			htmlAst: object;
			excerpt: string;
			frontmatter: {
				title: string;
				authors: Array<{ name: string; url: string }>;
				link: string;
			};
			timeToRead: number;
			count: {
				words: number;
				sentences: number;
				paragraphs: number;
			};
		};
	};
	pathContext: {
		markdownPath: string;
		slug: string;
		category: string;
	};
}

export default class SingleEntryTemplate extends React.Component<
	IEntryTemplateProps
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
					frontmatter: { title, authors, link },
					timeToRead,
					count: { words },
				},
			},
			pathContext: { category },
		} = this.props;

		const linkedData = {
			"@context": "http://schema.org",
			"@type": "Review",
			mainEntityOfPage: {
				"@type": "Blog",
				"@id": siteUrl,
			},
			itemReviewed: {
				"@id": link,
				url: link,
				name: title,
			},
			reviewBody: excerpt,
			author: {
				"@type": "Person",
				"@id": siteUrl,
				url: siteUrl,
				name,
			},
		};

		return (
			<>
				<Helmet>{generateLinkedDataTag(linkedData)}</Helmet>
				<Entry
					title={title}
					authors={authors}
					category={category}
					replyTo={link}
					htmlAst={htmlAst}
					url="#"
					wordCount={words}
					timeToRead={timeToRead}
				/>
			</>
		);
	}
}

export const pageQuery = graphql`
	query SingleEntryQuery($markdownPath: String!) {
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
			timeToRead
			count: wordCount {
				words
			}
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
