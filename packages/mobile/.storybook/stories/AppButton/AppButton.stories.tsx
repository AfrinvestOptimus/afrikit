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
}

export const AccentSoftVariant = Template.bind({})
AccentSoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Soft Button',
}

export const AccentSurfaceVariant = Template.bind({})
AccentSurfaceVariant.args = {
  size: 4,
  variant: 'surface',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Surface Button',
}

export const AccentOutlineVariant = Template.bind({})
AccentOutlineVariant.args = {
  size: 4,
  variant: 'outline',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Outline Button',
}

export const AccentGhostVariant = Template.bind({})
AccentGhostVariant.args = {
  size: 4,
  variant: 'ghost',
  color: 'accent',
  highContrast: false,
  state: 'default',
  text: 'Accent Ghost Button',
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
}

export const NeutralSoftVariant = Template.bind({})
NeutralSoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Soft Button',
}

export const NeutralSurfaceVariant = Template.bind({})
NeutralSurfaceVariant.args = {
  size: 4,
  variant: 'surface',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Surface Button',
}

export const NeutralOutlineVariant = Template.bind({})
NeutralOutlineVariant.args = {
  size: 4,
  variant: 'outline',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Outline Button',
}

export const NeutralGhostVariant = Template.bind({})
NeutralGhostVariant.args = {
  size: 4,
  variant: 'ghost',
  color: 'neutral',
  highContrast: false,
  state: 'default',
  text: 'Neutral Ghost Button',
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
}

export const ErrorSoftVariant = Template.bind({})
ErrorSoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Soft Button',
}

export const ErrorSurfaceVariant = Template.bind({})
ErrorSurfaceVariant.args = {
  size: 4,
  variant: 'surface',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Surface Button',
}

export const ErrorOutlineVariant = Template.bind({})
ErrorOutlineVariant.args = {
  size: 4,
  variant: 'outline',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Outline Button',
}

export const ErrorGhostVariant = Template.bind({})
ErrorGhostVariant.args = {
  size: 4,
  variant: 'ghost',
  color: 'error',
  highContrast: false,
  state: 'default',
  text: 'Error Ghost Button',
}

/*  Button with icons story to be added after remix icon configurations*/

// export const WithIconStart = Template.bind({});
// WithIconStart.args = {
//   size: 2,
//   variant: 'solid',
//   color: 'accent',
//   highContrast: false,
//   state: 'default',
//   iconStart: true,
//   text: 'Button with Icon Start',
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
// };
