import * as React from "react";
import styled from "../../styles/styled";
import { Link } from "gatsby";
import { formatDate, slugify } from "../../utils/utils";
import { folderToCategory } from "../../utils/consts";
import { Authors_2 } from "../../graphql-types";
import { fromTheme } from "../../styles/theme";
import { person, book, creativeWork } from "../../utils/microdata";
import { Folder, isNotNullish } from "../../utils/types";

export interface IEntryHeaderProps {
	title: string;
	authors?: Authors_2[];
	selfAuthor: Authors_2;
	tags?: string[];

	subtitle?: NonNullableNode;
	publishDate?: Date;
	replyTo?: string;
	replyToText?: string;

	fileName: string;
	folderName: keyof typeof folderToCategory;

	wordCount: number;
	timeToRead: number;
}

const StyledHeader = styled.header<{ isFullPage?: boolean }>`
	margin-bottom: ${props => (props.isFullPage ? "32pt" : 0)};

	> h1,
	> h2,
	> h3,
	> h4,
	> h5,
	> h6 {
		margin-bottom: 16pt;
		&:first-child {
			margin-top: 0;
		}
	}
`;

const StyledTags = styled.ul`
	all: unset;
	font-size: 0.75em;
	opacity: 0.85;
	line-height: 1.4;
	display: inline-flex;
	flex-wrap: wrap;
	margin: -4pt;

	li {
		all: unset;
		margin: 4pt;
		padding: 2pt 4pt;
		cursor: pointer;
		border-radius: 4pt;
		background-color: ${fromTheme("themeColor")};
		color: ${fromTheme("backgroundColor")};

		a {
			color: inherit;
		}
	}
`;

const StyledMetadata = styled.div`
	font-size: 0.9em;
	opacity: 0.85;
	line-height: 1.4;

	> * + *::before {
		color: ${fromTheme("textColor")};
		content: " | ";
	}

	> * {
		&::first-letter {
			text-transform: uppercase;
		}
	}
`;

const StyledEnumeration = styled.span`
	& + &::before {
		content: ", ";
	}

	& + &:last-child::before {
		content: " e ";
	}
`;

function folderNameToReviewedItemType(folderName: Folder) {
	switch (folderName) {
		case "posts":
			throw new Error("Posts do not review stuff");
		case "books":
			return book;
		case "bookmarks":
			return creativeWork;
	}
}

const renderAuthors = (authors: Authors_2[], isPublisher: boolean = false) => (
	<span>
		por{" "}
		{authors.filter(isNotNullish).map(({ name, url: authorUrl }) => (
			<StyledEnumeration
				itemScope
				itemType={isPublisher ? "" : person}
				itemProp={isPublisher ? "" : "author"}
			>
				{authorUrl ? (
					<a
						itemProp={isPublisher ? "" : "url identifier"}
						// rel="author"
						className="p-author h-card"
						href={authorUrl}
					>
						<span itemProp={isPublisher ? "" : "name"}>{name}</span>
					</a>
				) : (
					<span itemProp={isPublisher ? "" : "name"} className="p-author h-card">
						{name}
					</span>
				)}
			</StyledEnumeration>
		))}
	</span>
);

export const EntryHeader: React.SFC<IEntryHeaderProps & { isFullPage: boolean }> = ({
	title,
	subtitle,
	fileName,
	folderName,
	authors,
	replyTo,
	replyToText = "Link da publicação",
	publishDate,
	isFullPage,
	timeToRead,
	wordCount,
	selfAuthor,
	tags,
}) => {
	const category = folderToCategory[folderName];

	const entryUrl = `/${folderName}/${fileName}`;

	return (
		<StyledHeader isFullPage={isFullPage}>
			<meta itemScope itemProp="mainEntityOfPage" content={entryUrl} />
			<h2 itemProp="headline" className="post-title">
				<Link itemProp="url" className="p-name u-url u-uid" to={entryUrl}>
					{title}
				</Link>
			</h2>
			{subtitle && <h3 itemProp="alternativeHeadline">{subtitle}</h3>}
			<StyledMetadata>
				<span>
					<span className="p-category">{category}</span>{" "}
					{renderAuthors([selfAuthor], true)}
				</span>
				{publishDate && (
					<time
						itemProp="datePublished dateModified"
						className="dt-published"
						dateTime={publishDate.toISOString()}
					>
						{formatDate(publishDate)}
					</time>
				)}
				<span>
					<span itemProp="wordCount">{wordCount || 0}</span> palavras,{" "}
					<abbr title="aproximadamente">~</abbr>
					<span itemProp="timeRequired">{timeToRead} minutos</span> de leitura
				</span>
				{replyTo && (
					<span
						itemProp="itemReviewed"
						itemScope
						itemType={folderNameToReviewedItemType(folderName)}
					>
						<meta itemProp="headline" content={title} />
						<a itemProp="url" className="u-in-reply-to" href={replyTo}>
							{replyToText}
						</a>{" "}
						{authors && renderAuthors(authors)}
					</span>
				)}
			</StyledMetadata>
			{tags && (
				<nav>
					<StyledTags aria-label="Tags" itemProp="keywords">
						{tags.map(tag => (
							<li key={tag}>
								<a rel="tag" href={`/${folderName}/tags/${slugify(tag.trim())}`}>
									{tag}
								</a>
							</li>
						))}
					</StyledTags>
				</nav>
			)}
		</StyledHeader>
	);
};
