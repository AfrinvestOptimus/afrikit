import { Text } from 'react-native'
import { AppTextAtomProps } from '../types/atoms'
import { tv } from 'tailwind-variants'
import { memo, useMemo } from 'react'

const textVariants = tv({
  base: 'text-left',
  variants: {
    size: {
      1: 'text-xs leading-xs tracking-xs',
      2: 'text-sm leading-sm tracking-sm',
      3: 'text-base leading-base tracking-base',
      4: 'text-lg leading-lg tracking-lg',
      5: 'text-xl leading-xl tracking-xl',
      6: 'text-2xl leading-2xl tracking-2xl',
      7: 'text-3xl leading-3xl tracking-3xl',
      8: 'text-4xl leading-4xl tracking-4xl',
      9: 'text-5xl leading-5xl tracking-5xl',
    },
    weight: {
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      gray: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
      error: 'text-light-type-error dark:text-dark-type-error',
      accent: 'text-light-type-accent dark:text-dark-type-accent',
      cyan: 'text-light-type-cyan dark:text-dark-type-cyan',
      info: 'text-light-type-info dark:text-dark-type-info',
      success: 'text-light-type-success dark:text-dark-type-success',
      tomato: 'text-light-type-tomato dark:text-dark-type-tomato',
      violet: 'text-light-type-violet dark:text-dark-type-violet',
      warning: 'text-light-type-warning dark:text-dark-type-warning',
    },
    highContrast: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      color: 'gray',
      highContrast: true,
      class: 'text-light-type-gray dark:text-dark-type-gray',
    },
    {
      color: 'error',
      highContrast: true,
      class: 'text-light-type-error-bold dark:text-dark-type-error-bold',
    },
    {
      color: 'accent',
      highContrast: true,
      class: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
    },
    {
      color: 'cyan',
      highContrast: true,
      class: 'text-light-type-cyan-bold dark:text-dark-type-cyan-bold',
    },
    {
      color: 'info',
      highContrast: true,
      class: 'text-light-type-info-bold dark:text-dark-type-info-bold',
    },
    {
      color: 'success',
      highContrast: true,
      class: 'text-light-type-success-bold dark:text-dark-type-success-bold',
    },
    {
      color: 'tomato',
      highContrast: true,
      class: 'text-light-type-tomato-bold dark:text-dark-type-tomato-bold',
    },
    {
      color: 'violet',
      highContrast: true,
      className: 'text-light-type-violet-bold dark:text-dark-type-violet-bold',
    },
    {
      color: 'warning',
      highContrast: true,
      className: 'text-light-type-warning-bold dark:text-dark-type-warning-bold',
    },
  ],
  defaultVariants: {
    size: '3',
    weight: 'medium',
    color: 'gray',
    highContrast: false,
    align: 'left',
  },
})

const AppText = ({
  size = 3,
  color = 'gray',
  trim = 'normal',
  weight = 'regular',
  highContrast = false,
  align = 'left',
  children,
  className,
  ...rest
}: AppTextAtomProps) => {
  const variantClasses = useMemo(
    () => textVariants({ size, weight, align, color, highContrast }),
    [size, weight, align, color, highContrast],
  )

  return (
    <Text className={`${variantClasses} ${className || ''}`} {...rest}>
      {children}
    </Text>
  )
}

export default memo(AppText)
