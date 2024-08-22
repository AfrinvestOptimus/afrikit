import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// import pluginReact from "eslint-plugin-react";

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      '@typescript-eslint/no-unused-vars': ['warn'], // Change from 'error' to 'warn'
    },
  },
];
