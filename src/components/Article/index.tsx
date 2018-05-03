import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";

type IContentProps =
	| { content: NonNullableNode; html?: undefined }
	| { html: string; content?: undefined };

type IArticleProps = IContentProps & {
	title: string;
	subtitle?: NonNullableNode;
	info?: string;
	url?: string;
	children?: never;
};

const StyledArticle = styled.article`
	h1,
	h2 {
		margin: 0 0 0.6em;
	}
`;

const StyledHeader = styled.header`
	margin-bottom: 16pt;
`;

export class Article extends React.Component<IArticleProps> {
	public render() {
		const { title, url, subtitle, info, content, html } = this.props;

		return (
			<StyledArticle>
				<Helmet title={title} />
				<StyledHeader>
					<h1 className="post-title p-name">
						{url ? (
							<Link className="u-url" to={url}>
								{title}
							</Link>
						) : (
							title
						)}
					</h1>
					{subtitle && <h2>{subtitle}</h2>}
					{info && <span>{info}</span>}
				</StyledHeader>
				{html ? (
					<section dangerouslySetInnerHTML={{ __html: html }} />
				) : (
					<section>{content}</section>
				)}
			</StyledArticle>
		);
	}
}
