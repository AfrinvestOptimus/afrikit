/* eslint-disable */
module.exports = {
  expo: {
    name: "afrikit-mobile",
    slug: "afrikit-mobile",
    version: "1.0.0",
    orientation: "portrait",
    owner: "afrinvest",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    plugins: ["expo-font"],
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "bc56fb0d-8c4f-4512-9e32-f2a75d227cd1",
      },
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
    updates: {
      url: "https://u.expo.dev/bc56fb0d-8c4f-4512-9e32-f2a75d227cd1",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
