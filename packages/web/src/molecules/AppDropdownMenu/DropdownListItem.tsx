import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cva } from 'class-variance-authority'
import React from 'react'
import { DropdownItemProps, DropdownSubmenuItemProps } from '../../types/TAppDropdownMenu'
import { textColors, textSizes } from '../AppButton/button'
import Avatar from '../Avatar'
import SubTrigger from './SubTrigger'

export const dropdownItemStyles = cva(
  'flex items-center justify-between px-lg outline-none cursor-pointer px-lg my-lg py-sm text-primary',
  {
    variants: {
      size: {
        sm: textSizes[2],
        md: textSizes[3],
        lg: textSizes[4],
      },
      variant: {
        default:
          'hover:bg-light-background-accent-light focus:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light dark:focus:bg-dark-background-accent-light',
        primary:
          'hover:bg-light-background-accent-light focus:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light dark:focus:bg-dark-background-accent-light',
        secondary:
          'hover:bg-light-background-accent-light focus:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light dark:focus:bg-dark-background-accent-light',
      },
      state: {
        active: 'font-bold',
        disabled: 'opacity-50 cursor-not-allowed',
        default: '',
      },
      alignment: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      state: 'default',
      alignment: 'left',
    },
  },
)

export const iconStyles = cva(
  'flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center',
  {
    variants: {
      size: {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
)

export const submenuItemStyles = cva('flex items-center justify-between px-3 py-2 cursor-pointer', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      '2xl': 'text-xl',
    },
    variant: {
      default:
        'hover:bg-light-background-accent-light focus:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light dark:focus:bg-dark-background-accent-light',
    },
    state: {
      active: 'font-bold',
      disabled: 'opacity-50 cursor-not-allowed',
      default: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    state: 'default',
  },
})

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  subLabel,
  hasIcon = false,
  hasAvatar = false,
  iconSize = '2xl',
  showCheck = true,
  avatarSrc = 'images/jpg/avatar1.jpeg',
  icon = 'ri-heart-line',
  state = 'disabled',
  size,
  variant,
  alignment,
}) => (
  <DropdownMenu.Item className={` ${dropdownItemStyles({ size, variant, alignment, state })}`}>
    <div className="flex items-center justify-center space-x-sm">
      {hasAvatar && <Avatar src={avatarSrc} />}
      {hasIcon && (
        <div className={`${submenuItemStyles({ size: iconSize })} text-xl`}>
          <i className={`${icon} ${size}`} aria-hidden="true"></i>
        </div>
      )}
      <div
        className={`flex flex-col ${state === 'disabled' ? 'opacity-50 cursor-not-allowed' : 'text-black'}`}>
        <span>{label}</span>
        {subLabel && <span className="text-xs">{subLabel}</span>}
      </div>
    </div>
    {showCheck && (
      <i
        className={`ri-check-line text-xl ${textColors['accent']['soft']}  ${state === 'disabled' ? 'opacity-50 cursor-not-allowed' : 'text-black'}`}
        aria-hidden="true"></i>
    )}
  </DropdownMenu.Item>
)

export const DropdownSubmenuItem: React.FC<DropdownSubmenuItemProps> = ({
  item,
  size,
  variant,
  alignment,
}) => (
  <>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger className={dropdownItemStyles({ size, variant, alignment })}>
        <SubTrigger
          label={item?.label}
          hasAvatar={item?.hasAvatar}
          avatarSrc={item?.avatarSrc}
          hasIcon={item?.hasIcon}
          iconSize={item?.iconSize}
          icon={item?.icon}
          subLabel={item?.subLabel}
          state={item?.state}
        />
      </DropdownMenu.SubTrigger>
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent className="bg-white dark:bg-dark-background-neutral-light shadow-lg rounded-sm p-lg space-y-1 w-[300px]">
          {item.subContent &&
            item.subContent.length > 0 &&
            item.subContent.map((subItem, index) => (
              <>
                <DropdownMenu.Item key={index} className={`${submenuItemStyles()} p-sm`}>
                  {subItem}
                </DropdownMenu.Item>
                {/* <DropdownMenu.Separator className="my-2 h-[1px] bg-light-gray4" /> */}
              </>
            ))}
          <DropdownMenu.Arrow />
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  </>
)
