import * as React from "react";
import { ObjectOmit } from "typelevel-ts";
import styled from "styled-components";
import Link from "gatsby-link";

export type IPaginatorProps = ObjectOmit<GatsbyPaginatorProps<any>, "group">;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: -4pt;

	& > * {
		margin: 4pt;
	}

	a.disabled {
		pointer-events: none;
		filter: grayscale(1);
	}
`;

const buildPath = ({
	pathPrefix,
	index,
}: {
	pathPrefix: string;
	index: number;
}) => (pathPrefix ? `/${pathPrefix}` : "") + (index === 1 ? "/" : `/${index}`);

export const Paginator: React.SFC<IPaginatorProps> = ({
	pageCount,
	pathPrefix,
	first,
	last,
	index,
}) => (
	<StyledNav>
		<Link
			className={(first && "disabled") || ""}
			to={buildPath({ pathPrefix, index: index - 1 })}
			rel="prev"
		>
			&lt;
		</Link>
		{Array.from(new Array(pageCount))
			.map((_, i) => i + 1)
			.map(i => (
				<Link
					activeClassName="disabled"
					key={i}
					exact
					to={buildPath({ pathPrefix, index: i })}
				>
					{i}
				</Link>
			))}
		<Link
			className={(last && "disabled") || ""}
			to={buildPath({ pathPrefix, index: index + 1 })}
			rel="next"
		>
			&gt;
		</Link>
	</StyledNav>
);
