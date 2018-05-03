import { createElement } from "react";
import rehypeReact from "rehype-react";
import { Figure } from "../components/Figure";

export const renderAst = new rehypeReact({
	createElement,
	components: { figure: Figure },
}).Compiler;
