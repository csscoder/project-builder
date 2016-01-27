var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var data = require('gulp-data');
var notify = require('gulp-notify');
var config = require('../config').jade;
var pkg = require('../../package.json');
var path = require('path');

gulp.task('jade', function () {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(data(function (file) {
			return {
				nameEnter: path.basename(file.history[0], '.jade'),
				namePr: pkg.title
			};
		}))
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest(config.dest));
});
