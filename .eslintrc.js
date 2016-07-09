module.exports = {
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'env': {
		'browser': 1,
		'node': 1
	},
	'globals': {
		'Vue': 1,
		'$': 1
	},
	'extends': ['eslint:recommended'],
	'rules': {
		'indent': ['error', 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'no-cond-assign': ['error', 'always'],
		'no-constant-condition': ['error', {'checkLoops': false}],
		'no-console': 'off'
	}
};