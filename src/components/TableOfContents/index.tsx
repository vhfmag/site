import * as React from "react";
import styled from "../../styles/styled";
import { slugify } from "../../utils/utils";
import { backgroundColor } from "../../utils/consts";

const StyledTOC = styled.aside`
	@media (min-width: 1000px) {
		margin: 0 1em 1em;
		float: right;
		width: 400px;
		max-width: 30vw;
	}

	@media (min-width: 1500px) {
		position: sticky;
		top: 1em;
	}

	background-color: ${backgroundColor};
	margin-bottom: 1.6875em;

	ol {
		counter-reset: item;
		list-style-type: none;

		ol {
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	details {
		summary {
			margin: 0;
		}
	}

	li {
		position: relative;
		margin-bottom: 0;

		p {
			margin: 0;
		}
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
	children?: Array<ITreeNode<T>>;
}

export interface ITableOfContentsProps {
	title?: string;
	headings: Array<ITreeNode<string>> | undefined;
}
const ContentsTree = ({ headings }: { headings?: Array<ITreeNode<string>> }) => {
	if (!headings || headings.length === 0) {
		return null;
	}

	return (
		<ol>
			{headings.map(h => (
				<li key={h.value}>
					{h.children && h.children.length > 0 ? (
						<details>
							<summary>
								<p>
									<a href={`#${slugify(h.value)}`}>{h.value}</a>
								</p>
							</summary>
							<ContentsTree headings={h.children} />
						</details>
					) : (
						<>
							<p>
								<a href={`#${slugify(h.value)}`}>{h.value}</a>
							</p>
							<ContentsTree headings={h.children} />
						</>
					)}
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
			<details>
				<summary>
					<h2>{title}</h2>
				</summary>
				<ContentsTree headings={headings} />
			</details>
		</StyledTOC>
	);
};
