import * as React from "react";
import Link from "gatsby-link";
import { DateTime } from "luxon";
import styled from "styled-components";
import { getSlug, formatDate } from "../utils/utils";

interface IPostItem {
    fileAbsolutePath: string;
    frontmatter: {
        title: string;
        description: string;
        date: string;
    };
}

interface IndexPageProps {
	data: {
		allMarkdownRemark: {
			edges: Array<{ node: IPostItem }>;
		};
	};
}

const StyledPostDescription = styled.div``;
const StyledPostItem = styled.article`
	display: grid;
	grid-gap: 4pt;

	${StyledPostDescription} {
		font-size: 1rem;
	}

	p, h2 {
		margin: 0;
	}

	h2 {
		font-size: 1.5rem;
	}

	& + & {
		margin-top: 32pt;
	}
`;

const PostItem: React.SFC<{ post: IPostItem }> = ({ post }) => {
    const {
        fileAbsolutePath,
        frontmatter: {
            date,
            title,
            description,
        },
    } = post;

	const slug = getSlug(fileAbsolutePath);

    return (
        <StyledPostItem>
            <h2><a href={`/post/${slug}`}>{ title }</a></h2>
            <StyledPostDescription>{ formatDate(date) }</StyledPostDescription>
            <p>{ description }</p>
        </StyledPostItem>
    );
};

export default class DefaultLayout extends React.Component<IndexPageProps, {}> {
	constructor(props: IndexPageProps, context: any) {
		super(props, context);
	}
	public render() {
		const { allMarkdownRemark: { edges: posts } } = this.props.data;

		return (
			<>
				{ posts.map(post => (
					<PostItem
						key={post.node.fileAbsolutePath}
						post={post.node}
					/>
				)) }
			</>
		);
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			filter: {
				fileAbsolutePath: { regex: "/\/posts\//" }
				frontmatter: {
					draft: { ne: true }
				}
			}
			sort: {
				fields: [frontmatter___date]
				order: DESC
			}
		) {
			edges {
				node {
					fileAbsolutePath
					frontmatter {
						title
						description
						date
					}
				}
			}
		}
	}
`;
