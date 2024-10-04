import React from 'react'
import clsx from 'clsx'
import AppButton from './molecules/AppButton'
export interface ITopBarContentProps {
  search?: boolean
  actions: boolean | undefined
  buttonOne?: boolean
  buttonTwo?: boolean
  buttonThree?: boolean
}

/**
 * UserItem component renders a clickable user item with a rounded background and an arrow icon.
 *
 * @returns {JSX.Element} A JSX element representing the user item.
 *
 * @remarks
 * The component uses Tailwind CSS classes for styling and includes responsive design adjustments.
 * It supports both light and dark themes.
 *
 * @example
 * ```tsx
 * <UserItem />
 * ```
 */
const UserItem = (): React.JSX.Element => (
  <div className="cursor-pointer bg-light-background-neutral-base/5 dark:bg-dark-background-neutral-base/5 hover:bg-light-background-neutral-base/20 dark:hover:bg-dark-background-neutral-base/20 rounded-full space-x-xs p-xs md:space-x-sm  md:px-lg md:py-sm flex flex-row items-center transition-all duration-500">
    <div className="rounded-full w-xl h-xl bg-dark-tomato5" />
    <i className="ri-arrow-down-s-line text-light-type-gray dark:text-dark-type-gray text-2xl" />
  </div>
)

/**
 * A component that renders a set of action buttons based on the provided boolean flags.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.buttonOne - Determines if the "Create new" button should be displayed.
 * @param {boolean} props.buttonTwo - Determines if the "Export" button should be displayed.
 * @param {boolean} props.buttonThree - Determines if the "More" button should be displayed.
 *
 * @returns {JSX.Element} A JSX element containing the action buttons.
 */
const ActionButtons = ({
  buttonOne,
  buttonTwo,
  buttonThree,
}: {
  buttonOne: boolean
  buttonTwo: boolean
  buttonThree: boolean
}): React.JSX.Element => (
  <div className="flex-row items-center space-x-lg hidden md:flex">
    {buttonThree && (
      <AppButton
        variant="surface"
        color="neutral"
        iconStart={false}
        iconEnd={false}
        text=""
        iconName="ri-more-line"
        size={3}
        highContrast={true}
      />
    )}
    {buttonTwo && (
      <AppButton
        text={'Export'}
        variant="surface"
        color="neutral"
        iconStart={false}
        iconEnd={false}
        size={3}
        highContrast={true}
      />
    )}
    {buttonOne && (
      <AppButton
        text={'Create new'}
        variant="solid"
        color="neutral"
        iconStart={false}
        iconEnd={false}
        size={3}
        highContrast={true}
      />
    )}
  </div>
)

/**
 * BtnIcon component renders a button with an icon.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The icon class name to be applied to the <i> element.
 * @param {string} [props.className] - Optional additional class names to be applied to the <button> element.
 * @returns {JSX.Element} The rendered button with an icon.
 */

function BtnIcon({ icon, className }: { icon: string; className?: string }): React.JSX.Element {
  return (
    <button className={clsx('py-sm px-md cursor-pointer', className)}>
      <i className={clsx('text-2xl text-light-type-gray dark:text-dark-type-gray', icon)} />
    </button>
  )
}

/**
 * Component that renders the right content of the top bar, including action buttons, a search button, a notification
 * button, and a user item.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.search - Determines if the search button should be displayed.
 * @param {boolean} props.actions - Determines if the action buttons should be displayed.
 * @param {boolean} [props.buttonOne=true] - Determines if the first action button should be displayed. Defaults to
 *   true.
 * @param {boolean} [props.buttonTwo=false] - Determines if the second action button should be displayed. Defaults to
 *   false.
 * @param {boolean} [props.buttonThree=false] - Determines if the third action button should be displayed. Defaults to
 *   false.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <TopBarRightContent
 *   search={true}
 *   actions={true}
 *   buttonOne={true}
 *   buttonTwo={false}
 *   buttonThree={true}
 * />
 *
 * The above example will render the top bar right content with the search button, the first and third action buttons,
 *   and the notification button, along with the user item.
 */
function TopBarRightContent({
  search,
  actions,
  buttonOne = true,
  buttonThree = false,
  buttonTwo = false,
}: ITopBarContentProps): React.JSX.Element {
  return (
    <div className="flex flex-row items-center">
      {actions && (
        <ActionButtons buttonOne={buttonOne} buttonTwo={buttonTwo} buttonThree={buttonThree} />
      )}
      {search && <BtnIcon icon="ri-search-line" className="hidden md:inline-block" />}
      {<BtnIcon icon="ri-notification-line" />}
      {<UserItem />}
    </div>
  )
}

export default TopBarRightContent
