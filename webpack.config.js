'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
let path = require('path');

module.exports = {
	context: path.resolve('source'),
	entry: {
		index: './js/entry/home',
		bundle: './js/entry/bundle',
	},

	output: {
		path: path.resolve('build'),
		filename: 'js/[name].js'
	},

	// watch: NODE_ENV == 'development',

	devtool: NODE_ENV == 'development' ? 'inline-module-source-map' : null,

	watchOptions: {
		aggregateTimeout: 100
	},

	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: [
			'',
			'.js'
		],
		root: path.resolve('source/vendor'),
		alias: {
			jquery: 'jquery/dist/jquery'
		}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: [
					/vendor/,
					/node_modules/
				],
				query: {
					presets: ['es2015']
				}
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'bundle',
			minChunks: 3
		}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	]

};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}
