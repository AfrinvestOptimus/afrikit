import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AppButton, { AppButtonProps } from '../../../molecules/AppButton'

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
    iconStart: { control: 'boolean' },
    iconEnd: { control: 'boolean' },
    text: { control: 'text' },
    accessibilityLabel: { control: 'text' },
    accessibilityHint: { control: 'text' },
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

// Button with icons stories to be added after remix icon configurations

// export const WithIconStart = Template.bind({});
// WithIconStart.args = {
//   size: 2,
//   variant: 'solid',
//   color: 'accent',
//   highContrast: false,
//   state: 'default',
//   iconStart: true,
//   text: 'Button with Icon Start',
//   accessibilityLabel: 'Button with Icon Start',
//   accessibilityHint: 'Press to select the button with icon start',
// };

// export const WithIconEnd = Template.bind({});
// WithIconEnd.args = {
//   size: 2,
//   variant: 'solid',
//   color: 'accent',
//   highContrast: false,
//   state: 'default',
//   iconEnd: true,
//   text: 'Button with Icon End',
//   accessibilityLabel: 'Button with Icon End',
//   accessibilityHint: 'Press to select the button with icon end',
// };
