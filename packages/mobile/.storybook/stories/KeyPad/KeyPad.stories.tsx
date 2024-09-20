import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { KeyPadProps, AppKeypad } from '../../../molecules'

const KeyPadMeta: Meta<typeof AppKeypad> = {
  title: 'KeyPad',
  component: AppKeypad,
  argTypes: {
    onKeyPress: { action: 'pressed the button' },
    onChange: { action: 'pressed the button' },
    type: {
      control: 'select',
      options: ['decimal', 'nondecimal', 'biometric'],
    },
  },
  args: {
    textLength: 4,
  },
  decorators: [
    Story => (
      <View
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'red' }}>
        <Story />
      </View>
    ),
  ],
}

export default KeyPadMeta

export const Basic: StoryObj<typeof AppKeypad> = {}

export const WithBiometric: StoryObj<typeof AppKeypad> = {
  render: args => {
    const [value, setValue] = useState('')

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginTop: 20, fontSize: 20 }}>Current Value: {value}</Text>
        <AppKeypad
          {...args}
          onChange={val => {
            console.log({ val })
            setValue(val) // Save the value to state
          }}
        />
      </View>
    )
  },
  args: {
    onChange: val => console.log({ val }),
    type: 'biometric',
  },
}
export const WithDecimal: StoryObj<typeof AppKeypad> = {
  args: {
    onChange: val => console.log({ val }),
    type: 'decimal',
  },
}
export const WithNonDecimal: StoryObj<typeof AppKeypad> = {
  args: {
    onChange: val => console.log({ val }),
    type: 'nondecimal',
  },
}
