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
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 35,
      '5xl': 60,
    },
    lineHeight: {
      xs: 1.33, // 16 / 12
      sm: 1.43, // 20 / 14
      base: 1.5, // 24 / 16
      lg: 1.44, // 26 / 18
      xl: 1.4, // 28 / 20
      '2xl': 1.25, // 30 / 24
      '3xl': 1.29, // 36 / 28
      '4xl': 1.26, // 44 / 35
      '5xl': 1, // 60 / 60
    },
    letterSpacing: {
      xs: '0.04px',
      sm: '0',
      base: '0.5px',
      lg: '-0.04px',
      xl: '-0.08px',
      '2xl': '-0.1px',
      '3xl': '-0.12px',
      '4xl': '-0.16px',
      '5xl': '-0.4px',
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {}
      const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
      const styles = ['body', 'title', 'head', 'bold']

      const styleFontWeightMap = {
        body: 'regular',
        title: 'medium',
        head: 'semibold',
        bold: 'bold',
      }

      sizes.forEach(size => {
        styles.forEach(style => {
          newUtilities[`.text-${size}-${style}`] = {
            fontSize: theme(`fontSize.${size}`),
            lineHeight: theme(`lineHeight.${size}`),
            fontWeight: theme(`fontWeight.${styleFontWeightMap[style]}`),
            letterSpacing: theme(`letterSpacing.${size}`),
          }
        })
      })

      addUtilities(newUtilities)
    },
  ],
}
