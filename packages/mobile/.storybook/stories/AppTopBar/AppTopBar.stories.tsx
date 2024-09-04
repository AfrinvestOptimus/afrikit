// AppTopBar.stories.tsx
import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { AppTopBar, AppTopBarProps } from '../../../molecules/AppTopBar'

export default {
  title: 'AppTopBar',
  component: AppTopBar,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'centered',
        'large',
        'large2',
        'menu',
        'small',
        'small-centered',
        'large-centered',
        'large2-centered',
      ],
    },
    showLeftIcon: { control: 'boolean' },
    showRightIcon1: { control: 'boolean' },
    showRightIcon2: { control: 'boolean' },
    showRightIcon3: { control: 'boolean' },
    darkMode: { control: 'boolean' },
  },
} as ComponentMeta<typeof AppTopBar>

export const Default = (args: AppTopBarProps) => <AppTopBar {...args} />
Default.args = {
  variant: 'centered',
  title: 'App Title',
  subtitle: 'Subtitle',
  showLeftIcon: true,
  showRightIcon1: true,
  showRightIcon2: true,
  showRightIcon3: true,
}

export const Centered = (args: AppTopBarProps) => <AppTopBar {...args} />
Centered.args = {
  variant: 'centered',
  title: 'Centered Title',
  subtitle: 'Centered Subtitle',
  showLeftIcon: true,
}

export const Large = (args: AppTopBarProps) => <AppTopBar {...args} />
Large.args = {
  variant: 'large',
  title: 'Large Title',
  subtitle: 'Large Subtitle',
}

export const Menu = (args: AppTopBarProps) => <AppTopBar {...args} />
Menu.args = {
  variant: 'menu',
  title: 'Menu Title',
  showLeftIcon: true,
  showRightIcon1: true,
}

export const Small = (args: AppTopBarProps) => <AppTopBar {...args} />
Small.args = {
  variant: 'small',
  title: 'Small Title',
  subtitle: 'Small Subtitle',
}

export const DarkMode = (args: AppTopBarProps) => <AppTopBar {...args} />
DarkMode.args = {
  variant: 'centered',
  title: 'Dark Mode Title',
  subtitle: 'Dark Mode Subtitle',
  darkMode: true,
}
