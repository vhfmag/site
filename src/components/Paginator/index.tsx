import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export type IPaginatorProps = ObjectOmit<GatsbyPaginatorProps<any>, "group"> & {
	className?: string;
};

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: start;
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
	className,
	additionalContext: { listTitle },
}) => (
	<StyledNav className={className}>
		{" "}
		<Link
			className={(first && "disabled") || ""}
			tabIndex={first ? -1 : undefined}
			to={!first ? buildPath({ pathPrefix, index: 1 }) : "#"}
			rel={!first ? "first" : undefined}
			title={`Primeira página anterior de ${listTitle}`}
		>
			{" "}
			&lt;&lt;{" "}
		</Link>{" "}
		<Link
			className={(first && "disabled") || ""}
			tabIndex={first ? -1 : undefined}
			to={!first ? buildPath({ pathPrefix, index: index - 1 }) : "#"}
			rel={!first ? "prev" : undefined}
			title={`Página anterior de ${listTitle}`}
		>
			{" "}
			&lt;{" "}
		</Link>{" "}
		{Array.from(new Array(pageCount))
			.map((_, i) => i + 1)
			.map(i => (
				<Link
					activeClassName="disabled"
					key={i}
					title={`Página ${i} de ${listTitle}`}
					exact={true}
					rel={
						`${i === 1 ? "first" : ""} ${
							i === pageCount ? "last" : ""
						}`.trim() || undefined
					}
					to={buildPath({ pathPrefix, index: i })}
				>
					{" "}
					{i}{" "}
				</Link>
			))}{" "}
		<Link
			className={(last && "disabled") || ""}
			tabIndex={last ? -1 : undefined}
			to={!last ? buildPath({ pathPrefix, index: index + 1 }) : "#"}
			rel={!last ? "next" : undefined}
			title={`Página seguinte de ${listTitle}`}
		>
			{" "}
			&gt;{" "}
		</Link>{" "}
		<Link
			className={(last && "disabled") || ""}
			tabIndex={last ? -1 : undefined}
			to={!last ? buildPath({ pathPrefix, index: pageCount }) : "#"}
			rel={!last ? "last" : undefined}
			title={`Última página de ${listTitle}`}
		>
			{" "}
			&gt;&gt;{" "}
		</Link>{" "}
	</StyledNav>
);
