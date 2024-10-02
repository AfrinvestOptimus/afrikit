import optimusLogo from '../assets/optimusLogo.svg'
import clsx from 'clsx'
import { TopBarContent } from '../components/TopBarContent'

export type IAppTopBarProps = {
  isOnboarding: boolean
  theme?: 'filled' | 'ghost'
} & (
  | {
      isOnboarding: true
      pageTitle?: never
      user?: never
      search?: never
      notification?: never
      subtitle?: never
    }
  | {
      isOnboarding: false
      pageTitle: string
      user?: boolean
      search?: boolean
      notification?: boolean
      subtitle?: string
    }
)

/**
 * Renders the top bar of the application with optional features such as user info dropdown, search, and notifications.
 *
 * @param {boolean} isOnboarding - Indicates if the header is in the onboarding or auth flow.
 * @param {string} pageTitle - The title of the current page.
 * @param {string} [theme='filled'] - The theme of the top bar, defaults to 'filled'.
 * @param {boolean} [user=true] - Determines if the user info should be displayed, defaults to true.
 * @param {boolean} [search=true] - Determines if the search bar should be displayed, defaults to true.
 * @param {boolean} [notification=true] - Determines if the notification icon should be displayed, defaults to true.
 * @param {string} [subtitle] - An optional subtitle for the top bar.
 * @returns {JSX.Element} The rendered top bar component.
 */
export function AppTopBar({
  isOnboarding,
  pageTitle,
  theme = 'filled',
  user = true,
  search = true,
  notification = true,
  subtitle,
}: IAppTopBarProps) {
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
          <div className="flex flex-col items-start gap-y-xs">
            <h2 className="text-xl-bold text-light-type-gray dark:text-dark-type-gray text-center">
              {pageTitle}
            </h2>
            <p className="text-light-type-gray-muted dark:text-dark-type-gray-muted hidden md:block text-base-body">
              {subtitle}
            </p>
          </div>

          <TopBarContent user={user} search={search} notification={notification} />
        </div>
      )}
    </div>
  )
}
