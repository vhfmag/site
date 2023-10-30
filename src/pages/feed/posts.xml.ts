import rss, { pagesGlobToRssItems, type RSSOptions } from "@astrojs/rss";
import { mapValues } from "lodash-es";
import { description, title } from "../../data/site";
import { MarkdownInstanceSchema } from "../../utils/schemas";

export const get = async () =>
	rss({
		title,
		description,
		site: import.meta.env.SITE,
		items: (await pagesGlobToRssItems(
			mapValues(import.meta.glob("../posts/**/*.{md,mdx}"), value => async () => {
				value()
					.then(MarkdownInstanceSchema.parse)
					.then(page => ({
						...page,
						frontmatter: {
							...page.frontmatter,
							pubDate: page.frontmatter.pubDate ?? page.frontmatter.date,
						},
					}));
			}),
		)) as RSSOptions["items"],
		customData: `<language>pt-br</language>`,
	});
