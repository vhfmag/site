import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { formatDate } from "../../utils/utils";
import { folderToCategory } from "../../utils/consts";

export interface IEntryHeaderProps {
	title: string;
	authors: IAuthor[];

	subtitle?: NonNullableNode;
	publishDate?: Date;
	replyTo?: string;
	replyToText?: string;

	fileName: string;
	folderName: string;

	wordCount: number;
	timeToRead: number;
}

const gappedClassName = "has-gap";

const StyledHeader = styled.header`
	margin-bottom: ${props =>
		props.className && props.className.includes(gappedClassName)
			? "32pt"
			: "0"};
`;

const StyledMetadata = styled.div`
	font-size: 0.9em;
	opacity: 0.85;
	line-height: 1.4;
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

export const EntryHeader: React.SFC<
	IEntryHeaderProps & { isFullPage: boolean }
> = ({
	title,
	subtitle,
	fileName,
	folderName,
	authors,
	replyTo,
	replyToText = "Link para original",
	publishDate,
	isFullPage,
	timeToRead,
	wordCount,
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
					<>
						{" "}
						| Por{" "}
						{authors
							.map(
								({ name, url: authorUrl }) =>
									authorUrl ? (
										<a
											rel="author"
											className="p-author h-card"
											href={authorUrl}
										>
											{name}
										</a>
									) : (
										<span className="p-author h-card">
											{name}
										</span>
									),
							)
							.reduce(reduceElementsToEnumeration)}
					</>
				)}
				{publishDate && (
					<>
						{" "}
						|{" "}
						<time
							className="dt-published"
							dateTime={publishDate.toISOString()}
						>
							{formatDate(publishDate)}
						</time>
					</>
				)}
			</StyledMetadata>
			<StyledMetadata>
				{wordCount} palavras — <abbr title="aproximadamente">~</abbr>
				{timeToRead} minutos de leitura
			</StyledMetadata>
			{replyTo && (
				<StyledMetadata>
					<a className="u-in-reply-to" href={replyTo}>
						{replyToText}
					</a>
				</StyledMetadata>
			)}
		</StyledHeader>
	);
};
