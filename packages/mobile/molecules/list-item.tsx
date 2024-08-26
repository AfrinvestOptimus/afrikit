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

  return (
    <TouchableOpacity onPress={onPress} className={`${containerClasses} py-xl mb-md`}>
      <View className="flex-1">
        <Text
          className={`${titleClasses} text-body2 text-light-type-gray dark:text-dark-type-gray `}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem
