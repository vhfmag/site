import { createElement } from "react";
import rehypeReact from "rehype-react";
import { Figure } from "../components/Figure";

export const renderAst = rehypeReact({
	createElement,
	components: { figure: Figure },
});
