import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AppIcon, { AppIconProps } from '../../../molecules/AppIcon'

export default {
  title: 'AppIcon',
  component: AppIcon,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 10 }}>
        <Story />
      </View>
    ),
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

const Template: Story<AppIconProps> = args => <AppIcon {...args} />

// **Default Icon Story**
export const Default = Template.bind({})
Default.args = {
  name: 'circle-line',
  color: '#000',
  size: '24',
  isRemixIcon: true,
  accessibilityLabel: 'Default Icon',
}

// **Large Icon Story**
export const LargeIcon = Template.bind({})
LargeIcon.args = {
  name: 'star-line',
  color: '#ff9900',
  size: '48',
  isRemixIcon: true,
  accessibilityLabel: 'Large star icon',
}

// **Custom Color Story**
export const CustomColor = Template.bind({})
CustomColor.args = {
  name: 'heart-fill',
  color: '#ff0000',
  size: 80,
  isRemixIcon: true,
  accessibilityLabel: 'Red heart icon',
}

// **Non-Remix Icon Story**
export const NonRemixIcon = Template.bind({})
NonRemixIcon.args = {
  name: 'circle-fill',
  color: '#007bff',
  size: '16',
  isRemixIcon: false,
  accessibilityLabel: 'Non-Remix custom icon',
}

// **Small Icon Story**
export const SmallIcon = Template.bind({})
SmallIcon.args = {
  name: 'check-line',
  color: '#28a745',
  size: '16',
  isRemixIcon: true,
  accessibilityLabel: 'Small check icon',
}
