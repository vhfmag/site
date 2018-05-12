import * as React from "react";
import styled from "styled-components";
import { renderAst } from "../../utils/customComponents";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";

type IEntrySummaryProps = HTMLOrString & IEntryHeaderProps;

const StyledEntryInfo = styled.div``;
const StyledEntrySummary = styled.article`
	display: grid;
	grid-gap: 8pt;

	${StyledEntryInfo} {
		font-size: 1rem;
	}

	p,
	h2,
	h3 {
		margin: 0;
	}

	h2 {
		font-size: 1.5rem;
	}

	h3 {
		font-size: 1.15rem;
	}

	& + & {
		margin-top: 32pt;
	}
`;

export const EntrySummary: React.SFC<IEntrySummaryProps> = ({
	htmlAst,
	content,
	...headerProps
}) => {
	return (
		<StyledEntrySummary className="h-entry">
			<EntryHeader {...headerProps} isFullPage={false} />
			{(htmlAst || content) && (
				<section className="p-summary">
					{content ? <p>{content}</p> : renderAst(htmlAst)}
				</section>
			)}
		</StyledEntrySummary>
	);
};
