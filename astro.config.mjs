import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { defineConfig, envField } from "astro/config";
import assert from "node:assert";
import { visitParents } from "unist-util-visit-parents";
import { canonicalUrl } from "./src/data/site";
import { attributesExtensionPlugin } from "./src/plugins/remark/attributesExtension";
import { addAutomaticLayoutPlugin } from "./src/plugins/remark/collectionData";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap(), react(), partytown(), compress()],
	site: canonicalUrl,
	env: {
		schema: {
			FANART_API_KEY: envField.string({ context: "server", access: "secret" }),
			LASTFM_API_KEY: envField.string({ context: "server", access: "secret" }),
			TMDB_API_KEY: envField.string({ context: "server", access: "secret" }),
			TRACKT_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ["electron"],
		},
	},
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
