import React from 'react';
import { useColorScheme, View } from 'react-native';
import colors from '../../../shared/colors';
import IconButton from '../../components/molecules/IconButton';
import { topBarTitle, topBarTitle2 } from '../../components/molecules/TopBarTitle';

export interface AppTopBarProps {
 /**
  * Determines the style and layout of the app bar.
  * - 'default': Standard app bar with title and optional subtitle aligned to the left.
  * - 'centered': Title and optional subtitle are centered.
  * - 'large': Larger title, usually for primary pages.
  * - 'menu': App bar designed with a menu button on the left.
  * - 'small': Smaller title size, typically for secondary pages.
  * - 'small-centered': Small title centered on the app bar.
  * - 'large-centered': Large title centered on the app bar.
  * @default 'centered'
  */
 variant: 'default' | 'centered' | 'large' | 'large2' | 'menu' | 'small' | 'small-centered' | 'large-centered' | 'large2-centered';

 /**
  * The main title displayed on the app bar.
  */
 title?: string;

 /**
  * An optional subtitle displayed below the title.
  */
 subtitle?: string;

 /**
  * Toggles the visibility of the left icon on the app bar.
  * Useful for various actions like navigating back or opening a menu.
  * @default true
  */
 showLeftIcon?: boolean;

 /**
  * Toggles the visibility of the first right icon on the app bar.
  * Used for various actions like search or profile.
  * @default true
  */
 showRightIcon1?: boolean;

 /**
  * Toggles the visibility of the second right icon on the app bar.
  * Used for various actions like search or profile.
  * @default true
  */
 showRightIcon2?: boolean;

 /**
  * Toggles the visibility of the third right icon on the app bar.
  * Used for various actions like search or profile.
  * @default true
  */
 showRightIcon3?: boolean;

 /**
  * Applies dark mode styling to the app bar.
  * Automatically determined by the useColorScheme hook, but can be overridden.
  */
 darkMode?: boolean;

 /**
  * Callback function that is triggered when the left icon is pressed.
  */
 onLeftIconPress?: () => void;

 /**
  * Callback function that is triggered when the first right icon is pressed.
  */
 onRightIconPress1?: () => void;

 /**
  * Callback function that is triggered when the second right icon is pressed.
  */
 onRightIconPress2?: () => void;

 /**
  * Callback function that is triggered when the third right icon is pressed.
  */
 onRightIconPress3?: () => void;
}


export const AppTopBar: React.FC<AppTopBarProps> = ({
  variant = 'centered',
  title,
  subtitle,
  showLeftIcon = false,
  showRightIcon1 = true,
  showRightIcon2 = true,
  showRightIcon3 = true,
  onLeftIconPress,
  onRightIconPress1,
  onRightIconPress2,
  onRightIconPress3,
}) => {
  const colorScheme = useColorScheme();
  const commonIconColor = colorScheme === 'dark' ? colors.dark['dark-to-white'] : colors.light['dark-to-white'];

  const renderLeftIcon = () => {
    if (showLeftIcon) {
      return (
        <View className='flex-row flex-1 items-center'>
          <IconButton
            onPress={onLeftIconPress}
            iconName="arrow-left-s-line" // Change the icon name as needed (menu-line)
            iconSize={25}
            iconColor={commonIconColor}
          />
          {renderTitle()}
        </View>
       
      );
    }
    return null;
  };

  const renderRightIcons = () => (
    <View className={`flex-row justify-center`}>
      {showRightIcon1 && (
        <IconButton
          onPress={onRightIconPress1}
          iconName="search-line" // Change the icon name as needed
          iconSize={20}
          iconColor={commonIconColor}
        />
      )}
      {showRightIcon2 && (

        <IconButton
          onPress={onRightIconPress2}
          iconName="at-line" // Change the icon name as needed
          iconSize={20}
          iconColor={commonIconColor}
        />
      )}
      {showRightIcon3 && (
        <IconButton
        onPress={onRightIconPress3}
        iconName="user-line" // Change the icon name as needed
        iconSize={20}
        iconColor={commonIconColor}
      />
      )}
    </View>
  );

  const renderTitle = () => {
    switch (variant) {
      case 'centered':
        return topBarTitle({variant, title, subtitle: subtitle})
      case 'large':
        return topBarTitle({variant, title, subtitle})
      case 'menu':
        return topBarTitle({variant, title, subtitle})
      case 'small':
        return topBarTitle({variant, title, subtitle})
      case 'small-centered':
        return topBarTitle({variant, title, subtitle})
      case 'large-centered':
        return topBarTitle({variant, title, subtitle})
      default:
        return topBarTitle({variant, title, subtitle})
    }
  };

  const renderTitle2 = () => {
    switch (variant) {
      case 'large2':
        return topBarTitle2({variant, title, subtitle})
      case 'large2-centered':
        return topBarTitle2({variant, title, subtitle})
      default:
        return topBarTitle2({variant, title, subtitle})
    }
  };

  return (
    <View className='w-full py-lg bg-light-page-bg dark:bg-dark-page-bg'>
      <View className='flex-row h-[54px] justify-between'>
        {renderLeftIcon()}
        {renderRightIcons()} 
      </View>
      {renderTitle2()}
    </View>
  );

};