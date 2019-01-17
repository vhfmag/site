const apiBase = "https://webmention.io/api/mentions.jf2";
const domain = "victormagalhaes.codes";
const token = process.env.GATSBY_WEBMENTIONIO_TOKEN;

export type WebMentionProperty = "in-reply-to" | "like-of" | "repost-of" | "mention-of" | "rsvp";

export type WebMention = { [K in WebMentionProperty]?: string } & {
	author: {
		type: "card";
		name: string;
		photo?: string;
		url: string;
	};
	content: {
		html?: string;
		text: string;
	};
	published?: string;
	type: string;
	url: string;
	["wm-id"]: number;
	["wm-private"]: boolean;
	["wm-property"]: WebMentionProperty;
	["wm-received"]: string;
	["wm-source"]: string;
	["wm-target"]: string;
};

export interface WMFeed {
	name: string;
	type: string;
	children: WebMention[];
}

export async function fetchWebMentions(page?: string) {
	if (!token) {
		throw new Error("Environment variable isn't available");
	}

	if (page) {
		page = (page + "/").replace(/\/+/g, "/");
	}

	const url = `${apiBase}?token=${token}&${page ? `target=${page}` : `domain=${domain}`}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(
			`Error when fetching WebMentions.\n${response.status}: ${response.statusText}`,
		);
	}

	const feed: WMFeed = await response.json();
	return feed;
}
