import * as React from "react";
import styled from "../../styles/styled";
import { Link } from "gatsby";

import { SocialLink } from "./SocialLink";
import { responsiveBreakpoint } from "../../utils/consts";

import { ScreenOnly } from "../../styles";
import { SiteMetadata_2, PersonalJson } from "../../graphql-types";
import { isNotNullish } from "../../utils/types";
import { fromTheme } from "../../styles/theme";
import { person, blogRef, personRef, organization } from "../../utils/microdata";
import VisuallyHidden from "@reach/visually-hidden";

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
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;

		& ul {
			padding-left: 1em;
		}

		@media print, (max-width: ${responsiveBreakpoint}) {
			flex-direction: row;

			li,
			ul {
				display: contents;
			}

			a {
				margin: 2pt 4pt;
			}
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

const StyledDescription = styled.p``;

const StyledSidebar = styled.header`
	flex: 0 0 ${fromTheme("sidebarWidth")};
	padding: ${fromTheme("rootPadding")};

	p,
	${StyledDescription}, ${SidebarSection}, ${StyledNav} {
		margin: 1.2em 0;

		:first-child {
			margin-top: 0;
		}
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

const SocialLinks = styled(ScreenOnly.withComponent("ul"))`
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

interface ISidebarProps {
	metadata: SiteMetadata_2;
	personalData: PersonalJson;
	nav: ISidebarNavLink[];
}

export interface ISidebarNavLink {
	name: string;
	url: string;
	lang?: string;
	subNav?: ISidebarNavLink[];
}

function NavLinks({ navs }: { navs: ISidebarNavLink[] }) {
	return (
		<ul>
			{navs.map(({ name, url, subNav, lang }) => (
				<li key={name}>
					<Link activeClassName={activeLinkClassName} lang={lang} to={url}>
						{name}
					</Link>
					{subNav && <NavLinks navs={subNav} />}
				</li>
			))}
		</ul>
	);
}

export const Sidebar: React.SFC<ISidebarProps> = ({
	metadata: { title, description, sourceUrl },
	personalData: { email, social, jobTitle },
	nav,
}) => (
	<StyledSidebar
		itemScope
		itemType={[person, organization].join(" ")}
		id={personRef}
		itemID={personRef}
		itemProp="author publisher"
		className="h-card"
	>
		<SidebarSection itemProp="name">
			<HeadLink
				itemRef={[blogRef, personRef].join(" ")}
				itemProp="url identifier"
				className="p-name u-uid u-url"
				to="/"
			>
				{title}
			</HeadLink>
		</SidebarSection>
		<VisuallyHidden>
			<SidebarSection className="p-job-title" itemProp="jobTitle">
				{jobTitle}
			</SidebarSection>
			<img itemProp="logo" width={48} height={48} src="/icons/icon-48x48.png" />
		</VisuallyHidden>
		<SidebarSection
			dangerouslySetInnerHTML={{ __html: description! }}
			className="lead p-note"
			itemProp="description"
		/>
		<SidebarSection>
			<div>
				<a itemProp="email" className="u-email" href={`mailto:${email}`}>
					{email}
				</a>
			</div>
			<ScreenOnly>
				<a href={sourceUrl!}>ver código fonte</a>
			</ScreenOnly>
		</SidebarSection>
		<StyledNav aria-label="Páginas do blog">
			<NavLinks navs={nav} />
		</StyledNav>
		<nav aria-label="Links para mídias sociais">
			<SocialLinks>
				<li>
					<SocialLink icon="rss" serviceName="RSS" rel="alternate" url="/rss.xml" />
				</li>
				{social!.filter(isNotNullish).map(socialProps => (
					<li key={socialProps.serviceName!}>
						<SocialLink {...socialProps} />
					</li>
				))}
			</SocialLinks>
		</nav>
	</StyledSidebar>
);
