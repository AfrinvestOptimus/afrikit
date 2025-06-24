import type { Meta, StoryObj } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import AuthInput, { AuthInputRef } from '../../../molecules/AuthInput'

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
    isLoading: {
      control: 'boolean',
    },
    onValueChange: {
      action: 'value changed',
    },
    errorMessage: {
      control: 'text',
    },
    actionLabel: {
      control: 'text',
    },
    onActionPress: {
      action: 'action button pressed',
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
    isLoading: false,
    actionLabel: 'Forgot PIN?',
  },
  render: args => {
    const [value, setValue] = useState('')
    return <AuthInput {...args} customValue={value} onValueChange={setValue} />
  },
}

export const CustomKeypad: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Custom',
    errorMessage: '',
    isLoading: false,
    actionLabel: 'Forgot PIN?',
  },
  render: args => {
    const [value, setValue] = useState('')
    return <AuthInput {...args} customValue={value} onValueChange={setValue} />
  },
}

export const ErrorMessageWithRetry: Story = {
  args: {
    count: 4,
    isError: true,
    keypad: 'Custom',
    errorMessage: 'Mismatch',
    actionLabel: 'Retry',
    isLoading: false,
  },
  render: args => {
    const [error, setError] = useState(args.isError)
    const [errorMessage, setErrorMessage] = useState(args.errorMessage)
    const [value, setValue] = useState('1234')
    const authInputRef = useRef<AuthInputRef>(null)

    const handleRetry = () => {
      setError(false)
      setErrorMessage('')
      setValue('')
      authInputRef.current?.clearInput()
      authInputRef.current?.focus()
    }

    return (
      <AuthInput
        ref={authInputRef}
        {...args}
        isError={error}
        errorMessage={errorMessage}
        actionLabel={args.actionLabel}
        onActionPress={handleRetry}
        customValue={value}
        count={4}
        onValueChange={setValue}
      />
    )
  },
}

export const LoadingState: Story = {
  args: {
    count: 4,
    isError: false,
    keypad: 'Native',
    errorMessage: '',
    isLoading: true,
  },
}
