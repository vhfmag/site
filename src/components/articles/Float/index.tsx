import * as React from "react";
import styled from "styled-components";

export const StyledHighlight = styled.blockquote`
	width: 33%;
	min-width: 100px;
	margin-left: 40px;

	&.left {
		float: left;
	}

	&.right {
		float: right;
	}
`;

export interface IFloatProps extends React.HTMLProps<HTMLQuoteElement> {
	position?: "right" | "left";
}

export function Float({
	position = "right",
	ref,
	children,
	...blockquoteProps
}: IFloatProps): React.ReactElement<{}> {
	return (
		<StyledHighlight
			{...blockquoteProps}
			className={`${blockquoteProps.className || ""} ${position || ""}`}
		>
			{children}
		</StyledHighlight>
	);
}
