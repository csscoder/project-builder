var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config').images;

var imageOption = {
	svgoPlugins: [{removeViewBox: false}]
};

gulp.task('image', function () {
	return gulp.src(config.src)
		.pipe(
			imagemin(
				[imagemin.gifsicle(), imagemin.optipng(), imagemin.svgo()],
				imageOption
			)
		)
		.pipe(gulp.dest(config.dest));
});

