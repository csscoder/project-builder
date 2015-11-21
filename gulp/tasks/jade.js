var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var notify = require('gulp-notify');
var config = require('../config').jade;
var pkg = require('../../package.json');

gulp.task('jade', function () {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(jade({
			pretty: true,
			data: {
				namePr: pkg.title
			}
		}))
		.pipe(gulp.dest(config.dest));
});
