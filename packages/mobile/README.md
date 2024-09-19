
# Afrikit Mobile

### A mobile design system for React Native using Expo, built to streamline UI consistency.

![npm version](https://img.shields.io/npm/v/afrikit-mobile)
![license](https://img.shields.io/npm/l/afrikit-mobile)

Welcome to **Afrikit Mobile**! A design system for React Native and Expo projects, providing a cohesive set of UI components and utilities.

## 🚀 Installation

Install Afrikit Mobile into your project by running:

```bash
npm install afrikit-mobile
# or if you prefer yarn
yarn add afrikit-mobile
```

This will automatically install all the required dependencies, including Expo, Nativewind, and Tailwind.

## 🎨 Usage

Afrikit Mobile exports various ready-to-use components. Here’s an example of using one of them:

### Floating Button Example

```tsx
// App.tsx
import React from 'react';
import { FloatingButton } from 'afrikit-mobile';

const App = () => {
  return (
    <FloatingButton onPress={() => console.log('Pressed')} backgroundColor="blue" />
  );
};

export default App;
```

### Components List:

Afrikit Mobile provides multiple components:

- **FloatingButton**: A floating action button with a default icon and customizable color.
- **IconButton**: A button displaying an icon with configurable properties.
- **TopBarTitle**: A title component for the top bar, with multiple styles.

```tsx
import { FloatingButton, IconButton, TopBarTitle } from 'afrikit-mobile';

const App = () => {
  return (
    <>
      <TopBarTitle title="Welcome to Afrikit" />
      <FloatingButton onPress={() => console.log('Pressed')} backgroundColor="red" />
      <IconButton onPress={() => alert('Icon clicked!')} icon="star" />
    </>
  );
};

export default App;
```

## 🛠️ Extending Tailwind

Afrikit Mobile integrates seamlessly with Tailwind for styling. You can extend your Tailwind config as needed:

```js
// tailwind.config.js
const afrikitConfig = require('afrikit-mobile/tailwind.config');

module.exports = {
  ...afrikitConfig,
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B', // Custom color
      },
    },
  },
};
```

Afrikit also includes custom tokens for colors, spacing, and border radii, which are already added to the theme. Use them like this:

```js
theme: {
  colors: {
    ...afrikitConfig.theme.colors,  // Add Afrikit colors
  },
  spacing: {
    ...afrikitConfig.theme.spacing,  // Add Afrikit spacing tokens
  },
  borderRadius: {
    ...afrikitConfig.theme.borderRadius, // Add Afrikit's border radius tokens
  },
}
```

## 🧑‍💻 Contributing

Got ideas for improvements or found a bug? Submit an issue or open a pull request in the [GitHub repo](https://github.com/AfrinvestOptimus/afrikit).

## 📝 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for more details.
