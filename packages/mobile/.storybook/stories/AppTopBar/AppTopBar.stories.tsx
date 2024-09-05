import { ComponentMeta } from '@storybook/react'
import React, { useEffect, useState } from 'react'
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
  },
} as ComponentMeta<typeof AppTopBar>

export const Default = (args: AppTopBarProps) => {
  // State for managing icons
  const [showRightIcon1, setShowRightIcon1] = useState(args.showRightIcon1)
  const [showRightIcon2, setShowRightIcon2] = useState(args.showRightIcon2)
  const [showRightIcon3, setShowRightIcon3] = useState(args.showRightIcon3)

  // Update state when Storybook controls change
  useEffect(() => {
    setShowRightIcon1(args.showRightIcon1)
    setShowRightIcon2(args.showRightIcon2)
    setShowRightIcon3(args.showRightIcon3)
  }, [args.showRightIcon1, args.showRightIcon2, args.showRightIcon3])

  return (
    <AppTopBar
      {...args}
      showLeftIcon={true} // Dynamically updating left icon
      showRightIcon1={showRightIcon1} // Dynamically updating right icons
      showRightIcon2={showRightIcon2}
      showRightIcon3={showRightIcon3}
    />
  )
}

Default.args = {
  variant: 'centered',
  title: 'App Title',
  subtitle: 'Subtitle',
  showLeftIcon: true,
  showRightIcon1: true,
  showRightIcon2: true,
  showRightIcon3: true,
}

export const Centered = (args: AppTopBarProps) => {
  // Use same logic for toggling in other variants
  const [showLeftIcon, setShowLeftIcon] = useState(args.showLeftIcon)

  useEffect(() => {
    setShowLeftIcon(args.showLeftIcon)
  }, [args.showLeftIcon])

  return <AppTopBar {...args} showLeftIcon={showLeftIcon} />
}

Centered.args = {
  variant: 'centered',
  title: 'Centered Title',
  subtitle: 'Centered Subtitle',
  showLeftIcon: true,
}

export const Large = (args: AppTopBarProps) => {
  // Similar logic for large variant
  const [showRightIcon1, setShowRightIcon1] = useState(args.showRightIcon1)

  useEffect(() => {
    setShowRightIcon1(args.showRightIcon1)
  }, [args.showRightIcon1])

  return <AppTopBar {...args} showRightIcon1={showRightIcon1} />
}

Large.args = {
  variant: 'large',
  title: 'Large Title',
  subtitle: 'Large Subtitle',
}
