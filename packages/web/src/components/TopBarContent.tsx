import * as React from 'react'
import { NavItemBase } from './NavItemBase'

export interface ITopBarContentProps {
  color?: string
}

export function TopBarContent(props: ITopBarContentProps) {
  return (
    <div>
      <NavItemBase color="accent" />
    </div>
  )
}
