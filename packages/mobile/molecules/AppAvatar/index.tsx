import colors from 'afrikit-shared/dist/colors'
import React from 'react'
import { Image, Text, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import classNames from '../../utilities/classnames'
import getInitials from '../../utilities/getInitials'
import {
  AvatarColor,
  avatarColors,
  AvatarFallback,
  AvatarSize,
  AvatarVariant,
  highContrastAvatarColors,
  highContrastTextColors,
  iconSizes,
  NumberOfInitials,
  sizeStyles,
  textColors,
  textSizes,
} from './avatar'

/**
 * Props for the AppAvatar component.
 */
export interface AppAvatarProps {
  /**
   * The size of the avatar.
   * Determines the dimensions and text size of the avatar.
   * Default is 4.
   */
  size?: AvatarSize

  /**
   * The visual style of the avatar.
   * Options are 'solid' or 'soft'. Default is 'solid'.
   */
  variant?: AvatarVariant

  /**
   * The color scheme of the avatar.
   * Options include 'accent', 'neutral', 'success', 'error', 'warning', 'info'.
   * Default is 'neutral'.
   */
  color?: AvatarColor

  /**
   * Flag indicating if the avatar should use high contrast colors.
   * Default is false.
   */
  highContrast?: boolean

  /**
   * The fallback method for displaying the avatar.
   * Options are 'image', 'initials', or 'icon'. Default is 'initials'.
   */
  fallBack?: AvatarFallback

  /**
   * Optional status indicator for the avatar (e.g., online/offline).
   * Not currently implemented in the component.
   */
  status?: boolean

  /**
   * The initials to display if using the initials fallback.
   * Default is an empty string.
   */
  initials?: string

  /**
   * The URL of the image to display if using the image fallback.
   * Default is an empty string.
   */
  imageUrl?: string

  /**
   * Optional custom icon to display if using the icon fallback.
   * Default is the user icon.
   */
  icon?: React.ReactNode

  /**
   * The number of initials to display if using the initials fallback.
   * Options are 1 or 2. Default is 1.
   */
  numberOfInitials?: NumberOfInitials

  /**
   * Accessibility label for the avatar.
   * Default is an empty string.
   */
  accessibilityLabel?: string
}

/**
 * AppAvatar is a functional component that displays an avatar image,
 * initials, or an icon based on the provided props.
 * It supports multiple sizes, variants, colors, and fallback options.
 */
const AppAvatar: React.FC<AppAvatarProps> = ({
  size = 4,
  variant = 'solid',
  color = 'neutral',
  highContrast = false,
  fallBack = 'initials',
  initials = '',
  imageUrl,
  numberOfInitials = 1,
  accessibilityLabel = '',
}) => {
  const avatarSizeStyle = sizeStyles[size]
  const textColor = highContrast
    ? highContrastTextColors[color][variant]
    : textColors[color][variant]
  const avatarColor = highContrast
    ? highContrastAvatarColors[color][variant]
    : avatarColors[color][variant]
  const textSizeStyle = textSizes[size]

  const iconSize = iconSizes[size]

  const renderAvatar = () => {
    switch (fallBack) {
      case 'image':
        return imageUrl ? (
          <View
            className={`${avatarSizeStyle} flex items-center justify-center`}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="image">
            <Image
              source={{ uri: imageUrl }}
              className={avatarSizeStyle}
              resizeMode="cover"
              accessible={false}
            />
          </View>
        ) : null
      case 'initials':
        return (
          <View
            className={`${classNames(avatarSizeStyle, avatarColor)} flex items-center justify-center`}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="text">
            <Text className={`${classNames(textSizeStyle, textColor)}`}>
              {getInitials(initials, numberOfInitials)}
            </Text>
          </View>
        )
      case 'icon':
        return (
          <View
            className={`${classNames(avatarSizeStyle, avatarColor)} flex items-center justify-center`}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="image">
            <RemixIcon name="user-6-line" size={iconSize} color={colors.light.amber1} />
          </View>
        )
      default:
        return null
    }
  }

  return <>{renderAvatar()}</>
}

export default AppAvatar
