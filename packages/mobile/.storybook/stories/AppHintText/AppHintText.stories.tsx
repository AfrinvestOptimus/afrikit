import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AppHintText, { AppHintTextProps } from '../../../molecules/AppHintText'

export default {
  title: 'AppHintText',
  component: AppHintText,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 10 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'error'],
      description: 'Defines the type of hint (default or error)',
      defaultValue: 'default',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show or hide the icon',
      defaultValue: false,
    },
    text: {
      control: 'text',
      description: 'Text to display in the hint',
      defaultValue: 'Info hint text',
    },
    className: {
      control: { type: 'text' },
      description: 'For passing custom style classes',
      defaultValue: '',
    },
    accessibilityHintText: {
      control: 'text',
      description: 'Provides additional information about the hint text for accessibility purposes',
      defaultValue: '',
    },
  },
} as Meta

const Template: Story<AppHintTextProps> = args => <AppHintText {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
  type: 'default',
  showIcon: true,
  text: 'This is a default hint',
  accessibilityHintText: 'This is the default hint for accessibility purposes',
}

// Error story
export const Error = Template.bind({})
Error.args = {
  type: 'error',
  showIcon: true,
  text: 'This is an error hint',
  accessibilityHintText: 'This is an error hint for accessibility purposes',
}

// Without Icon story
export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  type: 'default',
  showIcon: false,
  text: 'Hint without an icon',
  accessibilityHintText: 'Hint text without an icon',
}

// Custom Style story
export const CustomStyle = Template.bind({})
CustomStyle.args = {
  type: 'default',
  showIcon: true,
  text: 'Custom styled hint text',
  className: 'bg-blue-500 p-4',
  accessibilityHintText: 'This hint has custom styles applied',
}
