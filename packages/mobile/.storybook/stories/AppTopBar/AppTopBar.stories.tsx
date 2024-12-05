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
    accessibilityLabel: { control: 'text' },
    accessibilityHint: { control: 'text' },
  },
} as Meta

const Template: Story<AppTopBarProps> = args => <AppTopBar {...args} />

// Default Story
export const Default = Template.bind({})
Default.args = {
  leftTitle: 'Title',
  onBackPress: () => Alert.alert('Back Pressed'),
  accessibilityLabel: 'Default Top Bar',
  accessibilityHint: 'This is the default top bar with a back button.',
}

// With Custom Back Button
export const WithCustomBackButton = Template.bind({})
WithCustomBackButton.args = {
  title: 'Top Bar with Title',
  customBackButton: <AppIcon name="close-line" size="24" color={colors.light.type.gray.DEFAULT} />,
  onBackPress: () => Alert.alert('Custom Back Pressed'),
  actions: [{ iconName: 'search-line', onPress: () => Alert.alert('Search Pressed') }],
  accessibilityLabel: 'Top Bar with Custom Back Button',
  accessibilityHint: 'This top bar has a custom back button and a search action.',
}

// With Actions
export const WithActions = Template.bind({})
WithActions.args = {
  title: 'Title',
  backIconName: 'menu-line',
  onBackPress: () => Alert.alert('Back Pressed'),
  actions: [{ iconName: 'user-6-line', onPress: () => Alert.alert('User Icon Pressed') }],
  accessibilityLabel: 'Top Bar with Actions',
  accessibilityHint: 'This top bar includes actions for user settings.',
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
  accessibilityLabel: 'Top Bar with Left Title and Actions',
  accessibilityHint: 'This top bar has a left title and multiple action icons.',
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
  accessibilityLabel: 'Top Bar with Left Title',
  accessibilityHint: 'This top bar features a left title and action icons.',
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
  accessibilityLabel: 'Top Bar with Back Icon',
  accessibilityHint: 'This top bar includes a back button and action icons.',
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
  accessibilityLabel: 'Top Bar with Custom Back Icon',
  accessibilityHint: 'This top bar features a custom back icon and action icons.',
}

// With Subtitle and Title Centered
export const WithTitleAndSubtitle = Template.bind({})
WithTitleAndSubtitle.args = {
  title: 'Title',
  subtitle: 'This is a supporting text for this title',
  accessibilityLabel: 'Top Bar with Title and Subtitle',
  accessibilityHint: 'This top bar includes a title and a subtitle.',
}

// With Left Title and Subtitle
export const WithLeftTitleAndSubtitle = Template.bind({})
WithLeftTitleAndSubtitle.args = {
  leftTitle: 'Title',
  leftSubtitle: 'This is a supporting text for this title',
  accessibilityLabel: 'Top Bar with Left Title and Subtitle',
  accessibilityHint: 'This top bar features a left title and subtitle.',
}

// With Left Title and Subtitle
export const WithBackIconAndTitle = Template.bind({})
WithBackIconAndTitle.args = {
  title: 'Title',
  onBackPress: () => Alert.alert('Back Pressed'),
  accessibilityLabel: 'Top Bar with Title',
  accessibilityHint: 'This top bar title and bak icon.',
}
