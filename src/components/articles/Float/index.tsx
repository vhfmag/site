import * as React from "react";
import s from "./style.module.scss";

export interface IFloatProps extends React.HTMLProps<HTMLQuoteElement> {
	position?: "right" | "left";
}

export function Float({
	position = "right",
	ref: _,
	children,
	as,
	className,
	...blockquoteProps
}: IFloatProps): React.ReactElement<{}> {
	return (
		<blockquote
			{...blockquoteProps}
			className={`${s.float} ${className || ""} ${s[position] || ""}`}
		>
			{children}
		</blockquote>
	);
}
