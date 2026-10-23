# Afrikit Tailwind CSS Configuration

## Repository layout

| Path | Package | What it is |
| --- | --- | --- |
| `packages/mobile` | `afrikit-mobile` | The published component library. Pure JS/TS, no native code. |
| `packages/storybook` | `afrikit-storybook` (private) | Expo app hosting Storybook, used to develop and review components. |
| `shared/` | `afrikit-shared` | Design tokens: colours, spacing, typography, radius. |

## Developing

Components are developed against the Storybook harness, which consumes the
library the same way a consuming app does:

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


This package provides a custom Tailwind CSS configuration with an extended color palette, custom spacing, and additional utilities.

## Usage

To use this configuration in your Tailwind CSS project, follow these steps:

1. Install this package in your project:

```bash
npm i afrikit
```


2. In your tailwind.config.js file, import and spread the custom config:

```js
const customConfig = require('@afrinvest/afrikit');

module.exports = {
  ...customConfig,
  // You can override or extend the custom config here
  theme: {
    ...customConfig.theme,
    // Add your own theme customizations
  },
  // Add your own plugins or extend the existing ones
  plugins: [
    ...customConfig.plugins,
    // Your additional plugins
  ],
}
```


## Features

### Extended Color Palette 

This config includes an extensive color palette with light and dark variants, as well as alpha (transparent) versions. Colors are organized into categories such as accent, neutral, success, error, warning, and info.

Example usage:
```html
<div class="bg-accent-9 text-neutral-12">
  Accent background with neutral text
</div>
```

### Dark Mode
This configuration supports dark mode out of the box. It uses Tailwind's dark mode feature, which can be triggered by adding a dark class to the html or body tag, or by using the prefers-color-scheme media query.

Example usage:
```html
<div class="bg-white dark:bg-neutral-900 text-black dark:text-white">
    This div will have a white background and black text in light mode,
    and a dark background with white text in dark mode.
</div>
```

### Custom Spacing
The config provides a custom spacing scale, including additional sizes beyond Tailwind's defaults.

Example usage:
```html
<div class="p-md mb-xl">
  Custom padding and margin
</div>
```

### Typography
Custom font sizes and line heights are included, with descriptive names for different text styles.

Example usage:
```html
<h2 class="text-h2">Heading 2</h2>
<p class="text-body1">Body text</p>
```

### Border Radius

Extended border radius options are available, including maximum values for each size.

Example usage:
```html
<div class="rounded-md-max">
  Rounded corners with maximum medium radius
</div>
```

### Shadows
```html
<div class="shadow-md">
    Medium shadow
</div>
```

### Customization
You can further customize the configuration by extending or overriding values in your own tailwind.config.js file. Refer to the Tailwind CSS documentation for more information on customization.


## Setting up with React Native Expo and NativeWind

To use this custom Tailwind configuration with React Native Expo and NativeWind, follow these steps:

1. Create a new Expo project (if you haven't already):

```bash
npx create-expo-app MyApp
cd MyApp
```
2. Install NativeWind and its dependencies:

```bash
npm install nativewind
npm install --dev tailwindcss
```

3. Install this custom Tailwind config package:

```bash
npm install @your-org/custom-tailwind-config
```

4. Create a tailwind.config.js file in your project root and add the following content:
```js
const customConfig = require('@afrinvest/afrikit');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...customConfig,
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    ...customConfig.theme,
    // Add any additional theme customizations here
  },
  plugins: [
    ...customConfig.plugins,
    // Add any additional plugins here
  ],
}
```

5. Create a babel.config.js file in your project root (or modify the existing one) with the following content:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};
```

6. Now you can use Tailwind CSS classes in your React Native components, leveraging the custom configuration provided by this package. Remember to use the className prop instead of style when applying Tailwind classes to your components.

Example usage:
```jsx
<View className="bg-neutral-100 dark:bg-neutral-900 p-md">
  <Text className="text-body1 text-accent-11 dark:text-accent-dark-11">
    This text uses custom colors and typography from the configuration.
  </Text>
</View>
```
