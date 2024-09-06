import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
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
    setCloseModal: { actions: 'control' },
    loaderType: { control: 'modal' },
  },
} as ComponentMeta<typeof AppModalLoader>

const Template: ComponentStory<typeof AppModalLoader> = (args: AppModalLoaderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(args.visible)

  // Sync isVisible with args.visible whenever args.visible changes
  useEffect(() => {
    setIsVisible(args.visible)
  }, [args.visible])

  // Close modal function
  const handleCloseModal = () => {
    setIsVisible(false)
  }

  // Function to open modal manually (simulating visibility toggle)
  const handleOpenModal = () => {
    setIsVisible(true)
  }

  return (
    <View>
      {/* Button to open modal */}
      <Pressable onPress={handleOpenModal}>
        <Text>Show Modal</Text>
      </Pressable>

      <AppModalLoader
        {...args}
        visible={isVisible}
        setCloseModal={handleCloseModal} // Close modal function passed to component
      />
    </View>
  )
}

export const Default = Template.bind({})
Default.args = {
  visible: false, // Start with the modal closed
  text: 'Loading...',
  iconName: 'ri-loader-4-line',
  loaderType: 'modal',
}

export const CustomText = Template.bind({})
CustomText.args = {
  ...Default.args,
  text: 'Text...',
}

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  ...Default.args,
  iconName: 'ri-refresh-line',
}

export const CustomLoaderType = Template.bind({})
CustomIcon.args = {
  ...Default.args,
  loaderType: 'modal',
}
