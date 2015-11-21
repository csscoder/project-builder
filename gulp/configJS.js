var build = './build';
var src = './source';
var libs = src + '/scripts/libs';
var modules = src + '/scripts/modules';

module.exports = {

	libs: {
		src: [
			libs + '/jquery/dist/jquery.js',
			libs + '/jquery-validation/dist/jquery.validate.js',
			libs + '/jquery-validation/src/localization/messages_ru.js',
			libs + '/owl.carousel/dist/owl.carousel.js',
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
