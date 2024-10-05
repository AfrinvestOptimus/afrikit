import React, { useState } from 'react'
import SideBarBaseItem, { type ISideBarBaseItemProps } from '../components/SideBarBaseItem'
import optimusLogo from '../assets/optimusLogo.svg'

export interface IAppSideBarProps {
  text?: string
}

export type ISideBarItem = ISideBarBaseItemProps & {
  position: 'top' | 'bottom'
  id: string
}

const links: ISideBarItem[] = [
  {
    id: '1',
    text: 'Get started',
    icon: true,
    iconName: 'ri-map-pin-time-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
    current: true,
  },
  {
    id: '2',
    text: 'Home',
    icon: true,
    iconName: 'ri-home-6-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '4',
    text: 'Portfolio',
    icon: true,
    iconName: 'ri-bar-chart-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '5',
    text: 'Savings',
    icon: true,
    iconName: 'ri-bank-card-2-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Dashboard',
      },
      {
        text: 'Open Savings',
      },
      {
        text: 'Fund Wallet',
      },
    ],
  },
  {
    id: '6',
    text: 'Invest',
    icon: true,
    iconName: 'ri-copper-coin-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Nigeria Stocks',
      },
      {
        text: 'US Stocks',
      },
      {
        text: 'Commercial papers',
      },
    ],
  },
  {
    id: '7',
    text: 'Send Money',
    icon: true,
    iconName: 'ri-send-plane-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '8',
    text: 'Wallets',
    icon: true,
    iconName: 'ri-wallet-fill',
    color: 'accent',
    position: 'top',
    badge: false,
    hasDropdown: true,
    openDropdown: true,
    dropDownElement: [
      {
        text: 'Naira Wallet',
      },
      {
        text: 'Dollar Wallet',
      },
      {
        text: 'Main Wallet',
      },
    ],
  },
  {
    id: '9',
    text: 'Learn',
    icon: true,
    iconName: 'ri-graduation-cap-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '10',
    text: 'Support',
    icon: true,
    iconName: 'ri-lifebuoy-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
  {
    id: '12',
    text: 'Settings',
    icon: true,
    iconName: 'ri-settings-5-fill',
    color: 'accent',
    position: 'bottom',
    badge: false,
    hasDropdown: false,
  },
]

const AppSidebar: React.FC = (props: IAppSideBarProps) => {
  const [open, setOpen] = useState<boolean>(false)
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
