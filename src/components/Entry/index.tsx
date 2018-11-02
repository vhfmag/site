import { last } from "remeda";
import * as React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { themeColor } from "../../utils/consts";
import { renderAst } from "../../utils/customComponents";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";
import { TableOfContents, ITreeNode } from "../TableOfContents";

type IEntryProps = HTMLOrString &
	IEntryHeaderProps & {
		headings: Array<Required<IHeading>> | undefined;
		toc: boolean | undefined;
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

	hr {
		background-color: ${themeColor};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		.anchor path {
			fill: ${themeColor};
		}
	}
`;

interface IHeading {
	value: string;
	depth: number;
}

function headingsToTree(
	hs: Array<Required<IHeading>>,
): Array<ITreeNode<string>> {
	return hs.reduce<Array<ITreeNode<string>>>(
		(nodes, h): Array<ITreeNode<string>> => {
			const newNode: ITreeNode<string> = {
				value: h.value!,
				children: [],
			};

			const headingDepth = h.depth! - 1;

			let depth = 1;
			let lastNodeList = nodes;
			let lastNode = last(nodes);

			while (
				depth < headingDepth &&
				lastNode &&
				lastNode.children &&
				lastNode.children.length > 0
			) {
				depth++;
				lastNodeList = lastNode.children;
				lastNode = last(lastNodeList);
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

export class Entry extends React.Component<IEntryProps> {
	public render() {
		const { content, htmlAst, headings, ...headerProps } = this.props;
		console.log({ headings });

		return (
			<StyledEntry className="h-entry">
				<Helmet title={headerProps.title} />
				<EntryHeader {...headerProps} isFullPage={true} />
				<section className="e-content">
					{headings &&
						headings.length > 0 && (
							<TableOfContents
								headings={headingsToTree(headings)}
							/>
						)}
					{content ? <p>{content}</p> : renderAst(htmlAst)}
				</section>
			</StyledEntry>
		);
	}
}
