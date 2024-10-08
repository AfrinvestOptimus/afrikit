import { Meta, StoryObj } from '@storybook/react'
import DropdownComponent from '../molecules/AppDropdownMenu' // Adjust path based on your folder structure

const meta: Meta<typeof DropdownComponent> = {
  title: 'DropdownMenu',
  component: DropdownComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    alignment: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    separator: {
      control: 'boolean',
    },
    showArrow: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof DropdownComponent>

export const DefaultDropdown: Story = {
  args: {
    items: [
      { label: 'Option 1', subLabel: 'Description 1' },
      { label: 'Option 2', subLabel: 'Description 2', state: 'active' },
      { label: 'Option 3', subLabel: 'Description 3', state: 'disabled' },
    ],
    size: 'md',
    variant: 'default',
    separator: true,
    showArrow: false,
  },
}

// Story with a separator
export const WithSeparator: Story = {
  args: {
    items: [
      { label: 'Option 1', subLabel: 'Description 1' },
      { label: 'Option 2', subLabel: 'Description 2' },
      { label: 'Option 3', subLabel: 'Description 3' },
    ],
    size: 'md',
    variant: 'primary',
    separator: true,
    showArrow: true,
  },
}

// Story with and without icon
export const WithIcon: Story = {
  args: {
    items: [
      {
        label: 'Option 1',
        icon: 'ri-heart-line',
        subLabel: 'Description 1',
        hasIcon: true,
        hasAvatar: false,
      },
      {
        label: 'Option 2',
        icon: 'ri-heart-line',
        subLabel: 'Description 2',
        state: 'active',
        hasIcon: true,
        hasAvatar: false,
      },
      {
        label: 'Option 3',
        icon: 'ri-heart-line',
        subLabel: 'Description 3',
        state: 'disabled',
        hasIcon: true,
        hasAvatar: false,
      },
    ],
    size: 'md',
    variant: 'default',
    separator: true,
    showArrow: true,
  },
}

export const WithoutIcon: Story = {
  args: {
    items: [
      { label: 'Option 1', subLabel: 'Description 1' },
      { label: 'Option 2', subLabel: 'Description 2', state: 'active' },
      { label: 'Option 3', subLabel: 'Description 3', state: 'disabled' },
    ],
    size: 'md',
    variant: 'default',
    separator: false,
    showArrow: true,
  },
}

// Story with and without avatar
export const WithAvatar: Story = {
  args: {
    items: [
      {
        label: 'Option 1',
        avatarSrc: 'images/jpg/avatar1.jpeg', // Image placeholder
        subLabel: 'Description 1',
        hasIcon: false,
        hasAvatar: true,
        showCheck: false,
      },
      {
        label: 'Option 2',
        avatarSrc: 'images/jpg/avatar1.jpeg',
        subLabel: 'Description 2',
        state: 'active',
        hasIcon: false,
        hasAvatar: true,
        showCheck: false,
      },
      {
        label: 'Option 3',
        avatarSrc: 'images/jpg/avatar1.jpeg',
        subLabel: 'Description 3',
        state: 'disabled',
        hasIcon: false,
        hasAvatar: true,
      },
    ],
    size: 'lg',
    variant: 'primary',
    separator: true,
    showArrow: true,
  },
}

export const WithoutAvatar: Story = {
  args: {
    items: [
      { label: 'Option 1', subLabel: 'Description 1' },
      { label: 'Option 2', subLabel: 'Description 2', state: 'active' },
      { label: 'Option 3', subLabel: 'Description 3', state: 'disabled' },
    ],
    size: 'lg',
    variant: 'default',
    separator: true,
    showArrow: true,
  },
}

// Flyout dropdown story
export const FlyoutDropdown: Story = {
  args: {
    items: [
      {
        label: 'Main Option 1',
        subContent: ['Flyout 1', 'Flyout 2', 'Flyout 3'],
      },
      {
        label: 'Main Option 2',
        subContent: ['Flyout 1', 'Flyout 2'],
      },
    ],
    size: 'md',
    variant: 'default',
    separator: true,
    showArrow: true,
  },
}

// Flyout dropdown story
export const WithCustomTrigger: Story = {
  args: {
    trigger: (
      <button className="px-4 py-2 bg-gray-500 text-black rounded">
        Dropdown With Custom Trigger
      </button>
    ),
    items: [
      {
        label: 'Main Option 1',
        subContent: ['Flyout 1', 'Flyout 2', 'Flyout 3'],
      },
      {
        label: 'Main Option 2',
        subContent: ['Flyout 1', 'Flyout 2'],
      },
    ],
    size: 'md',
    variant: 'default',
    separator: true,
    showArrow: true,
  },
}

// Story with and without subLabel
export const WithSubLabel: Story = {
  args: {
    items: [
      { label: 'Option 1', subLabel: 'Detailed' },
      { label: 'Option 2', subLabel: 'Detailed', state: 'active' },
      { label: 'Option 3', subLabel: 'Detailed', state: 'disabled' },
    ],
    size: 'md',
    variant: 'default',
    separator: true,
    showArrow: true,
  },
}

export const WithoutSubLabel: Story = {
  args: {
    trigger: (
      <button className="px-4 py-2 bg-gray-500 text-black rounded">
        Another Custom Dropdown trigger
      </button>
    ),
    items: [
      { label: 'Option 1' },
      { label: 'Option 2', state: 'active' },
      { label: 'Option 3', state: 'disabled' },
    ],
    size: 'sm',
    variant: 'secondary',
    alignment: 'left',
    separator: true,
    showArrow: false,
  },
}
