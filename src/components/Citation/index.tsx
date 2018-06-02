import * as React from "react";
import styled from "styled-components";

const StyledCitation = styled.blockquote`
	width: 33%;
	min-width: 100px;
	margin-left: 40px;

	float: right;

	&.left {
		float: left !important;
	}

	&.right {
		float: right !important;
	}

	.description {
		.author {
		}

		.from {
			font-style: italic;
		}

		.author + .from {
			&:before {
				content: ", ";
			}
		}
	}

	cite {
		&:before {
			content: open-quote;
		}

		&:after {
			content: close-quote;
		}
	}
`;

export interface ICitationProps {
	quote?: string;
	author?: string;
	from?: string;
	origin?: string;
	position?: "right" | "left";
}

export const Citation: React.SFC<
	ICitationProps & React.HTMLProps<HTMLQuoteElement>
> = ({ author, from, quote, children, position, ref, ...blockquoteProps }) => (
	<StyledCitation
		{...blockquoteProps}
		className={`${blockquoteProps.className || ""} ${position || ""}`}
	>
		{quote && <cite>{quote}</cite>}
		{(author || from) && (
			<div className="description">
				<span className="author">{author}</span>
				<span className="from">{from}</span>
			</div>
		)}
		{children}
	</StyledCitation>
);
