declare module "trakt.tv" {
	import type { Merge, RequireAllOrNone } from "type-fest";

	export type EntityType = "show" | "movie" | "person";
	export type MediaType = "shows" | "movies";
	type MediaToEntityMap = {
		movies: "movie";
		shows: "show";
	};

	export type TraktPlugin<Options> = {
		init(trakt: TraktInstance<unknown>, options: Options): void;
	};

	export type TraktMovie = {
		title: string;
		year: number;
		ids: {
			trakt: number;
			slug: string;
			imdb?: string;
			tmdb?: number;
		};
	};

	export type TraktShow = {
		title: string;
		year: number;
		ids: {
			trakt: number;
			slug: string;
			imdb?: string;
			tmdb?: number;
			tvdb?: number;
		};
	};

	export type TraktPerson = {
		name: string;
		ids: {
			trakt: number;
			slug: string;
			imdb?: string;
			tmdb?: number;
			tvrage?: number;
		};
	};

	export type BareEntityTypeMap = {
		movie: TraktMovie;
		show: TraktShow;
		person: TraktPerson;
	};

	export type NestedEntityTypeMap<T extends EntityType> = {
		movie: { movie: TraktMovie };
		show: { show: TraktShow };
		person: { person: TraktPerson };
	}[T];

	export type TraktWatchlistEntry<T extends EntityType> = T extends unknown
		? {
				rank: number;
				id: number;
				/** Datetime ISO string */
				listed_at: string;
				notes?: string;
				type: T;
		  } & { [key in T]: BareEntityTypeMap[T] }
		: never;

	export type TraktWatchedEntry<T extends EntityType> = T extends unknown
		? {
				plays: number;
				/** Datetime ISO string */
				last_watched_at: string;
				/** Datetime ISO string */
				last_updated_at: string;
		  } & { [key in T]: BareEntityTypeMap[T] }
		: never;

	type BaseTraktPluginMap = Record<string, TraktPlugin<unknown>>;

	type StaticTraktInstance = {
		users: {
			watched: <T extends MediaType>(options: {
				username: string;
				type: T;
			}) => Promise<TraktWatchedEntry<MediaToEntityMap[T]>[]>;
			watchlist: <T extends MediaType>(options: {
				username: string;
				type: T;
			}) => Promise<TraktWatchlistEntry<MediaToEntityMap[T]>[]>;
		};
	};

	type DynamicTrackField<Plugins extends BaseTraktPluginMap> = {
		[key in keyof Plugins]: Omit<Plugins[key], "init">;
	};

	export type TraktInstance<Plugins extends BaseTraktPluginMap> = Merge<
		StaticTraktInstance,
		DynamicTrackField<Plugins>
	>;

	interface ITrakt {
		new <Plugins extends BaseTraktPluginMap>(
			config: RequireAllOrNone<
				{
					client_id: string;
					debug?: boolean;
					plugins?: Plugins;
					options?: {
						[pluginKey in keyof Plugins]: Parameters<Plugins[pluginKey]["init"]>[1];
					};
				},
				"plugins" | "options"
			>,
		): Merge<StaticTraktInstance, DynamicTrackField<Plugins>>;
	}

	const Trakt: ITrakt;
	export default Trakt;
}

declare module "trakt.tv-images" {
	import type { EntityType, TraktMovie, TraktPlugin, TraktShow } from "trakt.tv";

	type Options = {
		tmdbApiKey?: string;
		fanartApiKey?: string;
		tvdbApiKey?: string;
		smallerImages?: boolean;
		cached?: boolean;
	};

	export type MediaIds = Omit<TraktMovie["ids"], "trakt" | "slug"> &
		Omit<TraktShow["ids"], "trakt" | "slug"> & { id?: string | number };

	const TraktImagesPlugin: TraktPlugin<Options> & {
		get(
			params: {
				type: EntityType;
			} & MediaIds,
		): Promise<{ poster?: string; background?: string; profile?: string }>;
	};

	export default TraktImagesPlugin;
}
