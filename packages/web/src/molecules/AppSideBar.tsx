import React, { useState } from 'react'
import SideBarBaseItem from '../components/SideBarBaseItem'
import SidebarDropdownBaseItem from '../components/SidebarDropdownBaseItem'

export interface IAppSideBarProps {
  text?: string
}

const AppSideBar: React.FC = (props: IAppSideBarProps) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="w-1/2 mx-auto">
      <SideBarBaseItem
        color="accent"
        text="Dashboard"
        icon={true}
        badge={true}
        iconName={'ri-map-pin-time-fill'}
        badgeText={12}
        linkAction={() => setOpen(!open)}
        hasDropdown={true}
        openDropdown={open}
        dropDownElement={[
          {
            text: 'Open Account',
            current: false,
          },
          {
            text: 'Close Savings',
            current: false,
          },
          {
            text: 'Fund Wallet',
            current: false,
            linkAction: () => setOpen(!open),
          },
        ]}
      />
      {/* <SidebarDropdownBaseItem current={false} text="Dashboard" /> */}
    </div>
  )
}

export default AppSideBar
