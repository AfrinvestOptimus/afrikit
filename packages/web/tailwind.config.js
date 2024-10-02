/** @type {import('tailwindcss').Config} */
import afrikitConfig from 'afrikit-shared/dist'
export default {
  content: [
    './src/**/*.{js,ts,tsx,jsx}',
    './stories/**/*.{js,ts,tsx,jsx}',
    './.storybook/**/*.{js,ts,tsx,jsx}',
    './atoms/**/*.{js,ts,tsx,jsx}',
    './molecules/**/*.{js,ts,tsx,jsx}',
    './organisms/**/*.{js,ts,tsx,jsx}',
    './templates/**/*.{js,ts,tsx,jsx}',
  ],
  presets: [afrikitConfig],
  theme: {
    extend: {},
  },
  plugins: [],
}
