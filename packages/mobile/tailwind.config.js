/* eslint-disable */
/** @type {import('tailwindcss').Config} */
const afrikitConfig = require("../shared/index");
module.exports = {
  ...afrikitConfig,
  content: [
    "./App.{js,jsx,ts,tsx}",
    "atoms/**/*.{js,jsx,ts,tsx}",
    "molecules/**/*.{js,jsx,ts,tsx}",
    "organisms/**/*.{js,jsx,ts,tsx}",
    "templates/**/*.{js,jsx,ts,tsx}",
    ".storybook/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    ...afrikitConfig.theme,
    fontFamily: {
      regular: ["Manrope400", "sans-serif"],
      medium: ["Manrope500", "sans-serif"],
      semibold: ["Manrope600", "sans-serif"],
      bold: ["Manrope700", "sans-serif"],
    },
    fontWeight: null,
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 28,
      "4xl": 35,
      "5xl": 60,
    },
    lineHeight: {
      xs: 1.33, // 16 / 12
      sm: 1.43, // 20 / 14
      base: 1.5, // 24 / 16
      lg: 1.44, // 26 / 18
      xl: 1.4, // 28 / 20
      "2xl": 1.25, // 30 / 24
      "3xl": 1.29, // 36 / 28
      "4xl": 1.26, // 44 / 35
      "5xl": 1, // 60 / 60
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const sizes = [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
      ];
      const styles = ["body", "title", "head", "bold"];

      const styleFontFamilyMap = {
        body: "regular",
        title: "medium",
        head: "semibold",
        bold: "bold",
      };

      sizes.forEach((size) => {
        styles.forEach((style) => {
          newUtilities[`.text-${size}-${style}`] = {
            fontSize: theme(`fontSize.${size}`),
            lineHeight: theme(`lineHeight.${size}`),
            fontFamily: theme(`fontFamily.${styleFontFamilyMap[style]}`),
          };
        });
      });

      addUtilities(newUtilities);
    },
  ],
};
