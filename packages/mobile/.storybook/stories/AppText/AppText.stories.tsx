import type { Meta, StoryObj } from '@storybook/react'
import AppText from '../../../atoms/AppText'
import { Appearance, Pressable, View } from 'react-native'
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
        'gray',
        'error',
        'accent',
        'cyan',
        'info',
        'success',
        'tomato',
        'violet',
        'warning',
      ],
      defaultValue: 'gray',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      defaultValue: 'regular',
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
  color: 'gray',
  weight: 'regular',
  highContrast: false,
  align: 'left',
  children: 'Sample Text',
}

export const Default: Story = {
  args: defaults,
}

export const AllSizes: Story = {
  render: args => (
    <View>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(size => (
        <AppText key={size} {...args} size={size}>
          Size {size} Text
        </AppText>
      ))}
    </View>
  ),
  args: defaults,
}

export const AllColors: Story = {
  render: args => (
    <View>
      {['gray', 'error', 'accent', 'cyan', 'info', 'success', 'tomato', 'violet', 'warning'].map(
        color => (
          <AppText key={color} {...args} color={color as AppTextAtomProps['color']}>
            {color.charAt(0).toUpperCase() + color.slice(1)} Text
          </AppText>
        ),
      )}
    </View>
  ),
  args: defaults,
}

export const AllWeights: Story = {
  render: args => (
    <View>
      {['regular', 'medium', 'semibold', 'bold'].map(weight => (
        <AppText key={weight} {...args} weight={weight as AppTextAtomProps['weight']}>
          {weight.charAt(0).toUpperCase() + weight.slice(1)} Weight
        </AppText>
      ))}
    </View>
  ),
  args: defaults,
}

export const HighContrastComparison: Story = {
  render: args => (
    <View>
      <AppText {...args} highContrast={false}>
        Normal Contrast Text
      </AppText>
      <AppText {...args} highContrast={true}>
        High Contrast Text
      </AppText>
    </View>
  ),
  args: defaults,
}

export const Alignments: Story = {
  render: args => (
    <View>
      <AppText {...args} align="left">
        Left Aligned Text
      </AppText>
      <AppText {...args} align="center">
        Center Aligned Text
      </AppText>
      <AppText {...args} align="right">
        Right Aligned Text
      </AppText>
    </View>
  ),
  args: defaults,
}

export const ComplexExample: Story = {
  args: {
    ...defaults,
    size: 5,
    color: 'accent',
    weight: 'bold',
    highContrast: true,
    align: 'center',
    children: 'Complex Example with Multiple Props',
  },
}
