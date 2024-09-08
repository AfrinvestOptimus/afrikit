import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Text, View } from 'react-native'
import { GlobalWrapper } from '../../../molecules/GlobalWrapper'

export default {
  title: 'GlobalWrapper',
  component: GlobalWrapper,
  argTypes: {
    onFloatingButtonPress: { action: 'Floating button pressed' },
  },
} as ComponentMeta<typeof GlobalWrapper>

const Template: ComponentStory<typeof GlobalWrapper> = args => <GlobalWrapper {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Text>Default Content</Text>,
  showFloatingButton: true,
  floatingButtonColor: 'black',
}

export const WithoutFloatingButton = Template.bind({})
WithoutFloatingButton.args = {
  ...Default.args,
  showFloatingButton: false,
}

export const CustomButtonColor = Template.bind({})
CustomButtonColor.args = {
  ...Default.args,
  floatingButtonColor: 'black',
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  ...Default.args,
  children: (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Custom Content</Text>
    </View>
  ),
}

export const WithLongContent = Template.bind({})
WithLongContent.args = {
  ...Default.args,
  children: (
    <>
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <Text key={index} style={{ marginBottom: 20 }}>
            Long content item {index + 1}
          </Text>
        ))}
    </>
  ),
}
