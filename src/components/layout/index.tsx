import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import { responsiveBreakpoint } from "../../utils/consts";
import { social_2 } from "../../graphql-types";
import { Sidebar } from "../Sidebar";

import "./icons";
import "prismjs/themes/prism-okaidia.css";
import { generateLinkedDataTag } from "../LinkedData";

import { dom } from "@fortawesome/fontawesome-svg-core";

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

	${dom.css()}
`;

const StyledMain = styled.main`
	--width: auto;
	padding: var(--rootPadding);
	flex: 0 1 var(--width);
	max-width: var(--width);
	font-size: calc(1rem + 0.25vw);

	p {
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
		--width: calc(100vw - var(--sidebarWidth) - 2 * var(--rootPadding));
	}
`;

const StyledRoot = styled.div`
	--rootPadding: 16pt;
	--sidebarWidth: 250px;

	display: flex;
	align-items: stretch;

	@media print, (max-width: ${responsiveBreakpoint}) {
		flex-direction: column;
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
		siteMetadata: {
			title: string;
			siteUrl: string;
			sourceUrl: string;
			description: string;
		};
	};
	personalJson: {
		email: string;
		name: string;
		jobTitle: string;
		social: Array<DeepNonNullable<social_2>>;
	};
}

export default class DefaultLayout extends React.Component {
	public componentDidMount() {
		const addStylesNode = document.getElementById("deferred-styles");
		if (!addStylesNode) {
			return;
		}

		const replacement = document.createElement("div");
		replacement.innerHTML = addStylesNode.textContent!;
		document.body.appendChild(replacement);
		addStylesNode.parentElement!.removeChild(addStylesNode);
	}

	private renderPage = (data: ILayoutData) => {
		const {
			title,
			description,
			siteUrl,
			sourceUrl,
		} = data.site.siteMetadata;
		const { name, jobTitle, email, social } = data.personalJson;

		const plainTextDescription = description.replace(
			/\[([^\]]+)\]\([^\)]+\)/g,
			"$1",
		);

		const personLinkedData = {
			"@context": "http://schema.org",
			"@type": "Person",
			name,
			jobTitle,
			email,
			url: "https://victormagalhaes.codes",
			sameAs: social.map(({ url }) => url),
		};

		const blogLinkedData = {
			"@context": "http://schema.org",
			"@type": "Blog",
			url: siteUrl,
			name: title,
			author: {
				"@type": "Person",
				name,
			},
		};

		return (
			<StyledRoot>
				<GlobalStyle />
				<Helmet
					htmlAttributes={{
						lang: "pt-br",
					}}
					defaultTitle={title}
					titleTemplate={`${title} | %s`}
					meta={[
						{
							charset: "UTF-8",
						},
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
					<noscript className="deferred-styles">{`
						<link
							href="//fonts.googleapis.com/css?family=Montserrat:700|Zilla+Slab:400,400i,700"
							rel="stylesheet"
							type="text/css"
						/>
					`}</noscript>
					{generateLinkedDataTag(personLinkedData)}
					{generateLinkedDataTag(blogLinkedData)}
				</Helmet>

				<Sidebar
					title={title}
					email={email}
					social={social}
					sourceUrl={sourceUrl}
					description={description}
					nav={[
						{
							name: "feed",
							url: "/",
						},
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
							name: "todo",
							url: "/todo",
						},
						{
							name: "currículo",
							url: "/resume",
						},
					]}
				/>

				<StyledMain>{this.props.children}</StyledMain>
				<link rel="canonical" href="https://victormagalhaes.codes" />
			</StyledRoot>
		);
	};

	public render() {
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
				render={this.renderPage}
			/>
		);
	}
}
