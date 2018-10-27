import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import {
	responsiveBreakpoint,
	backgroundColor,
	textColor,
} from "../../utils/consts";
import { social_2 } from "../../graphql-types";
import { Sidebar } from "../Sidebar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRss,
	faPenNib,
	faBook,
	faBookmark,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
	faMastodon,
	faGitlab,
	faGetPocket,
	faGithub,
	faLinkedin,
	faTwitter,
	faInstagram,
	faKeybase,
} from "@fortawesome/free-brands-svg-icons";

import "normalize-css/normalize.css";
import "prismjs/themes/prism-okaidia.css";
import "./style.css";
import { generateLinkedDataTag } from "../LinkedData";

library.add(faRss);
library.add(faPenNib);
library.add(faBook);
library.add(faBookmark);
library.add(faCircle);

library.add(faMastodon);
library.add(faGitlab);
library.add(faGetPocket);
library.add(faGithub);
library.add(faLinkedin);
library.add(faTwitter);
library.add(faInstagram);
library.add(faKeybase);

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
	organizationJson: {
		name: string;
		url: string;
		logo: string;
		telephone: string;
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
		const { organizationJson } = data;

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
			organization: {
				"@type": "Organization",
				...organizationJson,
			},
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
				<Helmet
					htmlAttributes={{
						lang: "pt-br",
					}}
					defaultTitle={title}
					titleTemplate={`${title} | %s`}
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
				{/* <link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.2.0/css/solid.css"
					integrity="sha384-wnAC7ln+XN0UKdcPvJvtqIH3jOjs9pnKnq9qX68ImXvOGz2JuFoEiCjT8jyZQX2z"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.2.0/css/brands.css"
					integrity="sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css"
					integrity="sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6"
					crossOrigin="anonymous"
				/> */}
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
						organizationJson {
							name
							url
							logo
							telephone
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
