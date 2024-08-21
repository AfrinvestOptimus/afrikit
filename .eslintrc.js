module.exports = {
  root: true,
  extends: [
    '@react-native',
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
     "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ["react","@typescript-eslint","prettier"],


 // other configuration options...
  // other configuration options...
};
