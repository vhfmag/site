import { graphql } from "gatsby";

export const fragment = graphql`
	fragment MDXListingFragment on MdxConnection {
		edges {
			node {
				excerpt
				timeToRead
				count: wordCount {
					words
				}
				code {
					scope
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
					draft
					authors {
						name
						url
					}
					link
				}
			}
		}
	}
`;
