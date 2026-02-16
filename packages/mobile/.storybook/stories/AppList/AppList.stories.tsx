import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Alert, View } from 'react-native'
import AppText from '../../../atoms/AppText'
import { AppBadge, AppListItem, ListItemProps } from '../../../molecules'

const meta: Meta<ListItemProps> = {
  title: 'ListItem',
  component: AppListItem,
  decorators: [Story => <Story />],
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2'],
      defaultValue: '2',
    },
    variant: {
      control: 'select',
      options: ['1-line', '2-line', '3-line'],
      defaultValue: '1-line',
    },
    density: {
      control: 'select',
      options: ['default', 'relaxed', 'compact'],
      defaultValue: 'default',
    },
    subTrigger: {
      control: 'boolean',
      defaultValue: false,
    },
    separator: {
      control: 'boolean',
      defaultValue: false,
    },
    title: {
      control: 'text',
      defaultValue: 'List Item Title',
    },
    subtitle: {
      control: 'text',
      defaultValue: 'List Item Subtitle',
    },
    topMeta: {
      control: 'text',
      defaultValue: 'Top Meta',
    },
    bottomMeta: {
      control: 'text',
      defaultValue: 'Bottom Meta',
    },
    isChecked: {
      control: 'boolean',
      defaultValue: false,
    },
    disablePressable: {
      control: 'boolean',
      defaultValue: false,
    },
    // Leading Props
    leading: {
      control: 'select',
      options: [
        'none',
        'avatar',
        'brand',
        'icon',
        'paymentMethod',
        'flag',
        'activity',
        'productIcon',
        'check',
        'radio',
      ],
      defaultValue: 'none',
    },
    leadingContent: {
      control: 'text',
      defaultValue: 'Leading Content',
    },
    // Trailing Props
    trailing: {
      control: 'select',
      options: ['none', 'textContent', 'text', 'link', 'icon', 'button', 'switch', 'custom'],
      defaultValue: 'none',
    },
    trailingTitle: {
      control: 'text',
      defaultValue: 'Trailing Title',
    },
    trailingSubtitle: {
      control: 'text',
      defaultValue: 'Trailing Subtitle',
    },
    trailingIcon: {
      control: 'text',
      defaultValue: 'check-line',
    },
    trailingIconColor: {
      control: 'color',
      defaultValue: 'red',
    },
    trailingContent: {
      control: 'text',
      defaultValue: 'Trailing Content',
    },
    onPress: {
      action: 'pressed',
    },
  },
}

export default meta

type Story = StoryObj<typeof AppListItem>

const defaults: ListItemProps = {
  size: '2',
  variant: '1-line',
  density: 'default',
  subTrigger: false,
  separator: false,
  title: 'List Item Title',
  subtitle: 'List Item Subtitle',
  isChecked: false,
  leading: 'none',
  leadingContent: 'Leading Content',
  trailing: 'none',
  trailingTitle: 'Trailing Title',
  trailingSubtitle: 'Trailing Subtitle',
  trailingIcon: 'check-line',
  trailingIconColor: 'red',
  trailingContent: 'Trailing Content',
}

export const Default: Story = {
  args: defaults,
}

export const WithAvatar: Story = {
  args: {
    ...defaults,
    leading: 'avatar',
  },
}

export const WithIcon: Story = {
  args: {
    ...defaults,
    leading: 'icon',
    trailing: 'text',
    trailingTitle: 'Trailing Text',
  },
}

export const WithSwitch: Story = {
  args: {
    ...defaults,
    trailing: 'switch',
  },
}

export const WithCheck: Story = {
  args: {
    ...defaults,
    leading: 'check',
    isChecked: true,
  },
}

export const WithMultipleLines: Story = {
  args: {
    ...defaults,
    variant: '2-line',
    subtitle: 'This is a subtitle for the list item.',
  },
}

export const WithAllProps: Story = {
  args: {
    ...defaults,
    variant: '3-line',
    leading: 'icon',
    trailing: 'button',
    trailingTitle: 'Action',
    subtitle: 'This is a subtitle for the list item.',
    separator: true,
  },
}

export const WithTopAndBottomMeta: Story = {
  args: {
    ...defaults,
    topMeta: 'Top Meta',
    bottomMeta: 'Bottom Meta',
  },
}

export const WithTrailingContent: Story = {
  args: {
    ...defaults,
    trailing: 'textContent',
    trailingTitle: 'Trailing Title',
    trailingSubtitle: 'Trailing Subtitle',
    trailingIcon: 'check-line',
    trailingIconColor: 'red',
    trailingContent: <AppText className="text-blue-500">Custom Trailing Content</AppText>,
  },
}

export const WithLinkAndSubTrigger: Story = {
  args: {
    ...defaults,
    leading: 'activity',
    trailing: 'link',
    trailingContent: <AppText className="text-blue-500">Link Text</AppText>,
    subTrigger: true,
    activity: 'system',
  },
}

export const WithProductIcons: Story = {
  render: () => (
    <View className="mx-lg">
      <AppListItem
        title="OptiLock"
        subtitle="Fixed savings"
        leading="productIcon"
        product="OptiLock"
        trailing="text"
        trailingTitle="₦500,000"
      />
      <AppListItem
        title="OptiFlex"
        subtitle="Flexible savings"
        leading="productIcon"
        product="OptiFlex"
        trailing="text"
        trailingTitle="₦300,000"
      />
      <AppListItem
        title="OptiTarget"
        subtitle="Flexible savings"
        leading="productIcon"
        product="OptiTarget"
        trailing="text"
        trailingTitle="₦300,000"
      />
      <AppListItem
        title="US Stocks"
        subtitle="Invest in global markets"
        leading="productIcon"
        product="USStocks"
        trailing="text"
        trailingTitle="$1,200"
      />
      <AppListItem
        title="Mutual Funds"
        subtitle="Diversified investment"
        leading="productIcon"
        product="MutualFunds"
        trailing="text"
        trailingTitle="₦700,000"
      />
      <AppListItem
        title="Commercial Papers"
        subtitle="Short-term corporate debt"
        leading="productIcon"
        product="CommercialPaper"
        trailing="text"
        trailingTitle="₦950,000"
      />
      <AppListItem
        title="Treasury Bills"
        subtitle="Low risk savings"
        leading="productIcon"
        product="TreasuryBill"
        trailing="text"
        trailingTitle="₦1,000,000"
      />
    </View>
  ),
}

/**
 * Demonstrates the titleAddon feature for adding info icons after the title.
 * This is useful for financial apps where additional context is needed.
 */
export const WithTitleInfoIcon: Story = {
  render: () => (
    <View className="mx-lg bg-dark-page-bg">
      <AppListItem
        leading="icon"
        leadingContent="wallet-3-line"
        title="Available to trade"
        titleAddon={{
          icon: 'information-line',
          onPress: () => Alert.alert('Info', 'Funds available for trading'),
          accessibilityLabel: 'More info about available to trade',
        }}
        trailing="text"
        trailingTitle="$0.35"
      />
      <AppListItem
        leading="icon"
        leadingContent="arrow-right-up-line"
        title="Available to withdraw"
        titleAddon={{
          icon: 'information-line',
          onPress: () => Alert.alert('Info', 'Funds available for withdrawal'),
        }}
        trailing="text"
        trailingTitle="$0.74"
      />
      <AppListItem
        leading="icon"
        leadingContent="time-line"
        title="Unsettled cash"
        titleAddon={{
          icon: 'information-line',
          onPress: () => Alert.alert('Info', 'Funds being processed'),
        }}
        trailing="text"
        trailingTitle="$0.74"
      />
      <AppListItem
        leading="icon"
        leadingContent="error-warning-line"
        title="Good faith violations"
        titleAddon={{
          icon: 'information-line',
          onPress: () => Alert.alert('Info', 'Number of good faith violations'),
        }}
        trailing="text"
        trailingTitle="0"
        subTrigger
        onPress={() => Alert.alert('Navigating', 'Going to violations page')}
      />
    </View>
  ),
}

/**
 * Demonstrates non-pressable list items (no touch feedback when no onPress is provided).
 */
export const NonPressableItems: Story = {
  render: () => (
    <View className="mx-lg">
      <AppText className="mb-md" weight="semibold">Non-Pressable (no onPress)</AppText>
      <AppListItem
        title="Static information"
        trailing="text"
        trailingTitle="Read-only"
      />
      <AppListItem
        leading="icon"
        leadingContent="information-line"
        title="Display only item"
        subtitle="This item has no touch feedback"
        variant="2-line"
        trailing="text"
        trailingTitle="$100.00"
      />

      <AppText className="mt-xl mb-md" weight="semibold">Pressable (with onPress)</AppText>
      <AppListItem
        title="Tap me"
        trailing="icon"
        trailingIcon="arrow-right-s-line"
        onPress={() => Alert.alert('Pressed!')}
      />
      <AppListItem
        leading="icon"
        leadingContent="settings-line"
        title="Settings"
        subtitle="Manage your preferences"
        variant="2-line"
        subTrigger
        onPress={() => Alert.alert('Opening settings')}
      />
    </View>
  ),
}

/**
 * Demonstrates custom React components for title and subtitle.
 */
export const WithCustomTitleComponent: Story = {
  render: () => (
    <View className="mx-lg">
      <AppListItem
        title={
          <View className="flex-row items-center">
            <AppText weight="bold" color="accent">Premium Feature</AppText>
            <View className="ml-xs">
              <AppBadge text="PRO" color="warning" variant="soft" />
            </View>
          </View>
        }
        subtitle={
          <AppText size={2} color="gray">
            Unlock advanced trading tools
          </AppText>
        }
        variant="2-line"
        trailing="button"
        trailingTitle="Upgrade"
        onPress={() => Alert.alert('Upgrade')}
      />

      <AppListItem
        leading="avatar"
        avatarProps={{ initials: 'JD', color: 'accent' }}
        title={
          <View className="flex-row items-center">
            <AppText weight="medium" highContrast color="gray">John Doe</AppText>
            <View className="ml-xs">
              <AppBadge text="Verified" color="success" variant="soft" />
            </View>
          </View>
        }
        subtitle="Premium member since 2023"
        variant="2-line"
        onPress={() => Alert.alert('View profile')}
      />
    </View>
  ),
}

/**
 * Demonstrates trailing section with addons.
 */
export const WithTrailingAddons: Story = {
  render: () => (
    <View className="mx-lg">
      <AppListItem
        title="Account Balance"
        trailing="text"
        trailingTitle="$5,432.10"
        trailingTitleAddon={{
          icon: 'eye-line',
          onPress: () => Alert.alert('Toggle visibility'),
          accessibilityLabel: 'Toggle balance visibility',
        }}
      />
      <AppListItem
        title="Pending Transfer"
        trailing="textContent"
        trailingTitle="$500.00"
        trailingSubtitle="Processing"
        trailingSubtitleAddon={{
          icon: 'loader-4-line',
        }}
      />
    </View>
  ),
}

/**
 * Demonstrates custom trailing content using the 'custom' trailing type.
 */
export const WithCustomTrailingContent: Story = {
  render: () => (
    <View className="mx-lg">
      <AppListItem
        leading="icon"
        leadingContent="notification-line"
        title="Notifications"
        trailing="custom"
        trailingContent={
          <View className="flex-row items-center">
            <View className="w-2xl h-2xl rounded-full bg-light-background-error-base items-center justify-center mr-xs">
              <AppText size={1} color="gray" className="text-white">3</AppText>
            </View>
            <AppText color="gray">New</AppText>
          </View>
        }
        onPress={() => Alert.alert('Open notifications')}
      />
    </View>
  ),
}

/**
 * Demonstrates accessibility features.
 */
export const WithAccessibility: Story = {
  render: () => (
    <View className="mx-lg">
      <AppListItem
        leading="icon"
        leadingContent="wallet-line"
        title="Transfer Money"
        subtitle="Send to bank or mobile"
        variant="2-line"
        subTrigger
        accessibilityLabel="Transfer Money"
        accessibilityHint="Opens the money transfer screen"
        onPress={() => Alert.alert('Transfer')}
      />
      <AppListItem
        title="Balance"
        titleAddon={{
          icon: 'information-line',
          accessibilityLabel: 'More information about your balance',
          onPress: () => Alert.alert('Balance Info'),
        }}
        trailing="text"
        trailingTitle="$1,000.00"
        accessibilityLabel="Your current balance is $1,000.00"
      />
    </View>
  ),
}

/**
 * Demonstrates density variations with info icons.
 */
export const DensityWithInfoIcons: Story = {
  render: () => (
    <View className="mx-lg">
      <AppText className="mb-md" weight="semibold">Compact Density</AppText>
      <AppListItem
        density="compact"
        title="Available to trade"
        titleAddon={{ icon: 'information-line' }}
        trailing="text"
        trailingTitle="$0.35"
      />
      <AppListItem
        density="compact"
        title="Available to withdraw"
        titleAddon={{ icon: 'information-line' }}
        trailing="text"
        trailingTitle="$0.74"
      />

      <AppText className="mt-xl mb-md" weight="semibold">Default Density</AppText>
      <AppListItem
        density="default"
        title="Available to trade"
        titleAddon={{ icon: 'information-line' }}
        trailing="text"
        trailingTitle="$0.35"
      />
      <AppListItem
        density="default"
        title="Available to withdraw"
        titleAddon={{ icon: 'information-line' }}
        trailing="text"
        trailingTitle="$0.74"
      />

      <AppText className="mt-xl mb-md" weight="semibold">Relaxed Density</AppText>
      <AppListItem
        density="relaxed"
        title="Available to trade"
        titleAddon={{ icon: 'information-line' }}
        trailing="text"
        trailingTitle="$0.35"
      />
      <AppListItem
        density="relaxed"
        title="Available to withdraw"
        titleAddon={{ icon: 'information-line' }}
        trailing="text"
        trailingTitle="$0.74"
      />
    </View>
  ),
}
