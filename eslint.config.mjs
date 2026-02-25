import js from '@eslint/js'
import globals, { jest, node } from 'globals'

export default [
  {
    ignores: ['eslint.config.mjs', 'node_modules']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'commonjs'
    },
    rules: {},
    env: {
      jest: true,
      node: true
    }
  }
]
