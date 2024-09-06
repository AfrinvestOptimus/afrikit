import React from 'react'
export type AvatarSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type AvatarVariant = 'solid' | 'soft'
export type AvatarColor = 'accent' | 'neutral' | 'success' | 'error' | 'warning' | 'info'
export type AvatarFallback = 'image' | 'initials' | 'icon'
export type NumberOfInitials = 1 | 2

export interface AppAvatarProps {
  size?: AvatarSize
  variant?: AvatarVariant
  color?: AvatarColor
  highContrast?: boolean
  fallBack?: AvatarFallback
  status?: boolean
  initials?: string
  imageUrl?: string
  icon?: React.ReactNode
  numberOfInitials?: NumberOfInitials
}

export const sizeStyles: Record<AvatarSize, string> = {
  1: 'w-xl h-xl rounded-full',
  2: 'w-2xl h-2xl rounded-full',
  3: 'w-3xl h-3xl rounded-full',
  4: 'w-4xl h-4xl rounded-full',
  5: 'w-5xl h-5xl rounded-full',
  6: 'w-[80px] h-[80px] rounded-full',
  7: 'w-[96px] h-[96px] rounded-full',
  8: 'w-[128px] h-[128px] rounded-full',
  9: 'w-[160px] h-[160px] rounded-full',
}

export const textSizes: Record<AvatarSize, string> = {
  1: 'text-xs-head font-medium leading-4',
  2: 'text-sm-title font-medium leading-5',
  3: 'text-base-title font-medium leading-6',
  4: 'text-lg-title font-medium leading-[26px]',
  5: 'text-2xl-title font-medium leading-[30px]',
  6: 'text-3xl font-medium leading-7',
  7: 'text-3xl font-medium leading-9',
  8: 'text-4xl font-medium leading-10',
  9: 'text-5xl font-medium leading-10',
}

export const iconSizes: Record<AvatarSize, number> = {
  1: 16,
  2: 16,
  3: 16,
  4: 18,
  5: 20,
  6: 24,
  7: 24,
  8: 32,
  9: 40,
}

export const avatarColors: Record<AvatarColor, Record<AvatarVariant, string>> = {
  accent: {
    solid: 'bg-light-background-accent-base dark:bg-dark-background-accent-base',
    soft: 'bg-light-background-accent-lighter dark:bg-dark-background-accent-lighter',
  },
  neutral: {
    solid: 'bg-light-background-neutral-base dark:bg-dark-background-neutral-base',
    soft: 'bg-light-background-neutral-light dark:bg-dark-background-neutral-light',
  },
  success: {
    solid: 'bg-light-background-success-base dark:bg-dark-background-success-base',
    soft: 'bg-light-background-success-light dark:bg-dark-background-success-light',
  },
  error: {
    solid: 'bg-light-background-error-base dark:bg-dark-background-error-base',
    soft: 'bg-light-background-error-light dark:bg-dark-background-error-light',
  },
  warning: {
    solid: 'bg-light-background-warning-base dark:bg-dark-background-warning-base',
    soft: 'bg-light-background-warning-light dark:bg-dark-background-warning-light',
  },
  info: {
    solid: 'bg-light-background-info-base dark:bg-dark-background-info-base',
    soft: 'bg-light-background-info-light dark:bg-dark-background-info-light',
  },
}

export const textColors: Record<AvatarColor, Record<AvatarVariant, string>> = {
  accent: {
    solid: 'text-white',
    soft: 'text-light-type-accent dark:text-dark-type-accent',
  },
  neutral: {
    solid: 'text-white',
    soft: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
  },
  success: {
    solid: 'text-light-type-success-inverse dark:text-dark-type-success-inverse',
    soft: 'text-light-type-success dark:text-dark-type-success',
  },
  error: {
    solid: 'text-white',
    soft: 'text-light-type-error dark:text-dark-type-error',
  },
  warning: {
    solid: 'text-black',
    soft: 'text-light-type-warning dark:text-dark-type-warning',
  },
  info: {
    solid: 'text-black',
    soft: 'text-light-type-info dark:text-dark-type-info',
  },
}

export const highContrastAvatarColors: Record<AvatarColor, Record<AvatarVariant, string>> = {
  accent: {
    solid: 'bg-light-background-accent-bold dark:bg-dark-background-accent-bold',
    soft: 'bg-light-background-accent-lighter dark:bg-dark-background-accent-lighter',
  },
  neutral: {
    solid: 'bg-light-background-neutral-bold dark:bg-dark-background-neutral-bold',
    soft: 'bg-light-background-neutral-light dark:bg-dark-background-neutral-light',
  },
  success: {
    solid: 'bg-light-background-success-bold dark:bg-dark-background-success-bold',
    soft: 'bg-light-background-success-light dark:bg-dark-background-success-light',
  },
  error: {
    solid: 'bg-light-background-error-bold dark:bg-dark-background-error-bold',
    soft: 'bg-light-background-error-light dark:bg-dark-background-error-light',
  },
  warning: {
    solid: 'bg-light-background-warning-bold dark:bg-dark-background-warning-bold',
    soft: 'bg-light-background-warning-light dark:bg-dark-background-warning-light',
  },
  info: {
    solid: 'bg-light-background-info-bold dark:bg-dark-background-info-bold',
    soft: 'bg-light-background-info-light dark:bg-dark-background-info-light ',
  },
}

export const highContrastTextColors: Record<AvatarColor, Record<AvatarVariant, string>> = {
  accent: {
    solid: 'text-light-type-accent-inverse dark:text-dark-type-accent-inverse',
    soft: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
  },
  neutral: {
    solid: 'text-light-type-gray-inverse dark:text-dark-type-gray-inverse',
    soft: 'text-light-type-gray dark:text-dark-type-gray',
  },
  success: {
    solid: 'text-light-type-success-inverse dark:text-dark-type-success-inverse',
    soft: 'text-light-type-success-bold dark:text-dark-type-success-bold',
  },
  error: {
    solid: 'text-light-type-error-inverse dark:text-dark-type-error-inverse',
    soft: 'text-light-type-error-bold dark:text-dark-type-error-bold',
  },
  warning: {
    solid: 'text-light-type-warning-inverse dark:text-dark-type-warning-inverse',
    soft: 'text-light-type-warning-bold dark:text-dark-type-warning-bold ',
  },
  info: {
    solid: 'text-light-type-info-inverse dark:text-dark-type-info-inverse',
    soft: 'text-light-type-info-bold dark:text-dark-type-info-bold',
  },
}
