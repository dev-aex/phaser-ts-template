import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier/flat'

export default defineConfig([
	{
		files: ['**/*.{ts,mts,cts}'],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	prettierConfig,
	prettierPlugin,
])
