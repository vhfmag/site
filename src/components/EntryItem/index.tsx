import * as React from "react";
import styled from "styled-components";

interface IEntryItemProps {
	title: NonNullableNode;
	info?: NonNullableNode;
	subtitle?: NonNullableNode;
	url?: string;
}

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
}) => {
	return (
		<StyledEntryItem>
			<h2>{url ? <a href={url}>{title}</a> : title}</h2>
			{info && <StyledEntryInfo>{info}</StyledEntryInfo>}
			{subtitle && <p>{subtitle}</p>}
		</StyledEntryItem>
	);
};
