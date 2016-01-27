var build = './build';
var src = './source';
var jsCode = src + '/js/';
var modules = src + '/scripts/modules';

module.exports = {
	app: {
		watch: [jsCode + '/**/*.js'],
		dest: [build + '/**/*.js'],
	}
};
