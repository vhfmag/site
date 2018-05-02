import * as React from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { formatDate } from "../utils/utils";

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
	}
}

const StyledArticle = styled.article`
    h1, h2 {
        margin: 0 0 0.6em;
    }
`;

const StyledHeader = styled.header`
	margin-bottom: 16pt;
`;

export default class SinglePostTemplate extends React.Component<IPostTemplateProps> {
	public render() {
        console.log(this.props);
		const {
			data: {
				markdownRemark: {
					html,
					frontmatter: { date, title, description },
				},
			},
			pathContext: {
				slug
			},
		} = this.props;

		const formattedDate = formatDate(date);

		return (
			<StyledArticle>
				<StyledHeader>
					<h1 className="post-title p-name">
						<a className="u-url" href={`/post/${slug}`}>
							{title}
						</a>
					</h1>
					<h2>{description}</h2>
					<span>{formattedDate}</span>
				</StyledHeader>
				<section dangerouslySetInnerHTML={{ __html: html }} />
            </StyledArticle>
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
