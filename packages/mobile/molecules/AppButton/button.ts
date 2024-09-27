import { AppIconProps } from 'molecules/AppIcon'

export type ButtonSize = 1 | 2 | 3 | 4
export type ButtonVariant = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost'
export type ButtonColor = 'accent' | 'neutral' | 'error'
export type ButtonState = 'default' | 'active' | 'disabled'

export const buttonSizes: Record<ButtonSize, string> = {
  1: 'h-xl rounded-xs-max px-sm',
  2: 'h-2xl rounded-xs-max px-md',
  3: 'h-3xl rounded-xs-max px-xl py-sm',
  4: 'h-4xl rounded-xs-max px-2xl',
}

export const textSizes: Record<ButtonSize, string> = {
  1: 'text-xs-head',
  2: 'text-sm-head',
  3: 'text-base-head',
  4: 'text-lg-head',
}

export const iconSizes: Record<ButtonSize, AppIconProps['size']> = {
  1: '16',
  2: '16',
  3: '20',
  4: '20',
}

export const buttonColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: 'bg-light-background-accent-base dark:bg-dark-background-accent-base',
    soft: 'bg-light-background-accent-light dark:bg-dark-background-accent-light',
    surface:
      'bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent',
    outline: 'bg-transparent border border-light-edge-accent',
    ghost: 'bg-transparent',
  },
  neutral: {
    solid: 'bg-light-background-neutral-base dark:bg-dark-background-neutral-base',
    soft: 'bg-light-background-neutral-light dark:bg-dark-background-neutral-light',
    surface:
      'bg-light-background-neutral-light dark:bg-dark-background-neutral-light border border-light-background-neutral-light',
    outline: 'bg-transparent border border-light-edge-neutral',
    ghost: 'bg-transparent',
  },
  error: {
    solid: 'bg-light-background-error-base dark:bg-dark-background-error-base',
    soft: 'bg-light-background-error-light dark:bg-dark-background-error-light',
    surface: 'bg-transparent dark:bg-dark-background-error-light border border-light-edge-error',
    outline: 'bg-transparent border border-light-edge-error',
    ghost: 'bg-transparent',
  },
}

export const highContrastButtonColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: 'bg-light-background-accent-bold dark:bg-dark-background-accent-bold',
    soft: 'bg-light-background-accent-light dark:bg-dark-background-accent-light',
    surface:
      'bg-light-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent',
    outline:
      'bg-light-background-accent-light border border-light-edge-gray-strong dark:border-dark-edge-gray-strong',
    ghost: 'bg-light-background-accent-transparent dark:bg-dark-background-accent-transparent',
  },
  neutral: {
    solid: 'bg-light-background-neutral-bold dark:bg-dark-background-neutral-bold',
    soft: 'bg-light-background-neutral-light  dark:bg-light-background-neutral-light',
    surface:
      'bg-light-background-neutral-light border border-light-edge-gray-hover dark:border-dark-edge-gray-hover',
    outline:
      'bg-light-background-neutral-light border border-light-edge-gray-strong dark:border-dark-edge-gray-strong',
    ghost: 'bg-light-background-neutral-transparent dark:bg-dark-background-neutral-transparent',
  },
  error: {
    solid: 'bg-light-background-error-bold dark:bg-dark-background-error-bold',
    soft: 'bg-light-background-error-light dark:bg-dark-background-error-light',
    surface:
      'bg-light-background-error-light border border-dark-edge-error dark:border-dark-edge-error',
    outline:
      'bg-light-background-error-light border border-dark-edge-error-strong dark:border-dark-edge-error-strong',
    ghost: 'bg-light-background-error-transparent dark:bg-light-background-error-transparent',
  },
}

export const textColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: 'text-light-contrast-white dark:text-dark-contrast-white',
    soft: 'text-light-type-accent dark:text-dark-type-accent',
    surface: 'text-light-type-accent dark:text-dark-type-accent',
    outline: 'text-light-type-accent dark:text-dark-type-accent',
    ghost: 'text-light-type-accent dark:text-dark-type-accent',
  },
  neutral: {
    solid: 'text-light-contrast-white dark:text-dark-contrast-white',
    soft: 'text-light-type-neutral dark:text-dark-type-neutral',
    surface: 'text-light-type-neutral dark:text-dark-type-neutral',
    outline: 'text-light-type-neutral dark:text-dark-type-neutral',
    ghost: 'text-light-type-neutral dark:text-dark-type-neutral',
  },
  error: {
    solid: 'text-light-contrast-white dark:text-dark-contrast-white',
    soft: ' text-light-type-error-bold dark:text-dark-type-error-bold',
    surface: ' text-light-type-error-bold dark:text-dark-type-error-bold',
    outline: ' text-light-type-error-bold dark:text-dark-type-error-bold',
    ghost: ' text-light-type-error-bold dark:text-dark-type-error-bold',
  },
}
export const highContrastTextColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: 'text-light-type-accent-inverse dark:text-dark-type-accent-inverse',
    soft: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
    surface: 'text-light-type-accent dark:text-dark-type-accent ',
    outline: 'text-light-type-accent dark:text-dark-type-accent',
    ghost: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
  },
  neutral: {
    solid: 'text-light-type-gray-inverse dark:text-dark-type-gray-inverse',
    soft: 'text-light-type-gray dark:text-dark-type-gray',
    surface: 'text-light-type-gray dark:text-dark-type-gray',
    outline: 'text-light-type-gray dark: text-dark-type-gray',
    ghost: 'text-light-type-gray dark:text-dark-type-gray',
  },
  error: {
    solid: 'text-light-type-error-inverse dark:text-dark-type-error-inverse',
    soft: 'text-light-type-error-bold dark:text-dark-type-error-bold',
    surface: 'text-light-type-error-bold dark:text-dark-type-error-bold',
    outline: 'text-light-type-error-bold dark:text-dark-type-error-bold',
    ghost: 'text-light-type-error-bold dark:text-dark-type-error-bold',
  },
}

export const disabledColors: Record<ButtonVariant, string> = {
  solid: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
  soft: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
  surface:
    'bg-light-background-disable2 border border-light-edge-disable dark:border-dark-edge-disable',
  outline:
    'bg-light-background-disable2 border border-light-edge-disable dark:border-dark-edge-disable',
  ghost: 'bg-light-background-disable2 border-none bg-dark-background-disable2',
}

export const activeStateColors: Record<ButtonVariant, string> = {
  solid: 'bg-light-background-accent-base-pressed dark:bg-dark-background-accent-base-pressed',
  soft: 'bg-light-background-accent-light-pressed dark:bg-dark-background-accent-light-pressed',
  surface:
    'bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent',
  outline:
    'bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent',
  ghost: 'bg-light-background-accent-transparent-pressed  border-none',
}

export const buttonStates: Record<ButtonState, string | Record<ButtonVariant, string>> = {
  default: '',
  active: activeStateColors,
  disabled: disabledColors,
}

export const textStates: Record<ButtonState, string> = {
  default: '',
  active: 'opacity-70',
  disabled: 'text-light-type-gray-disabled dark:text-dark-type-gray-disabled',
}
