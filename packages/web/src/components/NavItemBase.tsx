import * as React from 'react'
import colors from 'afrikit-shared/dist/colors'

export interface INavItemBaseProps {
  color: keyof typeof colors.light.type
}

export function NavItemBase(props: INavItemBaseProps) {
  return <div></div>
}
