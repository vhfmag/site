import * as React from "react";
import { EntrySummary } from "../components/EntrySummary";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import DefaultLayout from "../components/layout";
import { Paginator } from "../components/Paginator";
import { IGeneralMetadataFragment, IMarkdownEntryNode } from "../fragments";
import { styled } from "linaria/react";
import { isFolder } from "../utils/types";
import { GatsbyPaginatorProps } from "../declarations";

const ListWrapper = styled.div`
	margin: 1rem 0;
`;

interface IEntryNode {
	node: IMarkdownEntryNode;
}

interface IBookmarkListProps {
	data: IGeneralMetadataFragment;
	pathContext: GatsbyPaginatorProps<IEntryNode>;
}

const BlogNav = styled.nav`
	--nav-gap: 4pt;

	h2 {
		display: inline-block;
		margin-bottom: 0.5em;
		margin-right: 0.5em;

		::after {
			content: ":";
		}
	}

	ul {
		all: unset;
		display: inline-flex;
		flex-wrap: wrap;
		margin: calc(-1 * var(--nav-gap));

		li {
			all: unset;
			margin: var(--nav-gap);

			a.current {
				font-weight: bold;
			}
		}
	}
`;

const blogSections = [
	{
		path: "/",
		label: "Tudo",
	},
	{
		path: "/posts/",
		label: "Posts",
	},
	{
		path: "/bookmarks/",
		label: "Bookmarks",
	},
];

const EntryList: React.SFC<IBookmarkListProps> = ({
	pathContext,
	data: {
		site: {
			siteMetadata: { siteUrl },
		},
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
			<Helmet title={listTitle} />
			<h1>{listTitle}</h1>
			<BlogNav aria-describedby="blog-section-heading">
				<h2 id="blog-section-heading">Seções do blog</h2>
				<ul>
					{blogSections.map(({ path, label }) => (
						<li key={path}>
							<Link activeClassName="current" to={path}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</BlogNav>
			<Paginator {...pathContext} />
			<ListWrapper className="h-feed">
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							frontmatter: { title, authors, link, date, tags },
							timeToRead,
							parent: { birthTime },
							count: { words },
							context: { slug: fileName, folder: relativeDirectory },
						},
					}) => {
						if (!isFolder(relativeDirectory)) {
							throw new Error(
								`There is an unhandled directory. Update 'folderToCategory' to include '${relativeDirectory}'`,
							);
						}

						return (
							<EntrySummary
								entryUrl={`/${relativeDirectory}/${fileName}`}
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
								selfAuthor={{ name, url: siteUrl }}
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
