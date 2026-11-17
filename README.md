# Afrikit Tailwind CSS Configuration

This package provides a custom Tailwind CSS configuration with an extended color palette, custom spacing, and additional utilities.

## Repository layout

| Path | Package | What it is |
| --- | --- | --- |
| `packages/mobile` | `afrikit-mobile` | The published component library. Pure JS/TS, no native code. |
| `packages/storybook` | `afrikit-storybook` (private) | Expo app hosting Storybook, used to develop and review components. |
| `shared/` | `afrikit-shared` | Design tokens: colours, spacing, typography, radius. |

## Developing

Components are developed against the Storybook harness, which imports the
library by its package name (`afrikit-mobile`) like a consuming app would:

```bash
yarn install
cd packages/storybook
yarn storybook:ios      # or storybook:android
```

Metro resolves `afrikit-mobile` to the library's source, so edits under
`packages/mobile` reload without rebuilding.

`yarn ios` / `yarn android` boot the demo screen instead of Storybook. The mode
is controlled by `STORYBOOK_ENABLED`, not by editing source.

## Building the library

```bash
cd packages/mobile
yarn build
```

This runs `tsc`, `tsc-alias`, Babel and the asset copy. It must emit `.d.ts`
files; a build that produces only JavaScript means consumers get no types.

## Usage

`afrikit-mobile` is the published component library. It ships the Tailwind
preset alongside the components, so installing it is enough:

```bash
npm i afrikit-mobile
```

Install `afrikit-shared` directly only if you want the raw design tokens
without the components.

Extend the library's config from your own `tailwind.config.js` and supply your
own `content` paths:

```js
/** @type {import('tailwindcss').Config} */
const afrikitConfig = require('afrikit-mobile/tailwind.config')

module.exports = {
  ...afrikitConfig,
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    // Required: the library's own class names live in its source, which
    // Tailwind must scan for those utilities to be generated.
    './node_modules/afrikit-mobile/dist/**/*.js',
  ],
  theme: {
    ...afrikitConfig.theme,
    extend: {
      ...afrikitConfig.theme.extend,
      // Your own additions here
    },
  },
}
```

## Features

### Extended Color Palette 

This config includes an extensive color palette with light and dark variants, as well as alpha (transparent) versions. Colors are organized into categories such as accent, neutral, success, error, warning, and info.

Example usage:
```jsx
<View className="bg-light-accent9 dark:bg-dark-accent9">
  <Text className="text-light-type-gray dark:text-dark-type-gray">
    Accent background with gray type
  </Text>
</View>
```

### Dark Mode
This configuration supports dark mode out of the box. It uses Tailwind's dark mode feature, which can be triggered by adding a dark class to the html or body tag, or by using the prefers-color-scheme media query.

Example usage:
```jsx
<View className="bg-light-page-bg dark:bg-dark-page-bg">
  <Text className="text-light-type-gray dark:text-dark-type-gray">
    Light page background and dark type in light mode, and the reverse in
    dark mode.
  </Text>
</View>
```

### Custom Spacing
The config provides a custom spacing scale, including additional sizes beyond Tailwind's defaults.

Example usage:
```jsx
<View className="p-md mb-xl">
  <Text>Custom padding and margin</Text>
</View>
```

### Typography
Custom font sizes and line heights are included, with descriptive names for different text styles.

Example usage:
```jsx
<Text className="text-3xl-head">Heading</Text>
<Text className="text-base-body">Body text</Text>
```

### Border Radius

Extended border radius options are available, including maximum values for each size.

Example usage:
```jsx
<View className="rounded-md-max">
  <Text>Rounded corners with maximum medium radius</Text>
</View>
```

### Shadows

There are no afrikit shadow tokens; Tailwind's own shadow utilities apply, and
their support on React Native is limited.

### Customization
You can further customize the configuration by extending or overriding values in your own tailwind.config.js file. Refer to the Tailwind CSS documentation for more information on customization.


## Setting up with React Native Expo and NativeWind

These steps match the configuration the Storybook harness in
`packages/storybook` actually uses, which is the reference for a working setup.

1. Create an Expo project, if you do not have one:

```bash
npx create-expo-app MyApp
cd MyApp
```

2. Install the library and its NativeWind toolchain:

```bash
npm i afrikit-mobile nativewind
npm i -D tailwindcss@^3.4.0
```

NativeWind 4 requires Tailwind 3. Tailwind 4 is not supported.

3. Add `tailwind.config.js` as shown under [Usage](#usage).

4. Create `global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Set up `babel.config.js`. In NativeWind 4 this is a **preset**, not a plugin:

```js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'react' }], 'nativewind/babel'],
  }
}
```

6. Set up `metro.config.js`, which NativeWind 4 needs in order to compile the
   stylesheet:

```js
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
```

7. Wrap your root component. The providers and the Manrope fonts are both
   required — components reference the font families by name, so text renders
   with the wrong face if they are missing:

```tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GlobalWrapper, AppToastBase } from 'afrikit-mobile'
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope'
import './global.css'

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope400: Manrope_400Regular,
    Manrope500: Manrope_500Medium,
    Manrope600: Manrope_600SemiBold,
    Manrope700: Manrope_700Bold,
  })

  if (!fontsLoaded) return null

  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider>
        <GlobalWrapper>
          {/* App content */}
          <AppToastBase position="top" />
        </GlobalWrapper>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
```

8. Use the utilities via `className`:

```jsx
<View className="bg-light-page-bg dark:bg-dark-page-bg p-md">
  <Text className="text-base-body text-light-type-accent dark:text-dark-type-accent">
    Themed text using the afrikit tokens
  </Text>
</View>
```

### Class naming

The token classes are namespaced by colour scheme, which is easy to get wrong:

| Kind | Pattern | Example |
| --- | --- | --- |
| Backgrounds | `bg-{light\|dark}-{color}{1-12}` | `bg-light-accent9` |
| Page background | `bg-{light\|dark}-page-bg` | `bg-dark-page-bg` |
| Type colours | `text-{light\|dark}-type-{name}` | `text-light-type-error` |
| Text styles | `text-{xs..5xl}-{body\|title\|head\|bold}` | `text-base-body` |
| Spacing | `{p\|m}-{xs..3xl}` | `p-md` |
| Radius | `rounded-{xs\|sm\|md\|lg}[-max]` | `rounded-md-max` |

Type colour names are `gray`, `accent`, `success`, `error`, `warning`, `info`,
`tomato`, `violet` and `cyan` — there is no `type-neutral`.
