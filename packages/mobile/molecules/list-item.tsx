import { cssInterop, useColorScheme } from 'nativewind'
import React from 'react'
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import colors from 'afrikit-shared/dist/colors'
import AppText from '../atoms/AppText'
import { AppTextAtomProps } from '../types/atoms'
import { AppAvatar, AppAvatarProps, AppButton, AppButtonProps } from './index'

type TrailingProps = {
  type?: string
  trailingTitle?: string
  trailingSubtitle?: string
  trailingTitleProps?: AppTextAtomProps
  trailingSubtitleProps?: AppTextAtomProps
  buttonProps?: AppButtonProps
  linkProps?: Pick<AppTextAtomProps, 'onPress' | 'color'>
  trailingIcon?: string
  trailingIconColor?: string
  trailingContent?: string | React.ReactNode
}

type LeadingProps = {
  type?: string
  avatarProps?: AppAvatarProps
  leadingIcon?: string
  leadingIconColor?: string
  leadingContent?: string | React.ReactNode
}

export type ListItemProps = {
  size?: '1' | '2'
  variant?: '1-line' | '2-line' | '3-line'
  density?: Density
  leading?:
    | 'none'
    | 'avatar'
    | 'brand'
    | 'icon'
    | 'paymentMethod'
    | 'flag'
    | 'txStatus'
    | 'activity'
    | 'productIcon'
    | 'check'
    | 'radio'
  trailing?: 'none' | 'textContent' | 'text' | 'link' | 'icon' | 'button' | 'switch'
  subTrigger?: boolean
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged'
  separator?: boolean
  isChecked?: boolean
  title: string
  titleProps?: AppTextAtomProps
  subtitle?: string
  subtitleProps?: AppTextAtomProps
  activity?: ActivityStatus
  topMeta?: string
  bottomMeta?: string
  onPress?: () => void
} & TrailingProps &
  LeadingProps

const activityStatusIcons = {
  default: 'flashlight-line',
  activity: 'flashlight-line',
  swap: 'arrow-left-right-line',
  moneyIn: 'add-line',
  moneyOut: 'arrow-right-up-line',
  directDebit: 'loop-right-line',
  system: 'megaphone-line',
  avatar: 'flashlight-line', //renders an avatar
}

const densitySpacing = {
  default: 'py-lg',
  relaxed: 'py-xl',
  compact: 'py-md',
}
type Density = keyof typeof densitySpacing
type ActivityStatus = keyof typeof activityStatusIcons

cssInterop(RemixIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

/**
 * ListItem Component
 * 
 * The `ListItem` component is a versatile and customizable UI component for displaying items in a list format.
 * It supports various configurations for leading and trailing content, density, interaction states, and more.
 * This component can be used in various contexts, such as lists of contacts, messages, or any other itemized data.
 * 
 * ## Props:
 * 
 * - `size` (string): Determines the size of the text. Acceptable values are '1' (small) or '2' (default). Default is '2'.
 * - `variant` (string): Specifies the layout of the text. Acceptable values are '1-line', '2-line', or '3-line'. Default is '1-line'.
 * - `density` (Density): Defines the vertical spacing of the item. Default is 'default'.
 * - `leading` (string): Determines the leading content (e.g., 'avatar', 'icon', etc.). Default is 'none'.
 * - `trailing` (string): Defines the trailing content (e.g., 'text', 'button', etc.). Default is 'none'.
 * - `subTrigger` (boolean): If true, displays a sub-trigger icon. Default is false.
 * - `state` (string): Indicates the current state of the item. Acceptable values are 'enabled', 'hovered', 'focused', 'pressed', or 'dragged'. Default is 'enabled'.
 * - `separator` (boolean): If true, adds a separator line below the item. Default is false.
 * - `isChecked` (boolean): Indicates whether the item is checked (for checkboxes or radio buttons). Default is false.
 * - `title` (string): The main title text of the item. This prop is required.
 * - `subtitle` (string): The subtitle text of the item.
 * - `activity` (ActivityStatus): Represents the activity status icon to display. Default is 'default'.
 * - `topMeta` (string): Optional metadata to display at the top of the item.
 * - `bottomMeta` (string): Optional metadata to display at the bottom of the item.
 * - `onPress` (function): Callback function to handle item press events.
 * - `trailingTitle` (string): Title for the trailing content (if applicable).
 * - `trailingSubtitle` (string): Subtitle for the trailing content (if applicable).
 * - `trailingTitleProps` (AppTextAtomProps): Additional props for the trailing title text.
 * - `trailingSubtitleProps` (AppTextAtomProps): Additional props for the trailing subtitle text.
 * - `linkProps` (Pick<AppTextAtomProps, 'onPress' | 'color'>): Props for link text in the trailing area.
 * - `avatarProps` (AppAvatarProps): Props for customizing the avatar when leading content is an avatar.
 * - `buttonProps` (AppButtonProps): Props for customizing the button when trailing content is a button.
 * - `leadingContent` (string | React.ReactNode): Content to be displayed in the leading area (can be a string or node).
 * - `trailingContent` (string | React.ReactNode): Content to be displayed in the trailing area (can be a string or node).
 * 
 * ## Usage Example:
 * 
 *

```
 * import React from 'react';
 * import { View } from 'react-native';
 * import ListItem from './path/to/ListItem';
 * 
 * const MyList = () => {
 *   return (
 *     <View>
 *       <ListItem
 *         title="Item Title"
 *         subtitle="Item Subtitle"
 *         leading="avatar"
 *         trailing="text"
 *         trailingTitle="More Info"
 *         onPress={() => console.log('Item pressed')}
 *       />
 *     </View>
 *   );
 * };
 * 
 * export default MyList;
 * ```
 * 
 * ## Activity Status Icons:
 * 
 * The `ListItem` component supports different activity status icons through the `activity` prop. The following statuses are recognized:
 * - `default`: Displays a default icon.
 * - `activity`: Displays an activity icon.
 * - `swap`: Displays a swap icon.
 * - `moneyIn`: Displays an icon indicating money coming in.
 * - `moneyOut`: Displays an icon indicating money going out.
 * - `directDebit`: Displays an icon for direct debit.
 * - `system`: Displays a system notification icon.
 * - `avatar`: Displays an avatar icon.
 * 
 * ## Density Spacing:
 * 
 * The `density` prop controls the vertical spacing of the item. The available options are:
 * - `default`: Standard spacing.
 * - `relaxed`: More spacing for a relaxed layout.
 * - `compact`: Less spacing for a compact layout.
 * 
 * ## CheckComponent:
 * 
 * The `CheckComponent` is a sub-component used to render checkboxes or radio buttons within the `ListItem`. It accepts the following props:
 * 
 * - `isSquare` (boolean): If true, renders a square checkbox. Default is false.
 * - `isChecked` (boolean): Indicates whether the checkbox is checked. Default is false.
 * 
 * ## Contributing:
 * 
 * If you would like to contribute to the `ListItem` component, please feel free to submit issues or pull requests. Your contributions are welcome!
 */

const ListItem: React.FC<ListItemProps> = ({
  size = '2',
  variant = '1-line',
  density = 'default',
  leading = 'none',
  trailing = 'none',
  subTrigger = false,
  state = 'enabled',
  separator = false,
  isChecked = false,
  activity = 'default',
  title,
  subtitle,
  titleProps,
  subtitleProps,
  trailingTitleProps,
  trailingSubtitleProps,
  linkProps,
  avatarProps,
  buttonProps,
  trailingTitle,
  trailingSubtitle,
  trailingIcon,
  trailingIconColor,
  topMeta,
  bottomMeta,
  leadingContent,
  trailingContent,
  onPress,
  ...props
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const containerClasses = `
    flex-row items-center p-4
    ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
    ${state === 'hovered' ? 'opacity-80' : ''}
    ${state === 'focused' ? 'border border-blue-500' : ''}
    ${state === 'pressed' ? 'opacity-60' : ''}
    ${state === 'dragged' ? 'opacity-40' : ''}
    ${separator ? 'border-b border-b-light-edge-gray-subtle dark:border-b-dark-edge-gray-subtle' : ''}
    ${densitySpacing[density] || densitySpacing.default}
  `

  const titleClasses = `
    font-medium
    ${size === '1' ? 'text-sm' : 'text-base'}
    text-light-type-gray dark:text-dark-type-gray
    `
  const subtitleClasses = `
    ${size === '1' ? 'text-xs' : 'text-sm'}
    text-light-type-gray-muted dark:text-dark-type-gray-muted
    `
  const [_isChecked, setIsChecked] = React.useState(isChecked)

  React.useEffect(() => {
    setIsChecked(isChecked)
  }, [isChecked])

  const handlePress = () => {
    onPress?.()
    if (['check', 'radio'].includes(leading) || ['switch'].includes(trailing)) {
      setIsChecked(prev => !prev)
    }
  }

  const renderLeading = () => {
    if (leading === 'none') return null
    if (leadingContent && typeof leadingContent !== 'string') return leadingContent

    switch (leading) {
      case 'avatar':
        return (
          <AppAvatar
            size={3}
            color="accent"
            highContrast={false}
            fallBack="initials"
            initials={(leadingContent as string) || 'S'}
            status={false}
            variant="solid"
            {...avatarProps}
          />
        )
      case 'brand': //TODO: BrandLogos on the AppAvatar icon, passing a dummy
        return (
          <View className="w-3xl h-3xl rounded-xs-max bg-light-surface dark:bg-dark-surface border border-light-edge-gray dark:border-dark-edge-gray" />
        )
      case 'flag':
        return (
          <Image
            className="w-3xl h-3xl rounded-sm-max"
            source={{
              uri:
                (leadingContent as string) ||
                'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif',
            }}
            resizeMode="cover"
          />
        )
      case 'icon': //TODO: Bawaiting the icon name
        return (
          <View className="w-3xl h-3xl rounded-sm-max bg-light-surface-gray dark:bg-dark-surface-gray gap-lg justify-center items-center">
            <RemixIcon name={typeof leadingContent === 'string' ? leadingContent : 'user-6-line'} />
          </View>
        )
      case 'paymentMethod':
        return (
          <Image
            className="w-3xl h-3xl rounded-sm-max"
            source={{
              uri:
                (leadingContent as string) ||
                'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif',
            }}
          />
        )
      case 'activity': //TODO: create an activity icon
        return (
          <View
            className={`w-3xl h-3xl rounded-md-max gap-lg justify-center items-center ${activity === 'system' ? 'bg-light-background-accent-light dark:bg-dark-background-accent-light' : 'bg-light-surface-gray dark:bg-dark-surface-gray'}`}>
            {activity === 'avatar' ? ( //TODO: return dummy avatar
              <View className="w-3xl h-3xl rounded-xs-max justify-center items-center bg-light-background-accent-base dark:bg-dark-background-accent-base">
                <Text className="text-white">A</Text>
              </View>
            ) : (
              <RemixIcon
                name={activityStatusIcons[activity] || activityStatusIcons.default}
                color={
                  activity === 'system'
                    ? colors.light.type.accent.DEFAULT
                    : colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT
                }
              />
            )}
          </View>
        )
      case 'productIcon': //TODO: Find product icons or logos
        return (
          <View className="w-4xl h-4xl rounded-md-max border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle p-sm justify-center bg-dark-surface items-center">
            <Image
              className="w-xl h-xl"
              source={{ uri: 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif' }}
            />
          </View>
        )
      case 'check':
        return <CheckComponent isChecked={_isChecked} isSquare />
      case 'radio':
        return <CheckComponent isChecked={_isChecked} />
      default:
        return <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{trailing}</Text>
    }
  }

  const renderTrailing = () => {
    if (trailing === 'none') return null

    switch (trailing) {
      case 'text':
        return (
          <>
            <AppText size={3} align="right" color="gray" {...trailingTitleProps}>
              {trailingTitle}
            </AppText>
          </>
        )
      case 'textContent':
        return (
          <>
            <AppText size={3} align="right" highContrast color="gray" {...trailingTitleProps}>
              {trailingTitle}
            </AppText>
            <AppText
              size={2}
              align="right"
              className={'mt-xs dark:text-dark-type-gray-muted'}
              {...trailingSubtitleProps}>
              {trailingSubtitle}
            </AppText>
          </>
        )
      case 'link':
        return (
          <AppText color={'accent'} {...linkProps}>
            {trailingTitle}
          </AppText>
        )
      case 'switch':
        return (
          <Switch
            value={_isChecked}
            onValueChange={() => {}}
            trackColor={{
              false: colors.light.background.disable1,
              true: colors.light.type.accent.DEFAULT,
            }}
            ios_backgroundColor={colors.light.background.disable1}
            thumbColor={colors.light['contrast-white']}
          />
        )
      case 'icon':
        return (
          <RemixIcon
            name={trailingIcon || 'inner-shadow'}
            color={trailingIconColor || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
            size={24}
          />
        )
      case 'button':
        return (
          <AppButton
            text={trailingTitle || 'Button'}
            onPress={handlePress}
            color="neutral"
            highContrast
          />
        )
      default:
        if (trailingContent) return trailingContent
        return <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{trailing}</Text>
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} className={`${containerClasses}`}>
      {leading !== 'none' && (
        <View
          className={`mr-lg  ${variant === '3-line' ? 'justify-start items-start self-start' : 'self-center items-center'}`}>
          {renderLeading()}
        </View>
      )}
      <View className="flex-1">
        {!!topMeta && <Text className={`${subtitleClasses} text-xs-body mb-xs`}>{topMeta}</Text>}
        <AppText size={3} color="gray" weight="medium" align="left" highContrast {...titleProps}>
          {title}
        </AppText>
        {(variant === '2-line' || variant === '3-line') && subtitle && (
          <AppText
            numberOfLines={variant === '2-line' ? 1 : undefined}
            size={2}
            weight="regular"
            align="left"
            highContrast={false}
            color="gray"
            className={`mt-xs`}
            {...subtitleProps}>
            {subtitle}
          </AppText>
        )}
        {!!bottomMeta && (
          <Text className={`${subtitleClasses} text-xs-body mt-xs`}>{bottomMeta}</Text>
        )}
      </View>
      {trailing !== 'none' && (
        <View
          className={`ml-lg justify-center" ${variant === '3-line' ? 'justify-start items-start self-start' : 'self-center items-center'}`}>
          {renderTrailing()}
        </View>
      )}
      {subTrigger && (
        <View
          className={`ml-sm justify-center" ${variant === '3-line' ? 'justify-start items-start self-start' : 'self-center items-center'}`}>
          <RemixIcon
            name="arrow-right-wide-fill"
            color={colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
            size={24}
          />
        </View>
      )}
    </TouchableOpacity>
  )
}

const CheckComponent = ({ isSquare = false, isChecked = false }) => (
  <View
    className={`
      w-xl h-xl ${isSquare ? 'rounded-xs' : 'rounded-md-max'} 
      self-start justify-center items-center 
      ${
        isChecked
          ? 'bg-light-background-accent-base dark:bg-dark-background-accent-base'
          : 'bg-[transparent]'
        // : 'bg-light-surface-gray dark:bg-dark-surface-gray'
      }
         border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle`}>
    {isChecked && <RemixIcon name="check-fill" size={20} color={'white'} />}
  </View>
)
export default ListItem
