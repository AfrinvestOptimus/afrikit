import type { Meta, StoryObj } from '@storybook/react'
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
      conreol: 'select',
      options: ['16', '20', '24', '40', '48'],
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
    name: 'circle',
    color: '',
    size: '16',
  },
}
