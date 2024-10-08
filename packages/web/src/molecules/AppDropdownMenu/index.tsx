import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { DropdownComponentProps } from '../../types/TAppDropdownMenu'
import { DropdownItem, DropdownSubmenuItem } from './DropdownListItem'
import { DropdownTrigger } from './DropdownTrigger'

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
      <DropdownTrigger label="Open" trigger={trigger} />

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-[300px] mt-2 bg-white dark:bg-dark-background-neutral-light shadow-lg rounded-sm outline-none mt-sm">
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <React.Fragment key={index}>
                {/* Render DropdownItem if there's no subContent */}
                {!item.subContent || item.subContent.length === 0 ? (
                  <>
                    <DropdownItem
                      {...item} // Ensure all item props are passed
                      size={size}
                      variant={variant}
                      alignment={alignment}
                    />
                    {separator && (
                      <DropdownMenu.Separator className="my-2 h-[1px] bg-light-gray4" />
                    )}
                  </>
                ) : (
                  <>
                    <DropdownSubmenuItem
                      item={item} // Pass the entire item
                      size={size} // Ensure size is passed
                      variant={variant} // Ensure variant is passed
                      alignment={alignment} // Ensure alignment is passed
                    />
                    {separator && (
                      <DropdownMenu.Separator className="my-2 h-[1px] bg-light-gray4" />
                    )}
                  </>
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
