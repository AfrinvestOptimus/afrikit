import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import { FC, useCallback } from 'react'
import { View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import classNames from '../utilities/classnames'

export type AppIconSize = '16' | '20' | '24' | '40' | '48' | number
export type AppIconProps = {
  name: string
  color?: string
  size: AppIconSize
  accessibilityLabel?: string
  accessibilityHint?: string
  isRemixIcon?: boolean
}

const AppIcon: FC<AppIconProps> = ({
  name = 'circle',
  color,
  size,
  accessibilityLabel,
  accessibilityHint,
  isRemixIcon = false,
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'
  const defaultColor = colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT

  const renderIcon = useCallback(() => {
    if (isRemixIcon) {
      return (
        <RemixIcon
          name={name}
          size={size}
          color={color || defaultColor}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        />
      )
    }
    return (
      <View
        className={classNames(
          Number(size) > 24
            ? 'bg-light-surface-gray dark:bg-dark-surface-gray rounded-sm-max flex justify-center items-center'
            : '',
          size === '40' ? 'w-3xl p-sm' : size === '48' ? 'w-4xl p-md' : '',
        )}>
        <RemixIcon
          name={name}
          size={getIconSize(size.toString())}
          color={color || defaultColor}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        />
      </View>
    )
  }, [isDarkMode, isRemixIcon, size])

  return <>{renderIcon()}</>
}

const getIconSize = (size: string): string => {
  const convertStringToNumber = Number(size)
  if (convertStringToNumber > 24) {
    return '24'
  }
  return size
}

export default AppIcon
