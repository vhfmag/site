import * as React from "react";
import styled from "../../styles/styled";
import { Link } from "gatsby";
import { formatDate, slugify } from "../../utils/utils";
import { folderToCategory } from "../../utils/consts";
import { Authors_2 } from "../../graphql-types";
import { fromTheme } from "../../styles/theme";

export interface IEntryHeaderProps {
	title: string;
	authors?: Authors_2[];
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

const gappedClassName = "has-gap";

const StyledHeader = styled.header`
	margin-bottom: ${props =>
		props.className && props.className.includes(gappedClassName) ? "32pt" : "0"};

	> h1,
	> h2,
	> h3,
	> h4,
	> h5,
	> h6 {
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
		content: " | ";
	}
`;

function reduceElementsToEnumeration(
	acc: JSX.Element,
	el: JSX.Element,
	i: number,
	arr: JSX.Element[],
) {
	return i !== arr.length - 1 ? (
		<>
			{acc}, {el}
		</>
	) : (
		<>
			{acc} e {el}
		</>
	);
}

export const EntryHeader: React.SFC<IEntryHeaderProps & { isFullPage: boolean }> = ({
	title,
	subtitle,
	fileName,
	folderName,
	authors,
	replyTo,
	replyToText = "Link da recomendação",
	publishDate,
	isFullPage,
	timeToRead,
	wordCount,
	tags,
}) => {
	const Title = isFullPage ? "h1" : "h2";
	const Subtitle = isFullPage ? "h2" : "h3";
	const category = folderToCategory[folderName];

	const entryUrl = `/${folderName}/${fileName}`;

	return (
		<StyledHeader className={isFullPage ? gappedClassName : undefined}>
			<Title className="post-title">
				<Link className="p-name u-url u-uid" to={entryUrl}>
					{title}
				</Link>
			</Title>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			<StyledMetadata>
				<span className="p-category">{category}</span>
				{authors && (
					<span>
						Por{" "}
						{authors
							.map(({ name, url: authorUrl }) =>
								authorUrl ? (
									<a rel="author" className="p-author h-card" href={authorUrl}>
										{name}
									</a>
								) : (
									<span className="p-author h-card">{name}</span>
								),
							)
							.reduce(reduceElementsToEnumeration)}
					</span>
				)}
				{publishDate && (
					<time className="dt-published" dateTime={publishDate.toISOString()}>
						{formatDate(publishDate)}
					</time>
				)}
				<span>
					{wordCount} palavras, <abbr title="aproximadamente">~</abbr>
					{timeToRead} minutos de leitura
				</span>
			</StyledMetadata>
			{replyTo && (
				<StyledMetadata>
					<a className="u-in-reply-to" href={replyTo}>
						{replyToText}
					</a>
				</StyledMetadata>
			)}
			{tags && (
				<StyledTags aria-label="Tags">
					{tags.map(tag => (
						<li key={tag}>
							<a rel="tag" href={`/${folderName}/tags/${slugify(tag.trim())}`}>
								{tag}
							</a>
						</li>
					))}
				</StyledTags>
			)}
		</StyledHeader>
	);
};
