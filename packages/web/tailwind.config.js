/** @type {import('tailwindcss').Config} */
import afrikitConfig from 'afrikit-shared/dist'
export default {
  content: [
    './src/**/*.{js,ts,tsx,jsx}',
  ],
  presets: [afrikitConfig],
  theme: {
    extend: {},
  },
  plugins: [],
}
