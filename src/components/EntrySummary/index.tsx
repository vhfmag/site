import * as React from "react";
import styled, { withTheme, ThemeContext } from "../../styles/styled";
import { folderToCategory } from "../../utils/consts";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Folder } from "../../utils/types";
import { fromTheme, ITheme } from "../../styles/theme";

type IEntrySummaryProps = HTMLOrString & IEntryHeaderProps;

const StyledEntryCategoryName = styled.div`
	margin-top: 4pt;
	font-size: 0.8em;
	color: ${fromTheme("themeColor")};
`;

const StyledEntryCategory = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
`;

const StyledEntrySummary = styled.article`
	display: grid;
	grid-gap: 8pt;
	grid-template-columns: 10ch auto;

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
	const theme = React.useContext(ThemeContext);

	return (
		<StyledEntrySummary className="h-entry">
			<StyledEntryCategory>
				<span className="fa-layers fa-fw fa-lg" role="presentation">
					<FontAwesomeIcon
						icon="circle"
						size="lg"
						role="presentation"
						color={theme.themeColor}
					/>
					<FontAwesomeIcon
						color={theme.backgroundColor}
						transform="shrink-4"
						role="presentation"
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
