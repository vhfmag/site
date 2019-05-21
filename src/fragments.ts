import { graphql } from "gatsby";

export interface IMarkdownEntryTOC {
	items?: Array<IMarkdownEntryTOC & { url: string; title: string }>;
}

export interface IMarkdownEntryFragment {
	tableOfContents: IMarkdownEntryTOC;
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

export interface IMarkdownEntryNode extends IMarkdownEntryFragment {
	context: {
		slug: string;
		folder: string;
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
	pathContext: {
		slug: string;
		folder: string;
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
		tableOfContents
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
