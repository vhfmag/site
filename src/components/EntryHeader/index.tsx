import * as React from "react";
import styled from "styled-components";
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

	entryUrl: string;
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
	align-items: flex-start;

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
			box-shadow: none;
			text-decoration: none;
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

export function folderNameToReviewedItemType(folderName: Folder) {
	switch (folderName) {
		case "posts":
			throw new Error("Posts do not review stuff");
		case "books":
			return book;
		case "bookmarks":
			return creativeWork;
	}
}

export const renderAuthors = (authors: Authors_2[], isPublisher: boolean = false) => (
	<span>
		por{" "}
		{authors.filter(isNotNullish).map(({ name, url: authorUrl }) => (
			<StyledEnumeration
				key={name!}
				itemScope
				itemType={isPublisher ? "" : person}
				itemProp={isPublisher ? "" : "author"}
			>
				{authorUrl ? (
					<a
						itemProp={isPublisher ? "" : "url identifier"}
						className="p-author h-card u-url"
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
	entryUrl,
	folderName,
	publishDate,
	isFullPage,
	timeToRead,
	wordCount,
	selfAuthor,
	tags,
}) => {
	const category = folderToCategory[folderName];

	return (
		<StyledHeader isFullPage={isFullPage}>
			<h2 itemProp="headline title" className="post-title">
				<Link itemProp="url mainEntityOfPage" className="p-name u-url u-uid" to={entryUrl}>
					{title}
				</Link>
			</h2>
			{subtitle && <h3 itemProp="alternativeHeadline">{subtitle}</h3>}
			<StyledMetadata>
				<span>
					<span className="p-category">{category}</span>{" "}
					{isFullPage && renderAuthors([selfAuthor], true)}
				</span>
				{publishDate && (
					<time
						itemProp="datePublished dateModified pubdate"
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
			</StyledMetadata>
			{tags && (
				<StyledTags aria-label="Tags" itemProp="keywords">
					{tags.map(tag => {
						const pathPrefix = folderName === "posts" ? "" : `/${folderName}`;
						return (
							<li key={tag}>
								<a rel="tag" href={`${pathPrefix}/tags/${slugify(tag.trim())}`}>
									{tag}
								</a>
							</li>
						);
					})}
				</StyledTags>
			)}
		</StyledHeader>
	);
};
