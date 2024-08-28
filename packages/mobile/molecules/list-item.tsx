import { useColorScheme } from 'nativewind'
import React from 'react'
import { Switch, Text, TouchableOpacity, View } from 'react-native'

type ListItemProps = {
  size?: '1' | '2'
  variant?: '1-line' | '2-line' | '3-line'
  leading?: 'none' | 'avatar' | 'brand' | 'icon' | 'paymentMethod' | 'flag'
  trailing?: 'none' | 'textContent' | 'text' | 'link' | 'icon' | 'button' | 'switch'
  supportingText?: boolean
  overline?: boolean
  subTrigger?: boolean
  state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged'
  separator?: boolean
  title: string
  subtitle?: string
  overlineText?: string
  leadingContent?: React.ReactNode
  trailingContent?: React.ReactNode
  onPress?: () => void
}

const ListItem: React.FC<ListItemProps> = ({
  size = '2',
  variant = '1-line',
  leading = 'none',
  trailing = 'none',
  supportingText = false,
  overline = false,
  subTrigger = false,
  state = 'enabled',
  separator = false,
  title,
  subtitle,
  supportingText: supportingTextContent,
  overlineText,
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
    ${separator ? 'border-b border-gray-200' : ''}
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
  const renderLeading = () => {
    if (leading === 'none') return null
    if (leadingContent) return leadingContent

    // Placeholder for leading content
    return (
      <View className="bg-light-surface dark:bg-dark-surface w-3xl h-3xl rounded-full border-2 border-light-edge-gray dark:border-dark-edge-gray mr-lg self-start" />
    )
  }

  const renderTrailing = () => {
    if (trailing === 'none') return null
    if (trailingContent) return trailingContent

    switch (trailing) {
      case 'switch':
        return <Switch value={false} onValueChange={() => {}} />
      case 'icon':
        return (
          <RemixIcon
            name={trailingIcon || 'inner-shadow'}
            color={trailingIconColor || colors[isDarkMode ? 'dark' : 'light'].type.accent.DEFAULT}
            size={24}
          />
        )
      case 'button': //TODO: reference the Button component
        return (
          <Pressable
            onPress={() => {
              console.log('handle press')
            }}
            className={
              'bg-light-background-neutral-bold dark:bg-dark-background-neutral-bold px-md py-sm rounded-lg'
            }>
            <Text className="text-light-contrast-accent">{trailingTitle || 'Button'}</Text>
          </Pressable>
        )
      default:
        return <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{trailing}</Text>
    }
  }

  return (
    <TouchableOpacity onPress={onPress} className={`${containerClasses} py-xl mb-md`}>
      {renderLeading()}
      <View className="flex-1">
        <Text
          className={`${titleClasses} text-body2 text-light-type-gray dark:text-dark-type-gray `}>
          {title}
        </Text>
        {(variant === '2-line' || variant === '3-line') && subtitle && (
          <Text className={`${subtitleClasses} text-body2 dark:text-dark-type-gray-muted `}>
            {subtitle}
          </Text>
        )}
        {variant === '3-line' && supportingText && supportingTextContent && (
          <Text className={`${subtitleClasses} mt-1`}>{supportingTextContent}</Text>
        )}
      </View>
      {renderTrailing()}
      {subTrigger && <Text className="ml-2">{'>'}</Text>}
    </TouchableOpacity>
  )
}

export default ListItem
