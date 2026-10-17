/* eslint-disable */
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// Monorepo: Metro must watch the whole workspace and look in both node_modules
// trees, since yarn hoists most dependencies to the root.
config.watchFolders = [workspaceRoot]
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]
// Hierarchical lookup stays ON: yarn 1 nests some transitive dependencies
// (react-native keeps @react-native/virtualized-lists under its own
// node_modules), and disabling it hides them from Metro.

/**
 * Resolve afrikit-mobile to its SOURCE rather than its built dist/.
 *
 * The library's `main` points at dist/index.js, which is correct for consumers
 * but would mean rebuilding the package on every component edit. This mapping
 * lives here, in the harness, rather than as a `react-native` field on the
 * library: that field would also redirect real consumers to index.ts, which the
 * `files` whitelist never publishes.
 */
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'afrikit-mobile') {
    return {
      filePath: path.resolve(workspaceRoot, 'packages/mobile/index.ts'),
      type: 'sourceFile',
    }
  }
  return context.resolveRequest(context, moduleName, platform)
}

config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'png',
  'jpg',
  'jpeg',
  'gif',
  'svg',
  'webp',
]

module.exports = withNativeWind(config, { input: './global.css' })
