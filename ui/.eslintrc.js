const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
	parser: "@babel/eslint-parser",
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"airbnb",
		"eslint-config-prettier",
		"plugin:redux-saga/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["jsx-a11y", "eslint-plugin-prettier", "react-hooks", "eslint-plugin-redux-saga"],
	rules: {
		"prettier/prettier": ["error", prettierOptions],
		"arrow-body-style": ["error", "as-needed"],
		"no-console": ["warn", { allow: ["error"] }],
		"max-len": "off",
		"newline-per-chained-call": "off",
		"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"prefer-template": "error",
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/heading-has-content": "off",
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
				controlComponents: ["Input"],
			},
		],
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/mouse-events-have-key-events": "error",
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/jsx-closing-tag-location": "error",
		"react/forbid-prop-types": "off",
		"react/jsx-curly-newline": "off",
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"react/jsx-filename-extension": "off",
		"react/jsx-no-target-blank": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-uses-vars": "error",
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/require-extension": "off",
		"react/self-closing-comp": "off",
		"react/sort-comp": "off",
		"redux-saga/no-yield-in-race": "error",
		"redux-saga/yield-effects": "error",
		"require-yield": "error",
		"import/no-extraneous-dependencies": "off",
		"react/no-unused-state": "warn",
		"react/destructuring-assignment": "off",
		"no-underscore-dangle": "off",
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"react/no-deprecated": "warn",
		"no-undef": ["error", { typeof: true }],
	},
};
