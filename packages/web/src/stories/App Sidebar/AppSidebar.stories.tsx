import type { Meta, StoryObj } from '@storybook/react'
import 'remixicon/fonts/remixicon.css'
import AppSidebar from '../../molecules/AppSidebar'
import { TSideBarItem } from '../../types'

const meta: Meta<typeof AppSidebar> = {
  title: 'Sidebar/AppSidebar',
  component: AppSidebar,
  tags: ['autodocs'],
  argTypes: {
    links: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof AppSidebar>

const links: TSideBarItem[] = [
    {
      id: 'home',
      position: 'top',
      text: 'Home',
      color: 'accent',
      iconOnly: false,
      current: true,
      icon: true,
      iconName: 'ri-home-line',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
    {
      id: 'profile',
      position: 'top',
      text: 'Profile',
      color: 'neutral',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-user-line',
      linkAction: () => {},
      hasDropdown: true,
      openDropdown: false,
      dropDownElement: [
        { text: 'Edit Profile', current: false, linkAction: () => {} },
        { text: 'Account Settings', current: false, linkAction: () => {} },
      ],
      badge: false,
    },
    {
      id: 'settings',
      position: 'bottom',
      text: 'Settings',
      color: 'neutral',
      iconOnly: true,
      current: false,
      icon: true,
      iconName: 'ri-settings-3-line',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
    {
      id: 'notifications',
      position: 'bottom',
      text: 'Notifications',
      color: 'accent',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-notification-line',
      linkAction: () => {},
      hasDropdown: false,
      badge: true,
      badgeText: 3,
    },
  ]
  
  // Default Story: Sidebar with a mix of top and bottom positioned items
  export const Default: Story = {
    args: {
      links,
    },
  }
  
  // Sidebar with no dropdowns and minimal icons
  export const NoDropdowns: Story = {
    args: {
      links: [
        {
          id: 'dashboard',
          position: 'top',
          text: 'Dashboard',
          color: 'neutral',
          iconOnly: false,
          current: true,
          icon: true,
          iconName: 'ri-dashboard-line',
          linkAction: () => {},
          hasDropdown: false,
          badge: false,
        },
        {
          id: 'logout',
          position: 'bottom',
          text: 'Logout',
          color: 'accent',
          iconOnly: true,
          current: false,
          icon: true,
          iconName: 'ri-logout-box-line',
          linkAction: () => {},
          hasDropdown: false,
          badge: false,
        },
      ],
    },
  }
  
  // Sidebar with only icons (no text)
  export const IconsOnly: Story = {
    args: {
      links: [
        {
          id: 'dashboard',
          position: 'top',
          text: 'Dashboard',
          color: 'neutral',
          iconOnly: true,
          current: false,
          icon: true,
          iconName: 'ri-dashboard-line',
          linkAction: () => {},
          hasDropdown: false,
          badge: false,
        },
        {
          id: 'settings',
          position: 'bottom',
          text: 'Settings',
          color: 'neutral',
          iconOnly: true,
          current: false,
          icon: true,
          iconName: 'ri-settings-line',
          linkAction: () => {},
          hasDropdown: false,
          badge: false,
        },
      ],
    },
  }
  
  // Sidebar with badges and notifications
  export const WithBadges: Story = {
    args: {
      links: [
        {
          id: 'inbox',
          position: 'top',
          text: 'Inbox',
          color: 'accent',
          iconOnly: false,
          current: false,
          icon: true,
          iconName: 'ri-inbox-line',
          linkAction: () => {},
          hasDropdown: false,
          badge: true,
          badgeText: 5,
        },
        {
          id: 'notifications',
          position: 'bottom',
          text: 'Notifications',
          color: 'neutral',
          iconOnly: false,
          current: false,
          icon: true,
          iconName: 'ri-notification-line',
          linkAction: () => {},
          hasDropdown: false,
          badge: true,
          badgeText: 12,
        },
      ],
    },
  }

// Customizable Playground
const Template = (args: { links: TSideBarItem[] }) => <AppSidebar {...args} />

export const Playground: Story = {
  render: (args: { links: TSideBarItem[] }) => <Template {...args} />,
}

Playground.args = {
  links: [
    {
      id: '1',
      position: 'top',
      text: 'Dashboard',
      color: 'accent',
      iconOnly: false,
      current: false,
      linkAction: () => {},
      icon: true,
      iconName: 'ri-dashboard-line',
      hasDropdown: false,
      badge: false,
    },
    {
      id: '2',
      position: 'bottom',
      text: 'Profile',
      color: 'neutral',
      iconOnly: false,
      current: false,
      linkAction: () => {},
      icon: true,
      iconName: 'ri-user-line',
      hasDropdown: false,
      badge: true,
      badgeText: '3',
    },
  ],
}