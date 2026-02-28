import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['eslint.config.mjs', 'node_modules']
  },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {}
  }
];