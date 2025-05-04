import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppDateInput, { AppDateInputProps } from '../../../molecules/AppDateInput'

export default {
  title: 'AppDateInput',
  component: AppDateInput,
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
      description: 'Label for the date input component',
      defaultValue: 'Select a date',
    },
    state: {
      control: 'select',
      options: ['default', 'disabled'],
      description: 'State of the date input component',
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
    hintText: {
      control: 'text',
      description: 'Hint text for the input component',
      defaultValue: 'Select your date of birth',
    },
    minimumDate: {
      control: 'date',
      description: 'Minimum selectable date',
    },
    maximumDate: {
      control: 'date',
      description: 'Maximum selectable date',
    },
    onDateChange: {
      action: 'dateChanged',
      description: 'Callback function when the date is changed',
    },
  },
} as Meta

const Template: Story<AppDateInputProps> = args => <AppDateInput {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
  label: 'Select a date',
  state: 'default',
  hasError: false,
  hintText: 'Select your date of birth',
}

// Hint Text story
export const WithHintText = Template.bind({})
WithHintText.args = {
  label: 'Select a date',
  state: 'default',
  hintText: 'Info hint text',
}

// Disabled state story
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Select a date',
  state: 'disabled',
  hasError: false,
  hintText: 'This input is disabled',
}

// Error state story
export const WithError = Template.bind({})
WithError.args = {
  label: 'Select a date',
  state: 'default',
  hasError: true,
  errorText: 'Invalid date selected',
}

// Date Range story with minimum and maximum dates
export const WithDateRange = Template.bind({})
WithDateRange.args = {
  label: 'Select a date within range',
  state: 'default',
  hintText: 'Date must be between 6 months ago and today',
  minimumDate: new Date(new Date().setMonth(new Date().getMonth() - 6)), // 6 months ago
  maximumDate: new Date(), // Today
}

// Date Range story with future dates only
export const FutureDatesOnly = Template.bind({})
FutureDatesOnly.args = {
  label: 'Select a future date',
  state: 'default',
  hintText: 'Select a date between tomorrow and 1 year from now',
  minimumDate: new Date(new Date().setDate(new Date().getDate() + 1)), // Tomorrow
  maximumDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // 1 year from now
}

// Date Range story with past dates only
export const PastDatesOnly = Template.bind({})
PastDatesOnly.args = {
  label: 'Select birth date',
  state: 'default',
  hintText: 'Must be at least 18 years old',
  maximumDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18)), // 18 years ago
}
