export interface DropdownListItemProps {
  label: string
  description?: string
  isSelected?: boolean
  iconStyle: 'none' | 'dot' | 'check' | 'circle' | 'colorDot'
  onClick: () => void
}
