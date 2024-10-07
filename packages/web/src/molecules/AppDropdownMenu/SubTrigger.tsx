// SubTrigger component
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { textSizes } from '../AppButton/button'
import Avatar from '../Avatar'
import { iconStyles } from './DropdownListItem'

// Styles for sub trigger
const subTriggerStyles = cva(
  'flex items-center justify-between px-4 py-3 outline-none cursor-pointer',
  {
    variants: {
      size: {
        sm: textSizes[2],
        md: textSizes[3],
        lg: textSizes[4],
      },
      variant: {
        default: 'hover:bg-light-background-accent-light focus:bg-light-background-accent-light',
        primary: 'hover:bg-light-background-accent-light focus:bg-light-background-accent-light',
        secondary: 'hover:bg-light-background-accent-light focus:bg-light-background-accent-light',
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

// SubTrigger component props
interface SubTriggerProps extends VariantProps<typeof subTriggerStyles> {
  label: string
  showArrow?: boolean
  hasAvatar?: boolean
  hasIcon?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | '2xl'
  avatarSrc?: string
  icon?: string
  subLabel?: string
}

// SubTrigger component
const SubTrigger: React.FC<SubTriggerProps> = ({
  label,
  hasAvatar,
  avatarSrc,
  hasIcon,
  iconSize,
  showArrow = true,
  icon,
  subLabel,
  state,
}) => (
  <div className="flex items-center justify-between flex-1 space-x-md space-y-sm">
    <div className="flex items-center justify-center space-x-sm">
      {hasAvatar && <Avatar src={avatarSrc || 'images/jpg/avatar1.jpeg'} />}
      {hasIcon && (
        <div className={`${iconStyles({ size: iconSize })} text-xl`}>
          <i className={icon || 'ri-heart-line'} aria-hidden="true"></i>
        </div>
      )}
      <div
        className={`flex flex-col ${state === 'disabled' ? 'opacity-50 cursor-not-allowed' : 'text-black'}`}>
        <span>{label}</span>
        {subLabel && <span className="text-xs">{subLabel}</span>}
      </div>
    </div>
    {showArrow && <i className="ri-arrow-right-s-line" aria-hidden="true"></i>}
  </div>
)

export default SubTrigger
