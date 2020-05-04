const gulp = require("gulp");
const gulpCache = require("gulp-cache");
const terser = require("terser");

const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const posthtml = require("gulp-posthtml");
const htmlnano = require("htmlnano");
const imgAutosize = require("posthtml-img-autosize");
const posthtmlWebp = require("posthtml-webp");
const inlineAssets = require("posthtml-inline-assets");

const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const connect = require("gulp-connect");

const filter = require("gulp-filter");
const concatCSS = require("gulp-concat-css");

const _ = require("lodash");

const fileCache = new gulpCache.Cache({
	cacheDirName: "gulp-cache",
	tmpDir: "./node_modules/.cache",
});

const minifyJs = _.memoize(function unmemoizedMinifyJs(unminifiedCode) {
	return terser.minify(unminifiedCode).code;
});

function css() {
	const layoutFilter = filter(["public/css/layout.css"], { restore: true });

	return gulp
		.src(["public/**/*.css", "!public/css/{cssremedy,utility}.css", "!public/fonts/*.css"], {
			since: gulp.lastRun(css),
		})
		.pipe(layoutFilter)
		.pipe(concatCSS("css/layout.css", { commonBase: "." }))
		.pipe(layoutFilter.restore)
		.pipe(postcss([postcssPresetEnv(), cssnano()]), { name: "css" })
		.pipe(gulp.dest("dist"));
}

function html() {
	return gulp
		.src("public/**/*.html", { since: gulp.lastRun(html) })
		.pipe(
			posthtml([
				posthtmlWebp({
					replaceExtension: true,
					extensionIgnore: ["svg", "gif", "webp"],
				}),
				imgAutosize({ processEmptySize: true }),
				inlineAssets({
					root: "./public",
					transforms: {
						image: false,
						style: false,
						favicon: {
							resolve(node) {
								return (
									node.tag === "link" &&
									node.attrs &&
									(node.attrs.rel.split(/\s+/).includes("icon") ||
										node.attrs.rel.split(/\s+/).includes("apple-touch-icon")) &&
									node.attrs.href &&
									node.attrs.href.split("?")[0]
								);
							},
							transform(node, data) {
								node.attrs.href = `data:${data.mime};base64,${data.buffer.toString(
									"base64",
								)}`;
							},
						},
						script: {
							resolve(node) {
								const condition =
									node.tag === "script" &&
									node.attrs &&
									"inline" in node.attrs &&
									node.attrs.src;

								if (condition) {
									return node.attrs.src.split("?")[0];
								} else {
									return false;
								}
							},
							transform(node, data) {
								delete node.attrs.src;
								delete node.attrs.inline;

								node.content = [minifyJs(data.buffer.toString("utf8"))];

								return node;
							},
						},
					},
				}),
				htmlnano(),
			]),
		)
		.pipe(gulp.dest("dist"));
}

function minifyImages() {
	return gulp
		.src("public/**/*.{jpg,jpeg,png,svg,gif,tiff,webp}", { since: gulp.lastRun(minifyImages) })
		.pipe(gulpCache(imagemin(), { name: "imagemin", fileCache }))
		.pipe(gulp.dest("dist"));
}

function convertToWebpAndMinifyImages() {
	return gulp
		.src("public/**/*.{jpg,jpeg,png,svg,gif,tiff}", {
			since: gulp.lastRun(convertToWebpAndMinifyImages),
		})
		.pipe(
			gulpCache(webp(), { name: "webp-convert", fileCache }),
			gulpCache(imagemin(), { name: "webp-imagemin", fileCache }),
		)
		.pipe(gulp.dest("dist"));
}

function otherwise() {
	return gulp
		.src(["public/**/*.{js,json,xml,otf,ttf,woff,woff2,webmanifest}", "public/.well-known/*"])
		.pipe(gulp.dest("dist"));
}

function watchOnly() {
	gulp.watch("public/*.css", css);
	gulp.watch("public/*.html", html);
	gulp.watch("public/**/*.{jpg,jpeg,png,svg,gif,webp}", images);
	gulp.watch("public/**/*.{js,json,xml,otf,ttf,woff,woff2,webmanifest}", otherwise);
}

function serveOnly(cb) {
	connect.server({ root: "dist", livereload: true });
}

function clearCache() {
	return gulpCache.clearAll();
}

exports.css = css;
exports.html = html;
exports.images = gulp.parallel(minifyImages, convertToWebpAndMinifyImages);
exports.otherwise = otherwise;
exports.watch = serveOnly;
exports["clear-cache"] = clearCache;

exports.default = gulp.parallel(css, html, minifyImages, convertToWebpAndMinifyImages, otherwise);
