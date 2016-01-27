var gulp = require('gulp');
var config = require('../config');
var configJS = require('../configJS');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('watch-file', function () {
	gulp.watch(config.stylus.watch, ['stylus-dev']);
	gulp.watch(config.jade.watch, ['jade']);
	gulp.watch(configJS.app.watch, ['webpack']);
	gulp.watch(config.jade.dest + '/*.html')
		.on('change', browserSync.reload);
	gulp.watch(configJS.app.dest)
		.on('change', browserSync.reload);
});
gulp.task('watch', function () {
	return runSequence(
		[
			'stylus-dev',
			'jade',
			'browserSync',
			'image',
			'fonts'
		],
		'watch-file'
	);
});
