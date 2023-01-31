import { unified } from "unified";
import assert from "node:assert";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { visitParents } from "unist-util-visit-parents";

/** @type {import("@astrojs/markdown-remark").RemarkPlugin} */
const plugin = () => root => {
	console.dir({ root }, { depth: null });
	visitParents(
		root,
		node => node.type === "element" && node.tagName === "img",
		node => {
			assert(node.type === "element");
			assert(node.tagName === "img");

			node.properties ??= {};
			node.properties.loading = "lazy";
		},
	);

	visitParents(
		root,
		node => node.type === "element" && node.tagName === "iframe",
		(node, parents) => {
			console.log({ node, parents });
			assert(node.type === "element");
			assert(node.tagName === "iframe");

			const parent = parents.at(-1);
			assert(parent);

			if (parent.properties.class?.split(/\s+/g).includes("embed-container")) {
				return;
			}

			const index = parent.children.indexOf(node);
			assert(index !== -1);

			/** @type {import("hast").Element} */
			const wrapperNode = {
				tagName: "div",
				type: "element",
				properties: {
					class: "embed-container",
				},
				children: [node],
			};

			console.log({ node, parent, index, wrapperNode });
			const oldChildren = parent.children;

			parent.children.splice(index, 1, wrapperNode);

			console.log({ oldChildren, children: parent.children });
		},
	);

	return root;
};

const compiler = unified().use(rehypeParse).use(plugin).use(rehypeStringify);

console.log(
	compiler.processSync(`
<img src="a">
<iframe src="a"></iframe>
    `),
);
