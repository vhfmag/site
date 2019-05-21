import * as React from "react";
import Helmet from "react-helmet";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { TableOfContents } from "../TableOfContents";
import { Folder } from "../../utils/types";
import { blogPosting, review, personRef } from "../../utils/microdata";
import { fetchWebMentions, WMFeed } from "../../utils/webmention";
import { WebMentions } from "../WebMentions";
import s from "./style.module.scss";
import { IMarkdownEntryTOC } from "../../fragments";

type IEntryProps = IEntryHeaderProps & {
	tableOfContents: IMarkdownEntryTOC;
	toc: boolean | undefined;
	content?: React.ReactNode;
	excerpt: string;
};

function folderNameToBodyProp(folderName: Folder) {
	if (folderName === "posts") {
		return "articleBody";
	} else {
		return "reviewBody";
	}
}

export const Entry: React.SFC<IEntryProps> = ({
	content,
	tableOfContents,
	excerpt,
	children,
	...headerProps
}) => {
	const url = `https://victormagalhaes.codes${headerProps.entryUrl}`;
	const [mentions, setMentions] = React.useState<WMFeed | null>(null);

	React.useEffect(() => {
		fetchWebMentions(url).then(setMentions);
	}, []);

	return (
		<article
			className={`${s.entry} h-entry`}
			itemProp="blogPost"
			itemScope
			itemRef={personRef}
			itemType={
				headerProps.folderName === "posts" ? blogPosting : [blogPosting, review].join(" ")
			}
		>
			<Helmet title={headerProps.title}>
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:creator" content="@vhfmag" />
				<meta property="og:title" content={headerProps.title} />
				{typeof headerProps.subtitle === "string" && (
					<meta property="og:description" content={headerProps.subtitle} />
				)}
				<meta property="og:type" content="article" />
				<meta property="og:url" content={url} />
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:site_name" content="Victor Magalhães" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURIComponent(
						headerProps.title,
					)}.png?theme=dark&fontSize=125px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnow-white.svg`}
				/>
				<meta property="og:image:alt" content={headerProps.title} />
				<meta property="og:image:width" content="2048" />
				<meta property="og:image:height" content="1170" />
			</Helmet>
			<EntryHeader {...headerProps} isFullPage={true} />
			{excerpt && <meta itemProp="description" content={excerpt} />}
			<section className="e-content" itemProp={folderNameToBodyProp(headerProps.folderName)}>
				{tableOfContents.items && tableOfContents.items.length > 0 && (
					<TableOfContents tableOfContents={tableOfContents} />
				)}
				{content && <p>{content}</p>}
				{children}
			</section>
			{mentions && (
				<footer>
					<WebMentions mentions={mentions.children} />
				</footer>
			)}
		</article>
	);
};
