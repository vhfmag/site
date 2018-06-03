import * as React from "react";
import { EntrySummary } from "../components/EntrySummary";
import Helmet from "react-helmet";
import { Paginator } from "../components/Paginator";
import { extractFileNameFromPath } from "../utils/utils";

interface IEntryNode {
	node: {
		fileAbsolutePath: string;
		excerpt: string;
		frontmatter: {
			title: string;
			authors?: IAuthor[];
			link: string;
			date: string;
		};
		timeToRead: number;
		count: {
			words: number;
			sentences: number;
			paragraphs: number;
		};
	};
}

interface IBookmarkListProps {
	data: {
		site: { siteMetadata: { siteUrl: string } };
		personalJson: { name: string };
	};
	pathContext: GatsbyPaginatorProps<IEntryNode>;
}

export default class BookmarkList extends React.Component<IBookmarkListProps> {
	public render() {
		const { group: posts, ...paginationProps } = this.props.pathContext;
		const {
			pageCount,
			index,
			additionalContext: { listTitle, singlePath, category },
		} = paginationProps;
		const {
			site: {
				siteMetadata: { siteUrl },
			},
			personalJson: { name },
		} = this.props.data;

		const meAuthor = { name, url: siteUrl };

		if (!category) {
			throw new Error("Context is missing category");
		}
		if (!listTitle) {
			throw new Error("Context is missing listTitle");
		}
		if (!singlePath) {
			throw new Error("Context is missing singlePath");
		}

		return (
			<>
				<Helmet
					title={`${listTitle} ${index}/${pageCount}`}
					bodyAttributes={{ class: "h-feed" }}
				/>
				{posts.map(
					({
						node: {
							fileAbsolutePath,
							excerpt,
							frontmatter: { title, authors, link, date },
							timeToRead,
							count: { words },
						},
					}) => (
						<EntrySummary
							key={fileAbsolutePath}
							replyTo={link}
							authors={authors || [meAuthor]}
							publishDate={new Date(date)}
							category={category}
							title={title}
							content={excerpt}
							url={`/${singlePath}/${extractFileNameFromPath(
								fileAbsolutePath,
							)}`}
							wordCount={words}
							timeToRead={timeToRead}
						/>
					),
				)}
				<Paginator {...paginationProps} />
			</>
		);
	}
}

export const pageQuery = graphql`
	query EntryListQuery {
		site {
			siteMetadata {
				siteUrl
			}
		}
		personalJson {
			name
		}
	}
`;
