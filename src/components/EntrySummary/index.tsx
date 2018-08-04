import * as React from "react";
import styled from "styled-components";
import {
	themeColor,
	backgroundColor,
	folderToCategory,
} from "../../utils/consts";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";

type IEntrySummaryProps = HTMLOrString & IEntryHeaderProps;

const StyledEntryCategoryName = styled.div`
	font-size: 0.8em;
	color: ${themeColor};
`;

const StyledEntryCategory = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;

	& > .fa-stack {
		font-size: 1rem;
		.fab,
		.fas {
			color: ${themeColor};
			&.fa-inverse {
				color: ${backgroundColor};
			}
		}
	}
`;

const StyledEntrySummary = styled.article`
	display: grid;
	grid-gap: 8pt;
	grid-template-columns: 8ch auto;

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
		margin-top: 16pt;
	}
`;

const iconPerFolder = {
	posts: "fa-pen-nib",
	books: "fa-book",
	bookmarks: "fa-bookmark",
};

export const EntrySummary: React.SFC<IEntrySummaryProps> = ({
	htmlAst,
	content,
	...headerProps
}) => {
	return (
		<StyledEntrySummary className="h-entry">
			<StyledEntryCategory>
				<span className="fa-stack fa-2x" role="img">
					<i className="fas fa-circle fa-stack-2x" />
					<i
						className={`fas ${
							iconPerFolder[
								headerProps.folderName as keyof typeof iconPerFolder
							]
						} fa-stack-1x fa-inverse`}
					/>
				</span>
				<StyledEntryCategoryName>
					{folderToCategory[headerProps.folderName]}
				</StyledEntryCategoryName>
			</StyledEntryCategory>
			<EntryHeader {...headerProps} isFullPage={false} />
		</StyledEntrySummary>
	);
};
