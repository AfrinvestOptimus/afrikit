import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import classNames from '../utilities/classnames'

export type AppIconSize = '16' | '20' | '24' | '40' | '48'
export type AppIconProps = {
  name: string
  color?: string
  size: AppIconSize
  accessibilityLabel?: string
  accessibilityHint?: string
}

const AppIcon: FC<AppIconProps> = ({
  name = 'circle',
  color,
  size,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

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
        size={getIconSize(size)}
        color={color || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      />
    </View>
  )
}

const getIconSize = (size: string): string => {
  const convertStringToNumber = Number(size)
  if (convertStringToNumber > 24) {
    return '24'
  }
  return size
}

export default AppIcon
