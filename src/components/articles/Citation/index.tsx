import * as React from "react";
import styled from "styled-components";
import { Float, IFloatProps } from "../Float";

const CitationFloat = styled(Float)`
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

export interface ICitationProps extends IFloatProps {
	quote?: string;
	author?: string;
	from?: string;
	origin?: string;
}

export function Citation({
	author,
	from,
	quote,
	children,
	ref,
	...blockquoteProps
}: ICitationProps) {
	return (
		<CitationFloat {...blockquoteProps}>
			{quote && <cite>{quote}</cite>}
			{(author || from) && (
				<div className="description">
					{author && <span className="author">{author}</span>}
					{from && <span className="from">{from}</span>}
				</div>
			)}
			{children}
		</CitationFloat>
	);
}
