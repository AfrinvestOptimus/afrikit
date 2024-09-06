import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import AppAvatar from '../../../molecules/AppAvatar'
import { AppAvatarProps } from '../../../molecules/AppAvatar/avatar'

export default {
  title: 'AppAvatar',
  component: AppAvatar,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: 10 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    size: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    variant: { control: 'select', options: ['solid', 'soft'] },
    color: {
      control: 'select',
      options: ['accent', 'neutral', 'success', 'error', 'warning', 'info'],
    },
    highContrast: { control: 'boolean' },
    fallBack: { control: 'select', options: ['image', 'initials', 'icon'] },
    initials: { control: 'text' },
    imageUrl: { control: 'text' },
    numberOfInitials: { control: 'select', options: [1, 2] },
  },
} as Meta

const Template: Story<AppAvatarProps> = args => <AppAvatar {...args} />

// Variants for different avatar scenarios

export const Default = Template.bind({})
Default.args = {
  size: 4,
  variant: 'solid',
  color: 'neutral',
  fallBack: 'initials',
  initials: 'AB',
  numberOfInitials: 1,
}

export const WithImage = Template.bind({})
WithImage.args = {
  size: 4,
  variant: 'solid',
  color: 'accent',
  fallBack: 'image',
  imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  numberOfInitials: 1,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  size: 4,
  variant: 'solid',
  color: 'success',
  fallBack: 'icon',
  numberOfInitials: 1,
}

export const HighContrast = Template.bind({})
HighContrast.args = {
  size: 4,
  variant: 'solid',
  color: 'neutral',
  fallBack: 'initials',
  initials: 'HK',
  highContrast: true,
  numberOfInitials: 1,
}

export const LargeAvatar = Template.bind({})
LargeAvatar.args = {
  size: 9,
  variant: 'solid',
  color: 'warning',
  fallBack: 'initials',
  initials: 'LG',
  numberOfInitials: 1,
}

export const SoftVariant = Template.bind({})
SoftVariant.args = {
  size: 4,
  variant: 'soft',
  color: 'info',
  fallBack: 'initials',
  initials: 'SV',
  numberOfInitials: 1,
}

export const AccentAvatar = Template.bind({})
AccentAvatar.args = {
  size: 4,
  variant: 'solid',
  color: 'accent',
  fallBack: 'initials',
  initials: 'Anita',
  numberOfInitials: 1,
}

export const SuccessAvatar = Template.bind({})
SuccessAvatar.args = {
  size: 4,
  variant: 'solid',
  color: 'success',
  fallBack: 'initials',
  initials: 'SC',
  numberOfInitials: 1,
}

export const ErrorAvatar = Template.bind({})
ErrorAvatar.args = {
  size: 4,
  variant: 'solid',
  color: 'error',
  fallBack: 'initials',
  initials: 'ER',
  numberOfInitials: 1,
}

export const WarningAvatar = Template.bind({})
WarningAvatar.args = {
  size: 4,
  variant: 'solid',
  color: 'warning',
  fallBack: 'initials',
  initials: 'WR',
  numberOfInitials: 1,
}

export const InfoAvatar = Template.bind({})
InfoAvatar.args = {
  size: 4,
  variant: 'solid',
  color: 'info',
  fallBack: 'initials',
  initials: 'IN',
  numberOfInitials: 1,
}
