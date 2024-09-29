import { Meta, Story } from '@storybook/react' // Use Story instead of StoryObj
import React from 'react'
import AppButton from '../../../src/components/molecules/AppButton' // Adjust the import based on your file structure
import { AppButtonProps } from '../../../src/types/TAppButton'

// Meta configuration for the component
const meta: Meta<AppButtonProps> = {
  title: 'Components/AppButton', // Title of the component in Storybook
  component: AppButton,
  argTypes: {
    size: {
      control: { type: 'select', options: [1, 2, 3, 4] }, // Adjust based on your size options
    },
    variant: {
      control: { type: 'select', options: ['solid', 'outline', 'link'] }, // Adjust based on your variants
    },
    color: {
      control: { type: 'select', options: ['accent', 'primary', 'secondary'] }, // Adjust based on your color options
    },
    state: {
      control: { type: 'select', options: ['default', 'hover', 'disabled'] }, // States to control
    },
  },
}

export default meta

// Template for the component stories
const Template: Story<AppButtonProps> = args => <AppButton {...args} />

// Default button story
export const Default = Template.bind({})
Default.args = {
  text: 'Default Button',
  onClick: () => alert('Button clicked!'), // Example onClick action
}

// Button with start icon
export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  text: 'Home',
  iconStart: true,
  iconStartName: 'ri-home-line',
  onClick: () => alert('Button clicked!'),
}

// Button with end icon
export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  text: 'Settings',
  iconEnd: true,
  iconEndName: 'ri-settings-2-line',
  onClick: () => alert('Button clicked!'),
}

// Button with high contrast
export const HighContrast = Template.bind({})
HighContrast.args = {
  text: 'High Contrast Button',
  highContrast: true,
  onClick: () => alert('Button clicked!'),
}

// Disabled button
export const Disabled = Template.bind({})
Disabled.args = {
  text: 'Disabled Button',
  state: 'disabled',
  onClick: () => alert('Button clicked!'),
}
