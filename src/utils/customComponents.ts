import { createElement } from "react";
import rehypeReact from "rehype-react";
import { Figure } from "../components/articles/Figure";
import { Citation } from "../components/articles/Citation";
import { Highlight } from "../components/articles/Highlight";

export const rehype = new rehypeReact({
	createElement,
	components: { figure: Figure, citation: Citation, highlight: Highlight },
});

console.log({ rehype });

export const renderAst = rehype.Compiler;
