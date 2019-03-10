import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { SocialLink } from "./SocialLink";
import { responsiveBreakpoint } from "../../utils/consts";

import { ScreenOnly } from "../../styles";
import { SiteMetadata_2, PersonalJson } from "../../graphql-types";
import { isNotNullish } from "../../utils/types";
import { darkTheme, lightTheme, ITheme } from "../../styles/theme";
import { person, blogRef, personRef, organization } from "../../utils/microdata";
import VisuallyHidden from "@reach/visually-hidden";
import { ThemeContext } from "../layout";

const activeLinkClassName = "active";

const HeadLink = styled(Link)`
	h1 {
		font-family: "Zilla Slab";
		margin-top: 0;
	}
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
	flex: 0 0 var(--sidebar-width);
	padding: var(--root-padding);

	img[aria-hidden] {
		max-width: unset;
	}

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

const StyledThemeSelector = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledThemeButtons = styled.div`
	margin: -0.25em;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	> * {
		margin: 0.25em;
	}

	@supports (display: grid) {
		@media (min-width: ${responsiveBreakpoint}) {
			display: grid;
			grid-gap: 0.5em;
			grid-template-columns: max-content;

			margin: 0;

			> * {
				margin: unset;
			}
		}
	}
`;

const StyledThemeButton = styled.button`
	--box-shadow-height: 0;

	cursor: pointer;
	color: var(--theme-color);
	border: 1px solid var(--theme-color);
	background-color: transparent;
	transition: box-shadow 0.5s ease, color 0.5s ease;
	box-shadow: inset 0 var(--box-shadow-height) 0 var(--theme-color);

	&.selected,
	&:hover {
		--box-shadow-height: 2em;
		color: var(--background-color);
	}

	&[disabled] {
		cursor: not-allowed;
	}
`;

const StyledHR = styled.hr`
	margin: 1em 0;
`;

const supportsColorScheme = (() => {
	if (typeof matchMedia === "undefined") {
		// never include button during SSR
		// progressive enhancement :D
		return false;
	} else {
		return (
			matchMedia("(prefers-color-scheme: dark)").matches ||
			matchMedia("not (prefers-color-scheme: dark)").matches
		);
	}
})();

const ThemeSelector: React.FunctionComponent<{ theme: ITheme | undefined }> = ({
	children,
	theme,
}) => {
	const { theme: currentTheme, setTheme } = React.useContext(ThemeContext);
	const isSelected = theme === currentTheme;

	return (
		<StyledThemeButton
			className={`${isSelected ? "selected" : ""}`}
			disabled={isSelected}
			onClick={() => setTheme(theme)}
		>
			{children}
		</StyledThemeButton>
	);
};

export const Sidebar: React.SFC<ISidebarProps> = ({
	metadata: { title, sourceUrl },
	personalData: { email, social, jobTitle },
	nav,
}) => {
	return (
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
					<h1>{title}</h1>
				</HeadLink>
			</SidebarSection>
			<VisuallyHidden>
				<SidebarSection className="p-job-title" itemProp="jobTitle">
					{jobTitle}
				</SidebarSection>
				<img
					className="u-photo"
					itemProp="logo"
					aria-hidden
					width={48}
					height={48}
					src="/icons/icon-48x48.png"
				/>
			</VisuallyHidden>
			<SidebarSection>
				<address>
					<a itemProp="email" className="u-email" href={`mailto:${email}`}>
						{email}
					</a>
				</address>
				<ScreenOnly>
					<a href={sourceUrl!}>ver código fonte</a>
				</ScreenOnly>
			</SidebarSection>
			<StyledNav aria-label="Principal">
				<NavLinks navs={nav} />
			</StyledNav>
			<address aria-label="Mídias sociais">
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
			</address>
			<StyledHR />
			<StyledThemeSelector style={{ display: "flex" }}>
				Tema:
				<StyledThemeButtons>
					{supportsColorScheme && (
						<ThemeSelector theme={undefined}>Automático</ThemeSelector>
					)}
					<ThemeSelector theme={darkTheme}>Escuro</ThemeSelector>
					<ThemeSelector theme={lightTheme}>Claro</ThemeSelector>
				</StyledThemeButtons>
			</StyledThemeSelector>
		</StyledSidebar>
	);
};
