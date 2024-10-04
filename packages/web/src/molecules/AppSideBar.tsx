import * as React from 'react'
import SideBarBaseItem from '../components/SideBarBaseItem'

export interface IAppSideBarProps {
    text?:string
}

export default function AppSideBar(props: IAppSideBarProps) {
  return (
    <div className="w-1/2 mx-auto">
      <SideBarBaseItem
        color="accent"
        text="Dashboard"
        icon={true}
        hasDropdown={true}
        badge={true}
        iconName={'ri-circle-fill'}
        badgeText={12}
        openDropdown={false}
        dropDownElement={[{}]}
      />
    </div>
  )
}
