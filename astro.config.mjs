import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";
import react from "@astrojs/react";
import assert from "node:assert";
import { visitParents } from "unist-util-visit-parents";
import { canonicalUrl } from "./src/data/site";
import { addAutomaticLayoutPlugin } from "./src/plugins/remark/collectionData";
import { attributesExtensionPlugin } from "./src/plugins/remark/attributesExtension";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap(), astroImageTools, react(), partytown()],
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
					assert(node.type === "element");
					if (node.tagName !== "iframe") return;

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

					parent.children.splice(index, 1, wrapperNode);
				});

				return root;
			},
		],
	},
});
