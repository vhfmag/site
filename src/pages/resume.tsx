import * as React from "react";
import { styled } from "linaria/react";
import {
	SkillsJson,
	ExperiencesJson,
	CompetencesJson,
	InterestsJson,
	Work_2,
} from "../graphql-types";
import { Helmet } from "react-helmet";
import DefaultLayout from "../components/layout";
import { graphql } from "gatsby";
import { isNotNullish } from "../utils/types";
import { fromTheme } from "../styles/theme";
import { responsiveBreakpoint } from "../utils/consts";

interface IResumePageProps {
	data: {
		skillsJson: SkillsJson;
		experiencesJson: ExperiencesJson;
		interestsJson: InterestsJson;
		allCompetencesJson: {
			edges: Array<{ node: CompetencesJson }>;
		};
	};
}

export const pageQuery = graphql`
	query ResumePage {
		skillsJson {
			languages {
				name
				intensity
			}
			technical {
				name
				intensity
			}
			soft {
				name
				intensity
			}
		}
		experiencesJson {
			work {
				company
				link
				image
				period
				skills
				projects {
					name
					url
					description
				}
				role
			}
		}
		interestsJson {
			subjects {
				name
				intensity
			}
		}
		allCompetencesJson {
			edges {
				node {
					name
					description
				}
			}
		}
	}
`;

const StyledCompetences = styled.section`
	dl {
		display: grid;
		grid-gap: 8pt;

		@media screen and (min-width: ${responsiveBreakpoint}) {
			grid-auto-flow: column;
			grid-template-rows: auto auto;
		}

		@media print, (max-width: ${responsiveBreakpoint}) {
			grid-auto-flow: row;
			grid-template-columns: auto auto;
		}
	}
`;

const innerListMargin = "8pt";

const StyledListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: ${innerListMargin};
	margin: -${innerListMargin};

	@media print {
		flex-direction: column;
	}
`;

const StyledList = styled.div`
	--columns: ${(prop: any) => prop["data-columns"]};

	@media print {
		--columns: 3;
		break-inside: avoid;
		page-break-inside: avoid;
	}

	ul {
		display: grid;
		margin: ${innerListMargin};
		margin-left: 1em;
		padding: 0;
		grid-gap: 4pt;
		grid-template-columns: repeat(var(--columns), 1fr);

		li {
			margin-left: 1em;
			margin-bottom: 0;
		}
	}
`;

const StyledExperienceInfo = styled.div``;

const StyledExperienceProjects = styled.dl`
	all: unset;

	dt {
		all: unset;
	}

	dd {
		all: unset;
	}

	dt,
	dd {
		display: block;
	}
`;

const StyledExperienceSkills = styled.ul`
	all: unset;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	margin: -4pt;

	li {
		all: unset;
		margin: 4pt;
		font-size: 0.8em;
		padding: 0.25em 0.5em;
		border-radius: 4pt;
		color: ${fromTheme("backgroundColor")};
		background-color: ${fromTheme("themeColor")};
	}
`;

const StyledExperience = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-rows: repeat(3, auto);
	grid-template-columns: 180px auto;

	img {
		grid-row: 1/3;
		grid-column: 1;
		align-self: stretch;
		justify-self: stretch;
		min-height: 100px;
	}

	h4 {
		all: unset;
		color: ${fromTheme("themeColor")};
		font-weight: bold;
		font-size: 1.2em;
	}

	h5 {
		all: unset;
		color: ${fromTheme("themeColor")};
		font-weight: bold;
	}

	h4,
	${StyledExperienceInfo} {
		grid-column: 2;
	}

	& + & {
		margin-top: 64pt;
	}
`;

const WorkExperience: React.SFC<Work_2> = ({
	company,
	image,
	link,
	period,
	role,
	skills: expSkills,
	projects,
}) => {
	const [start, end] = period!;

	return (
		<StyledExperience key={company!}>
			<h4>{link ? <a href={link}>{company}</a> : company}</h4>
			<img src={require(`../assets${image}`)} alt={company!} />
			<StyledExperienceInfo>
				<div>{role}</div>
				<div>
					{end ? (
						<>
							de {start} até {end}
						</>
					) : (
						<>desde {start}</>
					)}
				</div>
			</StyledExperienceInfo>
			{projects && (
				<>
					<h5>Projetos</h5>
					<StyledExperienceProjects>
						{projects.filter(isNotNullish).map(({ name, url, description }) => (
							<React.Fragment key={name!}>
								<dt>
									<a href={url!}>{name}</a>
								</dt>
								{description && <dd>{description}</dd>}
							</React.Fragment>
						))}
					</StyledExperienceProjects>
				</>
			)}
			{expSkills && (
				<>
					<h5>Tecnologias e habilidades</h5>
					<StyledExperienceSkills>
						{expSkills.map(skill => (
							<li key={skill!}>{skill}</li>
						))}
					</StyledExperienceSkills>
				</>
			)}
		</StyledExperience>
	);
};

const ResumePage: React.SFC<IResumePageProps> = ({
	data: {
		allCompetencesJson: { edges: competences },
		experiencesJson: experiences,
		interestsJson: interests,
		skillsJson: skills,
	},
}) => (
	<DefaultLayout>
		<Helmet title="Currículo" />
		<h1>Currículo</h1>
		<h2>Competências</h2>
		<h3>Como posso ser útil</h3>
		<StyledCompetences>
			<dl>
				{competences.map(({ node: { name, description } }) => (
					<React.Fragment key={name!}>
						<dt>{name}</dt>
						<dd>{description}</dd>
					</React.Fragment>
				))}
			</dl>
		</StyledCompetences>
		<h3>Habilidades e interesses</h3>
		<StyledListWrapper>
			<StyledList data-columns={2}>
				<h4>Habilidades técnicas</h4>
				<ul>
					{skills.technical!.map(skill => (
						<li key={skill!.name!}>{skill!.name}</li>
					))}
				</ul>
			</StyledList>
			<StyledList data-columns={1}>
				<h4>Soft skills</h4>
				<ul>
					{skills.soft!.map(skill => (
						<li key={skill!.name!}>{skill!.name}</li>
					))}
				</ul>
			</StyledList>
			<StyledList data-columns={3}>
				<h4>Demais interesses</h4>
				<ul>
					{interests.subjects!.map(skill => (
						<li key={skill!.name!}>{skill!.name}</li>
					))}
				</ul>
			</StyledList>
		</StyledListWrapper>
		<h2>Experiências</h2>
		{experiences.work!.filter(isNotNullish).map(WorkExperience)}
	</DefaultLayout>
);

export default ResumePage;
