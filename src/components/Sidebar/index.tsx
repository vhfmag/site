import * as React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
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

const SocialLinks = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, 1.75em);
	grid-auto-flow: row dense;
	grid-gap: 4pt;
	list-style-type: none;
	margin: 0;

	li {
		margin: 0;
	}
`;

interface ISocialInfo {
	url: string;
	serviceName: string;
	icon: string;
}

interface ISidebarProps {
	title: string;
	email: string;
	sourceUrl: string;
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
	sourceUrl,
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
			<div>
				<a className="u-email" href={`mailto:${email}`}>
					{email}
				</a>
			</div>
			<div>
				<a href={sourceUrl}>ver código fonte</a>
			</div>
		</p>
		<>
			<Markdown source={description} className="lead p-note" />
		</>
		<StyledNav>
			<ul>
				{nav.map(({ name, url }) => (
					<li key={name}>
						<Link
							exact={true}
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
				<li key={socialProps.serviceName}>
					<SocialLink {...socialProps} />
				</li>
			))}
		</SocialLinks>
	</StyledSidebar>
);
