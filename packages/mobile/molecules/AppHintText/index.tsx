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
}

const AppHintText: React.FC<AppHintTextProps> = ({
  type = 'default',
  showIcon = false,
  text = 'Info hint text',
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
    <View className={`flex items-center flex-row ${showIcon ? 'gap-sm' : ''}`}>
      {showIcon && (
        <RemixIcon name="information-line" size={16} color={appHintTextIconColors[type]} />
      )}
      <Text className={`text-sm ${appHintTextTypeStyles[type]}`}>{text}</Text>
    </View>
  )
}

export default AppHintText
