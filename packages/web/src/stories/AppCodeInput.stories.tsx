import type { Meta, StoryObj } from '@storybook/react'
import AppCodeInput from '../molecules/AppCodeInput'

const AppCodeInputMeta: Meta<typeof AppCodeInput> = {
  title: 'AppCodeInput',
  component: AppCodeInput,
  argTypes: {
    length: {
      control: 'select',
      options: [3, 4, 5, 6],
    },
    secureEntry: {
      control: 'boolean',
    },
    onChange: {
      action: 'pressed the button',
    },
    errorMessage: {
      control: 'text',
    },
  },
}

export default AppCodeInputMeta

type Story = StoryObj<typeof AppCodeInputMeta>

export const Basic: Story = {
  args: {
    length: 6,
    errorMessage: '',
    secureEntry: false,
  },
}

export const SecureEntry: Story = {
  args: {
    length: 6,
    errorMessage: '',
    secureEntry: true,
  },
}

export const ErrorMessage: Story = {
  args: {
    length: 6,
    errorMessage: 'Mismatch',
    secureEntry: false,
  },
}
