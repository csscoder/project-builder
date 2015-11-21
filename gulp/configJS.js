var build = './build';
var src = './source';
var libs = src + '/scripts/libs';
var modules = src + '/scripts/modules';

module.exports = {

	libs: {
		src: [
			libs + '/jquery/dist/jquery.js'
		],
		watch: [libs + '/**/*.js'],
		dest: build + '/js'
	},

	app: {
		src: [
			modules + '/**/*.js'
		],
		watch: [modules + '/**/*.js'],
		dest: build + '/js'
	}

};
