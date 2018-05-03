import * as React from "react";
import styled from "styled-components";
import { renderAst } from "../../utils/customComponents";

type IEntryItemProps = HTMLOrString & {
	title: NonNullableNode;
	info?: NonNullableNode;
	subtitle?: NonNullableNode;
	url?: string;
};

const StyledEntryInfo = styled.div``;
const StyledEntryItem = styled.article`
	display: grid;
	grid-gap: 4pt;

	${StyledEntryInfo} {
		font-size: 1rem;
	}

	p,
	h2 {
		margin: 0;
	}

	h2 {
		font-size: 1.5rem;
	}

	& + & {
		margin-top: 32pt;
	}
`;

export const EntryItem: React.SFC<IEntryItemProps> = ({
	info,
	subtitle,
	title,
	url,
	htmlAst,
	content,
}) => {
	return (
		<StyledEntryItem>
			<h2>{url ? <a href={url}>{title}</a> : title}</h2>
			{subtitle && <h3>{subtitle}</h3>}
			{info && <StyledEntryInfo>{info}</StyledEntryInfo>}
			{(htmlAst || content) && (
				<section>{content || renderAst(htmlAst)}</section>
			)}
		</StyledEntryItem>
	);
};
