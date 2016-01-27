var runSequence = require('run-sequence');
var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('default', function () {
	return runSequence(
		'image',
		[
			'jade',
			'webpack',
			'stylus',
			'fonts'
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
