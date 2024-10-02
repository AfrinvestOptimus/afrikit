import type { Meta, StoryObj } from '@storybook/react'
import AppTopbar, { IAppTopBarProps } from '../molecules/AppTopBar'

const meta: Meta<typeof AppTopbar> = {
  title: 'AppTopBar',
  component: AppTopbar,
  tags: ['autodocs'],
  argTypes: {
    isOnboarding: { control: 'boolean' },
    theme: { control: 'radio', options: ['filled', 'ghost'] },
    pageTitle: { control: 'text' },
    user: { control: 'boolean' },
    search: { control: 'boolean' },
    notification: { control: 'boolean' },
    subtitle: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof AppTopbar>

export const Onboarding: Story = {
  args: {
    isOnboarding: true,
    theme: 'filled',
  },
}

export const MainAppFilled: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Dashboard',
    user: true,
    search: true,
    notification: true,
    subtitle: 'Welcome back!',
  },
}

export const MainAppGhost: Story = {
  args: {
    isOnboarding: false,
    theme: 'ghost',
    pageTitle: 'Settings',
    user: true,
    search: false,
    notification: true,
  },
}

export const MinimalTopBar: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Profile',
    user: false,
    search: false,
    notification: false,
  },
}

export const WithSubtitle: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Analytics',
    user: true,
    search: true,
    notification: true,
    subtitle: 'Detailed insights for your account',
  },
}

const Template = (args: IAppTopBarProps) => <AppTopbar {...args} />

export const Playground: Story = {
  render: (args) => <Template {...args} />,
}
Playground.args = {
  isOnboarding: false,
  theme: 'filled',
  pageTitle: 'Custom Page',
  user: true,
  search: true,
  notification: true,
  subtitle: 'Customize this top bar',
}
