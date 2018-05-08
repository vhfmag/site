import * as React from "react";
import { Helmet } from "react-helmet";
import { ObjectOmit } from "typelevel-ts";
import styled, { injectGlobal } from "styled-components";

import "normalize-css/normalize.css";
import "font-awesome/css/font-awesome.min.css";
import {
	backgroundColor,
	textColor,
	themeColor,
	responsiveBreakpoint,
} from "../utils/consts";
import { social_2 } from "../graphql-types";
import { Sidebar } from "../components/Sidebar";

require("prismjs/themes/prism-okaidia.css");

const StyledMain = styled.main`
	--width: auto;
	padding: var(--rootPadding);
	flex: 0 1 var(--width);
	max-width: var(--width);
	font-size: calc(1rem + 0.25vw);

	p {
		max-width: 70ch;
		text-align: justify;
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
	--sidebarWidth: 240px;

	display: flex;
	align-items: stretch;

	@media (max-width: ${responsiveBreakpoint}) {
		flex-direction: column;
	}
`;

injectGlobal`
	:root {
		--bgColor: ${backgroundColor};
		--themeColor: ${themeColor};
		--textColor: ${textColor};
	}

	* {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	blockquote {
		color: ${textColor};
	}

	em {
		color: ${themeColor};
	}

	blockquote {
		border-left-color: ${themeColor};
	}

	html,
	body {
		background-color: ${backgroundColor};
		color: ${textColor};
		/* width: 100vw; */
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}

	a {
		transition: 0.25s color ease, 0.25s opacity ease;
	}

	a,
	a:hover,
	a:visited,
	a:focus,
	a:active {
		color: ${themeColor};
	}

	a:hover,
	a:active,
	a:focus {
		opacity: 0.75;
	}
`;

interface DefaultLayoutProps
	extends ObjectOmit<React.HTMLProps<HTMLDivElement>, "data"> {
	location: {
		pathname: string;
	};
	children: any;
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
			};
		};
		personalJson: {
			email: string;
			social: DeepNonNullable<social_2>[];
		};
	};
}

export default class DefaultLayout extends React.PureComponent<
	DefaultLayoutProps,
	void
> {
	public componentDidMount() {
		const addStylesNode = document.getElementById("deferred-styles");
		if (!addStylesNode) return;

		const replacement = document.createElement("div");
		replacement.innerHTML = addStylesNode.textContent!;
		document.body.appendChild(replacement);
		addStylesNode.parentElement!.removeChild(addStylesNode);
	}

	public render() {
		const { title, description } = this.props.data.site.siteMetadata;
		const { email, social } = this.props.data.personalJson;

		return (
			<StyledRoot>
				<Helmet
					htmlAttributes={{
						lang: "pt-br",
					}}
					defaultTitle={title}
					titleTemplate={`%s | ${title}`}
					meta={[
						{ name: "description", content: description },
						{
							name: "keywords",
							content: [
								"javascript",
								"typescript",
								"development",
								"web development",
								"web",
								"decentralization",
								"p2p",
								"minorities",
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
				</Helmet>

				<Sidebar
					title={title}
					email={email}
					social={social}
					description={description}
					nav={[
						{
							name: "posts",
							url: "/",
						},
						{
							name: "livros",
							url: "/books",
						},
						{
							name: "bookmarks",
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

				<StyledMain>{this.props.children()}</StyledMain>
			</StyledRoot>
		);
	}
}

export const pageQuery = graphql`
	query MetadataQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
		personalJson {
			email
			social {
				serviceName
				icon
				url
			}
		}
	}
`;
