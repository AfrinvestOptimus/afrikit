// src/index.ts
import radius from './radius'
import spacing from './spacing'
import tokens from './tokens'
import colors from './colors'

const config = {
  theme: {
    colors: {
      white: '#ffffff',
      black: '#131518',
      ...colors,
    },
    borderRadius: {
      xs: radius.full['1'],
      'xs-max': radius.full['1-max'],
      sm: radius.full['2'],
      'sm-max': radius.full['2-max'],
      md: radius.full['3'],
      'md-max': radius.full['3-max'],
      lg: radius.full['4'],
      'lg-max': radius.full['4-max'],
      xl: radius.full['5'],
      'xl-max': radius.full['5-max'],
      '2xl': radius.full['6'],
      '2xl-max': radius.full['6-max'],
      full: radius.full['6-max'],
    },
    spacing: {
      ...spacing,
      ...tokens.space,
    },
  },
  // plugins: [plugin],
}

export default config
