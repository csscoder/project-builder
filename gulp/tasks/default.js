var runSequence = require('run-sequence');
var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('default', function () {
	return runSequence(
		'image',
		[
			'jade',
			'stylus',
			'jsLibs',
			'jsModule',
			'fonts'
		]
	);
});

gulp.task('dev', function () {
	return runSequence('watch');
});

gulp.task('styleguide', function () {
	return runSequence(
		'image:styleGuide',
		'stylus-styleGuide',
		[
			'styleguide:build',
			'styleguide:applystyles',
		],
		'styleguide:open'
	);
});

// Clean project
gulp.task('del:build', function (cb) {
	return del([config.del.build], cb);
});

gulp.task('del:styleGuide', function (cb) {
	return del([config.del.styleGuide], cb);
});

gulp.task('del', function () {
	return runSequence(
		[
			'del:build',
			'del:styleGuide'
		]
	);
});
