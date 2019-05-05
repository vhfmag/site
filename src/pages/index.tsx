import * as React from "react";
import { graphql, Link } from "gatsby";
import DefaultLayout from "../components/layout";
import { IMarkdownEntryFragment } from "../fragments";
import { EntrySummary } from "../components/EntrySummary";
import { Folder } from "../utils/types";
import s from "./home.module.scss";

interface MarkdownEdges {
	edges: Array<{
		node: IMarkdownEntryFragment;
	}>;
}

interface HomePageProps {
	data: {
		posts: MarkdownEdges;
		bookmarks: MarkdownEdges;
		slides: MarkdownEdges;
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
		<section className={s.entrySection}>
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
					{list.edges.length >= 5 && (
						<li>
							<Link to={`/${sectionSlug}`}>Ver mais</Link>
						</li>
					)}
				</ul>
			</nav>
		</section>
	);
};

const HomePage = ({ data: { posts, bookmarks, slides } }: HomePageProps) => {
	const yearsOfExperience = Math.trunc(
		(Date.now() - new Date(2016, 2, 1).valueOf()) / (1e3 * 60 * 60 * 24 * 365),
	);

	return (
		<DefaultLayout>
			<h1>Home</h1>
			<p>
				Olá! Meu nome é Victor Magalhães. Sou um desenvolvedor de Salvador, Brasil e sou
				apaixonado pela Web, decentralização e privacidade. Tenho {yearsOfExperience} anos
				de experiência trabalhando com desenvolvimento front- e back-end.
			</p>
			<p>
				Outros tópicos que me interessam são programação funcional, teoria de sistemas de
				tipo, discutir filosofia e ciências humanas como se eu tivesse embasamento para
				isso, curtir foto de tatuagem, colagem e cerâmica e pagar de harebo fazendo trilhas.
			</p>

			<section className={s.section}>
				<HomeSection list={posts} sectionTitle="Últimos posts" sectionSlug="posts" />
				<HomeSection
					list={bookmarks}
					sectionTitle="Últimos bookmarks"
					sectionSlug="bookmarks"
				/>
				<HomeSection
					list={slides}
					sectionTitle="Últimas apresentações"
					sectionSlug="apresentacoes"
				/>
			</section>
		</DefaultLayout>
	);
};

export default HomePage;

export const homeFragment = graphql`
	{
		posts: allMdx(
			limit: 5
			filter: {
				fileAbsolutePath: { regex: "content/posts/.*.md/" }
				frontmatter: { draft: { ne: true } }
			}
			sort: { fields: frontmatter___date, order: DESC }
		) {
			...MDXListingFragment
		}

		bookmarks: allMdx(
			limit: 5
			filter: {
				fileAbsolutePath: { regex: "content/bookmarks/.*.md/" }
				frontmatter: { draft: { ne: true } }
			}
			sort: { fields: frontmatter___date, order: DESC }
		) {
			...MDXListingFragment
		}

		slides: allMdx(
			limit: 5
			filter: {
				fileAbsolutePath: { regex: "content/apresentacoes/.*.md/" }
				frontmatter: { draft: { ne: true } }
			}
			sort: { fields: frontmatter___date, order: DESC }
		) {
			...MDXListingFragment
		}
	}
`;
