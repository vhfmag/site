import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import "normalize-css/normalize.css";
import "font-awesome/css/font-awesome.min.css";
import { SocialLink } from "./SocialLink";
import { responsiveBreakpoint } from "../../utils/consts";

const activeLinkClassName = "active";

const StyledNav = styled.nav`
	ul {
		list-style: none;
		padding-left: 0;
		margin-left: 0;
		display: grid;
		grid-auto-flow: row;

		@media (max-width: ${responsiveBreakpoint}) {
			grid-auto-flow: column dense;
			justify-content: flex-start;
			grid-gap: 8pt;
		}

		li {
			margin-bottom: 0;

			a.${activeLinkClassName} {
				font-weight: bold;
			}
		}
	}
`;

const StyledSidebar = styled.header`
	flex: 0 0 var(--sidebarWidth);
	padding: var(--rootPadding);

	> h1 {
		margin-top: 0;
		text-transform: lowercase;
	}

	@media (min-width: ${responsiveBreakpoint}) {
		max-height: 100vh;
		position: sticky;
		top: 0;
	}

	@media (max-width: ${responsiveBreakpoint}) {
		font-size: 0.9em;
	}
`;

const SocialLinks = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 1.75em);
	grid-auto-flow: row dense;
	grid-gap: 4pt;
`;

interface ISocialInfo {
	url: string;
	serviceName: string;
	icon: string;
}

interface ISidebarProps {
	title: string;
	email: string;
	description: string;
	social: ISocialInfo[];
	nav: ISidebarNav[];
}

export interface ISidebarNav {
	name: string;
	url: string;
}

export const Sidebar: React.SFC<ISidebarProps> = ({
	title,
	description,
	email,
	social,
	nav,
}) => (
	<StyledSidebar className="h-card">
		<h1>
			<Link className="p-name u-uid u-url" to="/">
				{title}
			</Link>
		</h1>
		<p>
			<a className="u-email" href={`mailto:${email}`}>
				{email}
			</a>
		</p>
		<p className="lead p-note">{description}</p>
		<StyledNav>
			<ul>
				{nav.map(({ name, url }) => (
					<li key={name}>
						<Link
							exact
							activeClassName={activeLinkClassName}
							to={url}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</StyledNav>
		<SocialLinks>
			<SocialLink
				icon="fa-rss"
				serviceName="RSS"
				rel="alternate"
				url="/rss.xml"
			/>
			{social.map(socialProps => (
				<SocialLink key={socialProps.serviceName} {...socialProps} />
			))}
		</SocialLinks>
	</StyledSidebar>
);
