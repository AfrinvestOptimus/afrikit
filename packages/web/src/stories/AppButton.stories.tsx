import { Meta, StoryObj } from '@storybook/react'
import AppButton from '../molecules/AppButton'
import { ButtonColor, ButtonSize, ButtonState, ButtonVariant } from '../molecules/AppButton/button'

// Meta configuration for the AppButton
const meta: Meta<typeof AppButton> = {
  title: 'AppButton',
  component: AppButton,
  argTypes: {
    size: {
      control: { type: 'select', options: [1, 2, 3, 4] },
    },
    variant: {
      control: { type: 'select', options: ['solid', 'soft', 'surface', 'outline', 'ghost'] },
    },
    color: {
      control: { type: 'select', options: ['accent', 'neutral', 'error'] },
    },
    state: {
      control: { type: 'select', options: ['default', 'active', 'disabled'] },
    },
    highContrast: { control: 'boolean' },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof AppButton>

// Template for the stories
export const Default: Story = {
  args: {
    size: 2 as ButtonSize,
    variant: 'neutral' as ButtonVariant,
    color: 'accent' as ButtonColor,
    text: 'Default Button',
    state: 'default' as ButtonState,
    highContrast: false,
  },
}

export const HighContrast: Story = {
  args: {
    size: 2 as ButtonSize,
    variant: 'solid' as ButtonVariant,
    color: 'accent' as ButtonColor,
    text: 'High Contrast Button',
    state: 'default' as ButtonState,
    highContrast: true,
  },
}

export const Disabled: Story = {
  args: {
    size: 2 as ButtonSize,
    variant: 'solid' as ButtonVariant,
    color: 'accent' as ButtonColor,
    text: 'Disabled Button',
    state: 'disabled' as ButtonState,
    highContrast: false,
  },
}

export const ActiveState: Story = {
  args: {
    size: 2 as ButtonSize,
    variant: 'solid' as ButtonVariant,
    color: 'neutral' as ButtonColor,
    text: 'Active Button',
    state: 'active' as ButtonState,
    highContrast: false,
  },
}
