var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var config = require('../config').images;

var imageOption = {
	progressive: true,
	svgoPlugins: [{removeViewBox: false}]
};

gulp.task('image', function () {
	return gulp.src(config.src)
		.pipe(newer(config.dest))
		.pipe(imagemin(imageOption))
		.pipe(gulp.dest(config.dest));
});

gulp.task('image:styleGuide', function () {
	return gulp.src(config.src)
		.pipe(newer(config.dest))
		.pipe(imagemin(imageOption))
		.pipe(gulp.dest(config.styleGuide));
});
