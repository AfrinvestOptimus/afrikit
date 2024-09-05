import React, { useMemo } from 'react'
import { Text, View } from 'react-native'

// Tailwind class styles for different variants
const variantStyles = {
  centered: 'flex-1 items-center justify-center',
  large: 'flex-col items-start justify-center',
  large2: 'flex-col',
  menu: 'flex-1 items-start justify-center',
  small: 'flex-1 items-start justify-center',
  'small-centered': 'flex-1 items-center justify-center',
  'large-centered': 'flex-1 items-center justify-center',
  'large2-centered': 'flex-col items-center',
  default: 'flex-1 items-start justify-center',
} as const

const titleStyles = {
  centered: 'text-lg-bold',
  large: 'text-2xl-bold',
  large2: 'text-2xl-bold',
  menu: 'text-lg-bold',
  small: 'text-lg-bold',
  'small-centered': 'text-lg-bold',
  'large-centered': 'text-2xl-bold',
  'large2-centered': 'text-2xl-bold',
  default: 'text-lg-bold',
} as const

// Type definition for component props
interface TopBarTitleProps {
  variant: keyof typeof variantStyles
  title?: string
  subtitle?: string
}

// Primary component for rendering top bar title
const TopBarTitle: React.FC<TopBarTitleProps> = ({ variant, title }) => {
  const containerStyle = useMemo(() => variantStyles[variant] || variantStyles.default, [variant])
  const titleStyle = useMemo(
    () =>
      `${titleStyles[variant] || titleStyles.default} text-light-type-gray dark:text-dark-type-gray`,
    [variant],
  )

  return (
    <View className={containerStyle}>
      <Text className={`${titleStyle}`}>{title}</Text>
    </View>
  )
}

// Component for rendering top bar title with subtitle
const TopBarTitle2: React.FC<TopBarTitleProps> = ({ variant, title, subtitle }) => {
  const containerStyle = useMemo(() => variantStyles[variant] || variantStyles.default, [variant])
  const titleStyle = useMemo(
    () =>
      `${titleStyles[variant] || titleStyles.default} text-light-type-gray dark:text-dark-type-gray`,
    [variant],
  )

  return (
    <View className={`${containerStyle} flex-col px-md`}>
      <Text className={titleStyle}>{title}</Text>
      {subtitle && (
        <Text className="text-sm mt-1 text-light-type-gray-muted dark:text-light-type-gray-muted">
          {subtitle}
        </Text>
      )}
    </View>
  )
}

// Conditional rendering functions for top bar titles
export const topBarTitle = (props: TopBarTitleProps) =>
  !['large2', 'large2-centered'].includes(props.variant) && <TopBarTitle {...props} />

export const topBarTitle2 = (props: TopBarTitleProps) =>
  ['large2', 'large2-centered'].includes(props.variant) && <TopBarTitle2 {...props} />

export { TopBarTitle, TopBarTitle2 }
