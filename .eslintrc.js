module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-shadow': 'off',

		'prettier/prettier': 'off',
		'no-underscore-dangle': 'off',
		'padded-blocks': ['off'],
		'prefer-object-spread': ['off'],
		'object-curly-newline': ['off'],
		'func-names': ['error', 'never'],
		'consistent-return': ['off'],
		'no-restricted-syntax': ['off'],
		'guard-for-in': ['off'],
		'import/no-extraneous-dependencies': ['off'],
		'class-methods-use-this': ['off'],
		'linebreak-style': ['off'],
		'no-use-before-define': ['off'],
		'import/extensions': ['off'],
		'prefer-destructuring': [
			'error',
			{
				array: false,
				object: true
			},
			{
				enforceForRenamedProperties: false
			}
		]
	}
};
