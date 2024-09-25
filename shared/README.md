
# afrikit-shared

`afrikit-shared` is a utility package designed to extend your Tailwind configuration with custom tokens, colors, spacings, and more. This package helps you to easily manage a design system across your project by leveraging reusable configuration options.

## Installation

To install `afrikit-shared` in your project, you can use either npm or yarn:

```bash
# Using npm
npm install afrikit-shared

# Using yarn
yarn add afrikit-shared
```

## Usage

Once installed, you can easily extend your Tailwind configuration by importing the package in your Tailwind config file. Here's an example of how to use the `afrikit-shared` configuration in your project.

```javascript
// tailwind.config.js

const sharedConfig = require('afrikit-shared/dist');

module.exports = {
  theme: {
    extend: {
      ...sharedConfig.theme,
    },
  },
  plugins: [
    ...sharedConfig.plugins,
    // Add any additional plugins you need here
  ],
};
```

### Example of Extended Tailwind Classes

By integrating `afrikit-shared` into your project, you'll get access to custom spacings, border radii, and colors tailored to your design system:

```html
<div class="bg-optiblue1 text-optigray12 p-4 rounded-xl">
  <!-- Your content here -->
</div>
```

### Tokens Available

- **Colors**: Custom colors such as `optiblue1`, `optigray1`, and more.
- **Spacing**: Custom spacing values based on tokens defined in the package.
- **Radius**: Pre-defined border radius options using `radius.full`.

## Contributing

Feel free to contribute to `afrikit-shared` by opening a pull request or reporting any issues. Let’s make extending Tailwind configurations fun together!

## License

This package is licensed under the [MIT License](LICENSE.md).

---

### For More Fun!

If you're like me, you're tired of writing the same design tokens over and over again. This package is here to save you from the tyranny of repetition. Just `npm install afrikit-shared`, and you'll be sipping your favorite drink while Tailwind does all the hard work! 🎉
