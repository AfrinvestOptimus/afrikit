export type TSidebarDropdownBaseItemProps = {
  current?: boolean
  linkAction?: () => void
  text: string
}

export type TSideBarBaseItemProps = {
  color: 'accent' | 'neutral'
  iconOnly?: boolean
  dot?: boolean
  text: string
  current?: boolean
  linkAction?: () => void
} & (
  | {
      icon: true
      iconName: string
    }
  | {
      icon: false
      iconName?: never
    }
) &
  (
    | {
        hasDropdown: true
        openDropdown: boolean
        dropDownElement: TSidebarDropdownBaseItemProps[]
      }
    | {
        hasDropdown: false
        openDropdown?: never
      }
  ) &
  (
    | {
        badge: true
        badgeText: number | string
      }
    | {
        badge: false
        badgeText?: never
      }
  )

export type TSideBarItem = TSideBarBaseItemProps & {
  position: 'top' | 'bottom'
  id: string
}
