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

  // Handlers for icon clicks
  const handleLeftIconClick = () => {
    console.log('Left icon clicked!')
    alert('Left icon clicked!')
  }

  const handleRightIcon1Click = () => {
    console.log('Right icon 1 clicked!')
    alert('Right icon 1 clicked!')
  }

  const handleRightIcon2Click = () => {
    console.log('Right icon 2 clicked!')
    alert('Right icon 2 clicked!')
  }

  const handleRightIcon3Click = () => {
    console.log('Right icon 3 clicked!')
    alert('Right icon 3 clicked!')
  }

  return (
    <AppTopBar
      {...args}
      showLeftIcon={true} // Dynamically updating left icon
      showRightIcon1={showRightIcon1} // Dynamically updating right icons
      showRightIcon2={showRightIcon2}
      showRightIcon3={showRightIcon3}
      onLeftIconPress={handleLeftIconClick} // Attach click handler to the left icon
      onRightIconPress1={handleRightIcon1Click} // Attach click handler to the first right icon
      onRightIconPress2={handleRightIcon2Click} // Attach click handler to the second right icon
      onRightIconPress3={handleRightIcon3Click} // Attach click handler to the third right icon
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
  const [showLeftIcon, setShowLeftIcon] = useState(args.showLeftIcon)

  useEffect(() => {
    setShowLeftIcon(args.showLeftIcon)
  }, [args.showLeftIcon])

  return (
    <AppTopBar
      {...args}
      showLeftIcon={showLeftIcon}
      onLeftIconPress={() => alert('Left icon clicked!')}
      onRightIconPress1={() => alert('Right icon 1 clicked!')}
      onRightIconPress2={() => alert('Right icon 2 clicked!')}
      onRightIconPress3={() => alert('Right icon 3 clicked!')}
    />
  )
}

Centered.args = {
  variant: 'centered',
  title: 'Centered Title',
  subtitle: 'Centered Subtitle',
  showLeftIcon: true,
}

export const Large = (args: AppTopBarProps) => {
  const [showRightIcon1, setShowRightIcon1] = useState(args.showRightIcon1)

  useEffect(() => {
    setShowRightIcon1(args.showRightIcon1)
  }, [args.showRightIcon1])

  return (
    <AppTopBar
      {...args}
      showRightIcon1={showRightIcon1}
      onRightIconPress1={() => alert('Right icon 1 clicked!')}
      onRightIconPress2={() => alert('Right icon 2 clicked!')}
      onRightIconPress3={() => alert('Right icon 3 clicked!')}
    />
  )
}

Large.args = {
  variant: 'large',
  title: 'Large Title',
  subtitle: 'Large Subtitle',
}
