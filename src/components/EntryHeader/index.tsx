import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { DateTime } from "luxon";

export interface IEntryHeaderProps {
	title: string;
	subtitle?: NonNullableNode;
	url?: string;
	authors: IAuthor[];
	publishDate?: Date;
	replyTo?: string;
	replyToText?: string;
}

const gappedClassName = "has-gap";

const StyledHeader = styled.header`
	margin-bottom: ${props =>
		props.className && props.className.includes(gappedClassName)
			? "32pt"
			: "0"};
`;

export const EntryHeader: React.SFC<
	IEntryHeaderProps & { isFullPage: boolean }
> = ({
	url,
	title,
	subtitle,
	authors,
	replyTo,
	replyToText = "Link para original",
	publishDate,
	isFullPage,
}) => {
	const Title = isFullPage ? "h1" : "h2";
	const Subtitle = isFullPage ? "h2" : "h3";

	return (
		<StyledHeader className={isFullPage ? gappedClassName : undefined}>
			<Title className="post-title">
				{url ? (
					<Link className="p-name u-url u-uid" to={url}>
						{title}
					</Link>
				) : (
					title
				)}
			</Title>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			<div>
				Por{" "}
				{authors
					.map(
						({ name, url }) =>
							url ? (
								<a
									rel="author"
									className="p-author h-card"
									href={url}
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
			</div>
			{publishDate && (
				<div>
					<time
						className="dt-published"
						dateTime={publishDate.toISOString()}
					>
						{DateTime.fromJSDate(publishDate)
							.setLocale("pt-br")
							.toLocaleString(DateTime.DATE_FULL)}
					</time>
				</div>
			)}
			{replyTo && (
				<div>
					<a className="u-in-reply-to" href={replyTo}>
						{replyToText}
					</a>
				</div>
			)}
		</StyledHeader>
	);
};
