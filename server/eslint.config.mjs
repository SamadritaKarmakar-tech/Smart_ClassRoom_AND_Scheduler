import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      // Allow underscore-prefixed unused variables
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Optional: disable underscore-dangle rule
      'no-underscore-dangle': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'module' },
  },
]);
