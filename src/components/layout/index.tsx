import * as React from "react";
import { Helmet } from "react-helmet";
import { css } from "linaria";
import { styled } from "linaria/react";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";

import { SiteMetadata_2, PersonalJson } from "../../graphql-types";
import { Sidebar } from "../Sidebar";

import "typeface-montserrat";
import "typeface-zilla-slab";
import "./icons";

import { dom } from "@fortawesome/fontawesome-svg-core";
import { darkTheme, lightTheme, fromTheme, ITheme } from "../../styles/theme";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import { blog, blogRef } from "../../utils/microdata";
import { responsiveBreakpoint } from "../../utils/consts";
import { kebabCase } from "lodash";
import { components } from "../mdxComponents";

const globalCss = css`
		:root {
			--root-padding: 32px;
			--root-border-width: 10px;
			--sidebar-width: 270px;

			--max-width-mobile: calc(100vw - 2 * var(--root-border-width) - 2 * var(--root-padding));
			--max-width-desktop: calc(var(--max-width-mobile) - var(--sidebar-width));
		}

		html,
		body {
			min-height: 100vh;
			max-width: 100vw;
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			border: var(--root-border-width) solid var(--theme-color);
		}

		address {
			all: unset;
		}

		html,
		body {
			min-height: 100vh;
			max-width: 100vw;
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		a, .anchor {
			color: ${fromTheme("themeColor")};
			text-decoration: none;
			box-shadow: inset 0 -1px 0 ${fromTheme("themeColor")};
			transition: 0.25s color ease, 0.25s box-shadow ease;

			--box-shadow-active-height: -1.2em;

			&:hover,
			&:active,
			&:focus {
				color: ${fromTheme("backgroundColor")};
				box-shadow: inset 0 var(--box-shadow-active-height) 0 ${fromTheme("themeColor")};
			}
		}

		a.gatsby-resp-image-link:any-link {
			box-shadow: none;
		}

		abbr[title] {
			border-bottom-color: ${fromTheme("themeColor")} !important;
		}

		dl {
			dd {
				margin-left: 1em;
			}
		}

		summary {
			/* without this, firefox doesn't show the trigger triangle */
			display: list-item;
			color: ${fromTheme("themeColor")};
			margin-bottom: 1em;
		}

		${dom.css()}

		.react-live {
			border: 1px solid ${fromTheme("themeColor")};
			margin-bottom: 1.6875em;
		}

		.prism-code {
			display: flex;
			flex-wrap: wrap;
			border-bottom: 1px solid ${fromTheme("themeColor")};
		}

		.react-live-preview {
			padding: 0.5rem;
			background-color: rgba(255, 255, 255, 0.05);
		}
	}
`;

const StyledMain = styled.main`
	--width: auto;

	padding: var(--root-padding);
	flex: 0 1 var(--width);
	max-width: var(--width);
	font-size: calc(1rem + 0.25vw);

	p,
	hr,
	dl,
	ul,
	ol,
	.react-live {
		max-width: 70ch;
		text-align: justify;
		hyphens: auto;
	}

	& > h1:first-child,
	& > h2:first-child,
	& > h3:first-child,
	& > h4:first-child,
	& > h5:first-child,
	& > h6:first-child {
		margin-top: 0;
	}

	@media (min-width: ${responsiveBreakpoint}) {
		--width: calc(
			100vw - var(--sidebar-width) - 2 * var(--root-padding) - 2 * var(--root-border-width)
		);
	}
`;

const StyledRoot = styled.div`
	display: flex;
	align-items: stretch;

	@media print, (max-width: ${responsiveBreakpoint}) {
		flex-direction: column;
	}

	hr {
		background-color: ${fromTheme("themeColor")};
	}

	.emojione {
		height: 1.25em;
		margin: 0;
	}

	@font-face {
		font-family: emoji;

		src: local("EmojiOneMozilla"), local("EmojiOne"), local("Twemoji"),
			local("Apple Color Emoji"), local("Android Emoji"), local("Segoe UI"),
			local(EmojiSymbols), local(Symbola);

		/* Emoji unicode blocks */
		unicode-range: U+1F300-1F5FF, U+1F600-1F64F, U+1F680-1F6FF, U+2600-26FF;
	}
`;

interface ILayoutData {
	site: {
		siteMetadata: SiteMetadata_2;
	};
	personalJson: PersonalJson;
}

const shouldUseLightTheme =
	typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: light)").matches;
const defaultTheme = shouldUseLightTheme ? lightTheme : darkTheme;

const getCurrentTheme = () => {
	const persistedThemeName =
		typeof localStorage !== "undefined" && localStorage.getItem("currentTheme");

	return persistedThemeName === "light"
		? lightTheme
		: persistedThemeName === "dark"
		? darkTheme
		: undefined;
};

export interface ThemeContextValue {
	theme: ITheme | undefined;
	setTheme(theme?: ITheme): void;
}
export const ThemeContext = React.createContext<ThemeContextValue>({ theme: undefined } as any);

const RawLayout: React.SFC<ILayoutData> = ({
	site: { siteMetadata },
	personalJson,
	children,
	...props
}) => {
	const plainTextDescription = siteMetadata.description!.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
	const [chosenTheme, rawSetTheme] = React.useState<ITheme | undefined>(getCurrentTheme());

	const theme = chosenTheme || defaultTheme;

	const setTheme: (theme?: ITheme) => void = newTheme => {
		if (typeof localStorage !== "undefined") {
			if (newTheme) {
				localStorage.setItem("currentTheme", newTheme === lightTheme ? "light" : "dark");
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
					<StyledRoot
						{...props}
						className={globalCss}
						itemScope
						itemType={blog}
						id={blogRef}
						itemID={blogRef}
					>
						<style>{`
							:root {
								${Object.entries(theme)
									.map(([name, value]) => `--${kebabCase(name)}: ${value};`)
									.join("\n")}
							};
						`}</style>
						<Helmet
							htmlAttributes={{
								lang: "pt-br",
							}}
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

						<StyledMain>{children}</StyledMain>
					</StyledRoot>
				</ThemeContext.Provider>
			</MDXProvider>
		</React.StrictMode>
	);
};

const DefaultLayout: React.SFC = ({ children, ...parentProps }) => {
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
