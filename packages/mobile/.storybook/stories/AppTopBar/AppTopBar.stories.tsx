import { Meta, Story } from '@storybook/react'
import colors from 'afrikit-shared/dist/colors'
import React from 'react'
import { Alert, View } from 'react-native'
import AppIcon from '../../../molecules/AppIcon'
import { AppTopBar, AppTopBarProps } from '../../../molecules/AppTopBar/AppTopBar'

export default {
  title: 'AppTopBar',
  component: AppTopBar,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    leftTitle: { control: 'text' },
    containerClassName: { control: 'text' },
    actions: { control: 'array' },
  },
} as Meta

const Template: Story<AppTopBarProps> = args => <AppTopBar {...args} />

// Default Story
export const Default = Template.bind({})
Default.args = {
  leftTitle: 'Title',
  onBackPress: () => Alert.alert('Back Pressed'),
}

// With Custom Back Button
export const WithCustomBackButton = Template.bind({})
WithCustomBackButton.args = {
  title: 'Title',
  customBackButton: <AppIcon name="close-line" size="24" color={colors.light.type.gray.DEFAULT} />,
  onBackPress: () => Alert.alert('Custom Back Pressed'),
  actions: [{ iconName: 'search-line', onPress: () => Alert.alert('Search Pressed') }],
}

// With Actions
export const WithActions = Template.bind({})
WithActions.args = {
  title: 'Title',
  backIconName: 'menu-line',
  onBackPress: () => Alert.alert('Back Pressed'),
  actions: [{ iconName: 'user-6-line', onPress: () => Alert.alert('User Icon Pressed') }],
}

// With Left Title, Back Icon and Actions
export const WithLeftTitleBackIconAndActions = Template.bind({})
WithLeftTitleBackIconAndActions.args = {
  leftTitle: 'Title',
  onBackPress: () => Alert.alert('Back Pressed'),
  actions: [
    { iconName: 'search-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'at-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'notification-line', onPress: () => Alert.alert('Notifications Pressed') },
  ],
}

// With Left Title and Actions
export const WithLeftTitleAndActions = Template.bind({})
WithLeftTitleAndActions.args = {
  leftTitle: 'Title',
  actions: [
    { iconName: 'search-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'at-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'notification-line', onPress: () => Alert.alert('Notifications Pressed') },
  ],
}

// With BackIcon and Actions
export const WithBackIconAndActions = Template.bind({})
WithBackIconAndActions.args = {
  onBackPress: () => Alert.alert('Back Pressed'),
  actions: [
    { iconName: 'search-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'at-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'notification-line', onPress: () => Alert.alert('Notifications Pressed') },
  ],
}

// With Custom BackIcon and Actions
export const WithCustomBackIconAndActions = Template.bind({})
WithCustomBackIconAndActions.args = {
  backIconName: 'arrow-left-line',
  onBackPress: () => Alert.alert('Back Pressed'),
  actions: [
    { iconName: 'search-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'at-line', onPress: () => Alert.alert('Notifications Pressed') },
    { iconName: 'notification-line', onPress: () => Alert.alert('Notifications Pressed') },
  ],
}

// With Subtitle and Title Centered
export const WithTitleAndSubtitle = Template.bind({})
WithTitleAndSubtitle.args = {
  title: 'Title',
  subtitle: 'This is a supporting text for this title',
}

// With Left Title and  Subtitle
export const WithLeftTitleAndSubtitle = Template.bind({})
WithLeftTitleAndSubtitle.args = {
  leftTitle: 'Title',
  leftSubtitle: 'This is a supporting text for this title',
}
