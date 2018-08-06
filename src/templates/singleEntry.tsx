import * as React from "react";
import { Entry } from "../components/Entry";
import { Helmet } from "react-helmet";
import { generateLinkedDataTag } from "../components/LinkedData";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";
import { GeneralMetadataFragment, IMarkdownEntryFragment } from "../fragments";

interface IEntryTemplateProps {
	data: GeneralMetadataFragment & { markdownRemark: IMarkdownEntryFragment };
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
					headings,
					frontmatter: { title, toc, authors, link, date },
					parent: { birthTime, name: fileName, relativeDirectory },
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
					toc={toc}
					title={title}
					authors={authors!}
					fileName={fileName}
					folderName={relativeDirectory}
					publishDate={new Date(date || birthTime)}
					replyTo={link}
					htmlAst={htmlAst}
					headings={headings}
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
