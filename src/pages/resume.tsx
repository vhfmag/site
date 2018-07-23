import * as React from "react";
import { responsiveBreakpoint } from "../utils/consts";
import styled from "styled-components";
import {
	SkillsJson,
	ExperiencesJson,
	CompetencesJson,
	InterestsJson,
} from "../graphql-types";
import { Helmet } from "react-helmet";
import DefaultLayout from "../components/layout";
import { graphql } from "gatsby";

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
				tasks
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

		@media (min-width: ${responsiveBreakpoint}) {
			grid-auto-flow: column;
			grid-template-rows: auto auto;
		}

		@media (max-width: ${responsiveBreakpoint}) {
			grid-auto-flow: row;
			grid-template-columns: auto auto;
		}
	}
`;

const innerListMargin = "8pt";

const StyledListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: -${innerListMargin};
`;

const StyledList = styled.div`
	--columns: ${(prop: any) => prop["data-columns"]};

	ul {
		display: grid;
		margin: ${innerListMargin};
		margin-left: 1em;
		padding: 0;
		grid-gap: 4pt;
		grid-template-columns: repeat(var(--columns), 1fr);
	}
`;

const StyledExperienceInfo = styled.div``;

const StyledExperience = styled.div`
	display: grid;
	grid-gap: 10px 20px;
	grid-template-rows: repeat(3, auto);
	grid-template-columns: 150px auto;

	img {
		grid-row: 1/3;
		grid-column: 1;
	}

	h4 {
		margin: 0;
	}

	h4,
	${StyledExperienceInfo} {
		grid-column: 2;
	}

	ul {
		grid-column: 1/3;
	}
`;

export default class ResumePage extends React.Component<IResumePageProps> {
	public render() {
		const {
			allCompetencesJson: { edges: competences },
			experiencesJson: experiences,
			interestsJson: interests,
			skillsJson: skills,
		} = this.props.data;

		return (
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
						<h4>Interesses</h4>
						<ul>
							{interests.subjects!.map(skill => (
								<li key={skill!.name!}>{skill!.name}</li>
							))}
						</ul>
					</StyledList>
				</StyledListWrapper>
				<h2>Experiências</h2>
				{experiences.work!.map(experience => {
					const {
						company,
						image,
						link,
						period,
						role,
						tasks,
					} = experience!;

					return (
						<StyledExperience key={company!}>
							<h4>
								{link ? <a href={link}>{company}</a> : company}
							</h4>
							<img
								src={require(`../assets${image}`)}
								alt={company!}
							/>
							<StyledExperienceInfo>
								<div>{role}</div>
								<div>{period}</div>
							</StyledExperienceInfo>
							<ul>
								{tasks!.map(task => (
									<li key={task!}>{task}</li>
								))}
							</ul>
						</StyledExperience>
					);
				})}
			</DefaultLayout>
		);
	}
}
