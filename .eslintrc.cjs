/* eslint-env node */
module.exports = {
	// files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,astro}"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:astro/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react", "react-hooks", "astro"],
	root: true,
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		browser: true,
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"no-mixed-spaces-and-tabs": "off",
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",
	},
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ["*.astro"],
			plugins: ["@typescript-eslint", "react", "react-hooks", "astro"],
			// Allows Astro components to be parsed.
			parser: "astro-eslint-parser",
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
				"react/jsx-key": "off",
				"react/no-unknown-property": "off",
				"react/jsx-no-undef": "off",
			},
		},
	],
};
