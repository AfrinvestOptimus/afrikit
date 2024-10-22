import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'

type AppHintTextType = 'default' | 'error'

/**
 * Props for the AppHintText component.
 */
export type AppHintTextProps = {
  /**
   * The type of hint text. Can be 'default' for regular hints or 'error' for error messages.
   * Default is 'default'.
   */
  type?: AppHintTextType

  /**
   * Boolean flag to show or hide the icon next to the hint text.
   * Default is false.
   */
  showIcon?: boolean

  /**
   * The actual text to display as the hint.
   * Default is 'Info hint text'.
   */
  text: string

  /**
   * Optional additional styles applied to the container.
   */
  className?: string

  /**
   * The accessibility hint text for screen readers.
   */
  accessibilityHintText?: string
}

/**
 * AppHintText is a functional component that renders a text hint with an optional icon.
 * It can be used for regular information or error messages.
 */
const AppHintText: React.FC<AppHintTextProps> = ({
  type = 'default',
  showIcon = false,
  text = 'Info hint text',
  className = '',
  accessibilityHintText = '',
}) => {
  // Determine if dark mode is active
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // Styles for the text based on the type ('default' or 'error')
  const appHintTextTypeStyles: Record<AppHintTextType, string> = {
    default: 'text-light-type-gray-muted dark:text-dark-type-gray-muted text-sm-title',
    error: 'text-light-type-error dark:text-dark-type-error text-sm-title',
  }

  // Icon colors based on type and color scheme (light or dark mode)
  const appHintTextIconColors: Record<AppHintTextType, string> = {
    default: isDarkMode ? colors.dark.type.gray.DEFAULT : colors.light.type.gray.DEFAULT,
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
