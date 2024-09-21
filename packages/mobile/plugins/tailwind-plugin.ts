import path from 'path'
import fs from 'fs'
import { Config } from 'tailwindcss'
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
        files: async () => {
          try {
            const packageJson = await import(`${packageName}/package.json`, {
              assert: { type: 'json' },
            })
            const packagePath = path.dirname(packageJson.default.main)
            const componentFiles = [path.join(packagePath, '**/*.{js,jsx,ts,tsx}')]

            console.log('Package path:', packagePath)
            console.log('Component files:', componentFiles)

            return componentFiles.filter(file => fs.existsSync(file))
          } catch (error) {
            console.warn(
              `Unable to resolve package: ${packageName}. Ensure it's installed correctly.`,
            )
            return []
          }
        },
      },
    },
  )
}

export default createPlugin
