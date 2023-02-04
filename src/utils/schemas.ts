import { z } from "zod";

export const MarkdownInstanceSchema = z.object({
	frontmatter: z.record(z.any()),
	file: z.string(),
	url: z.string().optional(),
}) satisfies z.ZodType<Partial<MD>>;

export const authorSchema = z.object({
	name: z.string(),
	url: z.ostring(),
});

export type Author = z.infer<typeof authorSchema>;

export const webMentionTypeSchema = z.enum([
	"in-reply-to",
	"like-of",
	"repost-of",
	"bookmark-of",
	"mention-of",
	"rsvp",
]);

export type WebMentionType = z.infer<typeof webMentionTypeSchema>;

export const webMentionLinkSchema = z.object({
	types: z
		.array(webMentionTypeSchema)
		.or(webMentionTypeSchema)
		.transform(x => (Array.isArray(x) ? x : [x])),
	title: z.ostring(),
	link: z.ostring(),
});

export type WebMentionLink = z.infer<typeof webMentionLinkSchema>;

export const collectionDataSchema = z.object({
	layout: z.string(),
	collectionSlug: z.string(),
	collection: z.string(),
	collectionName: z.string(),
});

export type CollectionData = z.infer<typeof collectionDataSchema>;

export const frontmatterSchema = z.object({
	title: z.string(),
	authors: z.array(authorSchema).optional().or(z.null()),
	date: z
		.string()
		.transform(value => (typeof value === "string" ? new Date(value) : value))
		.or(z.date()),
	excerpt: z.ostring().or(z.null()),
	draft: z.oboolean().or(z.null()),
	// collection data
	collectionData: collectionDataSchema.optional().or(z.null()),
	// WebMention stuff
	links: z.array(webMentionLinkSchema).optional().or(z.null()),
	// IndieWeb stuff
	syndicationLinks: z.array(z.string()).optional().or(z.null()),
	twitterContent: z.ostring().or(z.null()),
	mastodonContent: z.ostring().or(z.null()),
	mediumContent: z.ostring().or(z.null()),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;

export const likeFrontmatterSchema = frontmatterSchema.extend({
	likeOf: z.string(),
	title: z.ostring(),
});

export type LikeFrontmatter = z.infer<typeof likeFrontmatterSchema>;

export const noteFrontmatterSchema = frontmatterSchema.extend({
	title: z.ostring(),
});

export type NoteFrontmatter = z.infer<typeof noteFrontmatterSchema>;
