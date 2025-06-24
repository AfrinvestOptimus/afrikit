import { Meta, Story } from '@storybook/react'
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { View } from 'react-native'
import AppIcon, { AppIconProps } from '../../../molecules/AppIcon'

export default {
  title: 'AppIcon',
  component: AppIcon,
  tags: ['autodocs'],
  decorators: [
    Story => {
      // Get the system color scheme using NativeWind
      const { colorScheme } = useColorScheme()
      const isDarkMode = colorScheme === 'dark'

      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: 10,
            backgroundColor: isDarkMode
              ? colors.dark['white-to-dark']
              : colors.light['white-to-dark'],
          }}>
          <Story />
        </View>
      )
    },
  ],
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the icon from Remix Icons',
      defaultValue: 'circle-line',
    },
    color: {
      control: 'color',
      description: 'Defines the color of the icon',
      defaultValue: '#000',
    },
    size: {
      control: { type: 'select' },
      options: ['16', '20', '24', '40', '48'],
      description: 'Specifies the icon size',
      defaultValue: '24',
    },
    isRemixIcon: {
      control: 'boolean',
      description: 'Determines whether the icon is a Remix icon',
      defaultValue: true,
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label for the icon',
      defaultValue: 'App Icon',
    },
    accessibilityHint: {
      control: 'text',
      description: 'Additional accessibility hint for the icon',
      defaultValue: '',
    },
  },
} as Meta

// Template that respects system theme
const Template: Story<AppIconProps> = args => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // If color wasn't explicitly set in args, use theme-based color
  if (!args.color) {
    args.color = colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT
  }

  return <AppIcon {...args} />
}

// **Default Icon Story**
export const Default = Template.bind({})
Default.args = {
  name: 'circle-line',
  // Color will be set by the Template based on theme
  size: '24',
  isRemixIcon: true,
  accessibilityLabel: 'Default Icon',
}

// **Large Icon Story**
export const LargeIcon = () => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <AppIcon
      name="star-line"
      color={isDarkMode ? colors.dark.amber3 : colors.light.amber3}
      size="48"
      isRemixIcon={true}
      accessibilityLabel="Large star icon"
    />
  )
}

// **Custom Color Story with Theme Awareness**
export const CustomColor = () => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <AppIcon
      name="heart-fill"
      color={colors[isDarkMode ? 'dark' : 'light'].type.error.DEFAULT}
      size="24"
      isRemixIcon={true}
      accessibilityLabel="Red heart icon"
    />
  )
}

// **Non-Remix Icon Story**
export const NonRemixIcon = () => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <AppIcon
      name="circle-fill"
      color={colors[isDarkMode ? 'dark' : 'light'].type.tomato.DEFAULT}
      size="16"
      isRemixIcon={false}
      accessibilityLabel="Non-Remix custom icon"
    />
  )
}

// **Small Icon Story**
export const SmallIcon = () => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <AppIcon
      name="check-line"
      color={colors[isDarkMode ? 'dark' : 'light'].type.success.DEFAULT}
      size="16"
      isRemixIcon={true}
      accessibilityLabel="Small check icon"
    />
  )
}

// **Theme Toggle Example**
export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <AppIcon
          name="sun-line"
          color={isDarkMode ? colors.dark.type.tomato.DEFAULT : colors.light.type.tomato.DEFAULT}
          size="24"
          isRemixIcon={true}
          accessibilityLabel="Light mode icon"
        />
        <AppIcon
          name="moon-line"
          color={isDarkMode ? colors.dark.type.success.DEFAULT : colors.light.type.success.DEFAULT}
          size="24"
          isRemixIcon={true}
          accessibilityLabel="Dark mode icon"
        />
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: isDarkMode ? colors.dark.violet10 : colors.light.violet10,
          borderRadius: 8,
        }}
        onTouchEnd={() => toggleColorScheme()}>
        <AppIcon
          name={isDarkMode ? 'sun-line' : 'moon-line'}
          color={isDarkMode ? colors.dark.amber3 : colors.light.indigo3}
          size="24"
          isRemixIcon={true}
          accessibilityLabel="Toggle theme"
        />
      </View>
    </View>
  )
}
