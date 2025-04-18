import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-remix-icon'
import { AppBottomSheet, AppListItem, AppSearchInput } from '../../../molecules'
import AppButton from '../../../molecules/AppButton'
import { AppBottomSheetProps } from '../../../types/molecules'

const meta: Meta<typeof AppBottomSheet> = {
  title: 'AppBottomSheet',
  component: AppBottomSheet,
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

type Story = StoryObj<typeof AppBottomSheet>

const BottomSheetWrapper = (props: AppBottomSheetProps<boolean>) => {
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
          <AppBottomSheet {...props} showModal={showModal} setShowModal={setShowModal} />
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
    children: (
      <Text className={'text-light-type-gray-muted dark:text-dark-type-gray-muted'}>
        This is the content of the bottom sheet.
      </Text>
    ),
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
    children: (
      <Text className={'text-light-type-accent dark:text-dark-type-accent-bold'}>
        This bottom sheet has a custom height of 400.
      </Text>
    ),
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
    children: (
      <Text className={'text-light-type-accent dark:text-dark-type-accent-bold'}>
        This bottom sheet cannot be swiped.
      </Text>
    ),
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
    children: (
      <Text className={'text-light-type-accent dark:text-dark-type-accent-bold'}>
        Content with a title and subtitle.
      </Text>
    ),
  },
}

const ListWithSearchBottomSheet = () => {
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const items = [
    { title: 'Item 1', subtitle: 'Description for item 1' },
    { title: 'Item 2', subtitle: 'Description for item 2' },
    { title: 'Item 3', subtitle: 'Description for item 3' },
  ]
  const filteredItems = items.filter(
    item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  return (
    <AppBottomSheet
      isDetached={false}
      showModal={showModal}
      setShowModal={setShowModal}
      backdropClose
      index={3}
      title={{ text: 'Searchable List', align: 'center' }}>
      <View className="px-lg">
        <AppSearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search items..."
          onClear={() => setSearchQuery('')}
        />
        <View className="mt-lg">
          {filteredItems.map((item, index) => (
            <AppListItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              variant="2-line"
              leading="icon"
              trailing="icon"
              trailingIcon="arrow-right-s-line"
              separator={index !== filteredItems.length - 1}
            />
          ))}
        </View>
      </View>
    </AppBottomSheet>
  )
}
export const WithListAndSearch: Story = {
  render: () => <ListWithSearchBottomSheet />,
}
export const Basic: Story = {
  args: {
    isDetached: false,
    showModal: true,
    backdropClose: true,
    index: 3,
    title: { text: 'Basic Bottom Sheet', align: 'center' },
    children: (
      <View className="p-lg">
        <AppListItem title="Basic List Item" />
      </View>
    ),
  },
}
