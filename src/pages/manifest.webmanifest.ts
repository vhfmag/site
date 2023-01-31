import { title } from "../data/site";
import { light } from "../data/theme";

export const get = () => {
	return {
		body: JSON.stringify({
			name: title,
			short_name: title,
			start_url: "/",
			background_color: light.backgroundColor,
			theme_color: light.themeColor,
			display: "minimal-ui",
			lang: "pt-BR",
			icons: [
				{
					src: "icons/icon-48x48.png",
					sizes: "48x48",
					type: "image/png",
				},
				{
					src: "icons/icon-72x72.png",
					sizes: "72x72",
					type: "image/png",
				},
				{
					src: "icons/icon-96x96.png",
					sizes: "96x96",
					type: "image/png",
				},
				{
					src: "icons/icon-144x144.png",
					sizes: "144x144",
					type: "image/png",
				},
				{
					src: "icons/icon-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "icons/icon-256x256.png",
					sizes: "256x256",
					type: "image/png",
				},
				{
					src: "icons/icon-384x384.png",
					sizes: "384x384",
					type: "image/png",
				},
				{
					src: "icons/icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
			],
		}),
	};
};
