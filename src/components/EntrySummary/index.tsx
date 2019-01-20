import * as React from "react";
import { styled } from "linaria/react";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Folder } from "../../utils/types";
import { personRef, blogPosting, review } from "../../utils/microdata";

type IEntrySummaryProps = IEntryHeaderProps;

const StyledEntryCategory = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
`;

const StyledEntrySummary = styled.article`
	display: grid;
	grid-gap: 8pt;
	grid-template-columns: min-content auto;

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

export const EntrySummary: React.SFC<IEntrySummaryProps> = ({ ...headerProps }) => {
	return (
		<StyledEntrySummary
			itemProp="blogPost"
			itemScope
			itemRef={personRef}
			itemType={
				headerProps.folderName === "posts" ? blogPosting : [blogPosting, review].join(" ")
			}
			className="h-entry"
		>
			<StyledEntryCategory>
				<span className="fa-layers fa-fw fa-lg" role="presentation">
					<FontAwesomeIcon
						icon="circle"
						size="lg"
						role="presentation"
						color="var(--theme-color)"
					/>
					<FontAwesomeIcon
						color="var(--background-color)"
						transform="shrink-4"
						role="presentation"
						icon={iconPerFolder[headerProps.folderName]}
					/>
				</span>
			</StyledEntryCategory>
			<EntryHeader {...headerProps} isFullPage={false} />
		</StyledEntrySummary>
	);
};
