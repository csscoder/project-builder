var build = './build';
var src = './source';
var guide = './styleGuide';

module.exports = {

	build: build,
	src: src,
	guide: guide,

	stylus: {
		src: [src + '/styles/main.styl'],
		watch: [src + '/styles/**/*.styl'],
		dest: build + '/css',
		browsers: ['last 3 version'],
		styleGuide: guide + '/css'
	},

	browserSync: {
		server: {
			baseDir: build
		},
		port: 7777,
		browser: 'google chrome'
	},

	images: {
		src: src + '/img/**/*',
		dest: build + '/img',
		styleGuide: guide + '/img'
	},

	fonts: {
		src: src + '/fonts/**/*',
		dest: build + '/fonts'
	},

	jade: {
		src: [src + '/template/pages/*.jade'],
		watch: [src + '/template/**/*.jade'],
		dest: build
	},

	del: {
		build: build,
		styleGuide: guide
	}

};
