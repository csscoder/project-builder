var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./../../webpack.config.js');

var myWebpackConfig = Object.create(webpackConfig);
var webpackCompiler = webpack(myWebpackConfig);

gulp.task('webpack', function (callback) {
	webpackCompiler.run(function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack', err);
		}
		gutil.log('[webpack]', stats.toString({
			colors: true
		}));
		callback();
	});
});
