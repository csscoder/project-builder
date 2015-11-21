var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var outputPath = './styleGuide/build';
var open = require('gulp-open');

gulp.task('styleguide:build', ['stylus-styleGuide'], function () {
	return gulp.src('./styleGuide/css/main.css')
		.pipe(styleguide.generate({
			title: 'CSSCODER Project Builder',
			server: true,
			rootPath: outputPath,
			readOnly: true,
			overviewPath: './README-StyleGuide.md'
		}))
		.pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function () {
	return gulp.src('./styleGuide/css/main.css')
		.pipe(styleguide.applyStyles())
		.pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:open', function () {
	gulp.src(__filename)
		.pipe(open({uri: 'http://localhost:3000'}));
});

