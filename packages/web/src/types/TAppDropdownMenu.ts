import React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { dropdownItemStyles } from '../components/molecules/AppDropdownMenu/DropdownListItem'

export interface DropdownItemProps extends VariantProps<typeof dropdownItemStyles> {
  label: string
  subLabel?: string
  hasIcon?: boolean
  hasAvatar?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | '2xl'
  showCheck?: boolean
  avatarSrc?: string
  icon?: string
  state?: 'active' | 'disabled' | 'default'
  subContent?: string[]
}

export interface DropdownSubmenuItemProps {
  item: DropdownItemProps
  size?: 'sm' | 'md' | 'lg' | '2xl' | null | undefined
  variant?: 'default' | 'primary' | 'secondary' | null | undefined
  alignment?: 'left' | 'center' | 'right' | null | undefined
}

export interface DropdownComponentProps extends VariantProps<typeof dropdownItemStyles> {
  items: DropdownItemProps[]
  trigger?: React.ReactNode
  children?: React.ReactNode // Custom Radix components
  separator?: boolean // Prop to render separator
  subContent?: React.ReactNode[] // List of submenu items
  showArrow?: boolean // Prop to render arrow
}
