import plugin from 'tailwindcss/plugin'

interface PluginOptions {
  packageName?: string
  debug?: boolean
}

const createPlugin = (options: PluginOptions = {}) => {
  const { packageName = 'afrikit-mobile', debug = false } = options

  return plugin(
    ({ addBase, addComponents, addUtilities }) => {
      // You can add any base styles, components, or utilities here if needed
    },
    {
      content: [`./node_modules/${packageName}/dist/**/*.{js,jsx,ts,tsx}`],
    },
  )
}

export default createPlugin
