var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config');
var configJS = require('../configJS');

gulp.task('browserSync', function () {
	browserSync(config.browserSync);
	gulp.watch(config.jade.dest + '/*.html')
		.on('change', browserSync.reload);
	gulp.watch(configJS.libs.dest + '/*.js')
		.on('change', browserSync.reload);
});
