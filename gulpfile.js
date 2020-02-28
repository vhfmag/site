const gulp = require("gulp");

const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const posthtml = require("gulp-posthtml");
const htmlnano = require("htmlnano");
const imgAutosize = require("posthtml-img-autosize");

const connect = require("gulp-connect");

function css() {
	return gulp
		.src("public/**/*.css", { since: gulp.lastRun(css) })
		.pipe(postcss([postcssPresetEnv(), cssnano()]))
		.pipe(gulp.dest("dist"));
}

// use posthtml-webp when there is lazy loading solution for <picture>
// how to extract critical css?
function html() {
	return gulp
		.src("public/**/*.html", { since: gulp.lastRun(html) })
		.pipe(posthtml([imgAutosize(), htmlnano()]))
		.pipe(gulp.dest("dist"));
}

function otherwise() {
	return gulp
		.src(
			[
				"public/**/*.js",
				"public/**/*.json",
				"public/**/*.xml",
				"public/**/*.otf",
				"public/**/*.ttf",
				"public/**/*.woff",
				"public/**/*.woff2",
				"public/**/*.webmanifest",
			],
			{ since: gulp.lastRun(otherwise) },
		)
		.pipe(gulp.dest("dist"));
}

function watchOnly() {
	gulp.watch("public/*.css", css);
	gulp.watch("public/*.html", html);
	gulp.watch(
		[
			"public/**/*.js",
			"public/**/*.json",
			"public/**/*.xml",
			"public/**/*.otf",
			"public/**/*.ttf",
			"public/**/*.woff",
			"public/**/*.woff2",
			"public/**/*.webmanifest",
		],
		otherwise,
	);
}

function serveOnly(cb) {
	connect.server({ root: "dist", livereload: true });
}

function watchAndServe() {
	return gulp.parallel(serveOnly, watchOnly);
}

exports.watch = serveOnly;
exports.default = gulp.parallel(css, html, images, otherwise);
