import * as React from "react";
import { Helmet } from "react-helmet";
import { ObjectOmit } from "typelevel-ts";
import styled from "styled-components";

import "normalize-css/normalize.css";
import "font-awesome/css/font-awesome.min.css";
import {
	backgroundColor,
	textColor,
	themeColor,
	responsiveBreakpoint,
} from "../utils/consts";
import { social_2 } from "../graphql-types";
import { css } from "../utils/taggedUtils";
import { Sidebar } from "../components/Sidebar";

require("prismjs/themes/prism-okaidia.css");

const StyledMain = styled.main``;
const StyledRoot = styled.div`
	--rootPadding: 16pt;
	--sidebarWidth: 240px;

	display: flex;
	align-items: stretch;

	@media (max-width: ${responsiveBreakpoint}) {
		flex-direction: column;
	}

	${StyledMain} {
		--width: auto;
		padding: var(--rootPadding);
		flex: 0 1 var(--width);
		max-width: var(--width);
		font-size: calc(1rem + 0.25vw);

		p {
			max-width: 70ch;
			text-align: justify;
		}

		@media (min-width: ${responsiveBreakpoint}) {
			--width: calc(100vw - var(--sidebarWidth) - 2 * var(--rootPadding));
		}
	}
`;

const baseCss = css`
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
		dataJson: {
			email: string;
			social: DeepNonNullable<social_2>[];
		};
	};
}

export default class DefaultLayout extends React.PureComponent<
	DefaultLayoutProps,
	void
> {
	public render() {
		const { title, description } = this.props.data.site.siteMetadata;
		const { email, social } = this.props.data.dataJson;

		return (
			<StyledRoot>
				<Helmet
					defaultTitle={title}
					titleTemplate={`%s | ${title}`}
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
				serviceName
				icon
				url
			}
		}
	}
`;
