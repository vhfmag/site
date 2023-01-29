import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import assert from "node:assert";
import * as fs from "node:fs";
import { visitParents } from "unist-util-visit-parents";
import { canonicalUrl } from "./src/data/site";
import { addAutomaticLayoutPlugin } from "./src/plugins/remark/collectionData";
import { attributesExtensionPlugin } from "./src/plugins/remark/attributesExtension";

const tagNames = new Set();
// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	site: canonicalUrl,
	markdown: {
		extendDefaultPlugins: true,
		remarkPlugins: [addAutomaticLayoutPlugin, attributesExtensionPlugin],
		rehypePlugins: [
			() => root => {
				visitParents(root, "element", node => {
					assert(node.type === "element");

					if (node.tagName !== "img") return;

					node.properties ??= {};
					node.properties.loading = "lazy";
				});

				visitParents(root, "element", (node, parents) => {
					console.log({ node, parents });
					assert(node.type === "element");
					tagNames.add(node.tagName);
					if (node.tagName !== "iframe") return;

					const parent = parents.at(-1);
					assert(parent);

					if (parent.properties.class?.split(/\s+/g).includes("embed-container")) {
						console.log("🎉".repeat(10), "parent contains class, aborting");
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

					parent.children.splice(index, 1, wrapperNode);
				});
				console.log({ tagNames: [...tagNames] });

				return root;
			},
		],
	},
});
