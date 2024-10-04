import type { Meta, StoryObj } from '@storybook/react'
import AppTopbar from '../molecules/AppTopBar'
import { TAppTopBarProps } from '../types/TAppTopBarProps'
import 'remixicon/fonts/remixicon.css'

const meta: Meta<typeof AppTopbar> = {
  title: 'AppTopBar',
  component: AppTopbar,
  tags: ['autodocs'],
  argTypes: {
    isOnboarding: { control: 'boolean' },
    theme: { control: 'radio', options: ['filled', 'ghost'] },
    pageTitle: { control: 'text', if: { arg: 'isOnboarding', eq: false } },
    search: { control: 'boolean', if: { arg: 'isOnboarding', eq: false } },
    subtitle: { control: 'text', if: { arg: 'isOnboarding', eq: false } },
    backBtn: { control: 'boolean', if: { arg: 'isOnboarding', eq: false } },
    actions: { control: 'boolean', if: { arg: 'isOnboarding', eq: false } },
    buttonOne: { control: 'boolean', if: { arg: 'actions', eq: true } },
    buttonTwo: { control: 'boolean', if: { arg: 'actions', eq: true } },
    buttonThree: { control: 'boolean', if: { arg: 'actions', eq: true } },
  },
}

export default meta
type Story = StoryObj<typeof AppTopbar>

// Onboarding Story
export const Onboarding: Story = {
  args: {
    isOnboarding: true,
    theme: 'filled',
  },
}

// Main App Bar with Filled Theme and Back Button
export const MainAppWithBackBtn: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Dashboard',
    search: true,
    backBtn: true, // Back button enabled
    actions: false,
    subtitle: 'Welcome back!',
  },
}

// Main App Bar with Actions but No Back Button
export const MainAppWithActionsNoBackBtn: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Dashboard',
    search: true,
    backBtn: false, // Back button disabled
    actions: true, // Actions enabled
    buttonOne: true, // Only buttonOne enabled
    buttonTwo: false,
    buttonThree: false,
  },
}

// Main App with All Action Buttons Enabled
export const MainAppAllActionsEnabled: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Projects',
    search: false,
    backBtn: true,
    actions: true, // Actions enabled
    buttonOne: true, // All three buttons enabled
    buttonTwo: true,
    buttonThree: true,
  },
}

// Ghost Theme with Minimal Actions (Only buttonTwo enabled)
export const GhostThemeWithMinimalActions: Story = {
  args: {
    isOnboarding: false,
    theme: 'ghost',
    pageTitle: 'Settings',
    search: false,
    backBtn: true,
    actions: true, // Actions enabled
    buttonOne: false, // Only buttonTwo enabled
    buttonTwo: true,
    buttonThree: false,
  },
}

// Minimal Top Bar with Back Button but No Actions
export const MinimalWithBackButtonNoActions: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Profile',
    search: false,
    backBtn: true, // Back button enabled
    actions: false, // No actions enabled
  },
}

// App Bar with Only Third Action Button Enabled
export const OnlyThirdActionButton: Story = {
  args: {
    isOnboarding: false,
    theme: 'filled',
    pageTitle: 'Activity',
    search: true,
    backBtn: true,
    actions: true, // Actions enabled
    buttonOne: false, // Only buttonThree enabled
    buttonTwo: false,
    buttonThree: true,
  },
}

// Customizable Playground
const Template = (args: TAppTopBarProps) => <AppTopbar {...args} />

export const Playground: Story = {
  render: args => <Template {...args} />,
}

Playground.args = {
  isOnboarding: false,
  theme: 'filled',
  pageTitle: 'Custom Page',
  search: true,
  backBtn: true,
  actions: true,
  buttonOne: true,
  buttonTwo: true,
  buttonThree: true,
  subtitle: 'Customize this top bar',
}
