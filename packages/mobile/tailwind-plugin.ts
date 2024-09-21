// tailwind-plugin.ts
/* eslint-disable no-undef */
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
      content: (() => {
        try {
          let packagePath: string

          if (typeof import.meta.resolve === 'function') {
            // Using import.meta.resolve if available (Node.js 16.12.0+)
            packagePath = path.dirname(
              new URL(import.meta.resolve(`${packageName}/package.json`)).pathname,
            )
          } else {
            // Fallback for environments that don't support import.meta.resolve
            packagePath = path.dirname(require.resolve(`${packageName}/package.json`))
          }

          const componentFiles = [path.join(packagePath, 'dist/**/*.js')]

          return componentFiles.filter(file => fs.existsSync(file))
        } catch (error) {
          console.warn(
            `Unable to resolve package: ${packageName}. Ensure it's installed correctly.`,
          )
          return []
        }
      })(),
    },
  )
}

export default createPlugin
