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
  },
} as Meta

// Template for the component stories
const Template: Story<AppHintTextProps> = args => <AppHintText {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
  type: 'default',
  showIcon: true,
  text: 'This is a default hint',
}

// Error story
export const Error = Template.bind({})
Error.args = {
  type: 'error',
  showIcon: true,
  text: 'This is an error hint',
}

// Without Icon story
export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  type: 'default',
  showIcon: false,
  text: 'Hint without an icon',
}
