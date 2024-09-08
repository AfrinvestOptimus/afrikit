import { cssInterop, useColorScheme } from 'nativewind'
import React from 'react'
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import colors from '../../shared/colors'
import AppText from '../atoms/AppText'
import AppAvatar from './AppAvatar'
import AppButton from './AppButton'

type TrailingProps = {
  type?: string
  trailingTitle?: string
  trailingSubtitle?: string
  trailingIcon?: string
  trailingIconColor?: string
  trailingContent?: string | React.ReactNode
}

export type ListItemProps = {
  size?: '1' | '2'
  variant?: '1-line' | '2-line' | '3-line'
  density?: 'default' | 'relaxed' | 'compact'
  leading?:
    | 'none'
    | 'avatar'
    | 'brand'
    | 'icon'
    | 'paymentMethod'
    | 'flag'
    | 'activity'
    | 'productIcon'
    | 'check'
    | 'radio'
  trailing?: 'none' | 'textContent' | 'text' | 'link' | 'icon' | 'button' | 'switch'
  subTrigger?: boolean
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged'
  activity?: ActivityStatus
  separator?: boolean
  isChecked?: boolean
  title: string
  subtitle?: string
  trailingTitle?: string
  trailingSubtitle?: string
  topMeta?: string
  bottomMeta?: string
  leadingContent?: string | React.ReactNode
  trailingContent?: string | React.ReactNode
  onPress?: () => void
} & TrailingProps

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
type ActivityStatus = keyof typeof activityStatusIcons

cssInterop(RemixIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

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
  trailingTitle,
  trailingSubtitle,
  trailingIcon,
  trailingIconColor,
  topMeta,
  bottomMeta,
  leadingContent,
  trailingContent,
  onPress,
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
      case 'productIcon': //TODO: Find proct icons or logos
        return (
          <View className="w-4xl h-4xl rounded-md-max border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle p-md justify-center items-center">
            <Image
              className="w-2xl h-2xl"
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
      case 'text': //TODO: use AppText
        return (
          <>
            <AppText size={3} align="right" color="text-light-type-gray dark:text-dark-type-gray">
              {trailingTitle}
            </AppText>
          </>
        )
      case 'textContent': //TODO: use AppText
        return (
          <>
            <AppText
              size={3}
              align="right"
              highContrast
              color="text-light-type-gray dark:text-dark-type-gray">
              {trailingTitle}
            </AppText>
            <AppText size={2} align="right" className={'mt-xs dark:text-dark-type-gray-muted'}>
              {trailingSubtitle}
            </AppText>
          </>
        )
      case 'link': //TODO: pass text link
        return (
          <AppText color={`text-light-accentA11 dark:text-dark-accentA11`}>{trailingTitle}</AppText>
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
        <AppText
          // className={`${titleClasses} text-sm-body text-light-type-gray dark:text-dark-type-gray `}
          size={3}
          color="text-light-type-gray dark:text-dark-type-gray"
          weight="medium"
          align="left"
          highContrast>
          {title}
        </AppText>
        {(variant === '2-line' || variant === '3-line') && subtitle && (
          <AppText
            numberOfLines={variant === '2-line' ? 1 : undefined}
            size={2}
            weight="regular"
            align="left"
            highContrast={false}
            color="text-light-type-gray-muted dark:text-dark-type-gray-muted"
            className={`mt-xs`}
            // className={`${subtitleClasses} text-body2 dark:text-dark-type-gray-muted mt-xs `}
          >
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
