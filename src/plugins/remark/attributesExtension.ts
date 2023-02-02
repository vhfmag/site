import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visitParents } from "unist-util-visit-parents";
import type { Content, Root } from "mdast";
import assert from "node:assert";
import { assertIsNotNullish, isNotNullish } from "../../utils/typeGuards";

const syntaxRegex =
	/\{((?:(?:[#.][\w-]+)|(?:[\w-]+=.*?))(?: (?:(?:[#.][\w-]+)|(?:[\w-]+=.*?)))*)\}/gm;

const regularAttributeRegex =
	/(?:[#.][\w-]+)|(?<identifier>[\w-]+)=(?:"(?<value1>.*?)"|'(?<value2>.*?)'|(?<value3>.*?))(?:$|(?= ))/g;

export const attributesExtensionPlugin: RemarkPlugin = () => {
	return ast => {
		visitParents(ast, "text", (textNode, parents) => {
			if (textNode.type !== "text") return;

			const matches = textNode.value.matchAll(syntaxRegex);

			for (const match of matches) {
				const attributes = Object.fromEntries(
					[...assertIsNotNullish(match[1]).matchAll(regularAttributeRegex)]
						.map(match => {
							const wholeMatch = match[0];
							if (!wholeMatch) return null;
							if (wholeMatch.startsWith("#")) return ["id", wholeMatch.slice(1)];
							if (wholeMatch.startsWith("."))
								return ["class", wholeMatch.split(".").join(" ")];

							assert(isNotNullish(match.groups));

							const { identifier } = match.groups;
							const value =
								match.groups.value1 ?? match.groups.value2 ?? match.groups.value3;
							assert(isNotNullish(identifier));
							assert(isNotNullish(value));

							return [identifier, value];
						})
						.filter(isNotNullish),
				);

				const parent = parents.at(-1);
				assert(
					isNotNullish(parent),
					"Visited node must have a parent since we're not visiting the root node",
				);

				let nodeToModify: Content | Root;
				if (match.index === 0) {
					const nodePosition = parent.children.indexOf(textNode as any);
					assert(nodePosition > 0, "nodePosition > 0");
					// previous sibling
					nodeToModify = parent.children[nodePosition - 1]!;
				} else if (match.index === textNode.value.length - match[0].length) {
					nodeToModify = parent;
				} else {
					throw new Error(
						`Unexpected placement of {} syntax: ${JSON.stringify(
							textNode.value,
						)} for match ${JSON.stringify(match[0])}`,
					);
				}

				nodeToModify.data ??= {};
				const hProperties = (nodeToModify.data.hProperties ??= {});
				Object.assign(hProperties, attributes);
			}

			textNode.value = textNode.value.replaceAll(syntaxRegex, "");
		});
		return ast;
	};
};
