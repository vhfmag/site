import { createElement } from "react";
import rehypeReact from "rehype-react";
import { Figure } from "../components/Figure";
import { Citation } from "../components/Citation";

export const renderAst = new rehypeReact({
	createElement,
	components: { figure: Figure, citation: Citation },
}).Compiler;
