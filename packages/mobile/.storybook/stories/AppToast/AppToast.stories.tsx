import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Button, View } from 'react-native'
import { AppToastBase, showToastMessage } from '../../../molecules/app-toast'

const AppToastMeta: Meta<typeof AppToastBase> = {
  title: 'AppToast',
  component: AppToastBase,
  argTypes: {
    position: {
      type: 'string',
      defaultValue: 'top',
      description: 'Position of the toast',
      name: 'pos',
    },
  },
  args: {
    position: 'top',
  },
  decorators: [
    Story => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default AppToastMeta

export const Basic: StoryObj<typeof showToastMessage> = {}

export const BasicToast: StoryObj<typeof showToastMessage> = {
  render: args => {
    const [value, setValue] = useState('')

    return (
      <View
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%' }}
        className={'justify-center items-center flex-1 bg-dark-red4 w-full'}>
        <Button
          title="Show Toast"
          onPress={() => showToastMessage({ message: 'Success', type: 'success' })}
        />
        <Button
          title="Show Success"
          onPress={() => showToastMessage({ message: 'Success', type: 'success' })}
        />
        <Button
          title="Show Error"
          onPress={() => showToastMessage({ message: 'Error', type: 'error' })}
        />
        <Button
          title="Show Neutral"
          onPress={() => showToastMessage({ message: 'Error', type: 'neutral' })}
        />

        <AppToastBase position={'top'} />
      </View>
    )
  },
  args: {
    onChange: val => console.log({ val }),
  },
}
