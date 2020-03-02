const gulp = require("gulp");
const gulpCache = require("gulp-cache");

const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const posthtml = require("gulp-posthtml");
const htmlnano = require("htmlnano");
const imgAutosize = require("posthtml-img-autosize");
const posthtmlWebp = require("posthtml-webp");

const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const connect = require("gulp-connect");

function css() {
	return gulp
		.src("public/**/*.css", { since: gulp.lastRun(css) })
		.pipe(postcss([postcssPresetEnv(), cssnano()]))
		.pipe(gulp.dest("dist"));
}

function html() {
	return gulp
		.src("public/**/*.html", { since: gulp.lastRun(html) })
		.pipe(
			posthtml([
				posthtmlWebp({ replaceExtension: true, extensionIgnore: ["svg", "gif", "webp"] }),
				imgAutosize(),
				htmlnano(),
			]),
		)
		.pipe(gulp.dest("dist"));
}

function images() {
	return gulp
		.src("public/**/*.{jpg,jpeg,png,svg,gif,tiff,webp}", { since: gulp.lastRun(images) })
		.pipe(gulpCache(webp(), { name: "webp" }), gulpCache(imagemin(), { name: "imagemin" }))
		.pipe(gulp.dest("dist"));
}

function otherwise() {
	return gulp
		.src("public/**/*.{js,json,xml,otf,ttf,woff,woff2,webmanifest}", {
			since: gulp.lastRun(otherwise),
		})
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

function watchAndServe() {
	return gulp.parallel(serveOnly, watchOnly);
}

exports.css = css;
exports.html = html;
exports.images = images;
exports.watch = serveOnly;

exports.default = gulp.parallel(css, html, images, otherwise);
