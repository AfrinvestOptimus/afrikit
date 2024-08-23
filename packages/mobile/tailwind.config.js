/* eslint-disable */
/** @type {import('tailwindcss').Config} */
const afrikitConfig = require('../shared/index')
module.exports = {
  ...afrikitConfig,
  content: [
    './App.{js,jsx,ts,tsx}',
    '.atoms/**/*.{js,jsx,ts,tsx}',
    '.molecules/**/*.{js,jsx,ts,tsx}',
    '.organisms/**/*.{js,jsx,ts,tsx}',
    '.templates/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    ...afrikitConfig.theme,
    extend: {},
  },
  plugins: [],
}
