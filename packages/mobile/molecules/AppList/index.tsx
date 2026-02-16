import colors from 'afrikit-shared/dist/colors'
import { cssInterop, useColorScheme } from 'nativewind'
import React, { useCallback, useMemo } from 'react'
import { Image, Pressable, Switch, Text, View } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import ProductCommercialPaper from '../../assets/product-commercial-paper.png'
import ProductEarn from '../../assets/product-earn.png'
import ProductFixedDeposit from '../../assets/product-fixed-deposit.png'
import ProductMutualFunds from '../../assets/product-mutual-funds.png'
import ProductFlex from '../../assets/product-optiflex.png'
import ProductLock from '../../assets/product-optilock.png'
import ProductTarget from '../../assets/product-optitarget.png'
import ProductTreasuryBill from '../../assets/product-treasury-bill.png'
import ProductUSStocks from '../../assets/product-us-stock.png'
import AppText from '../../atoms/AppText'
import { AppTextAtomProps } from '../../types/atoms'
import {
  AppAvatar,
  AppAvatarProps,
  AppBadge,
  AppBadgeProps,
  AppButton,
  AppButtonProps,
  AppIcon,
  AppIconProps,
} from '../index'

/**
 * Available options for leading (left-side) content in a ListItem.
 *
 * @typedef LeadingOptions
 * @property 'none' - No leading content
 * @property 'avatar' - Display an avatar component
 * @property 'brand' - Display a brand logo placeholder
 * @property 'icon' - Display a customizable icon
 * @property 'paymentMethod' - Display a payment method image
 * @property 'flag' - Display a country flag image
 * @property 'txStatus' - Display a transaction status indicator
 * @property 'activity' - Display an activity status icon
 * @property 'productIcon' - Display a product-specific icon
 * @property 'check' - Display a checkbox
 * @property 'radio' - Display a radio button
 */
export type LeadingOptions =
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

/**
 * Available options for trailing (right-side) content in a ListItem.
 *
 * @typedef TrailingOptions
 * @property 'none' - No trailing content
 * @property 'textContent' - Display title and subtitle text
 * @property 'text' - Display single line of text
 * @property 'link' - Display a clickable link
 * @property 'icon' - Display an icon
 * @property 'button' - Display a button
 * @property 'switch' - Display a toggle switch
 * @property 'custom' - Display custom React content
 */
export type TrailingOptions =
  | 'none'
  | 'textContent'
  | 'text'
  | 'link'
  | 'icon'
  | 'button'
  | 'switch'
  | 'custom'

/**
 * Configuration for inline addon elements (icons/components) that appear after text.
 * Used for titleAddon, subtitleAddon, trailingTitleAddon, trailingSubtitleAddon.
 *
 * @typedef AddonConfig
 * @property icon - Remix icon name (e.g., 'information-line')
 * @property iconColor - Custom color for the icon
 * @property iconSize - Size of the icon (default: 16)
 * @property component - Custom React component to render instead of icon
 * @property onPress - Optional press handler for the addon
 */
export type AddonConfig = {
  /** Remix icon name (e.g., 'information-line', 'question-line') */
  icon?: string
  /** Custom color for the icon */
  iconColor?: string
  /** Size of the icon (default: 16) */
  iconSize?: number
  /** Custom React component to render instead of icon */
  component?: React.ReactNode
  /** Optional press handler for the addon */
  onPress?: () => void
  /** Accessibility label for the addon */
  accessibilityLabel?: string
}

type TrailingProps = {
  type?: string
  /** Title text or custom component for trailing section */
  trailingTitle?: string | React.ReactNode
  /** Subtitle text or custom component for trailing section */
  trailingSubtitle?: string | React.ReactNode
  /** Props for customizing trailing title text (when string) */
  trailingTitleProps?: AppTextAtomProps
  /** Props for customizing trailing subtitle text (when string) */
  trailingSubtitleProps?: AppTextAtomProps
  /** Addon (icon/component) displayed after trailing title */
  trailingTitleAddon?: AddonConfig
  /** Addon (icon/component) displayed after trailing subtitle */
  trailingSubtitleAddon?: AddonConfig
  /** Props for the button when trailing is 'button' */
  buttonProps?: AppButtonProps
  /** Props for link styling when trailing is 'link' */
  linkProps?: Pick<AppTextAtomProps, 'onPress' | 'color'>
  /** Icon name for trailing icon */
  trailingIcon?: string
  /** Color for trailing icon */
  trailingIconColor?: string
  /** Custom React content for trailing section */
  trailingContent?: string | React.ReactNode
}

type LeadingProps = {
  type?: string
  /** Props for customizing avatar when leading is 'avatar' */
  avatarProps?: AppAvatarProps
  /** Icon name for leading icon */
  leadingIcon?: string
  /** Color for leading icon */
  leadingIconColor?: string
  /** Custom content for leading section (string for certain types, ReactNode for custom) */
  leadingContent?: string | React.ReactNode
}

type LeadingComponentMap = {
  none: React.ReactNode
  avatar: AppAvatarProps
  brand: React.ReactNode
  icon: AppIconProps
  paymentMethod: React.ReactNode
  flag: React.ReactNode
  txStatus: React.ReactNode
  activity: React.ReactNode
  productIcon: React.ReactNode
  check: React.ReactNode
  radio: React.ReactNode
}

/**
 * Props for the ListItem component.
 *
 * @template L - Leading options type
 * @template T - Trailing options type
 */
export type ListItemProps<
  L extends LeadingOptions = LeadingOptions,
  T extends TrailingOptions = TrailingOptions,
> = {
  /**
   * Text size variant.
   * - '1': Small text (12px/14px)
   * - '2': Default text (14px/16px)
   * @default '2'
   */
  size?: '1' | '2'
  /**
   * Layout variant determining the number of text lines.
   * - '1-line': Title only
   * - '2-line': Title + subtitle (subtitle truncated to 1 line)
   * - '3-line': Title + subtitle (subtitle can wrap)
   * @default '1-line'
   */
  variant?: '1-line' | '2-line' | '3-line'
  /**
   * Vertical spacing density.
   * - 'default': Standard padding
   * - 'relaxed': More padding
   * - 'compact': Less padding
   * @default 'default'
   */
  density?: Density
  /**
   * Leading (left-side) content type.
   * @default 'none'
   */
  leading?: L
  /**
   * Trailing (right-side) content type.
   * @default 'none'
   */
  trailing?: T
  /**
   * When true, displays a chevron icon indicating navigation to a sub-screen.
   * @default false
   */
  subTrigger?: boolean
  /**
   * Badge configuration to display below the main content.
   */
  badge?: AppBadgeProps
  /**
   * Visual state of the list item.
   * @default 'enabled'
   */
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged'
  /**
   * When true, displays a separator line below the item.
   * @default false
   */
  separator?: boolean
  /**
   * Checked state for check/radio/switch variants.
   * @default false
   */
  isChecked?: boolean
  /**
   * Main title content - can be a string or custom React component.
   * @required
   */
  title: string | React.ReactNode
  /**
   * Props for customizing the title text (when title is a string).
   */
  titleProps?: AppTextAtomProps
  /**
   * Addon (icon/component) displayed inline after the title.
   * Useful for info icons, tooltips, etc.
   *
   * @example
   * ```tsx
   * titleAddon={{ icon: 'information-line', onPress: () => showTooltip() }}
   * ```
   */
  titleAddon?: AddonConfig
  /**
   * Subtitle content - can be a string or custom React component.
   * Only displayed when variant is '2-line' or '3-line'.
   */
  subtitle?: string | React.ReactNode
  /**
   * Props for customizing the subtitle text (when subtitle is a string).
   */
  subtitleProps?: AppTextAtomProps
  /**
   * Addon (icon/component) displayed inline after the subtitle.
   */
  subtitleAddon?: AddonConfig
  /**
   * Activity status type for the 'activity' leading variant.
   * @default 'default'
   */
  activity?: ActivityStatus
  /**
   * Product type for the 'productIcon' leading variant.
   * @default 'default'
   */
  product?: ProductType
  /**
   * Optional metadata text displayed above the title.
   */
  topMeta?: string | React.ReactNode
  /**
   * Optional metadata text displayed below the subtitle.
   */
  bottomMeta?: string | React.ReactNode
  /**
   * Additional CSS classes for the container.
   */
  containerClassName?: string
  /**
   * Press handler for the list item.
   * When undefined, the item will not be pressable (no touch feedback).
   */
  onPress?: () => void
  /**
   * Component configuration for the leading section.
   * Type depends on the 'leading' prop value.
   */
  leadingComponent?: LeadingComponentMap[L]
  /**
   * Disable touch feedback even when onPress is provided.
   * @default false
   */
  disablePressable?: boolean
  /**
   * Custom wrapper component for the entire list item.
   * Useful for integrating with navigation libraries or custom gestures.
   */
  wrapper?: React.ComponentType<{ children: React.ReactNode; onPress?: () => void }>
  /**
   * Accessibility label for the entire list item.
   */
  accessibilityLabel?: string
  /**
   * Accessibility hint describing what happens when the item is pressed.
   */
  accessibilityHint?: string
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

const productIcons = {
  default: ProductEarn,
  OptiFlex: ProductFlex,
  OptiLock: ProductLock,
  OptiTarget: ProductTarget,
  Earn: ProductEarn,
  MutualFunds: ProductMutualFunds,
  USStocks: ProductUSStocks,
  FixedDeposit: ProductFixedDeposit,
  TreasuryBill: ProductTreasuryBill,
  CommercialPaper: ProductCommercialPaper,
}

const densitySpacing = {
  default: 'py-lg',
  relaxed: 'py-xl',
  compact: 'py-md',
}
export type Density = keyof typeof densitySpacing
export type ActivityStatus = keyof typeof activityStatusIcons
export type ProductType = keyof typeof productIcons

cssInterop(RemixIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

/**
 * ListItem Component
 *
 * A highly customizable list item component for displaying items in a list format.
 * Supports various configurations for leading/trailing content, inline addons (icons),
 * custom components, and intelligent press behavior.
 *
 * ## Key Features
 *
 * - **Flexible Content**: Title and subtitle accept both strings and custom React components
 * - **Inline Addons**: Add info icons or custom components after title/subtitle text
 * - **Smart Pressable**: Only pressable when onPress is provided (no unnecessary touch feedback)
 * - **Leading/Trailing Options**: Multiple preset types for common use cases
 * - **Accessibility**: Full support for accessibility labels and hints
 *
 * ## Basic Usage
 *
 * ```tsx
 * import { AppListItem } from 'afrikit-mobile'
 *
 * // Simple list item (non-pressable)
 * <AppListItem
 *   title="Available to trade"
 *   trailing="text"
 *   trailingTitle="$0.35"
 * />
 *
 * // Pressable list item with navigation
 * <AppListItem
 *   title="Settings"
 *   leading="icon"
 *   leadingContent="settings-line"
 *   subTrigger
 *   onPress={() => navigation.navigate('Settings')}
 * />
 * ```
 *
 * ## Using Inline Addons (Info Icons)
 *
 * Add info icons or custom components after title/subtitle text:
 *
 * ```tsx
 * <AppListItem
 *   title="Available to trade"
 *   titleAddon={{
 *     icon: 'information-line',
 *     onPress: () => showTooltip('Funds available for trading'),
 *     accessibilityLabel: 'More information about available balance'
 *   }}
 *   trailing="text"
 *   trailingTitle="$0.35"
 * />
 *
 * // With custom component as addon
 * <AppListItem
 *   title="Premium Feature"
 *   titleAddon={{
 *     component: <PremiumBadge />,
 *     onPress: () => showPremiumInfo()
 *   }}
 * />
 * ```
 *
 * ## Custom Title/Subtitle Components
 *
 * Pass custom React components for full control:
 *
 * ```tsx
 * <AppListItem
 *   title={
 *     <View className="flex-row items-center">
 *       <AppText weight="bold">Custom Title</AppText>
 *       <Badge text="New" />
 *     </View>
 *   }
 *   subtitle={<HighlightedText text="Search result" query={searchQuery} />}
 * />
 * ```
 *
 * ## Leading Content Options
 *
 * | Type | Description | Props Used |
 * |------|-------------|------------|
 * | `none` | No leading content | - |
 * | `avatar` | User avatar | `avatarProps`, `leadingContent` (initials) |
 * | `icon` | Remix icon | `leadingContent` (icon name), `leadingIconColor`, `leadingComponent` |
 * | `brand` | Brand logo placeholder | - |
 * | `flag` | Country flag | `leadingContent` (image URL) |
 * | `activity` | Activity status | `activity` |
 * | `productIcon` | Product icon | `product` |
 * | `check` | Checkbox | `isChecked` |
 * | `radio` | Radio button | `isChecked` |
 *
 * ## Trailing Content Options
 *
 * | Type | Description | Props Used |
 * |------|-------------|------------|
 * | `none` | No trailing content | - |
 * | `text` | Single text line | `trailingTitle`, `trailingTitleProps` |
 * | `textContent` | Title + subtitle | `trailingTitle`, `trailingSubtitle` |
 * | `icon` | Icon | `trailingIcon`, `trailingIconColor` |
 * | `link` | Clickable link | `trailingTitle`, `linkProps` |
 * | `button` | Action button | `buttonProps`, `trailingTitle` |
 * | `switch` | Toggle switch | `isChecked` |
 * | `custom` | Custom content | `trailingContent` |
 *
 * ## Density Options
 *
 * - `compact`: Minimal padding for dense lists
 * - `default`: Standard padding
 * - `relaxed`: Extra padding for prominent items
 *
 * ## Accessibility
 *
 * The component supports full accessibility:
 *
 * ```tsx
 * <AppListItem
 *   title="Account Settings"
 *   accessibilityLabel="Account Settings"
 *   accessibilityHint="Opens account settings screen"
 *   onPress={handlePress}
 * />
 * ```
 *
 * @example
 * // Financial app list with info icons
 * <View>
 *   <AppListItem
 *     leading="icon"
 *     leadingContent="wallet-line"
 *     title="Available to trade"
 *     titleAddon={{ icon: 'information-line', onPress: showTradeInfo }}
 *     trailing="text"
 *     trailingTitle="$0.35"
 *   />
 *   <AppListItem
 *     leading="icon"
 *     leadingContent="arrow-up-line"
 *     title="Available to withdraw"
 *     titleAddon={{ icon: 'information-line', onPress: showWithdrawInfo }}
 *     trailing="text"
 *     trailingTitle="$0.74"
 *   />
 * </View>
 */

const ListItem: React.FC<ListItemProps<LeadingOptions, TrailingOptions>> = ({
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
  product = 'default',
  title,
  subtitle,
  titleProps,
  subtitleProps,
  titleAddon,
  subtitleAddon,
  trailingTitleProps,
  trailingSubtitleProps,
  trailingTitleAddon,
  trailingSubtitleAddon,
  linkProps,
  avatarProps,
  buttonProps,
  badge,
  trailingTitle,
  trailingSubtitle,
  trailingIcon,
  trailingIconColor,
  leadingIconColor,
  topMeta,
  bottomMeta,
  leadingContent,
  leadingComponent,
  trailingContent,
  containerClassName,
  onPress,
  disablePressable = false,
  wrapper: WrapperComponent,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // Determine if the item should be pressable
  const isPressable = useMemo(() => {
    return !!onPress && !disablePressable
  }, [onPress, disablePressable])

  const containerClasses = useMemo(
    () =>
      `
    flex-row items-center p-4
    ${state === 'hovered' ? 'opacity-80' : ''}
    ${state === 'focused' ? 'border border-blue-500' : ''}
    ${state === 'pressed' ? 'opacity-60' : ''}
    ${state === 'dragged' ? 'opacity-40' : ''}
    ${separator ? 'border-b border-b-light-edge-gray-subtle dark:border-b-dark-edge-gray-subtle' : ''}
    ${densitySpacing[density] || densitySpacing.default}
    ${containerClassName || ''}
  `.trim(),
    [state, separator, density, containerClassName],
  )

  const subtitleClasses = `
    ${size === '1' ? 'text-xs' : 'text-sm'}
    text-light-type-gray-muted dark:text-dark-type-gray-muted
    `
  const [_isChecked, setIsChecked] = React.useState(isChecked)

  React.useEffect(() => {
    setIsChecked(isChecked)
  }, [isChecked])

  const handlePress = useCallback(() => {
    onPress?.()
    if (['check', 'radio'].includes(leading) || ['switch'].includes(trailing)) {
      setIsChecked(prev => !prev)
    }
  }, [onPress, leading, trailing])

  /**
   * Renders an addon element (icon or custom component) that appears after text.
   * Used for title/subtitle addons like info icons.
   */
  const renderAddon = useCallback(
    (addon: AddonConfig | undefined, defaultColor?: string) => {
      if (!addon) return null

      const {
        icon,
        iconColor,
        iconSize = 16,
        component,
        onPress: addonOnPress,
        accessibilityLabel: addonA11yLabel,
      } = addon

      // If custom component is provided, render it
      if (component) {
        if (addonOnPress) {
          return (
            <Pressable
              onPress={addonOnPress}
              className="ml-xs"
              accessibilityLabel={addonA11yLabel}
              accessibilityRole="button"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              {component}
            </Pressable>
          )
        }
        return <View className="ml-xs">{component}</View>
      }

      // Render icon
      if (icon) {
        const iconElement = (
          <RemixIcon
            name={icon}
            size={iconSize}
            color={
              iconColor || defaultColor || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT
            }
          />
        )

        if (addonOnPress) {
          return (
            <Pressable
              onPress={addonOnPress}
              className="ml-xs"
              accessibilityLabel={addonA11yLabel}
              accessibilityRole="button"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              {iconElement}
            </Pressable>
          )
        }
        return <View className="ml-xs">{iconElement}</View>
      }

      return null
    },
    [isDarkMode],
  )

  const renderLeading = useCallback(() => {
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
      case 'brand':
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
      case 'icon':
        return (
          <AppIcon
            {...(leadingComponent as AppIconProps)}
            name={
              typeof leadingContent === 'string'
                ? leadingContent
                : (leadingComponent as AppIconProps)?.name || 'user-6-line'
            }
            color={
              (leadingComponent as AppIconProps)?.color ||
              leadingIconColor ||
              colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT
            }
            size={(leadingComponent as AppIconProps)?.size || '48'}
          />
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
      case 'activity':
        return (
          <View
            className={`w-3xl h-3xl rounded-md-max gap-lg justify-center items-center ${activity === 'system' ? 'bg-light-background-accent-light dark:bg-dark-background-accent-light' : 'bg-light-surface-gray dark:bg-dark-surface-gray'}`}>
            {activity === 'avatar' ? (
              <AppAvatar
                size={3}
                color="accent"
                highContrast={false}
                fallBack="initials"
                initials={(leadingContent as string) || 'A'}
                status={false}
                variant="solid"
                {...avatarProps}
              />
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
      case 'productIcon':
        return (
          <View className="w-4xl h-4xl rounded-md-max border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle justify-center items-center">
            <Image
              className="w-2xl h-2xl"
              source={productIcons[product] || activityStatusIcons.default}
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
  }, [
    leading,
    leadingContent,
    leadingComponent,
    leadingIconColor,
    avatarProps,
    activity,
    product,
    _isChecked,
    trailing,
    isDarkMode,
  ])

  const renderTrailing = useCallback(() => {
    if (trailing === 'none') return null

    switch (trailing) {
      case 'text':
        // Support string or ReactNode for trailing title
        if (typeof trailingTitle !== 'string') {
          if (trailingTitleAddon) {
            return (
              <View className="flex-row items-center">
                {trailingTitle}
                {renderAddon(trailingTitleAddon)}
              </View>
            )
          }
          return trailingTitle
        }
        if (trailingTitleAddon) {
          return (
            <View className="flex-row items-center">
              <AppText size={3} align="right" color="gray" {...trailingTitleProps}>
                {trailingTitle}
              </AppText>
              {renderAddon(trailingTitleAddon)}
            </View>
          )
        }
        return (
          <AppText size={3} align="right" color="gray" {...trailingTitleProps}>
            {trailingTitle}
          </AppText>
        )
      case 'textContent':
        return (
          <View>
            {typeof trailingTitle !== 'string' ? (
              trailingTitleAddon ? (
                <View className="flex-row items-center justify-end">
                  {trailingTitle}
                  {renderAddon(trailingTitleAddon)}
                </View>
              ) : (
                trailingTitle
              )
            ) : trailingTitleAddon ? (
              <View className="flex-row items-center justify-end">
                <AppText size={3} align="right" highContrast color="gray" {...trailingTitleProps}>
                  {trailingTitle}
                </AppText>
                {renderAddon(trailingTitleAddon)}
              </View>
            ) : (
              <AppText size={3} align="right" highContrast color="gray" {...trailingTitleProps}>
                {trailingTitle}
              </AppText>
            )}
            {typeof trailingSubtitle !== 'string' ? (
              trailingSubtitleAddon ? (
                <View className="flex-row items-center justify-end mt-xs">
                  {trailingSubtitle}
                  {renderAddon(trailingSubtitleAddon)}
                </View>
              ) : (
                <View className="mt-xs">{trailingSubtitle}</View>
              )
            ) : trailingSubtitleAddon ? (
              <View className="flex-row items-center justify-end mt-xs">
                <AppText
                  size={2}
                  align="right"
                  className={'text-light-type-gray-muted dark:text-dark-type-gray-muted'}
                  {...trailingSubtitleProps}>
                  {trailingSubtitle}
                </AppText>
                {renderAddon(trailingSubtitleAddon)}
              </View>
            ) : (
              <AppText
                size={2}
                align="right"
                className={'mt-xs text-light-type-gray-muted dark:text-dark-type-gray-muted'}
                {...trailingSubtitleProps}>
                {trailingSubtitle}
              </AppText>
            )}
          </View>
        )
      case 'link':
        return (
          <AppText color={'accent'} {...linkProps}>
            {typeof trailingTitle === 'string' ? trailingTitle : trailingTitle}
          </AppText>
        )
      case 'switch':
        return (
          <Switch
            value={_isChecked}
            onValueChange={() => {
              handlePress()
            }}
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
            text={typeof trailingTitle === 'string' ? trailingTitle : 'Button'}
            onPress={handlePress}
            color="neutral"
            highContrast
            {...buttonProps}
          />
        )
      case 'custom':
        return trailingContent
      default:
        if (trailingContent) return trailingContent
        return <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{trailing}</Text>
    }
  }, [
    trailing,
    trailingTitle,
    trailingSubtitle,
    trailingTitleProps,
    trailingSubtitleProps,
    trailingTitleAddon,
    trailingSubtitleAddon,
    trailingIcon,
    trailingIconColor,
    trailingContent,
    linkProps,
    buttonProps,
    _isChecked,
    isDarkMode,
    handlePress,
    renderAddon,
  ])

  /**
   * Renders the title content with optional addon.
   */
  const renderTitle = useCallback(() => {
    // If title is a ReactNode (not string), render it directly
    if (typeof title !== 'string') {
      if (titleAddon) {
        return (
          <View className="flex-row items-center flex-wrap">
            {title}
            {renderAddon(titleAddon)}
          </View>
        )
      }
      return title
    }

    // Title is a string
    const titleElement = (
      <AppText size={3} color="gray" weight="medium" align="left" highContrast {...titleProps}>
        {title}
      </AppText>
    )

    if (titleAddon) {
      return (
        <View className="flex-row items-center flex-wrap">
          {titleElement}
          {renderAddon(titleAddon)}
        </View>
      )
    }

    return titleElement
  }, [title, titleProps, titleAddon, renderAddon])

  /**
   * Renders the subtitle content with optional addon.
   */
  const renderSubtitle = useCallback(() => {
    if (!subtitle) return null

    // If subtitle is a ReactNode (not string), render it directly
    if (typeof subtitle !== 'string') {
      if (subtitleAddon) {
        return (
          <View className="flex-row items-center flex-wrap mt-xs">
            {subtitle}
            {renderAddon(subtitleAddon)}
          </View>
        )
      }
      return <View className="mt-xs">{subtitle}</View>
    }

    // Subtitle is a string
    const subtitleElement = (
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
    )

    if (subtitleAddon) {
      return (
        <View className="flex-row items-center flex-wrap mt-xs">
          <AppText
            numberOfLines={variant === '2-line' ? 1 : undefined}
            size={2}
            weight="regular"
            align="left"
            highContrast={false}
            color="gray"
            {...subtitleProps}>
            {subtitle}
          </AppText>
          {renderAddon(subtitleAddon)}
        </View>
      )
    }

    return subtitleElement
  }, [subtitle, subtitleProps, subtitleAddon, variant, renderAddon])

  /**
   * Renders the top meta content.
   */
  const renderTopMeta = useCallback(() => {
    if (!topMeta) return null

    if (typeof topMeta !== 'string') {
      return <View className="mb-xs">{topMeta}</View>
    }

    return <Text className={`${subtitleClasses} text-xs-body mb-xs`}>{topMeta}</Text>
  }, [topMeta, subtitleClasses])

  /**
   * Renders the bottom meta content.
   */
  const renderBottomMeta = useCallback(() => {
    if (!bottomMeta) return null

    if (typeof bottomMeta !== 'string') {
      return <View className="mt-xs">{bottomMeta}</View>
    }

    return <Text className={`${subtitleClasses} text-xs-body mt-xs`}>{bottomMeta}</Text>
  }, [bottomMeta, subtitleClasses])

  // Inner content to be wrapped by the container
  const innerContent = (
    <>
      {leading !== 'none' && (
        <View
          className={`mr-lg ${variant === '3-line' ? 'justify-start items-start self-start' : 'self-center items-center'}`}>
          {renderLeading()}
        </View>
      )}
      <View className="flex-1">
        {renderTopMeta()}
        {renderTitle()}
        {(variant === '2-line' || variant === '3-line') && renderSubtitle()}
        {renderBottomMeta()}
        {!!badge && (
          <AppBadge
            variant="soft"
            color="success"
            {...badge}
            className={`mt-md self-start ${badge?.className || ''}`}
          />
        )}
      </View>
      {trailing !== 'none' && (
        <View
          className={`ml-lg justify-center ${variant === '3-line' ? 'justify-start items-start self-start' : 'self-center items-center'}`}>
          {renderTrailing()}
        </View>
      )}
      {subTrigger && (
        <View
          className={`ml-sm justify-center ${variant === '3-line' ? 'justify-start items-start self-start' : 'self-center items-center'}`}>
          <RemixIcon
            name="arrow-right-wide-fill"
            color={colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
            size={16}
          />
        </View>
      )}
    </>
  )

  // Support custom wrapper component
  if (WrapperComponent) {
    return (
      <WrapperComponent onPress={isPressable ? handlePress : undefined}>
        <View
          className={containerClasses}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole={isPressable ? 'button' : undefined}>
          {innerContent}
        </View>
      </WrapperComponent>
    )
  }

  // Render as View (non-pressable) when no onPress is provided
  if (!isPressable) {
    return (
      <View
        className={containerClasses}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}>
        {innerContent}
      </View>
    )
  }

  // Render as Pressable when onPress is provided
  return (
    <Pressable
      onPress={handlePress}
      className={containerClasses}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button">
      {innerContent}
    </Pressable>
  )
}

/**
 * Internal checkbox/radio component for list items.
 * @internal
 */
const CheckComponent = React.memo(
  ({ isSquare = false, isChecked = false }: { isSquare?: boolean; isChecked?: boolean }) => (
    <View
      className={`
      w-xl h-xl ${isSquare ? 'rounded-xs' : 'rounded-md-max'}
      self-start justify-center items-center
      ${
        isChecked
          ? 'bg-light-background-accent-base dark:bg-dark-background-accent-base'
          : 'bg-[transparent]'
      }
         border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle`}>
      {isChecked && <RemixIcon name="check-fill" size={20} color={'white'} />}
    </View>
  ),
)

CheckComponent.displayName = 'CheckComponent'

// Memoize the component for better performance
const MemoizedListItem = React.memo(ListItem)
MemoizedListItem.displayName = 'AppListItem'

export default MemoizedListItem
