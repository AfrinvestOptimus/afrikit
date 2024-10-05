import type { Meta, StoryObj } from '@storybook/react'
import SidebarDropdownBaseItem from '../../components/SidebarDropdownBaseItem'
import { TSidebarDropdownBaseItemProps } from '../../types'

const meta: Meta<typeof SidebarDropdownBaseItem> = {
  title: 'Sidebar/DropdownBaseItem',
  component: SidebarDropdownBaseItem,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' }, // Control for the text prop
    current: { control: 'boolean' }, // Toggle for active state
    linkAction: { action: 'clicked' }, // Action for linkAction
  },
}

export default meta
type Story = StoryObj<typeof SidebarDropdownBaseItem>

// Default Story for SidebarDropdownBaseItem
export const Default: Story = {
  args: {
    text: 'Menu Item', // Default text for the button
    current: false, // Default is not active
  },
}

// Active State Story
export const ActiveItem: Story = {
  args: {
    text: 'Active Item', // Text for the active item
    current: true, // The item is currently active
  },
}

// With Custom Action
export const WithAction: Story = {
  args: {
    text: 'Click Me',
    current: false,
  },
  argTypes: {
    linkAction: { action: 'clicked' }, // Logs the click action in Storybook's action panel
  },
}

// Playground for Customization
const Template = (args: TSidebarDropdownBaseItemProps) => <SidebarDropdownBaseItem {...args} />

export const Playground: Story = {
  render: args => <Template {...args} />,
}

Playground.args = {
  text: 'Customizable Item',
  current: false,
}
