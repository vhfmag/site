import { graphql } from "gatsby";

export interface IMarkdownEntryFragment {
	headings?: Array<{ depth: number; value: string }>;
	excerpt: string;
	timeToRead: number;
	code: { body: any };
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
		tags?: string[];
		authors?: Array<{
			name: string;
			url?: string;
		}>;
		toc?: boolean;
		link?: string;
	};
}

export interface IGeneralMetadataFragment {
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

	fragment MarkdownEntry on Mdx {
		headings {
			depth
			value
		}
		code {
			scope
			body
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
			tags
			authors {
				name
				url
			}
			toc
			link
		}
	}
`;
