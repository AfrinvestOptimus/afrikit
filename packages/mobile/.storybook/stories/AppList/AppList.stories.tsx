import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Pressable } from 'react-native'
import AppText from '../../../atoms/AppText'
import ListItem, { ListItemProps } from '../../../molecules/list-item'

const meta: Meta<ListItemProps> = {
  title: 'ListItem',
  component: ListItem,
  decorators: [
    Story => (
      <Pressable className="p-4">
        <Story />
      </Pressable>
    ),
  ],
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
      options: ['none', 'textContent', 'text', 'link', 'icon', 'button', 'switch'],
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

type Story = StoryObj<typeof ListItem>

const defaults = {
  size: '2',
  variant: '1-line',
  density: 'default',
  subTrigger: false,
  separator: false,
  title: 'List Item Title',
  subtitle: 'List Item Subtitle',
  // topMeta: 'Top Meta',
  // bottomMeta: 'Bottom Meta',
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
