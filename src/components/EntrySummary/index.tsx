import * as React from "react";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Folder } from "../../utils/types";
import { personRef, blogPosting, review } from "../../utils/microdata";
import { folderToCategory } from "../../utils/consts";
import s from "./style.module.scss";

type IEntrySummaryProps = IEntryHeaderProps;

const iconPerFolder: Record<Folder, IconProp> = {
	posts: "pen-nib",
	books: "book",
	bookmarks: "bookmark",
	apresentacoes: "chalkboard",
};

export const EntrySummary: React.SFC<IEntrySummaryProps> = ({ ...headerProps }) => {
	const category = folderToCategory[headerProps.folderName];

	return (
		<article
			className={`${s.entrySummary} h-entry`}
			itemProp="blogPost"
			itemScope
			itemRef={personRef}
			itemType={
				headerProps.folderName === "posts" ? blogPosting : [blogPosting, review].join(" ")
			}
		>
			<div className={s.category}>
				<span
					className="fa-layers fa-fw fa-lg"
					role="presentation"
					title={category}
					aria-label={category}
				>
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
			</div>
			<EntryHeader {...headerProps} isFullPage={false} />
		</article>
	);
};
