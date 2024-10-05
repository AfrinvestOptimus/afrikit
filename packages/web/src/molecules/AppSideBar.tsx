import React, { useState } from 'react'
import SideBarBaseItem from '../components/SideBarBaseItem'
import optimusLogo from '../assets/optimusLogo.svg'
import { TSideBarItem } from '../types'

type AppSidebarProps = {
  links: TSideBarItem[]
}

const AppSidebar: React.FC<AppSidebarProps> = ({ links }) => {
  return (
    <div className="w-[18rem] mr-auto h-screen bg-white py-xl flex flex-col">
      <div className="pt-xl pb-3xl px-lg">
        <img src={optimusLogo} className="" />
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex-col flex space-y-lg">
          {links
            .filter(link => link.position === 'top')
            .map(link => (
              <SideBarBaseItem key={link.id} {...link} />
            ))}
        </div>

        <div className="flex-col flex space-y-sm">
          {links
            .filter(link => link.position === 'bottom')
            .map(link => (
              <SideBarBaseItem key={link.id} {...link} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default AppSidebar
