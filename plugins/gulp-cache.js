const { join: joinPaths } = require("path");

function generateAbsolutePaths(options) {
	const buildDirName = joinPaths(__dirname, "..");
	/** The absolute path to the build folder for Next.js. */
	const absoluteCacheDirPath = joinPaths(buildDirName, "node_modules");

	return {
		absolute: { cacheDir: absoluteCacheDirPath },
		buildDirName,
	};
}

module.exports = {
	// Restore file/directory cached in previous builds.
	// Does not do anything if:
	//  - the file/directory already exists locally
	//  - the file/directory has not been cached yet
	async onPreBuild({ utils, inputs }) {
		const paths = generateAbsolutePaths({ inputs });
		const success = await utils.cache.restore(paths.absolute.cacheDir);

		if (success) {
			console.log(
				`Restored the cached ${paths.buildDirName} folder at the location \`${paths.absolute.cacheDir}\``,
			);
		} else {
			console.log(
				`No cache found for the ${paths.buildDirName} folder at the location \`${paths.absolute.cacheDir}\``,
			);
		}
	},
	// Cache file/directory for future builds.
	// Does not do anything if:
	//  - the file/directory does not exist locally
	//  - the file/directory is already cached and its contents has not changed
	//    If this is a directory, this includes children's contents
	// Note that this will cache after the build, even if it fails, which fcould be unwanted behavior
	async onPostBuild({ utils, inputs }) {
		const paths = generateAbsolutePaths({ inputs });

		const success = await utils.cache.save(paths.absolute.cacheDir);

		if (success) {
			console.log(
				`Cached the ${paths.buildDirName} folder at the location \`${paths.absolute.cacheDir}\``,
			);
		} else {
			console.log(
				`No ${paths.buildDirName} folder at the location \`${paths.absolute.cacheDir}\``,
			);
		}
	},
};
