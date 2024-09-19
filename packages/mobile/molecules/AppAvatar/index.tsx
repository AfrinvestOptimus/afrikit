import React from 'react'
import { Image, Text, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import colors from 'afrikit-shared/colors';
import classNames from '../../utilities/classnames'
import getInitials from '../../utilities/getInitials'
import {
  AppAvatarProps,
  avatarColors,
  highContrastAvatarColors,
  highContrastTextColors,
  iconSizes,
  sizeStyles,
  textColors,
  textSizes,
} from './avatar'

const AppAvatar: React.FC<AppAvatarProps> = ({
  size = 4,
  variant = 'solid',
  color = 'neutral',
  highContrast = false,
  fallBack = 'initials',
  initials = '',
  imageUrl,
  numberOfInitials = 1,
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
          <>
            <View className={`${avatarSizeStyle}  flex items-center justify-center`}>
              <Image source={{ uri: imageUrl }} className={avatarSizeStyle} resizeMode="cover" />
            </View>
          </>
        ) : null
      case 'initials':
        return (
          <View
            className={`${classNames(avatarSizeStyle, avatarColor)}flex items-center justify-center`}>
            <Text className={`${classNames(textSizeStyle, textColor)}`}>
              {getInitials(initials, numberOfInitials)}
            </Text>
          </View>
        )
      case 'icon':
        return (
          <View
            className={`${classNames(avatarSizeStyle, avatarColor)} flex items-center justify-center`}>
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
