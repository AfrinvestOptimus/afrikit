import React from 'react';
import { Image, Text, View } from 'react-native';
import classNames from '../../utilities/classnames';
import { AppAvatarProps, avatarColors, highContrastAvatarColors, highContrastTextColors, sizeStyles, textColors, textSizes } from './avatar';


const AppAvatar: React.FC<AppAvatarProps> = ({
  size = 4,
  variant = 'solid',
  color = 'neutral',
  highContrast = false,
  fallBack = 'initials',
  status = false,
  initials = '',
  imageUrl,
  icon,
}) => {
  const avatarSizeStyle = sizeStyles[size];
  const textColor = highContrast ? highContrastTextColors[color][variant] : textColors[color][variant];
  const avatarColor = highContrast ? highContrastAvatarColors[color][variant] : avatarColors[color][variant];
  const textSizeStyle = textSizes[size];

  const renderAvatar = () => {
    switch (fallBack) {
      case 'image':
        return imageUrl ?
          <>
            <View className={`${avatarSizeStyle} border-r-dark-error1 border flex items-center justify-center`}>
              <Image source={{ uri: imageUrl }} className={avatarSizeStyle}
              resizeMode="cover" />
            </View>
          </>

          : null;
      case 'initials':
        return (
          <View className={`${classNames(avatarSizeStyle, avatarColor)}flex items-center justify-center`}>
            <Text className={`${classNames(textSizeStyle, textColor)}`}>{initials}</Text>
          </View>
        )
      case 'icon':
        return (
          <View className={`${classNames(avatarSizeStyle, avatarColor)} flex items-center justify-center`}>
            {icon}
          </View>
        )
      default:
        return null;
    }
  };

  return (
    <>
      {renderAvatar()}
    </>


  );
};

export default AppAvatar;
