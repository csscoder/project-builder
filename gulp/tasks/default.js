var runSequence = require('run-sequence');
var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('default', function () {
	return runSequence(
		'del',
		'image',
		[
			'jade',
			'jsLibs',
			'jsModule',
			'fonts',
			'stylus'
		]
	);
});

gulp.task('dev', function () {
	return runSequence('watch');
});

// Clean project
gulp.task('del', function (cb) {
	return del([config.del.build], cb);
});
