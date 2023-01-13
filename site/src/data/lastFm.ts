import { groupBy, map, sortBy, sumBy } from "lodash-es";
import type { Merge } from "type-fest";
import { z } from "zod";
import { fetchWithCache } from "../utils/cache";

const username = "vhfmag";
const DEFAULT_LIMIT = 10;

const apiBase = "https://ws.audioscrobbler.com/2.0";
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;

type LastFmPeriod = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";

interface LastFmFetchParams {
	method: string;
	format?: "json" | "xml";
	page?: number;
	limit?: number;
}

async function fetchLastFmData<AdditionalParams>({
	method,
	format = "json",
	limit = DEFAULT_LIMIT,
	page,
	...otherParams
}: Merge<AdditionalParams, LastFmFetchParams> & LastFmFetchParams) {
	const params = new URLSearchParams({
		api_key: z.string().parse(LASTFM_API_KEY),
		user: username,
		method,
		format,
		limit: String(limit),
		page: String(page),
		...otherParams,
	});

	return fetchWithCache(`${apiBase}\?${params.toString()}`);
}

type ImageSize = "small" | "medium" | "large" | "extralarge" | "mega";
type Image = { size: ImageSize; "#text": string };

// FIXME: needed?
interface PaginationAttr {
	/** The current page number as a string. Starts at 1. */
	page: string;
	perPage: string;
	user: string;
	total: string;
	totalPages: string;
}

interface BaseArtist {
	url: string;
	name: string;
	mbid: string;
}

interface Artist extends BaseArtist {
	image: Image[];
	playcount: string;
}

interface Album {
	artist: BaseArtist;
	image: Image[];
	playcount: string;
	url: string;
	name: string;
	mbid: string;
}

type RankingArray<T> = Array<T & { "@attr": { rank: number } }>;

interface UserTopParams extends LastFmFetchParams {
	period: LastFmPeriod;
	user?: string;
}

const fetchTopAlbums = async (
	params: Omit<UserTopParams, "method">,
): Promise<RankingArray<Album>> => {
	const ret = await fetchLastFmData({ method: "user.gettopalbums", ...params });
	return ret.topalbums.album;
};

const fetchTopArtists = async (
	params: Omit<UserTopParams, "method">,
): Promise<RankingArray<Artist>> => {
	const ret = await fetchLastFmData({ method: "user.gettopartists", ...params });
	return ret.topartists.artist;
};

interface Track {
	duration: string;
	playcount: string;
	mbid: string;
	name: string;
	url: string;
	artist: BaseArtist;
	image: Image[];
}

const fetchTopTracks = async (
	params: Omit<UserTopParams, "method">,
): Promise<RankingArray<Track>> => {
	const ret = await fetchLastFmData({ method: "user.gettoptracks", ...params });
	return ret.toptracks.track;
};

const fetchTopTags = async (params: Omit<UserTopParams, "method">) => {
	const artists = await fetchTopArtists(params);

	const tagsWithDuplicates = (
		await Promise.all([
			...artists.map(a =>
				fetchLastFmData<{ mbid: string }>({ method: "artist.gettoptags", mbid: a.mbid }),
			),
		])
	)
		.map(r => r?.toptags?.tag)
		.filter(Boolean)
		.flat();

	const tags = map(groupBy(tagsWithDuplicates, "name"), (groupedArray, key) => ({
		name: key,
		url: groupedArray[0].url,
		count: sumBy(groupedArray, "count"),
	}));

	return sortBy(tags, tag => -tag.count).slice(0, params.limit || DEFAULT_LIMIT);
};

async function fetchAllTopDataForPeriod(period: LastFmPeriod) {
	const [albums, artists, tracks, tags] = await Promise.all([
		fetchTopAlbums({ period }),
		fetchTopArtists({ period }),
		fetchTopTracks({ period }),
		fetchTopTags({ period, limit: 2 * DEFAULT_LIMIT }),
	]);

	return { albums, artists, tracks, tags };
}

export async function fetchAllLastFmData() {
	// FIXME: implement lock
	const periods = ["7day", "1month", "12month", "overall"] satisfies LastFmPeriod[];
	const [weekly, monthly, yearly, overall] = await Promise.all(
		periods.map(period => fetchAllTopDataForPeriod(period)),
	);

	return {
		weekly,
		monthly,
		yearly,
		overall,
	};
}
