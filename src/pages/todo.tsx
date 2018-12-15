import * as React from "react";
import styled from "../styles/styled";
import { Helmet } from "react-helmet";
import FlipMove from "react-flip-move";
import DefaultLayout from "../components/layout";
import { graphql } from "gatsby";
import { TodoJson } from "../graphql-types";
import { fromTheme } from "../styles/theme";

interface ITodoPageProps {
	data: {
		allTodoJson: {
			edges: Array<{
				node: TodoJson;
			}>;
		};
	};
}

const StyledTodoList = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	align-items: flex-start;

	margin: -4pt;

	&:not(:last-child) {
		margin-bottom: 16pt;
	}
`;

const TodoWrapper = styled.div`
	margin: 4pt;
	padding: 8pt;
	max-width: 500px;
	background-color: rgba(255, 255, 255, 0.04);
`;

const TodoTitle = styled.div`
	p {
		margin: 0;
	}
`;

const TodoTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: -8pt;

	& > * {
		margin: 8pt;
	}
`;

const TodoTag = styled.div`
	padding: 0 4pt;
	font-size: 0.8em;
	border-radius: 4pt;
	font-variant: small-caps;
	color: ${fromTheme("backgroundColor")};
	background-color: white;
	cursor: pointer;
	transition: opacity 0.5s ease;
	opacity: 0.8;

	&:hover {
		opacity: 0.9;
	}

	&:active,
	&.active {
		opacity: 1;
	}
`;

interface ITodoItemProps extends TodoJson {
	isHighlighted?: boolean;
	currentTag: string | undefined;
	toggleCurrentTag(tag: string): void;
}

const Todo: React.SFC<ITodoItemProps> = ({ tags, title, currentTag, toggleCurrentTag }) => (
	<TodoWrapper>
		<TodoTitle>
			<p dangerouslySetInnerHTML={{ __html: title! }} />
		</TodoTitle>
		{tags && tags.length > 0 && (
			<TodoTags>
				{tags.map(tag => (
					<TodoTag
						key={tag!}
						className={(currentTag === tag && "active") || undefined}
						onClick={() => toggleCurrentTag(tag!)}
					>
						{tag}
					</TodoTag>
				))}
			</TodoTags>
		)}
	</TodoWrapper>
);

const isTodoHighlighted = (currentTag: string | undefined) => ({ tags }: TodoJson): boolean => {
	if (currentTag && tags) {
		return tags.includes(currentTag);
	} else {
		return false;
	}
};

const todoComparer = (currentTag: string | undefined) => (t1: TodoJson, t2: TodoJson): number => {
	const [h1, h2] = [t1, t2].map(isTodoHighlighted(currentTag));

	if (h1 === h2) {
		return 0;
	} else if (h1) {
		return -1;
	} else {
		return 1;
	}
};

const TodoPage: React.SFC<ITodoPageProps> = ({ data: { allTodoJson } }) => {
	const [currentTag, setCurrentTag] = React.useState<string | undefined>(undefined);

	const todos = allTodoJson.edges.map(({ node }) => node);
	const toggleCurrentTag = (newTag: string) =>
		setCurrentTag(newTag === currentTag ? undefined : newTag);

	const todosDone = todos.filter(todo => todo.done);
	const todosUndone = todos.filter(todo => !todo.done);
	const comparer = todoComparer(currentTag);

	return (
		<DefaultLayout>
			<Helmet title="todo" />
			<h2>quem sabe um dia</h2>
			<StyledTodoList>
				<FlipMove typeName={null}>
					{todosUndone.sort(comparer).map(todo => (
						<Todo
							{...todo}
							key={todo.title!}
							currentTag={currentTag}
							toggleCurrentTag={toggleCurrentTag}
						/>
					))}
				</FlipMove>
			</StyledTodoList>
			<hr />
			<h2>feitos!</h2>
			<StyledTodoList>
				<FlipMove typeName={null}>
					{todosDone.sort(comparer).map(todo => (
						<Todo
							{...todo}
							key={todo.title!}
							currentTag={currentTag}
							toggleCurrentTag={toggleCurrentTag}
						/>
					))}
				</FlipMove>
			</StyledTodoList>
		</DefaultLayout>
	);
};

export default TodoPage;

export const todoFragment = graphql`
	fragment TodoItem on TodoJson {
		title
		tags
		done
	}
	query TodoPage {
		allTodoJson {
			edges {
				node {
					...TodoItem
				}
			}
		}
	}
`;
