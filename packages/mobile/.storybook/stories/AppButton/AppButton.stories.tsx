import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AppButton, { AppButtonProps } from '../../../molecules/AppButton'

const REMIX_ICON_OPTIONS = [
  '',
  'arrow-left-wide-line',
  'arrow-right-wide-line',
  'check-line',
  'close-line',
  'add-line',
  'delete-bin-line',
  'settings-line',
  'user-line',
  'information-line',
  'error-warning-line',
  'heart-line',
  'bookmark-line',
  'home-line',
  'search-line',
  'download-line',
  'upload-line',
  'share-line',
  'notification-line',
  'more-line',
]

export default {
  title: 'AppButton',
  component: AppButton,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    size: { control: 'select', options: [1, 2, 3, 4] },
    variant: { control: 'select', options: ['solid', 'soft', 'surface', 'outline', 'ghost'] },
    color: { control: 'select', options: ['accent', 'neutral', 'error'] },
    state: { control: 'select', options: ['default', 'active', 'disabled'] },
    highContrast: { control: 'boolean' },
    iconStart: {
      control: 'select',
      options: REMIX_ICON_OPTIONS,
      description: 'Select a RemixIcon for the start of button',
    },
    iconEnd: {
      control: 'select',
      options: REMIX_ICON_OPTIONS,
      description: 'Select a RemixIcon for the end of button',
    },
    text: { control: 'text' },
    accessibilityLabel: { control: 'text' },
    accessibilityHint: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
} as Meta

const Template: Story<AppButtonProps> = args => <AppButton {...args} />

// Accent Variants
export const AccentSolidVariant = Template.bind({})
AccentSolidVariant.args = {
  size: 4,
  variant: 'solid',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Solid Button',
  accessibilityLabel: 'Accent Solid Button',
  accessibilityHint: 'Press to select the accent solid button',
}

export const AccentSoftVariant = Template.bind({})
AccentSoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Soft Button',
  accessibilityLabel: 'Accent Soft Button',
  accessibilityHint: 'Press to select the accent soft button',
}

export const AccentSurfaceVariant = Template.bind({})
AccentSurfaceVariant.args = {
  size: 4,
  variant: 'surface',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Surface Button',
  accessibilityLabel: 'Accent Surface Button',
  accessibilityHint: 'Press to select the accent surface button',
}

export const AccentOutlineVariant = Template.bind({})
AccentOutlineVariant.args = {
  size: 4,
  variant: 'outline',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Outline Button',
  accessibilityLabel: 'Accent Outline Button',
  accessibilityHint: 'Press to select the accent outline button',
}

export const AccentGhostVariant = Template.bind({})
AccentGhostVariant.args = {
  size: 4,
  variant: 'ghost',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Ghost Button',
  accessibilityLabel: 'Accent Ghost Button',
  accessibilityHint: 'Press to select the accent ghost button',
}

// Neutral Variants
export const NeutralSolidVariant = Template.bind({})
NeutralSolidVariant.args = {
  size: 4,
  variant: 'solid',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Solid Button',
  accessibilityLabel: 'Neutral Solid Button',
  accessibilityHint: 'Press to select the neutral solid button',
}

export const NeutralSoftVariant = Template.bind({})
NeutralSoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Soft Button',
  accessibilityLabel: 'Neutral Soft Button',
  accessibilityHint: 'Press to select the neutral soft button',
}

export const NeutralSurfaceVariant = Template.bind({})
NeutralSurfaceVariant.args = {
  size: 4,
  variant: 'surface',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Surface Button',
  accessibilityLabel: 'Neutral Surface Button',
  accessibilityHint: 'Press to select the neutral surface button',
}

export const NeutralOutlineVariant = Template.bind({})
NeutralOutlineVariant.args = {
  size: 4,
  variant: 'outline',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Outline Button',
  accessibilityLabel: 'Neutral Outline Button',
  accessibilityHint: 'Press to select the neutral outline button',
}

export const NeutralGhostVariant = Template.bind({})
NeutralGhostVariant.args = {
  size: 4,
  variant: 'ghost',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Ghost Button',
  accessibilityLabel: 'Neutral Ghost Button',
  accessibilityHint: 'Press to select the neutral ghost button',
}

// Error Variants
export const ErrorSolidVariant = Template.bind({})
ErrorSolidVariant.args = {
  size: 4,
  variant: 'solid',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Solid Button',
  accessibilityLabel: 'Error Solid Button',
  accessibilityHint: 'Press to select the error solid button',
}

export const ErrorSoftVariant = Template.bind({})
ErrorSoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Soft Button',
  accessibilityLabel: 'Error Soft Button',
  accessibilityHint: 'Press to select the error soft button',
}

export const ErrorSurfaceVariant = Template.bind({})
ErrorSurfaceVariant.args = {
  size: 4,
  variant: 'surface',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Surface Button',
  accessibilityLabel: 'Error Surface Button',
  accessibilityHint: 'Press to select the error surface button',
}

export const ErrorOutlineVariant = Template.bind({})
ErrorOutlineVariant.args = {
  size: 4,
  variant: 'outline',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Outline Button',
  accessibilityLabel: 'Error Outline Button',
  accessibilityHint: 'Press to select the error outline button',
}

export const ErrorGhostVariant = Template.bind({})
ErrorGhostVariant.args = {
  size: 4,
  variant: 'ghost',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Ghost Button',
  accessibilityLabel: 'Error Ghost Button',
  accessibilityHint: 'Press to select the error ghost button',
}

export const WithIconStart = Template.bind({})
WithIconStart.args = {
  size: 3,
  variant: 'solid',
  color: 'accent',
  highContrast: false,
  state: 'default',
  iconStart: 'arrow-left-wide-line',
  text: 'Button with Icon Start',
  accessibilityLabel: 'Button with Icon Start',
  accessibilityHint: 'Press to go back to previous screen',
}

export const WithIconEnd = Template.bind({})
WithIconEnd.args = {
  size: 3,
  variant: 'solid',
  color: 'accent',
  highContrast: false,
  state: 'default',
  iconEnd: 'arrow-right-wide-line',
  text: 'Button with Icon End',
  accessibilityLabel: 'Button with Icon End',
  accessibilityHint: 'Press to go to next screen',
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  size: 3,
  variant: 'solid',
  color: 'accent',
  highContrast: false,
  state: 'default',
  iconStart: 'arrow-left-wide-line',
  iconEnd: 'arrow-right-wide-line',
  text: 'Button with Both Icons',
  accessibilityLabel: 'Button with Both Icons',
  accessibilityHint: 'Press to access settings with additional information',
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  size: 3,
  variant: 'solid',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Loading Button',
  isLoading: true,
  accessibilityLabel: 'Loading Button',
  accessibilityHint: 'Button is currently processing your request',
  className: 'w-[70%]',
}
