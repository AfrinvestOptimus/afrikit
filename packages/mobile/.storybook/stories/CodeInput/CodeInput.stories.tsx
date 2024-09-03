import type { Meta, StoryObj } from '@storybook/react'
import { View } from 'react-native'
import CodeInput from '../../../molecules/CodeInput'

const CodeInputMeta: Meta<typeof CodeInput> = {
  title: 'CodeInput',
  component: CodeInput,
  argTypes: {
    count: {
      control: 'select',
      options: [3, 4, 5, 6],
    },
    secureEntry: {
      control: 'boolean',
    },
    keypad: {
      control: 'select',
      options: ['Custom', 'Native'],
    },
    onFullCode: {
      action: 'pressed the button',
    },
    isError: {
      control: 'boolean',
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

export default CodeInputMeta

type Story = StoryObj<typeof CodeInputMeta>

export const Basic: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Native',
    secureEntry: false,
  },
}

export const CustomKeypad: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Custom',
    secureEntry: false,
  },
}

export const SecureEntry: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Native',
    secureEntry: true,
  },
}

export const ErrorMessage: Story = {
  args: {
    count: 4,
    isError: true,
    keypad: 'Native',
    secureEntry: true,
    // errorMessage: 'Mismatch',
  },
}
