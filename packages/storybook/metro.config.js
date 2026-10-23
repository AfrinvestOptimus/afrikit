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

/**
 * React must be a single instance across the bundle.
 *
 * The harness, the library source and the hoisted dependencies sit at different
 * depths, so hierarchical lookup can hand them different copies of React if the
 * workspace ever installs more than one — which produces "Invalid hook call" at
 * render time while Metro still bundles successfully. The versions are aligned
 * so only one copy exists; this pins the resolution too, so drift fails loudly
 * here rather than silently at runtime.
 *
 * react-native is deliberately left to normal resolution: it is not duplicated,
 * and Metro needs its own platform-extension handling for it.
 */
config.resolver.resolveRequest = ((inner) => (context, moduleName, platform) => {
  if (moduleName === 'react' || moduleName.startsWith('react/')) {
    return {
      filePath: require.resolve(moduleName, { paths: [projectRoot] }),
      type: 'sourceFile',
    }
  }
  return inner(context, moduleName, platform)
})(config.resolver.resolveRequest)

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
