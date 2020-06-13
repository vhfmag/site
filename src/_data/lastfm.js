require("dotenv").config();

const { URLSearchParams } = require("url");
const fetch = require("make-fetch-happen").defaults({
	cacheManager: "./node_modules/.cache/lastfm-cache",
});
const _ = require("lodash");

const username = "vhfmag";
const DEFAULT_LIMIT = 10;

const apiBase = "http://ws.audioscrobbler.com/2.0";
const { LASTFM_API_KEY } = process.env;

/** @typedef {"overall" | "7day" | "1month" | "3month" | "6month" | "12month"} LastFmPeriod */

/**
 * @typedef LastFmFetchParams
 * @prop {string} method
 * @prop {"json" | "xml"} [format="json"]
 * @prop {number} [page=1]
 * @prop {number} [limit=50]
 */

/**
 * @param {LastFmFetchParams} params
 * @returns {Promise<any>}
 */
async function fetchLastFmData({ method, format = "json", limit = DEFAULT_LIMIT, ...otherParams }) {
	const params = new URLSearchParams({
		api_key: LASTFM_API_KEY,
		user: username,
		method,
		format,
		limit,
		...otherParams,
	});

	return fetch(`${apiBase}\?${params.toString()}`).then(res => {
		if (res.ok) {
			if (format === "json") {
				return res.json();
			} else {
				return res.text();
			}
		} else {
			throw new Error(`Status code ${res.status}: ${res.statusText}`);
		}
	});
}

/** @typedef {"small" | "medium" | "large" | "extralarge" | "mega"} ImageSize */
/** @typedef {{ size: ImageSize, '#text': string }} Image */

/**
 * @typedef PaginationAttr
 * @prop {string} page The current page number as a string. Starts at 1.
 * @prop {string} perPage
 * @prop {string} user
 * @prop {string} total
 * @prop {string} totalPages
 */

/**
 * @typedef BaseArtist
 * @prop {string} url
 * @prop {string} name
 * @prop {string} mbid
 */

/**
 * @typedef {BaseArtist & { image: Image[], playcount: string }} Artist
 */

/**
 * @typedef Album
 * @prop {BaseArtist} artist
 * @prop {Image[]} image
 * @prop {string} playcount
 * @prop {string} url
 * @prop {string} name
 * @prop {string} mbid
 */

/**
 * @template T
 * @typedef {Array<T & { '@attr': { rank: number } }>} RankingArray
 */

/**
 * @typedef {LastFmFetchParams & { period: LastFmPeriod, user: string }} UserTopParams
 */

/**
 * @param {UserTopParams} params
 * @returns {Promise<RankingArray<Album>>}
 */
const fetchTopAlbums = async params => {
	const ret = await fetchLastFmData({ method: "user.gettopalbums", ...params });
	return ret.topalbums.album;
};

/**
 * @param {UserTopParams} params
 * @returns {Promise<RankingArray<Artist>>}
 */
const fetchTopArtists = async params => {
	const ret = await fetchLastFmData({ method: "user.gettopartists", ...params });
	return ret.topartists.artist;
};

/**
 * @typedef Track
 * @prop {string} duration
 * @prop {string} playcount
 * @prop {string} mbid
 * @prop {string} name
 * @prop {string} url
 * @prop {BaseArtist} artist
 * @prop {Image[]} image
 */

/**
 * @param {UserTopParams} params
 * @returns {Promise<RankingArray<Track>>}
 */
const fetchTopTracks = async params => {
	const ret = await fetchLastFmData({ method: "user.gettoptracks", ...params });
	return ret.toptracks.track;
};

/**
 * @param {UserTopParams} params
 */
const fetchTopTags = async params => {
	const artists = await fetchTopArtists(params);

	const tagsWithDuplicates = (
		await Promise.all([
			...artists.map(a => fetchLastFmData({ method: "artist.gettoptags", mbid: a.mbid })),
		])
	)
		.map(r => r?.toptags?.tag)
		.filter(Boolean)
		.flat();

	const tags = _.map(_.groupBy(tagsWithDuplicates, "name"), (groupedArray, key) => ({
		name: key,
		url: groupedArray[0].url,
		count: _.sumBy(groupedArray, "count"),
	}));

	return _.sortBy(tags, tag => -tag.count).slice(0, params.limit || DEFAULT_LIMIT);
};

/**
 * @param {LastFmPeriod} period
 */
async function fetchAllTopDataForPeriod(period) {
	const [albums, artists, tracks, tags] = await Promise.all([
		fetchTopAlbums({ period }),
		fetchTopArtists({ period }),
		fetchTopTracks({ period }),
		fetchTopTags({ period, limit: 2 * DEFAULT_LIMIT }),
	]);

	return { albums, artists, tracks, tags };
}

module.exports = async function fetchAllLastFmData() {
	/** @type {LastFmPeriod[]} */
	const periods = ["7day", "1month", "12month", "overall"];
	const [weekly, monthly, yearly, overall] = await Promise.all(
		periods.map(period => fetchAllTopDataForPeriod(period)),
	);

	return {
		weekly,
		monthly,
		yearly,
		overall,
	};
};
