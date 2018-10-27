import * as React from "react";
import styled from "styled-components";
import {
	themeColor,
	backgroundColor,
	folderToCategory,
} from "../../utils/consts";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Folder } from "../../utils/types";

type IEntrySummaryProps = HTMLOrString & IEntryHeaderProps;

const StyledEntryCategoryName = styled.div`
	margin-top: 4pt;
	font-size: 0.8em;
	color: ${themeColor};
`;

const StyledEntryCategory = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
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

const iconPerFolder: Record<Folder, IconProp> = {
	posts: "pen-nib",
	books: "book",
	bookmarks: "bookmark",
};

export const EntrySummary: React.SFC<IEntrySummaryProps> = ({
	htmlAst,
	content,
	...headerProps
}) => {
	return (
		<StyledEntrySummary className="h-entry">
			<StyledEntryCategory>
				<span
					className="fa-layers fa-fw fa-lg"
					role="img"
					aria-label=""
				>
					<FontAwesomeIcon
						icon="circle"
						size="lg"
						color={themeColor}
					/>
					<FontAwesomeIcon
						color={backgroundColor}
						transform="shrink-4"
						icon={iconPerFolder[headerProps.folderName]}
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
