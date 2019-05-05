import * as React from "react";
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
import s from "./resume.module.scss";

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
		<div className={s.experience} key={company!}>
			<h4>{link ? <a href={link}>{company}</a> : company}</h4>
			<img src={require(`../assets${image}`)} alt={company!} />
			<div className={s.experienceInfo}>
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
			</div>
			{projects && (
				<>
					<h5>Projetos</h5>
					<dl className={s.experienceProjects}>
						{projects.filter(isNotNullish).map(({ name, url, description }) => (
							<React.Fragment key={name!}>
								<dt>
									<a href={url!}>{name}</a>
								</dt>
								{description && <dd>{description}</dd>}
							</React.Fragment>
						))}
					</dl>
				</>
			)}
			{expSkills && (
				<>
					<h5>Tecnologias e habilidades</h5>
					<ul className={s.experienceSkills}>
						{expSkills.map(skill => (
							<li key={skill!}>{skill}</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

const ResumePage: React.SFC<IResumePageProps> = ({
	data: { experiencesJson: experiences, interestsJson: interests, skillsJson: skills },
}) => (
	<DefaultLayout className={s.layout}>
		<Helmet title="Currículo" />
		<h1>Currículo</h1>
		<h2>Competências</h2>
		<div className={s.listWrapper}>
			<div className={s.list} data-columns={2}>
				<h3>Habilidades técnicas</h3>
				<ul>
					{skills.technical!.map(skill => (
						<li key={skill!.name!}>{skill!.name}</li>
					))}
				</ul>
			</div>
			<div className={s.list} data-columns={1}>
				<h3>Soft skills</h3>
				<ul>
					{skills.soft!.map(skill => (
						<li key={skill!.name!}>{skill!.name}</li>
					))}
				</ul>
			</div>
			<div className={s.list} data-columns={3}>
				<h3>Demais interesses</h3>
				<ul>
					{interests.subjects!.map(skill => (
						<li key={skill!.name!}>{skill!.name}</li>
					))}
				</ul>
			</div>
		</div>
		<h2>Experiências</h2>
		{experiences.work!.filter(isNotNullish).map(WorkExperience)}
	</DefaultLayout>
);

export default ResumePage;
