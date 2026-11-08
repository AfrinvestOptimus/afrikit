/* eslint-disable */
/** @type {import('tailwindcss').Config} */
// Reuse the library's own Tailwind config so the harness renders components
// with exactly the tokens and utilities consumers get.
const afrikitMobileConfig = require('afrikit-mobile/tailwind.config')

module.exports = {
  ...afrikitMobileConfig,
  content: [
    './App.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    // The library's class names live in its source, which Tailwind must scan
    // for utilities to be generated.
    '../mobile/{atoms,molecules,organisms,components}/**/*.{js,jsx,ts,tsx}',
  ],
}
