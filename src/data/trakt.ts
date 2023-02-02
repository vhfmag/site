import { PromisePool } from "minimal-promise-pool";
import Trakt, {
	BareEntityTypeMap,
	EntityType,
	NestedEntityTypeMap,
	TraktWatchedEntry,
	TraktWatchlistEntry,
} from "trakt.tv";
import TraktImages from "trakt.tv-images";
import { z } from "zod";
import { decorateWithPersistentCache } from "../utils/cache";
import { runInPromisePool } from "../utils/pooling";
import { assertIsNotNullish, isNotNullish } from "../utils/typeGuards";

const trakt = new Trakt({
	client_id: z.string().parse(process.env.TRACKT_CLIENT_ID),
	debug: true,
	plugins: {
		images: TraktImages,
	},
	options: {
		images: {
			tmdbApiKey: assertIsNotNullish(process.env.TMDB_API_KEY),
			fanartApiKey: assertIsNotNullish(process.env.FANART_API_KEY),
			// tvdbApiKey: process.env.TVDB_API_KEY,
			smallerImages: true,
			cached: true,
		},
	},
});

const USERNAME = "vhfmag";

async function fetchImages<
	T extends TraktWatchedEntry<EntityType> | TraktWatchlistEntry<EntityType>,
>(arr: T[]) {
	const promisePool = new PromisePool(2);
	const results = await Promise.allSettled(
		arr.map(el =>
			runInPromisePool(promisePool, () => {
				const type = "show" in el ? "show" : "movie" in el ? "movie" : null;
				const mediaData = "show" in el ? el.show : "movie" in el ? el.movie : null;
				if (!mediaData || !type)
					throw new Error(
						`Invalid el passed to fetchImages: ${JSON.stringify(el, undefined, 4)}`,
					);

				const ids = mediaData.ids;

				return decorateWithPersistentCache(
					`trakt-image-${ids.trakt || ids.slug}`,
					trakt.images.get,
				)({ ...ids, type }).then(images => ({
					...el,
					images,
				}));
			}),
		),
	);

	return results
		.map(result => {
			if (result.status === "rejected") {
				console.error(result.reason);
				return null;
			}

			return result.value;
		})
		.filter(isNotNullish);
}

function unreachable(errorMessage: string): never {
	throw new Error(`Unreachable state: ${errorMessage}`);
}

type EntityWithMetadata<T extends EntityType> = T extends any
	? { type: T; data: BareEntityTypeMap[T]; url: string | undefined }
	: never;

type ExtractEntityType<T extends NestedEntityTypeMap<EntityType>> =
	T extends NestedEntityTypeMap<"movie">
		? "movie"
		: T extends NestedEntityTypeMap<"show">
		? "show"
		: T extends NestedEntityTypeMap<"person">
		? "person"
		: never;

function addMetadata<T extends TraktWatchedEntry<EntityType> | TraktWatchlistEntry<EntityType>>(
	showOrMovie: T,
): T & EntityWithMetadata<ExtractEntityType<T>> {
	const type =
		"show" in showOrMovie
			? { type: "show" as const, data: showOrMovie.show }
			: "movie" in showOrMovie
			? { type: "movie" as const, data: showOrMovie.movie }
			: unreachable(
					"addMetadata was called with showOrMovie that has no movie or show field",
			  );

	let url = undefined;
	if (type.data.ids.imdb) {
		url = `https://www.imdb.com/title/${type.data.ids.imdb}/`;
	} else if (type.data.ids.slug) {
		url = `https://trakt.tv/${type}s/${type.data.ids.slug}`;
	}

	type.data.title = type.data.title.replace(/&amp;/g, "&");

	return { ...showOrMovie, ...type, url } as T & EntityWithMetadata<ExtractEntityType<T>>;
}

const cachedTrakt = {
	watchedShows: decorateWithPersistentCache("trakt-watched-shows", trakt.users.watched),
	watchedMovies: decorateWithPersistentCache("trakt-watched-movies", trakt.users.watched),
	showsToWatch: decorateWithPersistentCache("trakt-watchlist-shows", trakt.users.watchlist),
	moviesToWatch: decorateWithPersistentCache("trakt-watchlist-movies", trakt.users.watchlist),
};

export async function fetchTracktData() {
	const [watchedShows, watchedMovies, watchlistShows, watchlistMovies] = await Promise.all([
		cachedTrakt
			.watchedShows({ username: USERNAME, type: "shows" })
			.then(fetchImages)
			.then(res => res.map(addMetadata)),
		cachedTrakt
			.watchedMovies({ username: USERNAME, type: "movies" })
			.then(fetchImages)
			.then(res => res.map(addMetadata)),
		cachedTrakt
			.showsToWatch({ username: USERNAME, type: "shows" })
			.then(fetchImages)
			.then(res => res.map(addMetadata)),
		cachedTrakt
			.moviesToWatch({ username: USERNAME, type: "movies" })
			.then(fetchImages)
			.then(res => res.map(addMetadata)),
	] as const);

	const watched = { shows: watchedShows, movies: watchedMovies };
	const watchlist = { shows: watchlistShows, movies: watchlistMovies };

	return { watched, watchlist };
}

export type TraktData = Awaited<ReturnType<typeof fetchTracktData>>;
export type TraktDataEntry = TraktData["watched" | "watchlist"]["shows" | "movies"][number];
