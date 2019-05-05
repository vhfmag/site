import * as React from "react";
import s from "./style.module.scss";

export interface IFigureProps {
	src: string;
	alt?: string;
	attr?: string;
	title?: string;
}

export const Figure: React.SFC<IFigureProps> = ({ alt, attr, src, title }) => (
	<figure className={s.figure}>
		<img src={require(`../../../assets${src}`)} alt={alt} />
		{(title || attr) && (
			<figcaption>
				{title && <h4>{title}</h4>}
				{attr && <p>{attr}</p>}
			</figcaption>
		)}
	</figure>
);
