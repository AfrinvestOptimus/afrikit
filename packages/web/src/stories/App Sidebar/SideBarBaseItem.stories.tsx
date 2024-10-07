import type { Meta, StoryObj } from '@storybook/react'
import SideBarBaseItem from '../../components/SideBarBaseItem'
import { TSideBarBaseItemProps } from '../../types'

const meta: Meta<typeof SideBarBaseItem> = {
  title: 'Sidebar/SideBarBaseItem',
  component: SideBarBaseItem,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'radio', options: ['accent', 'neutral'] },
    current: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    icon: { control: 'boolean' },
    iconName: { control: 'text' },
    hasDropdown: { control: 'boolean' },
    badge: { control: 'boolean' },
    badgeText: { control: 'text' },
    linkAction: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof SideBarBaseItem>

// Default Story: Basic item without dropdown, icon, or badge
export const Default: Story = {
  args: {
    text: 'Dashboard',
    color: 'accent',
    current: false,
    iconOnly: false,
    icon: false,
    hasDropdown: false,
    badge: false,
  },
}

// With Icon: An item with an icon displayed
export const WithIcon: Story = {
  args: {
    text: 'Analytics',
    color: 'neutral',
    current: true,
    iconOnly: false,
    icon: true,
    iconName: 'ri-bar-chart-line', // Example icon class
    hasDropdown: false,
    badge: false,
  },
}

// Icon-Only: A sidebar item showing only an icon (without text)
export const IconOnly: Story = {
  args: {
    text: 'Settings',
    color: 'accent',
    current: false,
    iconOnly: true,
    icon: true,
    iconName: 'ri-settings-5-line', // Example icon class
    hasDropdown: false,
    badge: false,
  },
}

// With Dropdown: Sidebar item that reveals a dropdown when clicked
export const WithDropdown: Story = {
  args: {
    text: 'Reports',
    color: 'neutral',
    current: false,
    iconOnly: false,
    icon: true,
    iconName: 'ri-file-chart-line', // Example icon class
    hasDropdown: true,
    openDropdown: false,
    dropDownElement: [
      { text: 'Monthly Report', current: true, linkAction: () => {} },
      { text: 'Annual Report', current: false, linkAction: () => {} },
    ],
    badge: false,
  },
}

// With Badge: Sidebar item displaying a badge
export const WithBadge: Story = {
  args: {
    text: 'Notifications',
    color: 'accent',
    current: false,
    iconOnly: false,
    icon: true,
    iconName: 'ri-notification-3-line', // Example icon class
    hasDropdown: false,
    badge: true,
    badgeText: 5,
  },
}

// Playground: Allows full customization of the props in Storybook's UI
const Template = (args: TSideBarBaseItemProps) => <SideBarBaseItem {...args} />

export const Playground: Story = {
  render: (args) => <Template {...args} />,
}

Playground.args = {
  text: 'Customizable Item',
  color: 'accent',
  current: false,
  iconOnly: false,
  icon: true,
  iconName: 'ri-home-3-line', // Example icon class
  hasDropdown: false,
  badge: false,
}
