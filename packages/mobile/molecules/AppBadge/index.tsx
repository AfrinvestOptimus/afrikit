import React, { useMemo } from 'react'
import { GestureResponderEvent, Pressable, Text, View } from 'react-native'
import {
  BadgeColor,
  badgeColors,
  BadgeSize,
  badgeSizes,
  BadgeState,
  badgeStates,
  BadgeVariant,
  highContrastBadgeColors,
  highContrastTextColors,
  textColors,
  textSizes,
  textStates,
} from './badge'

export interface AppBadgeProps {
  size?: BadgeSize
  variant?: BadgeVariant
  color?: BadgeColor
  highContrast?: boolean
  state?: BadgeState
  iconStart?: boolean
  iconEnd?: boolean
  iconName?: string
  className?: string
  text: string
  onPress?: (event: GestureResponderEvent) => void
  accessibilityLabel?: string
  accessibilityHint?: string
}

//handles size, variant and color for now
const AppBadge: React.FC<AppBadgeProps> = ({
  size = 1,
  variant = 'soft',
  color = 'accent',
  highContrast = false,
  state = 'default',
  iconStart = false,
  iconEnd = false,
  className,
  text,
  onPress,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const sizeStyle = badgeSizes[size]
  const textSize = textSizes[size]
  const colorVariantStyle = highContrast
    ? highContrastBadgeColors[color][variant]
    : badgeColors[color][variant]
  const textStyle = highContrast
    ? highContrastTextColors[color][variant]
    : textColors[color][variant]
  const textStateStyle = textStates[state]

  const badgeStateStyle = useMemo(() => {
    if (state === 'disabled') {
      return (badgeStates[state] as Record<BadgeVariant, string>)[variant]
    }
    return badgeStates[state]
  }, [state, variant])

  const combinedBadgeStyles = useMemo(
    () => [sizeStyle, colorVariantStyle, badgeStateStyle].join(' '),
    [sizeStyle, colorVariantStyle, badgeStateStyle],
  )

  const combinedTextStyle = useMemo(
    () => [textStyle, textSize, textStateStyle].join(' '),
    [textStyle, textSize, textStateStyle],
  )

  return (
    <Pressable
      onPress={onPress}
      className={`flex items-center justify-center ${combinedBadgeStyles} ${className}`}
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
    </Pressable>
  )
}

export default AppBadge
