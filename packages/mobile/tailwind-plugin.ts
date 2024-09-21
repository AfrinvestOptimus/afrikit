import path from 'path'
import plugin from 'tailwindcss/plugin'

interface PluginOptions {
  packageName?: string
}

const createPlugin = (options: PluginOptions = {}) => {
  const { packageName = 'afrikit-mobile' } = options

  return plugin(
    ({ addBase, addComponents, addUtilities }) => {
      // You can add any base styles, components, or utilities here if needed
    },
    {
      content: {
        files: [`./node_modules/${packageName}/dist/**/*.{js,jsx,ts,tsx}`],
        transform: content => {
          // You can transform the content here if needed
          console.log('CONTENT: ', content)
          return content
        },
      },
    },
  )
}

export default createPlugin
