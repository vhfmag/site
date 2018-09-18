import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { SocialLink } from "./SocialLink";
import { responsiveBreakpoint } from "../../utils/consts";

import { ScreenOnly } from "../../styles";

const activeLinkClassName = "active";

const HeadLink = styled(Link)`
	font-size: 2rem;
	font-weight: 800;
	line-height: 1.1;
`;

const StyledNav = styled.nav`
	ul {
		list-style: none;
		margin: -2pt -4pt;
		padding-bottom: 1.6785em;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;

		@media print, (max-width: ${responsiveBreakpoint}) {
			flex-direction: row;
			justify-content: flex-start;
		}

		li {
			margin: 2pt 4pt;

			a.${activeLinkClassName} {
				font-weight: bold;
			}
		}
	}
`;

const SidebarSection = styled.div``;
const SidebarHeadingSection = SidebarSection.extend`
	/* margin-bottom: 1em; */
`;

const StyledDescription = styled.p``;

const StyledSidebar = styled.header`
	flex: 0 0 var(--sidebarWidth);
	padding: var(--rootPadding);

	p,
	${StyledDescription}, ${SidebarSection} {
		margin: 0 0 1.6785em;
	}

	> h1 {
		margin-top: 0;
		text-transform: lowercase;
	}

	@media screen and (min-width: ${responsiveBreakpoint}) {
		max-height: 100vh;
		position: sticky;
		top: 0;
	}

	@media print, (max-width: ${responsiveBreakpoint}) {
		font-size: 0.9em;
		flex-basis: auto;
	}
`;

const SocialLinks = ScreenOnly.withComponent("ul").extend`
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
		<SidebarHeadingSection>
			<HeadLink className="p-name u-uid u-url" to="/">
				{title}
			</HeadLink>
		</SidebarHeadingSection>
		<SidebarSection>
			<div>
				<a className="u-email" href={`mailto:${email}`}>
					{email}
				</a>
			</div>
			<ScreenOnly>
				<a href={sourceUrl}>ver código fonte</a>
			</ScreenOnly>
		</SidebarSection>
		<div
			dangerouslySetInnerHTML={{ __html: description }}
			className="lead p-note"
		/>
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
			<li>
				<SocialLink
					icon="fas fa-rss"
					serviceName="RSS"
					rel="alternate"
					url="/rss.xml"
				/>
			</li>
			{social.map(socialProps => (
				<li key={socialProps.serviceName}>
					<SocialLink {...socialProps} />
				</li>
			))}
		</SocialLinks>
	</StyledSidebar>
);
