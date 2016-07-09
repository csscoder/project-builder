var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../configJS');
var newer = require('gulp-newer');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

gulp.task('jsLibs',
	function () {
		return gulp.src(config.libs.src)
			.pipe(newer(config.libs.dest + '/libs.min.js'))
			.pipe(concat('libs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest(config.libs.dest));
	}
);

gulp.task('jsMain',
	function () {
		return gulp.src(config.app.src)
			.pipe(babel({presets: ['es2015']}))
			.pipe(concat('app.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest(config.app.dest));
	}
);

gulp.task('jsModule-dev',
	function () {
		return gulp.src(config.app.src)
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(babel({presets: ['es2015']}))
			.pipe(concat('app.min.js'))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(config.app.dest));
	}
);
