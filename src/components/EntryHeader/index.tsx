import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { formatDate } from "../../utils/utils";

export interface IEntryHeaderProps {
	title: string;
	category: string;
	authors: IAuthor[];

	subtitle?: NonNullableNode;
	url?: string;
	publishDate?: Date;
	replyTo?: string;
	replyToText?: string;

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
`;

export const EntryHeader: React.SFC<
	IEntryHeaderProps & { isFullPage: boolean }
> = ({
	url: entryUrl,
	title,
	subtitle,
	category,
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

	return (
		<StyledHeader className={isFullPage ? gappedClassName : undefined}>
			<Title className="post-title">
				{entryUrl ? (
					<Link className="p-name u-url u-uid" to={entryUrl}>
						{title}
					</Link>
				) : (
					title
				)}
			</Title>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			<StyledMetadata>
				<span className="p-category">{category}</span> |{" "}
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
								<span className="p-author h-card">{name}</span>
							),
					)
					.reduce(
						(acc, el, i, arr) =>
							i !== arr.length - 1 ? (
								<>
									{acc}, {el}
								</>
							) : (
								<>
									{acc} e {el}
								</>
							),
					)}
			</StyledMetadata>
			{publishDate && (
				<StyledMetadata>
					<time
						className="dt-published"
						dateTime={publishDate.toISOString()}
					>
						{formatDate(publishDate)}
					</time>
				</StyledMetadata>
			)}
			<StyledMetadata>
				{wordCount} palavras - aproximadamente {timeToRead} minutos de
				leitura
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
