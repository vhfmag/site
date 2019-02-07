import * as React from "react";
import styled from "../../styles/styled";
import Helmet from "react-helmet";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { TableOfContents, ITreeNode } from "../TableOfContents";
import { fromTheme } from "../../styles/theme";
import { Folder } from "../../utils/types";
import { blogPosting, review, personRef } from "../../utils/microdata";
import { fetchWebMentions, WMFeed } from "../../utils/webmention";
import { WebMentions } from "../WebMentions";

type IEntryProps = IEntryHeaderProps & {
	headings: Array<Required<IHeading>> | undefined;
	toc: boolean | undefined;
	content?: React.ReactNode;
	excerpt: string;
};

const StyledEntry = styled.article`
	.footnotes {
		clear: both;

		li {
			p {
				margin: 0;
				display: inline;
			}
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		.anchor path {
			fill: ${fromTheme("themeColor")};
		}
	}
`;

interface IHeading {
	value: string;
	depth: number;
}

function headingsToTree(hs: Array<Required<IHeading>>): Array<ITreeNode<string>> {
	return hs.reduce<Array<ITreeNode<string>>>(
		(nodes, h): Array<ITreeNode<string>> => {
			const newNode: ITreeNode<string> = {
				value: h.value!,
				children: [],
			};

			const headingDepth = h.depth! - 1;

			let depth = 1;
			let lastNodeList = nodes;
			let lastNode = nodes[nodes.length - 1];

			while (
				depth < headingDepth &&
				lastNode &&
				lastNode.children &&
				lastNode.children.length > 0
			) {
				depth++;
				lastNodeList = lastNode.children;
				lastNode = lastNodeList[lastNodeList.length - 1];
			}

			if (lastNode && headingDepth > depth) {
				if (lastNode.children) {
					lastNode.children.push(newNode);
				} else {
					lastNode.children = [newNode];
				}
			} else {
				lastNodeList.push(newNode);
			}

			return nodes;
		},
		[] as Array<ITreeNode<string>>,
	);
}

function folderNameToBodyProp(folderName: Folder) {
	if (folderName === "posts") {
		return "articleBody";
	} else {
		return "reviewBody";
	}
}

const imageWidth = 800;
const imageHeight = 400;

export const Entry: React.SFC<IEntryProps> = ({
	content,
	headings,
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
		<StyledEntry
			className="h-entry"
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
				<meta property="og:image:width" content={imageWidth.toString()} />
				<meta property="og:image:height" content={imageHeight.toString()} />
			</Helmet>
			<EntryHeader {...headerProps} isFullPage={true} />
			{excerpt && <meta itemProp="description" content={excerpt} />}
			<section className="e-content" itemProp={folderNameToBodyProp(headerProps.folderName)}>
				{headings && headings.length > 0 && (
					<TableOfContents headings={headingsToTree(headings)} />
				)}
				{content && <p>{content}</p>}
				{children}
			</section>
			{mentions && (
				<footer>
					<WebMentions mentions={mentions.children} />
				</footer>
			)}
		</StyledEntry>
	);
};
