import type { Meta, StoryObj } from '@storybook/react'
import AppText from '../../../atoms/AppText'
import { Appearance, Pressable } from 'react-native'
import { AppTextAtomProps } from '../../../types/atoms'

const meta: Meta<typeof AppText> = {
  title: 'AppText',
  component: AppText,
  decorators: [
    Story => {
      const { setColorScheme } = Appearance
      const colorScheme1 = Appearance.getColorScheme()
      return (
        <Pressable
          onPress={() => setColorScheme(colorScheme1 === 'light' ? 'dark' : 'light')}
          className={'px-md'}>
          <Story />
        </Pressable>
      )
    },
  ],
  argTypes: {
    size: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      defaultValue: 3,
    },
    color: {
      control: 'select',
      options: [
        'text-light-slate4',
        'text-light-crimson9',
        'text-light-optiblue9',
        'text-light-optiblue11',
        'text-dark-slate4',
        'text-dark-crimson9',
        'text-dark-optiblue9',
        'text-dark-red9',
      ],
      defaultValue: 'optiblue9',
    },
    trim: {
      control: 'select',
      options: ['normal', 'start', 'end', 'both'],
      defaultValue: 'normal',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      defaultValue: 'light',
    },
    highContrast: {
      control: 'boolean',
      defaultValue: false,
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
    },
    children: {
      control: 'text',
      defaultValue: 'Sample Text',
    },
  },
}

export default meta

type Story = StoryObj<typeof AppText>

// Helper function to ensure all required props are present

const defaults: AppTextAtomProps = {
  size: 3,
  color: 'text-light-optiblue9',
  trim: 'normal',
  weight: 'regular',
  highContrast: false,
  align: 'left',
  children: 'Sample Text',
}

export const Default: Story = {
  args: defaults,
}

export const LargeText: Story = {
  args: {
    ...defaults,
    size: 6,
    weight: 'bold',
    children: 'This is a large, bold text',
  },
}

export const ColoredText: Story = {
  args: {
    ...defaults,
    color: 'text-light-optiblue11',
    children: 'This is a colored text',
  },
}

export const CenteredText: Story = {
  args: {
    ...defaults,
    align: 'center',
    children: 'This is a centered text',
  },
}

export const HighContrastText: Story = {
  args: {
    ...defaults,
    highContrast: true,
    children: 'This is a high contrast text',
  },
}

export const AllProps: Story = {
  args: {
    ...defaults,
    size: 5,
    color: 'text-light-crimson9',
    trim: 'both',
    weight: 'medium',
    highContrast: true,
    align: 'center',
    children: 'Text with all props set',
  },
}
