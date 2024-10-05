import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import SidebarDropdownBaseItem from './SidebarDropdownBaseItem'
import { TSideBarBaseItemProps } from '../types'

// Type guards
function hasIcon(
  props: TSideBarBaseItemProps,
): props is TSideBarBaseItemProps & { icon: true; iconName: string } {
  return props.icon === true
}
function hasDropdown(
  props: TSideBarBaseItemProps,
): props is TSideBarBaseItemProps & { hasDropdown: true; openDropdown: boolean } {
  return props.hasDropdown === true
}

function hasBadge(
  props: TSideBarBaseItemProps,
): props is TSideBarBaseItemProps & { badge: true; badgeText: number | string } {
  return props.badge === true
}

/**
 * SideBarBaseItem component renders a sidebar item with optional dropdown functionality.
 * It supports both icon-only and text-based items, and can indicate the current active item.
 *
 * @component
 * @param {TSideBarBaseItemProps} props - The properties for the SideBarBaseItem component.
 * @param {string} props.text - The text to display for the sidebar item.
 * @param {string} props.color - The color of the sidebar item.
 * @param {boolean} props.iconOnly - Whether the item should display only an icon.
 * @param {boolean} props.dot - Whether to display a dot indicator.
 * @param {boolean} props.current - Whether the item is the current active item.
 * @param {Function} props.linkAction - The action to perform when the item is clicked.
 * @param {string} props.iconName - The name of the icon to display.
 * @param {Array} [props.dropDownElement] - The elements to display in the dropdown.
 *
 * @returns {JSX.Element} The rendered SideBarBaseItem component.
 */

export default function SideBarBaseItem(props: TSideBarBaseItemProps) {
  const [opendrop, setOpendrop] = useState<boolean>(false)
  const { text, color, iconOnly, current, linkAction } = props
  return (
    <Collapsible.Root onOpenChange={openState => setOpendrop(openState)}>
      <div className={clsx('flex-row items-center space-x-md pr-lg', iconOnly ? '' : 'flex')}>
        {current && !iconOnly && (
          <div className="w-xs h-lg bg-light-background-accent-base rounded-tr-xs rounded-br-xs" />
        )}
        <button
          onClick={linkAction}
          className={clsx(
            'flex-row flex items-center rounded-full px-md py-sm  cursor-pointer group/item space-x-lg flex-1 box-border border-2 border-light-background-neutral-transparent dark:border-dark-background-neutral-transparent  transition-all duration-500',

            current
              ? 'bg-light-background-accent-light dark:bg-dark-background-accent-light focus:border-light-edge-info-lighter dark:focus:border-dark-edge-info-lighter'
              : 'hover:bg-light-background-neutral-transparent-hover dark:hover:bg-dark-background-neutral-transparent-hover focus:border-light-optiblue9 dark:focus:border-dark-optiblue9 ml-lg',
          )}>
          {hasIcon(props) && (
            <div className="icon">
              <i
                className={clsx(
                  props.iconName,
                  '',
                  current
                    ? 'text-light-type-accent dark:text-dark-type-accent'
                    : 'text-light-type-gray-muted dark:text-dark-type-gray-muted text-xl group-hover/item:text-light-type-gray dark:group-hover/item:text-dark-type-gray',
                )}
              />
            </div>
          )}
          {!iconOnly && hasDropdown(props) ? (
            <div className="w-full flex flex-col items-start justify-start">
              <Collapsible.CollapsibleTrigger asChild>
                <div
                  className={clsx(
                    'flex flex-row items-center justify-between flex-1 relative w-full',
                    current
                      ? 'text-light-type-accent dark:text-dark-type-accent'
                      : 'group-hover/item:text-light-type-gray dark:group-hover/item:text-dark-type-gray text-light-type-gray-muted dark:text-dark-type-gray-muted',
                  )}>
                  <span className="text-base-head">{text}</span>
                  <i
                    className={clsx(
                      'text-lg transition-all duration-500 ri-arrow-down-s-line',
                      opendrop ? 'rotate-180' : '',
                    )}
                  />
                </div>
              </Collapsible.CollapsibleTrigger>
            </div>
          ) : (
            <div
              className={clsx(
                'flex flex-row items-center justify-between flex-1 text-base-head',
                current
                  ? 'text-light-type-accent dark:text-dark-type-accent'
                  : 'group-hover/item:text-light-type-gray dark:group-hover/item:text-dark-type-gray text-light-type-gray-muted dark:text-dark-type-gray-muted',
              )}>
              {text}
            </div>
          )}
        </button>
      </div>
      {hasDropdown(props) && (
        <div className="">
          <Collapsible.CollapsibleContent asChild className="CollapsibleContent">
            <div className="flex flex-col mx-lg">
              {props.dropDownElement?.map(element => (
                <SidebarDropdownBaseItem
                  key={element.text}
                  text={element.text}
                  current={element.current}
                  linkAction={element.linkAction}
                />
              ))}
            </div>
          </Collapsible.CollapsibleContent>
        </div>
      )}
    </Collapsible.Root>
  )
}
