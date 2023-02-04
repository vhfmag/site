import type { WebMentionType } from "../utils/schemas";

type WmTypeMetadata = {
	slug: WebMentionType;
	singular: string;
	plural: string;
	connective: string;
};

const wmTypes = [
	{
		slug: "in-reply-to",
		singular: "Resposta",
		plural: "Respostas",
		connective: "a",
	},
	{
		slug: "like-of",
		singular: "Curtida",
		plural: "Curtidas",
		connective: "de",
	},
	{
		slug: "repost-of",
		singular: "Repostagem",
		plural: "Repostagens",
		connective: "de",
	},
	{
		slug: "bookmark-of",
		singular: "Bookmark",
		plural: "Bookmarks",
		connective: "de",
	},
	{
		slug: "mention-of",
		singular: "Menção",
		plural: "Menções",
		connective: "de",
	},
	{
		slug: "rsvp",
		singular: "Confirmação",
		plural: "Confirmações",
		connective: "para",
	},
] as const satisfies readonly WmTypeMetadata[];

export const wmTypeMap = new Map(wmTypes.map(wmType => [wmType.slug, wmType] as const));
