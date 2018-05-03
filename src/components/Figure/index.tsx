import * as React from "react";

export interface IFigureProps {
	src: string;
	alt?: string;
	attr?: string;
	title?: string;
}

export const Figure: React.SFC<IFigureProps> = ({ alt, attr, src, title }) => (
	<figure>
		<img src={src} alt={alt} />
		{(title || attr) && (
			<figcaption>
				{title && <h4>{title}</h4>}
				{attr && <p>{attr}</p>}
			</figcaption>
		)}
	</figure>
);
