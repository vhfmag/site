import * as React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import { ObjectOmit } from "typelevel-ts";
import styled from "styled-components";

import "normalize-css/normalize.css";
import "font-awesome/css/font-awesome.min.css";
import { backgroundColor, textColor, themeColor } from "../utils/consts";
import { social_2 } from "../graphql-types";
import { css } from "../utils/taggedUtils";

require("prismjs/themes/prism-okaidia.css");

const responsiveBreakpoint = "800px";

const StyledSidebar = styled.aside``;
const StyledMain = styled.main``;
const StyledRoot = styled.div`
	--rootPadding: 16pt;
	--sidebarWidth: 240px;

	display: flex;
	align-items: stretch;

	@media (max-width: ${responsiveBreakpoint}) {
		flex-direction: column;
	}

	${StyledSidebar} {
		flex: 0 0 var(--sidebarWidth);
		padding: var(--rootPadding);

		> h1 {
			margin-top: 0;
			text-transform: lowercase;
		}

		@media (min-width: ${responsiveBreakpoint}) {
			max-height: 100vh;
			position: sticky;
			top: 0;
		}
	}

	${StyledMain} {
		--width: auto;
		padding: 16pt;
		flex: 0 1 var(--width);
		max-width: var(--width);
		font-size: calc(1rem + .25vw);

		p {
			max-width: 70ch;
			text-align: justify;
		}

		@media (min-width: ${responsiveBreakpoint}) {
			--width: calc(100vw - var(--sidebarWidth) - 2 * var(--rootPadding));
		}
	}
`;

interface ISidebarProps {
	title: string;
	email: string;
	description: string;
	social: social_2[];
}

const SocialLinks = styled.div`
	display: flex;
	flex-wrap: wrap;

	a {
		margin: 2pt;
		font-size: 1.5em;
		color: ${textColor} !important;

		&:active, &:hover {
			color: ${themeColor} !important;
		}
	}
`;

const Sidebar: React.SFC<ISidebarProps> = ({ title, description, email, social }) => (
	<StyledSidebar>
		<h1>{ title }</h1>
		<p>
			<a href={`mailto:${email}`}>{ email }</a>
		</p>
		<p>{ description }</p>
		<SocialLinks>
			{social.map(({ service, url, icon }) => (
				<a key={service} href={url}><i className={`fa ${icon}`}/></a>
			))}
		</SocialLinks>
	</StyledSidebar>
);

const baseCss = css`
	:root {
		--bgColor: ${backgroundColor};
		--themeColor: ${themeColor};
		--textColor: ${textColor};
	}

	* {
		box-sizing: border-box;
	}

	h1, h2, h3, h4, h5, h6, blockquote {
		color: ${textColor};
	}

	em {
		color: ${themeColor};
	}

	blockquote {
		border-left-color: ${themeColor};
	}

	html, body {
		background-color: ${backgroundColor};
		color: ${textColor};
		/* width: 100vw; */
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}

	a {
		transition: .25s color ease, .25s opacity ease;
	}

	a, a:hover, a:visited, a:focus, a:active {
		color: ${themeColor};
	}

	a:hover, a:active, a:focus {
		opacity: .75;
	}
`;

interface DefaultLayoutProps extends ObjectOmit<React.HTMLProps<HTMLDivElement>, "data"> {
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
		dataJson: {
			email: string;
			social: social_2[];
		}
	};
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
	public render() {
		const { title, description } = this.props.data.site.siteMetadata;
		const { email, social } = this.props.data.dataJson;

		return (
			<StyledRoot>
				<Helmet
					title={title}
					meta={[
						{ name: "description", content: description },
						{ name: "keywords", content: "sample, something" },
					]}
				>
					<style>{baseCss}</style>
				</Helmet>

				<Sidebar
					title={title}
					email={email}
					social={social}
					description={description}
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
		dataJson {
			email
			social {
				service
				icon
				url
			}
		}
	}
`;
