import * as React from "react";
import styled from "../../../styles/styled";

export const StyledHighlight = styled.blockquote`
	@media (min-width: 600px) {
		width: 33%;
		min-width: 100px;
		margin-left: 40px;

		&.left {
			float: left;
			clear: left;
		}

		&.right {
			float: right;
			clear: right;
		}
	}
`;

export interface IFloatProps extends React.HTMLProps<HTMLQuoteElement> {
	position?: "right" | "left";
}

export function Float({
	position = "right",
	ref: _,
	children,
	as,
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
