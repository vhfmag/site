import * as React from "react";
import { Helmet } from "react-helmet";
import FlipMove from "react-flip-move";
import DefaultLayout from "../components/layout";
import { graphql } from "gatsby";
import { TodoJson } from "../graphql-types";
import s from "./todo.module.scss";

interface ITodoPageProps {
	data: {
		allTodoJson: {
			edges: Array<{
				node: TodoJson;
			}>;
		};
	};
}

interface ITodoItemProps extends TodoJson {
	isHighlighted?: boolean;
	currentTag: string | undefined;
	toggleCurrentTag(tag: string): void;
}

const Todo: React.SFC<ITodoItemProps> = ({ tags, title, currentTag, toggleCurrentTag }) => (
	<div className={s.todoWrapper}>
		<div className={s.title}>
			<p dangerouslySetInnerHTML={{ __html: title! }} />
		</div>
		{tags && tags.length > 0 && (
			<div className={s.tags}>
				{tags.map(tag => (
					<div
						key={tag!}
						className={`${s.tag} ${(currentTag === tag && "active") || ""}`}
						onClick={() => toggleCurrentTag(tag!)}
					>
						{tag}
					</div>
				))}
			</div>
		)}
	</div>
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
			<div className={s.todoList}>
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
			</div>
			<hr />
			<h2>feitos!</h2>
			<div className={s.todoList}>
				<FlipMove typeName={null}>
					{todosDone.sort(comparer).map(todo => (
						<div key={todo.title!}>
							<Todo
								{...todo}
								currentTag={currentTag}
								toggleCurrentTag={toggleCurrentTag}
							/>
						</div>
					))}
				</FlipMove>
			</div>
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
