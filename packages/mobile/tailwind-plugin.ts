import path from 'path'
import plugin from 'tailwindcss/plugin'

interface PluginOptions {
  packageName?: string
  debug?: boolean
}

const createPlugin = (options: PluginOptions = {}) => {
  const { packageName = 'afrikit-mobile', debug = false } = options

  const contentFiles = [`./node_modules/${packageName}/dist/**/*.{js,jsx,ts,tsx}`]

  if (debug) {
    console.log('AfrikitMobile Tailwind Plugin: Content files:', contentFiles)
  }

  return plugin(
    ({ addBase, addComponents, addUtilities }) => {
      // You can add any base styles, components, or utilities here if needed
    },
    {
      content: {
        files: contentFiles,
        transform: content => {
          if (debug) {
            console.log(
              'AfrikitMobile Tailwind Plugin: Transforming content:',
              content.substring(0, 100) + '...',
            )
          }
          return content
        },
      },
    },
  )
}

export default createPlugin
