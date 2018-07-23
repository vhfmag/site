import { graphql } from "gatsby";

export interface MarkdownEntryFragment {
	htmlAst: any;
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
		authors?: {
			name: string;
			url?: string;
		}[];
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
	fragment GeneralMetadata on RootQueryType {
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
			link
		}
	}
`;
