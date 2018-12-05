import * as React from "react";
import styled from "../../../styles/styled";

const StyledFigure = styled.figure`
	padding: 16pt;
	display: grid;
	grid-gap: 8pt;

	img {
		margin: 0;
	}

	figcaption {
		display: contents;
	}

	p,
	h1,
	h2,
	h3,
	h4 {
		margin: 0;
	}
`;

export interface IFigureProps {
	src: string;
	alt?: string;
	attr?: string;
	title?: string;
}

export const Figure: React.SFC<IFigureProps> = ({ alt, attr, src, title }) => (
	<StyledFigure>
		<img src={require(`../../../assets${src}`)} alt={alt} />
		{(title || attr) && (
			<figcaption>
				{title && <h4>{title}</h4>}
				{attr && <p>{attr}</p>}
			</figcaption>
		)}
	</StyledFigure>
);
