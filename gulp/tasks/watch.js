var gulp = require('gulp');
var config = require('../config');
var configJS = require('../configJS');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('watch-file', function () {
	gulp.watch(config.stylus.watch, ['stylus-dev']);
	gulp.watch(configJS.libs.watch, ['jsLibs']);
	gulp.watch(configJS.app.watch, ['jsModule-dev']);
	gulp.watch(config.jade.watch, ['jade']);
	gulp.watch(config.jade.dest + '/*.html')
		.on('change', browserSync.reload);
	gulp.watch(configJS.libs.dest + '/*.js')
		.on('change', browserSync.reload);
});
gulp.task('watch', function () {
	return runSequence(
		[
			'stylus-dev',
			'jade',
			'browserSync',
			'jsLibs',
			'jsModule-dev',
			'image',
			'fonts'
		],
		'watch-file'
	);
});
