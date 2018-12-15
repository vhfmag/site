import * as React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../components/layout";

const LinksPage: React.FunctionComponent<{ data: any }> = ({ data }) => {
	return (
		<DefaultLayout>
			<h1>Links</h1>
			{data.allLinksJson.edges.map(({ node }) => (
				<React.Fragment key={node.name}>
					<h2>{node.name}</h2>
					{node.links.map(link => (
						<React.Fragment key={link.url}>
							<dt>
								<a href={link.url}>{link.name}</a>
							</dt>
							{link.description && (
								<dd dangerouslySetInnerHTML={{ __html: link.description }} />
							)}
						</React.Fragment>
					))}
				</React.Fragment>
			))}
		</DefaultLayout>
	);
};

export default LinksPage;

export const todoFragment = graphql`
	query LinksPage {
		allLinksJson {
			edges {
				node {
					name
					links {
						url
						name
						description
					}
				}
			}
		}
	}
`;
