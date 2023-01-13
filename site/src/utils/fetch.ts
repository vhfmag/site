import { decorateWithPersistentCache } from "./cache";
import { decorateWithPooling } from "./pooling";

export const fetchWithPooling = decorateWithPooling(fetch);

export const fetchWithCacheAndPooling = decorateWithPersistentCache(
	input => {
		const url = typeof input !== "string" && "url" in input ? input.url : input.toString();
		const method = typeof input !== "string" && "method" in input ? input.method : "GET";
		return `${method} fetch to ${url}`;
	},
	(...args: Parameters<typeof fetch>) =>
		fetchWithPooling(...args).then(res => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(
					`Status code ${res.status}: ${res.statusText} for ${JSON.stringify(
						{ args },
						undefined,
						4,
					)}`,
				);
			}
		}),
);
