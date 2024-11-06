import React, { useMemo } from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  ButtonColor,
  buttonColors,
  ButtonSize,
  buttonSizes,
  ButtonState,
  buttonStates,
  ButtonVariant,
  highContrastButtonColors,
  highContrastTextColors,
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
   * Options include 'accent', 'neutral', 'success', 'error', etc.
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
   * Options include 'default', 'hover', 'active', and 'disabled'.
   * Default is 'default'.
   */
  state?: ButtonState

  /**
   * Flag indicating if an icon should be displayed at the start of the button text.
   * Default is false.
   */
  iconStart?: boolean

  /**
   * Flag indicating if an icon should be displayed at the end of the button text.
   * Default is false.
   */
  iconEnd?: boolean

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
  textClassName?: string
}

const AppButton: React.FC<AppButtonProps> = ({
  size = 2,
  variant = 'solid',
  color = 'accent',
  highContrast = false,
  state = 'default',
  iconStart = false,
  iconEnd = false,
  isLoading = false,
  className,
  text,
  onPress,
  textClassName,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const sizeStyle = buttonSizes[size]
  const textSize = textSizes[size]
  const colorVariantStyle = highContrast
    ? highContrastButtonColors[color][variant]
    : buttonColors[color][variant]
  const textStyle = highContrast
    ? highContrastTextColors[color][variant]
    : textColors[color][variant]
  const textStateStyle = textStates[state]

  const buttonStateStyle = useMemo(() => {
    if (state === 'disabled') {
      return (buttonStates[state] as Record<ButtonVariant, string>)[variant]
    }
    return buttonStates[state]
  }, [state, variant])

  const combinedButtonStyles = useMemo(
    () => [sizeStyle, colorVariantStyle, buttonStateStyle].join(' '),
    [sizeStyle, colorVariantStyle, buttonStateStyle],
  )

  const combinedTextStyle = useMemo(
    () => [textStyle, textSize, textStateStyle].join(' '),
    [textStyle, textSize, textStateStyle],
  )

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex items-center justify-center ${combinedButtonStyles} ${className}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || text}
      accessibilityHint={accessibilityHint}
      disabled={state === 'disabled'}
      accessibilityState={{ disabled: state === 'disabled' }}>
      <View className="flex items-center">
        {iconStart && (
          <View className="mr-2 ">
            {' '}
            {/* Icon Component - Will add the icon here after the remix icon setup */}{' '}
          </View>
        )}
        {isLoading ? (
          <ActivityIndicator animating size="small" color={combinedTextStyle} />
        ) : (
          <Text className={`font-semibold ${combinedTextStyle} ${textClassName}`}>{text}</Text>
        )}
        {iconEnd && (
          <View className="ml-2">
            {' '}
            {/* Icon Component - Will add the icon here after the remix icon setup */}{' '}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default AppButton
