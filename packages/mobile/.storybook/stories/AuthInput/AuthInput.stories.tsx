import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AuthInput from '../../../molecules/AuthInput'

const AuthInputMeta: Meta<typeof AuthInput> = {
  title: 'AuthInput',
  component: AuthInput,
  argTypes: {
    count: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    isError: {
      control: 'boolean',
    },
    keypad: {
      control: 'select',
      options: ['Custom', 'Native'],
    },
    onValueChange: {
      action: 'pressed the button',
    },
    errorMessage: {
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

export default AuthInputMeta

type Story = StoryObj<typeof AuthInputMeta>

export const Basic: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Native',
    errorMessage: '',
  },
}

export const CustomKeypad: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Custom',
    errorMessage: '',
  },
}

export const ErrorMessage: Story = {
  args: {
    count: 4,
    isError: true,
    keypad: 'Native',
    errorMessage: 'Mismatch',
    actionLabel: 'Retry',
  },
}
