import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Text, View } from 'react-native'
import AppBSheet from '../../../molecules/AppBSheet'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppButton from '../../../molecules/AppButton'
import Icon from 'react-native-remix-icon'

const meta: Meta<typeof AppBSheet> = {
  title: 'AppBSheet',
  component: AppBSheet,
  argTypes: {
    isDetached: {
      control: 'boolean',
      defaultValue: false,
    },
    showModal: {
      control: 'boolean',
      defaultValue: false,
    },
    backdropClose: {
      control: 'boolean',
      defaultValue: true,
    },
    index: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5],
      if: { arg: 'isDetached', truthy: false },
    },
    height: {
      control: 'number',
      if: { arg: 'index', exists: false },
    },
    title: {
      control: 'object',
    },
    isSwipeable: {
      control: 'boolean',
      if: { arg: 'isDetached', truthy: false },
    },
  },
}

export default meta

type Story = StoryObj<typeof AppBSheet>

const BottomSheetWrapper = (props: any) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <GestureHandlerRootView className={'flex-1'}>
      <BottomSheetModalProvider>
        <View className={'flex-1 items-center justify-center'}>
          <AppButton
            size={4}
            text={'Open Bottom Sheet'}
            color={'neutral'}
            variant={'solid'}
            highContrast
            onPress={() => setShowModal(true)}
          />
          <AppBSheet {...props} showModal={showModal} setShowModal={setShowModal} />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export const Default: Story = {
  render: args => <BottomSheetWrapper {...args} />,
  args: {
    isDetached: false,
    backdropClose: true,
    index: 2,
    title: { text: 'Default Bottom Sheet', align: 'center' },
    isSwipeable: true,
    children: <Text>This is the content of the bottom sheet.</Text>,
    actionButton: {
      text: 'Close',
      action: () => {},
    },
  },
}

export const DetachedSheet: Story = {
  render: args => <BottomSheetWrapper {...args} />,
  args: {
    isDetached: true,
    backdropClose: true,
    height: 300,
    title: 'Detached Bottom Sheet',
    content: 'This is a detached bottom sheet with fixed content.',
    icon: <Icon name={'search-line'} size="76" color="#000" />,
    actionButton: {
      text: 'Confirm',
      action: () => {},
    },
    secondaryActionButton: {
      text: 'Cancel',
      action: () => {},
    },
  },
}

export const CustomHeightSheet: Story = {
  render: args => <BottomSheetWrapper {...args} />,
  args: {
    isDetached: false,
    backdropClose: true,
    height: 400,
    title: { text: 'Custom Height Sheet', align: 'left' },
    isSwipeable: true,
    children: <Text>This bottom sheet has a custom height of 400.</Text>,
  },
}

export const NonSwipeableSheet: Story = {
  render: args => <BottomSheetWrapper {...args} />,
  args: {
    isDetached: false,
    backdropClose: false,
    index: 3,
    title: { text: 'Non-Swipeable Sheet', align: 'center' },
    isSwipeable: false,
    children: <Text>This bottom sheet cannot be swiped.</Text>,
    actionButton: {
      text: 'Close',
      action: () => {},
    },
  },
}

export const SheetWithSubtitle: Story = {
  render: args => <BottomSheetWrapper {...args} />,
  args: {
    isDetached: false,
    backdropClose: true,
    index: 1,
    title: {
      text: 'Sheet with Subtitle',
      align: 'left',
      subtitle: 'This is a subtitle for the bottom sheet',
    },
    isSwipeable: true,
    children: <Text>Content with a title and subtitle.</Text>,
  },
}
