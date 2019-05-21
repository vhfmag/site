import * as React from "react";
import s from "./style.module.scss";
import { IMarkdownEntryTOC } from "../../fragments";

export interface ITableOfContentsProps {
	title?: string;
	tableOfContents: IMarkdownEntryTOC;
}

interface IContentsTreeProps {
	tableOfContents: IMarkdownEntryTOC;
}

const ContentsTree = ({ tableOfContents }: IContentsTreeProps) => (
	<ol>
		{tableOfContents.items!.map(h => (
			<li key={h.url}>
				{h.items && h.items.length > 0 ? (
					<details>
						<summary>
							<p>
								<a href={h.url}>{h.title}</a>
							</p>
						</summary>
						<ContentsTree tableOfContents={h} />
					</details>
				) : (
					<>
						<p>
							<a href={h.url}>{h.title}</a>
						</p>
					</>
				)}
			</li>
		))}
	</ol>
);

export const TableOfContents: React.SFC<ITableOfContentsProps> = ({
	title = "Conteúdo",
	tableOfContents: tableOfContents,
}) => {
	if (!tableOfContents.items || tableOfContents.items.length === 0) {
		return null;
	}

	return (
		<aside className={s.toc}>
			<details>
				<summary>
					<h2>{title}</h2>
				</summary>
				<ContentsTree tableOfContents={tableOfContents} />
			</details>
		</aside>
	);
};
