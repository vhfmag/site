import * as React from "react";
import { EntrySummary } from "../components/EntrySummary";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import DefaultLayout from "../components/layout";
import { Paginator } from "../components/Paginator";
import { IGeneralMetadataFragment, IMarkdownEntryFragment } from "../fragments";
import styled from "../styles/styled";
import { isFolder } from "../utils/types";

const ListWrapper = styled.div`
	margin: 1rem 0;
`;

interface IEntryNode {
	node: IMarkdownEntryFragment;
}

interface IBookmarkListProps {
	data: IGeneralMetadataFragment;
	pathContext: GatsbyPaginatorProps<IEntryNode>;
}

const BlogNav = styled.nav`
	--nav-gap: 4pt;

	ul {
		all: unset;
		display: flex;
		flex-wrap: wrap;
		margin: calc(-1 * var(--nav-gap));

		li {
			all: unset;
			margin: var(--nav-gap);
		}
	}
`;

const bodyAttributes = { class: "h-feed" };

const EntryList: React.SFC<IBookmarkListProps> = ({
	pathContext,
	data: {
		personalJson: { name },
	},
}) => {
	const {
		group: posts,
		additionalContext: { listTitle },
	} = pathContext;
	const meAuthor = { name };

	if (!listTitle) {
		throw new Error("Context is missing listTitle");
	}

	return (
		<DefaultLayout>
			<Helmet title={listTitle} bodyAttributes={bodyAttributes} />
			<h1>{listTitle}</h1>
			<details>
				<summary>Outras seções do blog</summary>
				<BlogNav>
					<ul>
						<li>
							<Link to="/">Posts</Link>
						</li>
						<li>
							<Link to="/bookmarks">Bookmarks</Link>
						</li>
						<li>
							<Link to="/archive">Arquivo</Link>
						</li>
					</ul>
				</BlogNav>
			</details>
			<Paginator {...pathContext} />
			<ListWrapper>
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							frontmatter: { title, authors, link, date, tags },
							timeToRead,
							parent: { birthTime, name: fileName, relativeDirectory },
							count: { words },
						},
					}) => {
						if (!isFolder(relativeDirectory)) {
							throw new Error(
								`There is an unhandled directory. Update 'folderToCategory' to include '${relativeDirectory}'`,
							);
						}

						return (
							<EntrySummary
								key={fileAbsolutePath}
								replyTo={link}
								authors={authors || [meAuthor]}
								publishDate={new Date(date || birthTime)}
								title={title}
								fileName={fileName}
								tags={tags}
								folderName={relativeDirectory}
								wordCount={words}
								timeToRead={timeToRead}
							/>
						);
					},
				)}
			</ListWrapper>
			<Paginator {...pathContext} />
		</DefaultLayout>
	);
};

export default EntryList;

export const pageQuery = graphql`
	query EntryListQuery {
		...GeneralMetadata
	}
`;
