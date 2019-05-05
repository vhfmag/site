import * as React from "react";
import Slugger from "github-slugger";
import s from "./style.module.scss";

export interface ITreeNode<T> {
	value: T;
	children?: Array<ITreeNode<T>>;
}

export interface ITableOfContentsProps {
	title?: string;
	headings: Array<ITreeNode<string>> | undefined;
}

interface IContentsTreeProps {
	headings?: Array<ITreeNode<string>>;
	slugger: Slugger;
}

const ContentsTree = ({ headings, slugger }: IContentsTreeProps) => {
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
									<a href={`#${slugger.slug(h.value)}`}>{h.value}</a>
								</p>
							</summary>
							<ContentsTree slugger={slugger} headings={h.children} />
						</details>
					) : (
						<>
							<p>
								<a href={`#${slugger.slug(h.value)}`}>{h.value}</a>
							</p>
							<ContentsTree slugger={slugger} headings={h.children} />
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

	const slugger = new Slugger();

	return (
		<aside className={s.toc}>
			<details>
				<summary>
					<h2>{title}</h2>
				</summary>
				<ContentsTree slugger={slugger} headings={headings} />
			</details>
		</aside>
	);
};
