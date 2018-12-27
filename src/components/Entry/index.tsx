import * as React from "react";
import styled from "../../styles/styled";
import Helmet from "react-helmet";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { TableOfContents, ITreeNode } from "../TableOfContents";
import { fromTheme } from "../../styles/theme";
import { Folder } from "../../utils/types";
import { blogPosting, review, blogRef, personRef } from "../../utils/microdata";

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
				lastNode.children.push(newNode);
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

export const Entry: React.SFC<IEntryProps> = ({
	content,
	headings,
	excerpt,
	children,
	...headerProps
}) => (
	<StyledEntry
		className="h-entry"
		itemProp="blogPost"
		itemScope
		itemRef={personRef}
		itemType={
			headerProps.folderName === "posts" ? blogPosting : [blogPosting, review].join(" ")
		}
	>
		<meta itemScope itemProp="mainEntityOfPage" content={blogRef} />
		<Helmet title={headerProps.title} />
		<EntryHeader {...headerProps} isFullPage={true} />
		{excerpt && <meta itemProp="description" content={excerpt} />}
		<section className="e-content" itemProp={folderNameToBodyProp(headerProps.folderName)}>
			{headings && headings.length > 0 && (
				<TableOfContents headings={headingsToTree(headings)} />
			)}
			{content && <p>{content}</p>}
			{children}
		</section>
	</StyledEntry>
);
