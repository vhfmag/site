import * as React from "react";
import { graphql, Link } from "gatsby";
import DefaultLayout from "../components/layout";
import { IMarkdownEntryFragment } from "../fragments";
import { EntrySummary } from "../components/EntrySummary";
import styled from "../styles/styled";
import { Folder } from "../utils/types";

interface MarkdownEdges {
	edges: Array<{
		node: IMarkdownEntryFragment;
	}>;
}

interface HomePageProps {
	data: {
		posts: MarkdownEdges;
		bookmarks: MarkdownEdges;
	};
}

const HomeSection = ({
	sectionTitle,
	sectionSlug,
	list,
}: {
	sectionTitle: React.ReactNode;
	sectionSlug: Folder;
	list: MarkdownEdges;
}) => {
	return (
		<section>
			<h2>{sectionTitle}</h2>
			<nav>
				<ul>
					{list.edges.map(
						({
							node: {
								fileAbsolutePath,
								frontmatter: { title, authors, link, date, tags },
								timeToRead,
								parent: { birthTime, name, relativeDirectory },
								count: { words },
							},
						}) => {
							const slug = relativeDirectory.includes("/")
								? relativeDirectory.split("/")[1]
								: name;

							return (
								<li key={title}>
									<EntrySummary
										entryUrl={`/${sectionSlug}/${slug}`}
										key={fileAbsolutePath}
										replyTo={link}
										authors={authors}
										publishDate={new Date(date || birthTime)}
										title={title}
										fileName={slug}
										tags={tags}
										folderName={sectionSlug}
										wordCount={words}
										timeToRead={timeToRead}
										selfAuthor={{ name }}
									/>
								</li>
							);
						},
					)}
					<li>
						<Link to={`/${sectionSlug}`}>Ver mais</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

const StyledSection = styled.section`
	display: flex;
	flex-wrap: wrap;
`;

const HomePage = ({ data: { posts, bookmarks } }: HomePageProps) => {
	const yearsOfExperience = Math.trunc(
		(Date.now() - new Date(2016, 2, 1).valueOf()) / (1e3 * 60 * 60 * 24 * 365),
	);

	return (
		<DefaultLayout>
			<h1>Home</h1>
			<p>
				Olá! Meu nome é Victor Magalhães. Sou desenvolvedor de Salvador, Brasil e apaixonado
				pela Web, decentralização e privacidade. Tenho {yearsOfExperience} anos de
				experiência trabalhando com desenvolvimento front- e back-end.
			</p>

			<StyledSection>
				<HomeSection list={posts} sectionTitle="Últimos posts" sectionSlug="posts" />
				<HomeSection
					list={bookmarks}
					sectionTitle="Últimos bookmarks"
					sectionSlug="bookmarks"
				/>
			</StyledSection>
		</DefaultLayout>
	);
};

export default HomePage;

export const homeFragment = graphql`
	{
		posts: allMdx(
			limit: 5
			filter: { fileAbsolutePath: { regex: "/posts/.*.md/" } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			...MDXListingFragment
		}

		bookmarks: allMdx(
			limit: 5
			filter: { fileAbsolutePath: { regex: "/bookmarks/.*.md/" } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			...MDXListingFragment
		}
	}
`;
