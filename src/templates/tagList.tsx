import * as React from "react";
import Helmet from "react-helmet";
import { IGeneralMetadataFragment } from "../fragments";
import DefaultLayout from "../components/layout";
import styled from "styled-components";
import { fromTheme } from "../styles/theme";

type Comparator<T> = (a: T, b: T) => number;
function pipeComparators<T>(
	...comparators: [Comparator<T>, ...Array<Comparator<T>>]
): Comparator<T> {
	return (a, b) => {
		for (const comp of comparators) {
			const res = comp(a, b);
			if (res !== 0) {
				return res;
			}
		}

		return 0;
	};
}

interface IEntryNode {
	listTitle: string;
	tags: Array<{
		tag: string;
		url: string;
		count: number;
	}>;
}

interface ITagListProps {
	data: IGeneralMetadataFragment;
	pathContext: IEntryNode;
}

const StyledTagUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: -8pt;

	> li,
	> [role="listitem"] {
		margin: 8pt;
		padding: 2pt 4pt;
		border-radius: 4pt;
		color: ${fromTheme("backgroundColor")};
		background-color: ${fromTheme("themeColor")};
	}
`;

const TagList: React.SFC<ITagListProps> = ({ pathContext: { tags, listTitle } }) => {
	const title = `Tags - ${listTitle}`;

	return (
		<DefaultLayout>
			<Helmet title={title} />
			<h1>{title}</h1>
			<StyledTagUl>
				{tags
					.sort(
						pipeComparators(
							(a, b) => b.count - a.count,
							(a, b) => a.tag.localeCompare(b.tag),
						),
					)
					.map(tag => (
						<a role="listitem" href={tag.url} key={tag.tag}>
							{tag.tag} ({tag.count})
						</a>
					))}
			</StyledTagUl>
		</DefaultLayout>
	);
};

export default TagList;
