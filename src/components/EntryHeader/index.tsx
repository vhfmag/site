import * as React from "react";
import { Link } from "gatsby";
import { formatDate, slugify } from "../../utils/utils";
import { folderToCategory } from "../../utils/consts";
import { Authors_2 } from "../../graphql-types";
import { person, book, creativeWork } from "../../utils/microdata";
import { Folder, isNotNullish } from "../../utils/types";
import s from "./style.module.scss";

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
			<span
				key={name!}
				className={s.enumeration}
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
			</span>
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
		<header className={`${s.header} ${(isFullPage && s.fullPage) || ""}`}>
			<h2 itemProp="headline title" className="post-title">
				<Link itemProp="url mainEntityOfPage" className="p-name u-url u-uid" to={entryUrl}>
					{title}
				</Link>
			</h2>
			{subtitle && <h3 itemProp="alternativeHeadline">{subtitle}</h3>}
			<div className={s.metadata}>
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
			</div>
			{tags && (
				<ul className={s.tagList} aria-label="Tags" itemProp="keywords">
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
				</ul>
			)}
		</header>
	);
};
