import * as React from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import { Helmet } from "react-helmet";

interface ITodoPageProps {
	data: {
		allTodoJson: {
			edges: Array<{
				node: {
					title: string;
					tags: string[] | null;
				};
			}>;
		};
	};
}

const StyledTodoList = styled.ul`
	&,
	li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	display: grid;
	grid-gap: 2pt;
`;

export default class TodoPage extends React.Component<ITodoPageProps> {
	public render() {
		const todos = this.props.data.allTodoJson.edges;

		return (
			<>
				<Helmet title="todo" />
				<h2>quem sabe um dia</h2>
				<StyledTodoList>
					{todos.map(({ node: { title } }) => (
						<li key={title}>
							<Markdown source={title} />
						</li>
					))}
				</StyledTodoList>
			</>
		);
	}
}

export const pageQuery = graphql`
	query TodoPage {
		allTodoJson {
			edges {
				node {
					title
					tags
				}
			}
		}
	}
`;
