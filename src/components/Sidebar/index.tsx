import * as React from "react";
import { Link } from "gatsby";

import { SocialLink } from "./SocialLink";

import { SiteMetadata_2, PersonalJson } from "../../graphql-types";
import { isNotNullish } from "../../utils/types";
import { person, blogRef, personRef, organization } from "../../utils/microdata";
import VisuallyHidden from "@reach/visually-hidden";
import { ThemeContext, ThemeName } from "../layout";
import s from "./style.module.scss";

const activeLinkClassName = "active";

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

const ThemeSelector: React.FunctionComponent<{ theme: ThemeName | undefined }> = ({
	children,
	theme,
}) => {
	const { theme: currentTheme, setTheme } = React.useContext(ThemeContext);
	const isSelected = theme === currentTheme;

	return (
		<button
			className={`${isSelected ? "selected" : ""}`}
			disabled={isSelected}
			onClick={() => setTheme(theme)}
		>
			{children}
		</button>
	);
};

export const Sidebar: React.SFC<ISidebarProps> = ({
	metadata: { title, sourceUrl },
	personalData: { email, social, jobTitle },
	nav,
}) => {
	return (
		<header
			itemScope
			itemType={[person, organization].join(" ")}
			id={personRef}
			itemID={personRef}
			itemProp="author publisher"
			className={`${s.sidebar} h-card`}
		>
			<div className={s.section} itemProp="name">
				<Link
					className={`${s.headLink} p-name u-uid u-url`}
					itemRef={[blogRef, personRef].join(" ")}
					itemProp="url identifier"
					to="/"
				>
					<h1>{title}</h1>
				</Link>
			</div>
			<VisuallyHidden>
				<div className={`${s.section} p-job-title`} itemProp="jobTitle">
					{jobTitle}
				</div>
				<img
					className="u-photo"
					itemProp="logo"
					aria-hidden
					width={48}
					height={48}
					src="/icons/icon-48x48.png"
				/>
			</VisuallyHidden>
			<div className={s.section}>
				<address className={s.email}>
					<a itemProp="email" className="u-email" href={`mailto:${email}`}>
						{email}
					</a>
				</address>
				<a href={sourceUrl!}>ver código fonte</a>
			</div>
			<nav className={s.nav} aria-label="Principal">
				<NavLinks navs={nav} />
			</nav>
			<address aria-label="Mídias sociais">
				<ul className={s.socialLinkList}>
					<li className={s.socialLinkItem}>
						<SocialLink icon="rss" serviceName="RSS" rel="alternate" url="/rss.xml" />
					</li>
					{social!.filter(isNotNullish).map(socialProps => (
						<li key={socialProps.serviceName!} className={s.socialLinkItem}>
							<SocialLink {...socialProps} />
						</li>
					))}
				</ul>
			</address>
			<hr />
			<div className={s.themeSelector}>
				Tema:
				<div className={s.themeButtons}>
					{supportsColorScheme && (
						<ThemeSelector theme={undefined}>Automático</ThemeSelector>
					)}
					<ThemeSelector theme="dark">Escuro</ThemeSelector>
					<ThemeSelector theme="light">Claro</ThemeSelector>
				</div>
			</div>
		</header>
	);
};
