import rss from "@astrojs/rss";
import { description, title } from "../../data/site";

export const get = () =>
	rss({
		title,
		description,
		site: import.meta.env.SITE,
		items: import.meta.glob("../posts/**/*.{md,mdx}"),
		customData: `<language>pt-br</language>`,
	});
