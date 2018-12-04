import * as React from "react";
import styled from "styled-components";
import { slugify } from "../../utils/utils";

const StyledTOC = styled.aside`
	@media (min-width: 1000px) {
		margin: 0 1em 1em;
		float: right;
		max-width: 300px;
	}

	ol {
		counter-reset: item;
		list-style-type: none;
	}

	li {
		position: relative;
	}

	li:before {
		left: 0;
		transform: translateX(calc(-100% - 1ch));
		position: absolute;
		content: counters(item, ".") ". ";
		counter-increment: item;
	}
`;

export interface ITreeNode<T> {
	value: T;
	children: Array<ITreeNode<T>>;
}

export interface ITableOfContentsProps {
	title?: string;
	headings?: Array<ITreeNode<string>>;
}
const ContentsTree = ({
	headings,
}: {
	headings?: Array<ITreeNode<string>>;
}) => {
	if (!headings || headings.length === 0) {
		return null;
	}

	return (
		<ol>
			{headings.map(h => (
				<li key={h.value}>
					<p>
						<a href={`#${slugify(h.value)}`}>{h.value}</a>
					</p>
					<ContentsTree headings={h.children} />
				</li>
			))}
		</ol>
	);
};

export const TableOfContents: React.SFC<ITableOfContentsProps> = ({
	title = "Conteúdo",
	headings,
}) => {
	if (!headings || headings.length === 0) {
		return null;
	}

	return (
		<StyledTOC>
			<h2>{title}</h2>
			<ContentsTree headings={headings} />
		</StyledTOC>
	);
};
