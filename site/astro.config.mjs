import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { canonicalUrl } from "./src/data/site";
import { addAutomaticLayoutPlugin } from "./src/plugins/remark/collectionData";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()],
	site: canonicalUrl,
	markdown: {
		remarkPlugins: [addAutomaticLayoutPlugin],
	},
});
