import * as React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
	padding: 16pt;
`;

export interface IFigureProps {
	src: string;
	alt?: string;
	attr?: string;
	title?: string;
}

export const Figure: React.SFC<IFigureProps> = ({ alt, attr, src, title }) => (
	<StyledFigure>
		<img src={require(`../../assets${src}`)} alt={alt} />
		{(title || attr) && (
			<figcaption>
				{title && <h4>{title}</h4>}
				{attr && <p>{attr}</p>}
			</figcaption>
		)}
	</StyledFigure>
);
