import { useColorScheme } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import colors from '../../../shared/colors'

type AppHintTextType = 'default' | 'error'
export type AppHintTextProps = {
  type?: AppHintTextType
  showIcon?: boolean
  text: string
  className?: string
  accessibilityHintText?: string
}

const AppHintText: React.FC<AppHintTextProps> = ({
  type = 'default',
  showIcon = false,
  text = 'Info hint text',
  className = '',
  accessibilityHintText = '',
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'
  const appHintTextTypeStyles: Record<AppHintTextType, string> = {
    default: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
    error: 'text-light-type-error dark:text-dark-type-error',
  }

  const appHintTextIconColors: Record<AppHintTextType, string> = {
    default: isDarkMode ? colors.light.type.gray.DEFAULT : colors.light.type.gray.DEFAULT,
    error: isDarkMode ? colors.dark.type.error.DEFAULT : colors.light.type.error.DEFAULT,
  }

  return (
    <View
      accessibilityRole="text"
      accessible={true}
      accessibilityLabel={text}
      accessibilityHint={accessibilityHintText}
      className={`flex items-center flex-row ${showIcon ? 'gap-sm' : ''} ${className}`}>
      {showIcon && (
        <RemixIcon
          name="information-line"
          size={16}
          color={appHintTextIconColors[type]}
          accessible={type !== 'default'}
          accessibilityLabel="Information icon"
        />
      )}
      <Text className={`text-sm ${appHintTextTypeStyles[type]}`}>{text}</Text>
    </View>
  )
}

export default AppHintText
