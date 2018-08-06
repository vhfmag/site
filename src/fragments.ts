import { graphql } from "gatsby";

export interface IMarkdownEntryFragment {
	htmlAst: any;
	headings?: Array<{ depth: number; value: string }>;
	excerpt: string;
	timeToRead: number;
	count: {
		words: number;
	};
	fileAbsolutePath: string;
	parent: {
		birthTime: string;
		relativeDirectory: string;
		name: string;
	};
	frontmatter: {
		title: string;
		description?: string;
		date?: string;
		authors?: Array<{
			name: string;
			url?: string;
		}>;
		toc?: boolean;
		link?: string;
	};
}

export interface GeneralMetadataFragment {
	site: {
		siteMetadata: {
			siteUrl: string;
		};
	};
	personalJson: {
		name: string;
	};
}

export const fragments = graphql`
	fragment GeneralMetadata on Query {
		site {
			siteMetadata {
				siteUrl
			}
		}
		personalJson {
			name
		}
	}

	fragment MarkdownEntry on MarkdownRemark {
		htmlAst
		headings {
			depth
			value
		}
		excerpt
		timeToRead
		count: wordCount {
			words
		}
		fileAbsolutePath
		parent {
			... on File {
				birthTime
				relativeDirectory
				name
			}
		}
		frontmatter {
			title
			description
			date
			authors {
				name
				url
			}
			toc
			link
		}
	}
`;
