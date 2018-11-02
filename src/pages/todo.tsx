import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { backgroundColor } from "../utils/consts";
import FlipMove from "react-flip-move";
import DefaultLayout from "../components/layout";
import { graphql } from "gatsby";
import { TodoJson } from "../graphql-types";

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
	margin: -4pt;

	& > * {
		margin: 4pt;
	}
`;

const TodoTag = styled.div`
	padding: 0 4pt;
	font-size: 0.8em;
	border-radius: 4pt;
	font-variant: small-caps;
	color: ${backgroundColor};
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

class Todo extends React.PureComponent<ITodoItemProps> {
	public render() {
		const { tags, title, currentTag, toggleCurrentTag } = this.props;

		return (
			<TodoWrapper>
				<TodoTitle>
					<p dangerouslySetInnerHTML={{ __html: title! }} />
				</TodoTitle>
				{tags &&
					tags.length > 0 && (
						<TodoTags>
							{tags.map(tag => (
								<TodoTag
									key={tag!}
									className={
										(currentTag === tag && "active") ||
										undefined
									}
									onClick={() => toggleCurrentTag(tag!)}
								>
									{tag}
								</TodoTag>
							))}
						</TodoTags>
					)}
			</TodoWrapper>
		);
	}
}

interface ITodoPageState {
	currentTag?: string;
}

export default class TodoPage extends React.Component<
	ITodoPageProps,
	ITodoPageState
> {
	public state: ITodoPageState = {};

	private toggleCurrentTag = (newTag: string) => {
		this.setState(({ currentTag: oldTag }) => ({
			currentTag: newTag === oldTag ? undefined : newTag,
		}));
	};

	private get todos() {
		return this.props.data.allTodoJson.edges.map(({ node }) => node);
	}

	private isTodoHighlighted = ({ tags }: TodoJson): boolean => {
		const { currentTag } = this.state;

		if (currentTag && tags) {
			return tags.includes(currentTag);
		} else {
			return false;
		}
	};

	private todoComparer = (t1: TodoJson, t2: TodoJson): number => {
		const [h1, h2] = [t1, t2].map(this.isTodoHighlighted);

		if (h1 === h2) {
			return 0;
		} else if (h1) {
			return -1;
		} else {
			return 1;
		}
	};

	public render() {
		const { todos } = this;

		const todosDone = todos.filter(todo => todo.done);
		const todosUndone = todos.filter(todo => !todo.done);

		return (
			<DefaultLayout>
				<Helmet title="todo" />
				<h2>quem sabe um dia</h2>
				<StyledTodoList>
					<FlipMove typeName={null}>
						{todosUndone.sort(this.todoComparer).map(todo => (
							<Todo
								{...todo}
								key={todo.title!}
								currentTag={this.state.currentTag}
								toggleCurrentTag={this.toggleCurrentTag}
							/>
						))}
					</FlipMove>
				</StyledTodoList>
				<hr />
				<h2>feitos!</h2>
				<StyledTodoList>
					<FlipMove typeName={null}>
						{todosDone.sort(this.todoComparer).map(todo => (
							<Todo
								{...todo}
								key={todo.title!}
								currentTag={this.state.currentTag}
								toggleCurrentTag={this.toggleCurrentTag}
							/>
						))}
					</FlipMove>
				</StyledTodoList>
			</DefaultLayout>
		);
	}
}

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
