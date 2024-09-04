import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import { AppModalLoader, AppModalLoaderProps } from '../../../molecules/AppModalLoader'

export default {
  title: 'AppModalLoader',
  component: AppModalLoader,
  decorators: [
    Story => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    visible: { control: 'boolean' },
    text: { control: 'text' },
    iconName: { control: 'text' },
  },
} as ComponentMeta<typeof AppModalLoader>

const Template: ComponentStory<typeof AppModalLoader> = (args: AppModalLoaderProps) => (
  <AppModalLoader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  visible: true,
  text: 'Loading...',
  iconName: 'ri-loader-4-line',
}

export const CustomText = Template.bind({})
CustomText.args = {
  ...Default.args,
  text: 'Please wait...',
}

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  ...Default.args,
  iconName: 'ri-refresh-line',
}
