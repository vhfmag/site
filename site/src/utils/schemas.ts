import { z } from "zod";

export const MarkdownInstanceSchema = z.object({
	frontmatter: z.record(z.any()),
	file: z.string(),
	url: z.string().optional(),
}) satisfies z.ZodType<Partial<MD>>;
