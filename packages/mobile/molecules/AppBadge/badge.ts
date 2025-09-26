export type BadgeSize = 1 | 2 
export type BadgeVariant = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost'
export type BadgeColor = 'accent' | 'neutral' | 'error' | 'success'
export type BadgeState = 'default' | 'active' | 'disabled'

export const badgeSizes: Record<BadgeSize, string> = {
  1: 'h-xl rounded-sm-max px-sm py-[2]',
  2: 'h-2xl rounded-sm-max px-md py-[2]',
}

export const textSizes: Record<BadgeSize, string> = {
  1: 'text-xs-head',
  2: 'text-sm-head',
}

export const iconSizes: Record<BadgeSize, number> = {
  1: 12,
  2: 16,
}

export const badgeColors: Record<BadgeColor, Record<BadgeVariant, string>> = {
  accent: {
    solid: 'bg-light-background-accent-base dark:bg-dark-background-accent-base',
    soft: 'bg-light-background-accent-light dark:bg-dark-background-accent-light',
    surface:
      'bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent',
    outline: 'bg-transparent border border-light-edge-accent',
    ghost: 'bg-transparent',
  },
  success: {
    solid: 'bg-light-background-success-base dark:bg-dark-background-success-base',
    soft: 'bg-light-background-success-light dark:bg-dark-background-success-light',
    surface:
      'bg-light-background-success-light dark:bg-dark-background-accent-success border border-light-edge-accent',
    outline: 'bg-transparent border border-light-edge-success',
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

export const highContrastBadgeColors: Record<BadgeColor, Record<BadgeVariant, string>> = {
  accent: {
    solid: 'bg-light-background-accent-bold dark:bg-dark-background-accent-bold',
    soft: 'bg-light-background-accent-light dark:bg-dark-background-accent-light',
    surface:
      'bg-light-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent',
    outline:
      'bg-light-background-accent-light border border-light-edge-gray-strong dark:border-dark-edge-gray-strong',
    ghost: 'bg-light-background-accent-transparent dark:bg-dark-background-accent-transparent',
  },
  success: {
    solid: 'bg-light-background-success-bold dark:bg-dark-background-success-bold',
    soft: 'bg-light-background-success-light dark:bg-dark-background-success-light',
    surface:
      'bg-light-background-success-light border border-light-edge-success dark:border-dark-edge-success',
    outline:
      'bg-light-background-success-light border border-light-edge-gray-strong dark:border-dark-edge-gray-strong',
    ghost: 'bg-light-background-success-transparent dark:bg-dark-background-success-transparent',
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

export const textColors: Record<BadgeColor, Record<BadgeVariant, string>> = {
  accent: {
    solid: 'text-light-contrast-white dark:text-dark-contrast-white',
    soft: 'text-light-type-accent dark:text-dark-type-accent',
    surface: 'text-light-type-accent dark:text-dark-type-accent',
    outline: 'text-light-type-accent dark:text-dark-type-accent',
    ghost: 'text-light-type-accent dark:text-dark-type-accent',
  },
  success: {
    solid: 'text-light-contrast-white dark:text-dark-contrast-white',
    soft: 'text-light-type-success dark:text-dark-type-success',
    surface: 'text-light-type-success dark:text-dark-type-success',
    outline: 'text-light-type-success dark:text-dark-type-success',
    ghost: 'text-light-type-success dark:text-dark-type-success',
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
export const highContrastTextColors: Record<BadgeColor, Record<BadgeVariant, string>> = {
  accent: {
    solid: 'text-light-type-accent-inverse dark:text-dark-type-accent-inverse',
    soft: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
    surface: 'text-light-type-accent dark:text-dark-type-accent ',
    outline: 'text-light-type-accent dark:text-dark-type-accent',
    ghost: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
  },
  success: {
    solid: 'text-light-type-success-inverse dark:text-dark-type-success-inverse',
    soft: 'text-light-type-success-bold dark:text-dark-type-accsuccessent-bold',
    surface: 'text-light-type-success dark:text-dark-type-success ',
    outline: 'text-light-type-success dark:text-dark-type-success',
    ghost: 'text-light-type-success-bold dark:text-dark-type-success-bold',
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
export const disabledColors: Record<BadgeVariant, string> = {
  solid: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
  soft: 'bg-light-background-disable2 dark:bg-dark-background-disable2',
  surface:
    'bg-light-background-disable2 border border-light-edge-disable dark:border-dark-edge-disable',
  outline:
    'bg-light-background-disable2 border border-light-edge-disable dark:border-dark-edge-disable',
  ghost: 'bg-light-background-disable2 border-none bg-dark-background-disable2',
}

export const activeStateColors: Record<BadgeVariant, string> = {
  solid: 'bg-light-background-accent-base-pressed dark:bg-dark-background-accent-base-pressed',
  soft: 'bg-light-background-accent-light-pressed dark:bg-dark-background-accent-light-pressed',
  surface:
    'bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent',
  outline:
    'bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent',
  ghost: 'bg-light-background-accent-transparent-pressed  border-none',
}

export const badgeStates: Record<BadgeState, string | Record<BadgeVariant, string>> = {
  default: '',
  active: activeStateColors,
  disabled: disabledColors,
}

export const textStates: Record<BadgeState, string> = {
  default: '',
  active: 'opacity-70',
  disabled: 'text-light-type-gray-disabled dark:text-dark-type-gray-disabled',
}
