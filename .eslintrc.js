module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['prettier', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['prettier','react'],
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
		],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: true,
      },
    ],
    'no-multi-spaces': 'error',
		'no-console': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 0,
    'linebreak-style': 'off',
    'indent': 'off',
    "require-await": "off",
		"import/prefer-default-export": "off",
		"babel/new-cap": "off",
		"import/no-unassigned-import": "off",
		"react/prop-types": "off",
		"no-console": "warn",
		"no-nested-ternary": "off",
		"jest/no-disabled-tests": "off",
		"complexity": [
				"error",
				12
			],
		"react/no-did-update-set-state": "off",
		"react/prefer-stateless-function": "off",
		"react/no-did-mount-set-state": "off",
    'prettier/prettier': [
      'warn',
      {
        "endOfLine":"auto",
        "bracketSpacing": true,
        "printWidth": 85,
        "tabWidth": 2,
        "semi": true,
        "jsxBracketSameLine": true,
        "jsxSingleQuote": false,
        "singleQuote": true
      }
    ]
  },
};
