var build = './build';
var src = './source';
var libs = src + '/vendor';
var scripts = src + '/scripts/';

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
			scripts + '/**/*.js'
		],
		watch: [scripts + '/**/*.js'],
		dest: build + '/js'
	}

};
