import React, { useMemo } from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'
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

export interface AppButtonProps {
  size?: ButtonSize
  variant?: ButtonVariant
  color?: ButtonColor
  highContrast?: boolean
  state?: ButtonState
  iconStart?: boolean
  iconEnd?: boolean
  iconName?: string
  className?: string
  text: string
  onPress?: (event: GestureResponderEvent) => void
  accessibilityLabel?: string
  accessibilityHint?: string
}

const AppButton: React.FC<AppButtonProps> = ({
  size = 2,
  variant = 'solid',
  color = 'accent',
  highContrast = false,
  state = 'default',
  iconStart = false,
  iconEnd = false,
  iconName,
  className,
  text,
  onPress,
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
        <Text className={`font-semibold ${combinedTextStyle}`}>{text}</Text>
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
