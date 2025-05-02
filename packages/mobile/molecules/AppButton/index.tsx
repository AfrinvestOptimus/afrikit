import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { useCallback, useMemo } from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import AppIcon from '../AppIcon'
import {
  buttonActiveStateColors,
  ButtonColor,
  buttonColors,
  ButtonSize,
  buttonSizes,
  ButtonState,
  ButtonVariant,
  disabledColors,
  highContrastButtonActiveStateColors,
  highContrastButtonColors,
  highContrastTextActiveStateColors,
  highContrastTextColors,
  iconSizes,
  textActiveStateColors,
  textColors,
  textSizes,
  textStates,
} from './button'

/**
 * Props for the AppButton component.
 */
export interface AppButtonProps {
  /**
   * The size of the button.
   * Determines the button's dimensions and text size.
   * Default is 2.
   */
  size?: ButtonSize

  /**
   * The visual style of the button.
   * Options include different styles like 'solid' or 'outline'.
   * Default is 'solid'.
   */
  variant?: ButtonVariant

  /**
   * The color scheme of the button.
   * Options include 'accent', 'neutral', or 'error'.
   * Default is 'accent'.
   */
  color?: ButtonColor

  /**
   * Flag indicating if the button should use high contrast colors.
   * Default is false.
   */
  highContrast?: boolean

  /**
   * The current state of the button.
   * Options include 'default', 'active', and 'disabled'.
   * Default is 'default'.
   */
  state?: ButtonState

  /**
   * Flag indicating if an icon should be displayed at the start of the button text.
   * Default is false.
   */
  iconStart?: string

  /**
   * Flag indicating if an icon should be displayed at the end of the button text.
   * Default is false.
   */
  iconEnd?: string

  /**
   * The name of the icon to display (if using an icon).
   * This prop should be used with iconStart or iconEnd.
   * Default is an empty string.
   */
  iconName?: string

  /**
   * Optional custom classes for additional styling.
   * Default is an empty string.
   */
  className?: string

  /**
   * The text to be displayed inside the button.
   * This is a required prop.
   */
  text: string

  /**
   * Optional function to be called when the button is pressed.
   * Receives a GestureResponderEvent as a parameter.
   */
  onPress?: (event: GestureResponderEvent) => void

  /**
   * Accessibility label for the button, providing a description for screen readers.
   * If not provided, the text prop will be used as the label.
   * Default is an empty string.
   */
  accessibilityLabel?: string

  /**
   * Accessibility hint for the button, providing additional context for screen readers.
   * Default is an empty string.
   */
  accessibilityHint?: string

  /**
   * Indicates if the button is in a loading state.
   * When true, the button text is replaced with a loading spinner.
   * Default is false.
   */
  isLoading?: boolean

  /**
   * Optional custom classes for text styling.
   */
  textClassName?: string
}

const getIconColors = (
  isDarkMode: boolean,
): Record<ButtonColor, Record<ButtonVariant, string>> => ({
  accent: {
    solid: !isDarkMode ? colors.light['contrast-accent'] : colors.dark['contrast-accent'],
    soft: !isDarkMode ? colors.light.type.accent.DEFAULT : colors.dark.type.accent.DEFAULT,
    surface: !isDarkMode ? colors.light.accentA11 : colors.dark.accentA11,
    outline: !isDarkMode ? colors.light.type.accent.DEFAULT : colors.dark.type.accent.DEFAULT,
    ghost: !isDarkMode ? colors.light.type.accent.DEFAULT : colors.dark.type.accent.DEFAULT,
  },
  neutral: {
    solid: !isDarkMode ? colors.light['contrast-white'] : colors.dark['contrast-white'],
    soft: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
    surface: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
    outline: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
    ghost: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
  },
  error: {
    solid: !isDarkMode ? colors.light['contrast-white'] : colors.dark['contrast-white'],
    soft: !isDarkMode ? colors.light.error11 : colors.dark.error11,
    surface: !isDarkMode ? colors.light.error11 : colors.dark.error11,
    outline: !isDarkMode ? colors.light.error11 : colors.dark.error11,
    ghost: !isDarkMode ? colors.light.type.error.bold : colors.dark.type.error.bold,
  },
})

const getHighContrastIconColors = (
  isDarkMode: boolean,
): Record<ButtonColor, Record<ButtonVariant, string>> => ({
  accent: {
    solid: !isDarkMode ? colors.light.neutral1 : colors.dark.neutral1,
    soft: !isDarkMode ? colors.light.accentA12 : colors.dark.accentA12,
    surface: !isDarkMode ? colors.light.type.accent.DEFAULT : colors.dark.type.accent.DEFAULT,
    outline: !isDarkMode ? colors.light.accentA12 : colors.dark.accentA12,
    ghost: !isDarkMode ? colors.light.type.accent.DEFAULT : colors.dark.type.accent.DEFAULT,
  },
  neutral: {
    solid: !isDarkMode ? colors.light['contrast-accent'] : colors.dark['contrast-accent'],
    soft: !isDarkMode ? colors.light.neutral12 : colors.dark.neutral12,
    surface: !isDarkMode ? colors.light.neutral12 : colors.dark.neutral12,
    outline: !isDarkMode ? colors.light.type.gray.DEFAULT : colors.dark.type.gray.DEFAULT,
    ghost: !isDarkMode ? colors.light.type.gray.DEFAULT : colors.dark.type.gray.DEFAULT,
  },
  error: {
    solid: !isDarkMode ? colors.light['contrast-white'] : colors.dark['contrast-white'],
    soft: !isDarkMode ? colors.light.type.error.bold : colors.dark.type.error.bold,
    surface: !isDarkMode ? colors.light.error12 : colors.dark.error12,
    outline: !isDarkMode ? colors.light.type.error.bold : colors.dark.type.error.bold,
    ghost: !isDarkMode ? colors.light.type.error.bold : colors.dark.type.error.bold,
  },
})

const getActiveIconColors = (
  isDarkMode: boolean,
): Record<ButtonColor, Record<ButtonVariant, string>> => ({
  accent: {
    solid: !isDarkMode ? colors.light['contrast-accent'] : colors.dark['contrast-accent'],
    soft: !isDarkMode ? colors.light.accentA11 : colors.dark.accentA11,
    surface: !isDarkMode ? colors.light.accentA11 : colors.dark.accentA11,
    outline: !isDarkMode ? colors.light.accentA11 : colors.dark.accentA11,
    ghost: !isDarkMode ? colors.light.accentA11 : colors.dark.accentA11,
  },
  neutral: {
    solid: !isDarkMode ? colors.light['contrast-accent'] : colors.dark['contrast-accent'],
    soft: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
    surface: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
    outline: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
    ghost: !isDarkMode ? colors.light.neutral11 : colors.dark.neutral11,
  },
  error: {
    solid: !isDarkMode ? colors.light['contrast-accent'] : colors.dark['contrast-accent'],
    soft: !isDarkMode ? colors.light.error11 : colors.dark.error11,
    surface: !isDarkMode ? colors.light.error11 : colors.dark.error11,
    outline: !isDarkMode ? colors.light.error11 : colors.dark.error11,
    ghost: !isDarkMode ? colors.light.error11 : colors.dark.error11,
  },
})

const getHighContrastActiveIconColors = (
  isDarkMode: boolean,
): Record<ButtonColor, Record<ButtonVariant, string>> => ({
  accent: {
    solid: !isDarkMode ? colors.light.neutral1 : colors.dark.neutral1,
    soft: !isDarkMode ? colors.light.accentA12 : colors.dark.accentA12,
    surface: !isDarkMode ? colors.light.accentA12 : colors.dark.accentA12,
    outline: !isDarkMode ? colors.light.accentA12 : colors.dark.accentA12,
    ghost: !isDarkMode ? colors.light.accentA12 : colors.dark.accentA12,
  },
  neutral: {
    solid: !isDarkMode ? colors.light.neutral1 : colors.dark.neutral1,
    soft: !isDarkMode ? colors.light.neutral12 : colors.dark.neutral12,
    surface: !isDarkMode ? colors.light.neutral12 : colors.dark.neutral12,
    outline: !isDarkMode ? colors.light.neutral12 : colors.dark.neutral12,
    ghost: !isDarkMode ? colors.light.neutral12 : colors.dark.neutral12,
  },
  error: {
    solid: !isDarkMode ? colors.light.error1 : colors.dark.error1,
    soft: !isDarkMode ? colors.light.error12 : colors.dark.error12,
    surface: !isDarkMode ? colors.light.error12 : colors.dark.error12,
    outline: !isDarkMode ? colors.light.error12 : colors.dark.error12,
    ghost: !isDarkMode ? colors.light.error12 : colors.dark.error12,
  },
})

const AppButton: React.FC<AppButtonProps> = React.memo(
  ({
    size = 2,
    variant = 'solid',
    color = 'accent',
    highContrast = false,
    state = 'default',
    iconStart = '',
    iconEnd = '',
    isLoading = false,
    className = '',
    text,
    onPress,
    textClassName = '',
    accessibilityLabel,
    accessibilityHint,
  }) => {
    const { colorScheme } = useColorScheme()
    const isDarkMode = colorScheme === 'dark'

    const sizeStyle = useMemo(() => buttonSizes[size], [size])
    const textSize = useMemo(() => textSizes[size], [size])
    const iconSize = useMemo(() => iconSizes[size], [size])

    // Handle button background colors based on state and high contrast mode
    const getButtonStyle = useCallback(() => {
      if (state === 'disabled') {
        return disabledColors[variant]
      }

      if (state === 'active') {
        return highContrast
          ? highContrastButtonActiveStateColors[color][variant]
          : buttonActiveStateColors[color][variant]
      }

      return highContrast ? highContrastButtonColors[color][variant] : buttonColors[color][variant]
    }, [state, highContrast, color, variant])

    // Handle text colors based on state and high contrast mode
    const getTextStyle = useCallback(() => {
      if (state === 'disabled') {
        return textStates.disabled
      }

      if (state === 'active') {
        return highContrast
          ? highContrastTextActiveStateColors[color][variant]
          : textActiveStateColors[color][variant]
      }

      return highContrast ? highContrastTextColors[color][variant] : textColors[color][variant]
    }, [state, highContrast, color, variant])

    // Get the button background style
    const buttonStyle = useMemo(() => getButtonStyle(), [getButtonStyle])

    // Get the text style
    const textStyle = useMemo(() => getTextStyle(), [getTextStyle])

    // Combine styles for the button container
    const combinedButtonStyles = useMemo(() => {
      return [sizeStyle, buttonStyle, className].join(' ')
    }, [sizeStyle, buttonStyle, className])

    // Combine styles for the text element
    const combinedTextStyle = useMemo(
      () => `font-semibold ${textStyle} ${textSize} ${textClassName}`,
      [textStyle, textSize, textClassName],
    )

    // Get the appropriate icon color based on button state
    const getIconColor = useCallback(() => {
      if (state === 'disabled') {
        return !isDarkMode ? colors.light.neutralA8 : colors.dark.neutralA8
      }

      if (state === 'active') {
        const activeIconColors = highContrast
          ? getHighContrastActiveIconColors(isDarkMode)
          : getActiveIconColors(isDarkMode)
        return activeIconColors[color][variant]
      }

      const defaultIconColors = highContrast
        ? getHighContrastIconColors(isDarkMode)
        : getIconColors(isDarkMode)
      return defaultIconColors[color][variant]
    }, [state, highContrast, color, variant, isDarkMode, colors])

    const iconColor = useMemo(() => getIconColor(), [getIconColor])

    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        if (onPress && state !== 'disabled') {
          onPress(event)
        }
      },
      [onPress, state],
    )

    const buttonAccessibilityProps = useMemo(() => {
      const isDisabled = state === 'disabled'
      return {
        accessibilityRole: 'button' as const,
        accessibilityLabel: accessibilityLabel || text,
        accessibilityHint: accessibilityHint || (isLoading ? 'Loading, please wait' : undefined),
        accessibilityState: {
          disabled: isDisabled,
          busy: isLoading,
        },
      }
    }, [accessibilityLabel, accessibilityHint, text, state, isLoading])

    return (
      <TouchableOpacity
        onPress={handlePress}
        className={`flex items-center justify-center ${combinedButtonStyles}`}
        disabled={state === 'disabled'}
        {...buttonAccessibilityProps}>
        <View className="flex-row items-center">
          {isLoading ? (
            <ActivityIndicator
              animating
              size="small"
              color={iconColor}
              accessibilityLabel="Loading"
            />
          ) : (
            <>
              {iconStart && (
                <View className="mr-md">
                  <AppIcon
                    name={iconStart}
                    size={iconSize}
                    isRemixIcon
                    color={iconColor}
                    accessibilityLabel={`${iconStart} icon`}
                    accessibilityHint={`Button starts with ${iconStart} icon`}
                  />
                </View>
              )}

              <Text className={combinedTextStyle}>{text}</Text>

              {iconEnd && (
                <View className="ml-md">
                  <AppIcon
                    name={iconEnd}
                    size={iconSize}
                    isRemixIcon
                    color={iconColor}
                    accessibilityLabel={`${iconEnd} icon`}
                    accessibilityHint={`Button ends with ${iconEnd} icon`}
                  />
                </View>
              )}
            </>
          )}
        </View>
      </TouchableOpacity>
    )
  },
)

AppButton.displayName = 'AppButton'

export default AppButton
