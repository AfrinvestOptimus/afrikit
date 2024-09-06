import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import KeyPad from '../../../molecules/keypad'

const KeyPadMeta: Meta<typeof KeyPad> = {
  title: 'KeyPad',
  component: KeyPad,
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

export const Basic: StoryObj<typeof KeyPad> = {}

export const WithBiometric: StoryObj<typeof KeyPad> = {
  render: args => {
    const [value, setValue] = useState('')

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginTop: 20, fontSize: 20 }}>Current Value: {value}</Text>
        <KeyPad
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
export const WithDecimal: StoryObj<typeof KeyPad> = {
  args: {
    onChange: val => console.log({ val }),
    type: 'decimal',
  },
}
export const WithNonDecimal: StoryObj<typeof KeyPad> = {
  args: {
    onChange: val => console.log({ val }),
    type: 'nondecimal',
  },
}
