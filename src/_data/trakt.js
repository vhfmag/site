const Trakt = require("trakt.tv");
const PromisePool = require("@supercharge/promise-pool");
const { withCache } = require("../../utils/with-cache");

const trakt = new Trakt({
	client_id: process.env.TRACKT_CLIENT_ID,
	debug: true,
	plugins: {
		images: require("trakt.tv-images"),
	},
	options: {
		images: {
			tmdbApiKey: process.env.TMDB_API_KEY,
			fanartApiKey: process.env.FANART_API_KEY,
			tvdbApiKey: process.env.TVDB_API_KEY,
			smallerImages: true,
			cached: true,
		},
	},
});

const USERNAME = "vhfmag";

async function fetchImages(arr) {
	const { results, errors } = await PromisePool.for(arr)
		.withConcurrency(2)
		.process(el => {
			const type = el.show ? "show" : el.movie ? "movie" : null;
			if (!type)
				throw new Error(
					`Invalid el passed to fetchImages: ${JSON.stringify(el, undefined, 4)}`,
				);

			const ids = el[type].ids;

			return withCache(
				`trakt-image-${ids.trakt || ids.slug}`,
				trakt.images.get,
			)({ ...ids, type }).then(images => ({
				...el,
				images,
			}));
		});

	errors.forEach(e => console.error(e));

	return results;
}

function addMetadata(showOrMovie) {
	showOrMovie.type = showOrMovie.show
		? "show"
		: showOrMovie.movie
		? "movie"
		: "this-shouldnt-exist";
	showOrMovie.data = showOrMovie[showOrMovie.type];

	if (showOrMovie.data.ids.imdb) {
		showOrMovie.url = `https://www.imdb.com/title/${showOrMovie.data.ids.imdb}/`;
	} else if (showOrMovie.data.ids.slug) {
		showOrMovie.url = `https://trakt.tv/${showOrMovie.type}s/${showOrMovie.data.ids.slug}`;
	}

	showOrMovie.data.title = showOrMovie.data.title.replace(/&amp;/g, "&");

	return showOrMovie;
}

module.exports = async function fetchTracktData() {
	const [watchedShows, watchedMovies, watchlistShows, watchlistMovies] = (
		await Promise.all(
			[
				withCache(
					"trakt-watched-shows",
					trakt.users.watched,
				)({ username: USERNAME, type: "shows" }),
				withCache(
					"trakt-watched-movies",
					trakt.users.watched,
				)({ username: USERNAME, type: "movies" }),
				withCache(
					"trakt-watchlist-shows",
					trakt.users.watchlist,
				)({ username: USERNAME, type: "shows" }),
				withCache(
					"trakt-watchlist-movies",
					trakt.users.watchlist,
				)({ username: USERNAME, type: "movies" }),
			].map(p => p.then(fetchImages)),
		)
	).map(arr => arr.map(addMetadata));

	const watched = { shows: watchedShows, movies: watchedMovies };
	const watchlist = { shows: watchlistShows, movies: watchlistMovies };

	return { watched, watchlist };
};
