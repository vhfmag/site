import * as React from "react";
import { Entry } from "../components/Entry";
import { Helmet } from "react-helmet";
import { generateLinkedDataTag } from "../components/LinkedData";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { GeneralMetadataFragment, MarkdownEntryFragment } from "../fragments";

interface IEntryTemplateProps {
	data: GeneralMetadataFragment & { markdownRemark: MarkdownEntryFragment };
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
					frontmatter: { title, authors, link, date },
					parent: { modifiedTime, name: fileName, relativeDirectory },
					timeToRead,
					count: { words },
				},
			},
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
			<DefaultLayout>
				<Helmet>{generateLinkedDataTag(linkedData)}</Helmet>
				<Entry
					title={title}
					authors={authors!}
					fileName={fileName}
					folderName={relativeDirectory}
					publishDate={new Date(date || modifiedTime)}
					replyTo={link}
					htmlAst={htmlAst}
					wordCount={words}
					timeToRead={timeToRead}
				/>
			</DefaultLayout>
		);
	}
}

export const pageQuery = graphql`
	query SingleEntryQuery($markdownPath: String!) {
		...GeneralMetadata
		markdownRemark(fileAbsolutePath: { eq: $markdownPath }) {
			...MarkdownEntry
		}
	}
`;
