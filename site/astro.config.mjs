import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkGFMPlugin from "remark-gfm";
import { canonicalUrl } from "./src/data/site";
import { addAutomaticLayoutPlugin } from "./src/plugins/remark/collectionData";
import { attributesExtensionPlugin } from "./src/plugins/remark/attributesExtension";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	site: canonicalUrl,
	markdown: {
		remarkPlugins: [remarkGFMPlugin, addAutomaticLayoutPlugin, attributesExtensionPlugin],
	},
});
