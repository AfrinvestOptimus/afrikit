import React, { useMemo } from 'react'
import { GestureResponderEvent, Pressable, Text, View } from 'react-native'
import AppIcon from '../AppIcon'
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
  iconSizes,
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
  iconStart?: string
  iconEnd?: string
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
  iconStart = '',
  iconEnd = '',
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

  // Icon size: use iconSizes for badge icons (should match AppButton)
  const iconSize = iconSizes[size]
  // Icon color: use textStyle for badge icons
  const iconColor = textStyle

  return (
    <Pressable
      onPress={onPress}
      className={`flex items-center justify-center ${combinedBadgeStyles} ${className}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || text}
      accessibilityHint={accessibilityHint}
      disabled={state === 'disabled'}
      accessibilityState={{ disabled: state === 'disabled' }}>
      <View className="flex items-center flex-row">
        {iconStart && (
          <View className="mr-md">
            <AppIcon
              name={iconStart}
              size={iconSize}
              isRemixIcon
              color={iconColor}
              accessibilityLabel={`${iconStart} icon`}
              accessibilityHint={`Badge starts with ${iconStart} icon`}
            />
          </View>
        )}
        <Text className={`font-semibold ${combinedTextStyle}`}>{text}</Text>
        {iconEnd && (
          <View className="ml-md">
            <AppIcon
              name={iconEnd}
              size={iconSize}
              isRemixIcon
              color={iconColor}
              accessibilityLabel={`${iconEnd} icon`}
              accessibilityHint={`Badge ends with ${iconEnd} icon`}
            />
          </View>
        )}
      </View>
    </Pressable>
  )
}

export default AppBadge
