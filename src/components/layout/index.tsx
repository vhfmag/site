import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle, ThemeProvider } from "../../styles/styled";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";

import { SiteMetadata_2, PersonalJson } from "../../graphql-types";
import { Sidebar } from "../Sidebar";

import "typeface-montserrat";
import "typeface-zilla-slab";
import "./icons";
import "prismjs/themes/prism-okaidia.css";

import { dom } from "@fortawesome/fontawesome-svg-core";
import { darkTheme, fromTheme } from "../../styles/theme";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import { blog, blogRef } from "../../utils/microdata";
import { responsiveBreakpoint } from "../../utils/consts";
import { kebabCase } from "lodash";
import { components } from "../mdxComponents";

const GlobalStyle = createGlobalStyle`
	:root {
		${({ theme }) =>
			Object.entries(theme)
				.map(([name, value]) => `--${kebabCase(name)}: ${value};`)
				.join("\n")};
	}

	html,
	body {
		min-height: 100vh;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	address {
		all: unset;
	}

	a {
		transition: 0.25s color ease, 0.25s opacity ease;
	}

	a:hover,
	a:active,
	a:focus {
		opacity: 0.75;
	}

	dl {
		dd {
			margin-left: 1em;
		}
	}

	details {
		--heading-margin-bottom: 1.6875em;
		--indicator-width: 0.6em;
		--indicator-length: 0.5em;

		summary {
			color: ${fromTheme("themeColor")};
			margin-bottom: 1em;

			h1, h2, h3, h4, h5, h6, h7 {
				margin-bottom: 0;
			}

			&::before {
				--indicator-x: var(--indicator-length);
				--indicator-y: var(--indicator-width);
				--indicator-vertical-margin: calc((1.6em - var(--indicator-x)) / 2);
				--indicator-horizontal-margin: calc((2ch - var(--indicator-y)) / 2);

				content: "";
				width: 0;
				height: 0;
				float: left;
				margin: var(--indicator-vertical-margin) var(--indicator-horizontal-margin);
				transition: all .25s ease;
				border-top: calc(var(--indicator-width) / 2) solid transparent;
				border-bottom: calc(var(--indicator-width) / 2) solid transparent;
				border-left: var(--indicator-length) solid currentColor;
			}
		}

		&[open] {
			> summary::before {
				--indicator-x: var(--indicator-length);
				--indicator-y: var(--indicator-width);
				transform: rotate(90deg);
			}
		}
	}

	[data-reach-skip-link]:focus {
		background-color: ${fromTheme("themeColor")} !important;
		color: ${fromTheme("backgroundColor")} !important;
		opacity: 1;
	}

	${dom.css()}
`;

const StyledMain = styled.main`
	--width: auto;

	padding: ${fromTheme("rootPadding")};
	flex: 0 1 var(--width);
	max-width: var(--width);
	font-size: calc(1rem + 0.25vw);

	p,
	hr,
	dl {
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
		--width: calc(100vw - ${fromTheme("sidebarWidth")} - 2 * ${fromTheme("rootPadding")});
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

const RawLayout: React.SFC<ILayoutData> = ({ site: { siteMetadata }, personalJson, children }) => {
	const plainTextDescription = siteMetadata.description!.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");

	return (
		<MDXProvider components={components}>
			<ThemeProvider theme={darkTheme}>
				<StyledRoot itemScope itemType={blog} id={blogRef} itemID={blogRef}>
					<GlobalStyle />
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
								name: "blog",
								url: "/",
							},
							{
								name: "to do",
								lang: "en",
								url: "/todo/",
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
			</ThemeProvider>
		</MDXProvider>
	);
};

const DefaultLayout: React.SFC = ({ children }) => {
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
			render={props => <RawLayout {...props}>{children}</RawLayout>}
		/>
	);
};

export default DefaultLayout;
