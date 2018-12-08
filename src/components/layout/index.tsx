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
import { generateLinkedDataTag } from "../LinkedData";

import { dom } from "@fortawesome/fontawesome-svg-core";
import { isNotNullish } from "../../utils/types";
import { darkTheme, fromTheme } from "../../styles/theme";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html,
	body {
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}

	a {
		transition: 0.25s color ease, 0.25s opacity ease;
	}

	a:hover,
	a:active,
	a:focus {
		opacity: 0.75;
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
	hr {
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

	@media (min-width: ${fromTheme("responsiveBreakpoint")}) {
		--width: calc(
			100vw - ${fromTheme("sidebarWidth")} - 2 *
				${fromTheme("rootPadding")}
		);
	}
`;

const StyledRoot = styled.div`
	display: flex;
	align-items: stretch;

	@media print, (max-width: ${fromTheme("responsiveBreakpoint")}) {
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
			local("Apple Color Emoji"), local("Android Emoji"),
			local("Segoe UI"), local(EmojiSymbols), local(Symbola);

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

const RawLayout: React.SFC<ILayoutData> = ({
	site: { siteMetadata },
	personalJson,
	children,
}) => {
	const plainTextDescription = siteMetadata.description!.replace(
		/\[([^\]]+)\]\([^\)]+\)/g,
		"$1",
	);

	const personLinkedData = {
		"@context": "http://schema.org",
		"@type": "Person",
		name: personalJson.name,
		jobTitle: personalJson.jobTitle,
		email: personalJson.email,
		url: "https://victormagalhaes.codes",
		sameAs: personalJson.social!.filter(isNotNullish).map(({ url }) => url),
	};

	const blogLinkedData = {
		"@context": "http://schema.org",
		"@type": "Blog",
		url: siteMetadata.siteUrl,
		name: siteMetadata.title,
		author: {
			"@type": "Person",
			name: personalJson.name,
		},
	};

	return (
		<MDXProvider>
			<ThemeProvider theme={darkTheme}>
				<StyledRoot>
					<GlobalStyle />
					<Helmet
						htmlAttributes={{
							lang: "pt-br",
						}}
						defaultTitle={siteMetadata.title!}
						titleTemplate={`${siteMetadata.title} | %s`}
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
								content:
									"RHQh7j4JKTIEmRsQrcOD1Pk7OoLoW8VK9YG4LscV7d0",
							},
						]}
					>
						{generateLinkedDataTag(personLinkedData)}
						{generateLinkedDataTag(blogLinkedData)}
						<link
							rel="webmention"
							href="https://webmention.io/victormagalhaes.codes/webmention"
						/>
						<link
							rel="pingback"
							href="https://webmention.io/victormagalhaes.codes/xmlrpc"
						/>
					</Helmet>

					<SkipNavLink>Pular para conteúdo</SkipNavLink>
					<Sidebar
						metadata={siteMetadata}
						personalData={personalJson}
						nav={[
							{
								name: "feed",
								url: "/",
								subNav: [
									{
										name: "posts",
										url: "/posts",
									},
									{
										name: "livros",
										url: "/books",
									},
									{
										name: "recomendações",
										url: "/bookmarks",
									},
									{
										name: "tags",
										url: "/tags",
									},
								],
							},
							{
								name: "todo",
								url: "/todo",
							},
							{
								name: "currículo",
								url: "/resume",
							},
						]}
					/>

					<SkipNavContent />

					<StyledMain>{children}</StyledMain>
					<link
						rel="canonical"
						href="https://victormagalhaes.codes"
					/>
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
