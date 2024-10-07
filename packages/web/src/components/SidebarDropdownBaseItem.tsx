import React from 'react'
import clsx from 'clsx'
import { TSidebarDropdownBaseItemProps } from '../types'


/**
 * SidebarDropdownBaseItem is a functional component that renders a button
 * with various styles and behaviors based on the provided props.
 *
 * @param {TSidebarDropdownBaseItemProps} props - The properties passed to the component.
 * @param {string} props.text - The text to display inside the button.
 * @param {boolean} props.current - A flag indicating whether the item is currently active.
 * @param {() => void} props.linkAction - The function to call when the button is clicked.
 *
 * @returns {JSX.Element} A styled button element representing a sidebar dropdown item.
 */
export default function SidebarDropdownBaseItem(props: TSidebarDropdownBaseItemProps) {
  const { text, current, linkAction } = props
  return (
    <button
      onClick={linkAction}
      className={clsx(
        'flex-row flex items-center rounded-full px-md py-sm cursor-pointer group/dropdownItem flex-1 box-border border-2 border-light-background-neutral-transparent dark:border-dark-background-neutral-transparent transition-all duration-500 w-full space-x-xl pl-[18px]',
        current
          ? 'hover:bg-light-background-neutral-light dark:hover:bg-dark-background-neutral-light'
          : 'hover:bg-light-background-neutral-transparent-hover dark:hover:bg-dark-background-neutral-transparent-hover focus:border-light-edge-info-light dark:focus:border-dark-edge-info-light',
      )}>
      <div className="flex flex-col items-center justify-end relative">
        <div
          className={clsx(
            'w-[1px] h-[34px] -top-[30px] absolute z-10',
            current
              ? 'bg-light-type-accent dark:bg-dark-type-accent'
              : 'bg-light-neutral4 dark:bg-dark-neutral4',
          )}
        />
        <div
          className={clsx(
            'w-sm h-sm rounded-full',
            current
              ? 'bg-light-type-accent dark:bg-dark-type-accent'
              : 'bg-light-neutral4 dark:bg-dark-neutral4',
          )}
        />
      </div>
      <span
        className={clsx(
          'text-sm-title',
          current
            ? 'text-light-type-accent dark:text-dark-type-accent'
            : 'text-light-type-gray-muted dark:text-dark-type-gray-muted group-hover/dropdownItem:text-light-type-gray dark:group-hover/dropdownItem:text-dark-type-gray group-focus:text-light-type-gray-muted dark:group-focus:text-dark-type-gray-muted',
        )}>
        {text}
      </span>
    </button>
  )
}
