import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppText from '../../../atoms/AppText'
import AppSelect, { AppSelectProps } from '../../../molecules/AppSelect'

export default {
  title: 'AppSelect',
  component: AppSelect,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%' }}>
            <View style={{ width: '80%' }}>
              <Story />
            </View>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the select component',
      defaultValue: 'Select an option',
    },
    options: {
      control: 'array',
      description: 'List of options for the select component',
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
    },
    state: {
      control: 'select',
      options: ['default', 'disabled'],
      description: 'State of the select component',
      defaultValue: 'default',
    },
    hasError: {
      control: 'boolean',
      description: 'Display error state',
      defaultValue: false,
    },
    errorText: {
      control: 'text',
      description: 'Error message text',
      defaultValue: 'This is an error message',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback function when value is changed',
    },
    renderItem: {
      control: null,
      description: 'Custom render function for each option',
    },
  },
} as Meta

const Template: Story<AppSelectProps> = args => <AppSelect {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
  state: 'default',
  hasError: false,
}

// Hint Text  story
export const WithHintText = Template.bind({})
WithHintText.args = {
  label: 'Select an option',
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
  state: 'default',
  hintText: 'Info hint text',
}

// Disabled state story
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Select an option',
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
  state: 'disabled',
  hasError: false,
}

// Error state story
export const WithError = Template.bind({})
WithError.args = {
  label: 'Select an option',
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
  state: 'default',
  hasError: true,
  errorText: 'Error hint text',
}

// Custom item renderer story
export const CustomRenderer = Template.bind({})
CustomRenderer.args = {
  label: 'Select an option',
  options: ['Custom Option 1', 'Custom Option 2', 'Custom Option 3'],
  state: 'default',
  hasError: false,
  renderItem: ({ label, value }) => (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: 40, height: 40, borderWidth: 1, borderRadius: 20 }} />
      <View style={{ marginLeft: 16 }}>
        <AppText size={3} weight="medium" align="left" color="gray" highContrast>
          {label}
        </AppText>
        <AppText size={2} weight="medium" align="left" color="gray">{`subtitle ${value}`}</AppText>
      </View>
    </View>
  ),
}
