import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";

import { SiteMetadata_2, PersonalJson } from "../../graphql-types";
import { Sidebar } from "../Sidebar";

import "typeface-montserrat";
import "typeface-zilla-slab";
import "./icons";

// import { dom } from "@fortawesome/fontawesome-svg-core";
import { darkTheme, lightTheme, ITheme } from "../../styles/theme";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import { blog, blogRef } from "../../utils/microdata";
import kebabCase from "lodash/kebabCase";
import { components } from "../mdxComponents";
import s from "./style.module.scss";
import "./style.global.scss";

interface ILayoutProps {
	className?: string;
}

interface ILayoutData extends ILayoutProps {
	site: {
		siteMetadata: SiteMetadata_2;
	};
	personalJson: PersonalJson;
}

const shouldUseDarkTheme =
	typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = shouldUseDarkTheme ? "dark" : "light";

const getCurrentTheme = (): ThemeName | undefined => {
	const persistedThemeName =
		typeof localStorage !== "undefined" && localStorage.getItem("currentTheme");

	if (persistedThemeName === "dark" || persistedThemeName === "light") {
		return persistedThemeName;
	}

	return undefined;
};

export type ThemeName = "dark" | "light";

export interface ThemeContextValue {
	theme: ThemeName | undefined;
	setTheme(theme?: ThemeName): void;
}
export const ThemeContext = React.createContext<ThemeContextValue>({ theme: undefined } as any);

function themeToCSS(theme: ITheme) {
	return Object.entries(theme)
		.map(([name, value]) => `--${kebabCase(name)}: ${value};`)
		.join("\n");
}

const RawLayout: React.SFC<ILayoutData> = ({
	site: { siteMetadata },
	personalJson,
	children,
	className,
	...props
}) => {
	const plainTextDescription = siteMetadata.description!.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
	const [chosenTheme, rawSetTheme] = React.useState(getCurrentTheme());

	const theme = chosenTheme || defaultTheme;

	const setTheme: (theme?: ThemeName) => void = newTheme => {
		if (typeof localStorage !== "undefined") {
			if (newTheme) {
				localStorage.setItem("currentTheme", newTheme);
			} else {
				localStorage.removeItem("currentTheme");
			}
		}

		rawSetTheme(newTheme);
	};

	return (
		<React.StrictMode>
			<MDXProvider components={components}>
				<ThemeContext.Provider value={{ theme: chosenTheme, setTheme }}>
					<div
						{...props}
						className={`${s.root} ${className}`}
						itemScope
						itemType={blog}
						id={blogRef}
						itemID={blogRef}
					>
						<Helmet
							htmlAttributes={{
								lang: "pt-br",
							}}
							bodyAttributes={{ class: theme }}
							defaultTitle={siteMetadata.title!}
							titleTemplate={`%s — ${siteMetadata.title}`}
							meta={[
								{
									name: "description",
									content: plainTextDescription,
								},
								{
									name: "keywords",
									content: [
										"javascript",
										"typescript",
										"development",
										"web development",
										"web",
										"privacy",
										"decentralized web",
										"decentralization",
										"p2p",
										"personal",
										"blog",
										"brazilian",
									].join(", "),
								},
								{
									name: "google-site-verification",
									content: "RHQh7j4JKTIEmRsQrcOD1Pk7OoLoW8VK9YG4LscV7d0",
								},
							]}
						>
							<style>{`
								body.dark {
									${themeToCSS(darkTheme)};
								}

								body.light {
									${themeToCSS(lightTheme)};
								}
							`}</style>
							<link
								rel="webmention"
								href="https://webmention.io/victormagalhaes.codes/webmention"
							/>
							<link
								rel="pingback"
								href="https://webmention.io/victormagalhaes.codes/xmlrpc"
							/>
							<link rel="canonical" href="https://victormagalhaes.codes" />
						</Helmet>

						<SkipNavLink>Pular para conteúdo</SkipNavLink>
						<Sidebar
							metadata={siteMetadata}
							personalData={personalJson}
							nav={[
								{
									name: "home",
									url: "/",
								},
								{
									name: "blog",
									url: "/posts",
								},
								{
									name: "links",
									url: "/links/",
								},
								{
									name: "currículo",
									url: "/resume/",
								},
							]}
						/>

						<SkipNavContent />

						<main className={s.main}>{children}</main>
					</div>
				</ThemeContext.Provider>
			</MDXProvider>
		</React.StrictMode>
	);
};

const DefaultLayout: React.SFC<ILayoutProps> = ({ children, ...parentProps }) => {
	return (
		<StaticQuery
			query={graphql`
				query MetadataQuery {
					site {
						siteMetadata {
							title
							siteUrl
							sourceUrl
							description
						}
					}
					personalJson {
						name
						email
						jobTitle
						social {
							serviceName
							icon
							url
						}
					}
				}
			`}
			render={props => (
				<RawLayout {...parentProps} {...props}>
					{children}
				</RawLayout>
			)}
		/>
	);
};

export default DefaultLayout;
