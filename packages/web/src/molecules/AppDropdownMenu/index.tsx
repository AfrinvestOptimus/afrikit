import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { DropdownComponentProps } from '../../types/TAppDropdownMenu'
import { buttonSizes, textSizes } from '../AppButton/button'
import { DropdownItem, DropdownSubmenuItem } from './DropdownListItem'

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  items,
  trigger,
  children,
  separator = false,
  showArrow = false,
  size,
  variant,
  alignment,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            className={`flex items-center justify-between ${buttonSizes[3]} ${textSizes[3]} text-light-gray10 bg-light-background-neutral-light dark:bg-dark-background-neutral-light border-light-edge-neutral rounded-xs-max shadow-sm hover:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-indigoA12`}>
            <span>Open</span>
            <i className="ri-arrow-down-s-line ml-2 text-lg" aria-hidden="true" />
          </button>
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[300px] mt-2 bg-white dark:bg-dark-background-neutral-light shadow-lg rounded-sm outline-none mt-sm">
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <React.Fragment key={index}>
                {/* Render DropdownItem if there's no subContent */}
                {!item.subContent || item.subContent.length === 0 ? (
                  <DropdownItem
                    {...item} // Ensure all item props are passed
                    size={size}
                    variant={variant}
                    alignment={alignment}
                  />
                ) : (
                  <DropdownSubmenuItem
                    item={item} // Pass the entire item
                    size={size} // Ensure size is passed
                    variant={variant} // Ensure variant is passed
                    alignment={alignment} // Ensure alignment is passed
                  />
                )}

                {/* Render separator if prop is true */}
                {separator && index < items.length - 1 && <DropdownMenu.Separator />}
              </React.Fragment>
            ))}
          {children} {/* Render any custom Radix components here */}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownComponent
