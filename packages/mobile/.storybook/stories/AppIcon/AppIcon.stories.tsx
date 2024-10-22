import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AppIcon from '../../../molecules/AppIcon'

const IconMeta: Meta<typeof AppIcon> = {
  title: 'AppIcon',
  component: AppIcon,
  argTypes: {
    name: {
      control: 'text',
    },
    color: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['16', '20', '24', '40', '48'],
    },
    accessibilityLabel: {
      control: 'text',
    },
    accessibilityHint: {
      control: 'text',
    },
  },
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default IconMeta

type Story = StoryObj<typeof IconMeta>

export const Basic: Story = {
  args: {
    name: 'circle-line',
    color: '',
    size: '16',
    accessibilityLabel: 'Circle Icon',
    accessibilityHint: 'This is a circular icon',
  },
}
