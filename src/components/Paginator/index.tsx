import * as React from "react";
import { Link } from "gatsby";
import VisuallyHidden from "@reach/visually-hidden";
import s from "./style.module.scss";

export type IPaginatorProps = Omit<GatsbyPaginatorProps<any>, "group"> & {
	className?: string;
};

const buildPath = ({ pathPrefix, index }: { pathPrefix: string; index: number }) =>
	(pathPrefix ? `/${pathPrefix}` : "") + (index === 1 ? "/" : `/${index}`);

export const Paginator: React.SFC<IPaginatorProps> = ({
	pageCount,
	pathPrefix,
	first,
	last,
	index,
	className,
	additionalContext: { listTitle },
}) => {
	if (first && last) {
		return null;
	}

	return (
		<nav aria-label="Paginação" className={`${s.nav} ${className}`}>
			{" "}
			<Link
				className={(first && "disabled") || ""}
				tabIndex={first ? -1 : undefined}
				to={!first ? buildPath({ pathPrefix, index: 1 }) : "#"}
				rel={!first ? "first" : undefined}
				title={`Primeira página anterior de ${listTitle}`}
			>
				{" "}
				<span aria-hidden>&lt;&lt;</span> <VisuallyHidden>Primeira página</VisuallyHidden>
			</Link>{" "}
			<Link
				className={(first && "disabled") || ""}
				tabIndex={first ? -1 : undefined}
				to={!first ? buildPath({ pathPrefix, index: index - 1 }) : "#"}
				rel={!first ? "prev" : undefined}
				title={`Página anterior de ${listTitle}`}
			>
				{" "}
				<span aria-hidden>&lt;</span> <VisuallyHidden>Página anterior</VisuallyHidden>
			</Link>{" "}
			{Array.from(new Array(pageCount))
				.map((_, i) => i + 1)
				.map(i => (
					<Link
						activeClassName="disabled current"
						key={i}
						title={`Página ${i} de ${listTitle}`}
						rel={
							`${i === 1 ? "first" : ""} ${i === pageCount ? "last" : ""}`.trim() ||
							undefined
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
				<span aria-hidden>&gt;</span> <VisuallyHidden>Próxima página</VisuallyHidden>
			</Link>{" "}
			<Link
				className={(last && "disabled") || ""}
				tabIndex={last ? -1 : undefined}
				to={!last ? buildPath({ pathPrefix, index: pageCount }) : "#"}
				rel={!last ? "last" : undefined}
				title={`Última página de ${listTitle}`}
			>
				{" "}
				<span aria-hidden>&gt;&gt;</span> <VisuallyHidden>Última página</VisuallyHidden>
			</Link>{" "}
		</nav>
	);
};
