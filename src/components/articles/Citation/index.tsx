import * as React from "react";
import { Float, IFloatProps } from "../Float";
import s from "./style.module.scss";

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
	as,
	ref: _,
	...blockquoteProps
}: ICitationProps) {
	return (
		<Float {...blockquoteProps}>
			{quote && <cite>{quote}</cite>}
			{(author || from) && (
				<div className={s.description}>
					{author && <span className={s.author}>{author}</span>}
					{from && <span className={s.from}>{from}</span>}
				</div>
			)}
			{children}
		</Float>
	);
}
