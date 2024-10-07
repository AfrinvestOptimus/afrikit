import React from 'react'
import optimusLogo from '../assets/optimusLogo.svg'
import clsx from 'clsx'
import { TAppTopBarProps } from '../types/TAppTopBarProps'
import TopBarRightContent from '../components/TopBarRightContent'
import AppButton from '../components/molecules/AppButton'

/**
 * Component representing the top bar of the application.
 *
 * @component
 * @param {TAppTopBarProps} props - The properties for the AppTopbar component.
 * @param {boolean} props.isOnboarding - Indicates if the user is in the onboarding process.
 * @param {string} props.pageTitle - The title of the current page.
 * @param {'filled' | 'outlined'} [props.theme='filled'] - The theme of the top bar.
 * @param {boolean} [props.search=true] - Indicates if the search functionality is enabled.
 * @param {string} [props.subtitle] - The subtitle of the current page.
 * @param {boolean} [props.actions] - Indicates if actions are enabled.
 * @param {boolean} [props.backBtn] - Indicates if the back button is enabled.
 * @param {React.ReactNode} [props.buttonOne] - The first action button.
 * @param {React.ReactNode} [props.buttonTwo] - The second action button.
 * @param {React.ReactNode} [props.buttonThree] - The third action button.
 * @returns {JSX.Element} The rendered top bar component.
 */
function AppTopbar(props: TAppTopBarProps): React.JSX.Element {
  const {
    isOnboarding,
    pageTitle,
    theme = 'filled',
    search = true,
    subtitle,
    actions,
    backBtn,
  } = props

  // Type guard to check if actions are enabled
  function hasActions(props: TAppTopBarProps): props is TAppTopBarProps & { actions: true } {
    return !props.isOnboarding && props.actions === true
  }

  return (
    <div
      className={clsx(
        'w-full h-16 mx-lg',
        theme === 'filled'
          ? 'bg-light-page-bg dark:bg-dark-page-bg'
          : 'border-b border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle',
      )}>
      {isOnboarding ? (
        <div className="flex flex-row items-center justify-between px-3xl">
          <img src={optimusLogo} />

          <p className="hidden md:flex text-light-type-accent dark:text-dark-type-accent capitalize text-base-head cursor-pointer py-lg hover:text-light-type-accent-bold dark:hover:text-dark-type-accent-bold transition-all duration-300">
            open account
          </p>
        </div>
      ) : (
        <div className="px-2xl flex flex-row items-center justify-between py-lg">
          <div className="flex flex-row items-end space-x-sm">
            {backBtn && (
              <div className="hidden md:inline-block">
                <AppButton
                  size={3}
                  variant="surface"
                  color="neutral"
                  highContrast
                  iconStart={false}
                  iconName="ri-arrow-left-wide-line"
                  iconEnd={false}
                  text=""
                />
              </div>
            )}
            <div className="flex flex-col items-start gap-y-xs">
              <h2 className="text-xl-bold text-light-type-gray dark:text-dark-type-gray text-center">
                {pageTitle}
              </h2>
              <p className="text-light-type-gray-muted dark:text-dark-type-gray-muted hidden md:block text-base-body">
                {subtitle}
              </p>
            </div>
          </div>

          <TopBarRightContent
            search={search}
            actions={actions}
            {...(hasActions(props)
              ? {
                  buttonOne: props.buttonOne,
                  buttonTwo: props.buttonTwo,
                  buttonThree: props.buttonThree,
                }
              : {})}
          />
        </div>
      )}
    </div>
  )
}

export default AppTopbar
