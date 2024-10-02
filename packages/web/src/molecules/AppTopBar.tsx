import optimusLogo from '../assets/optimusLogo.svg'
import clsx from 'clsx'

export type IAppTopBarProps = {
  isOnboarding: boolean
  theme?: 'white' | 'dark'
} & (
  | {
      isOnboarding: true
      pageTitle?: never
    }
  | {
      isOnboarding: false
      pageTitle: string
      user?: boolean
    }
)

export function AppTopBar({ isOnboarding, pageTitle, theme = 'white' }: IAppTopBarProps) {
  return (
    <div
      className={clsx(
        'bg-light-page-bg dark:bg-dark-page-bg w-full h-16 mx-lg',
        theme === 'white'
          ? 'bg-light-page-bg dark:bg-dark-page-bg'
          : 'bg-white/0 border-b border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle',
      )}>
      {isOnboarding ? (
        <div className="flex flex-row items-center justify-between px-3xl">
          <img src={optimusLogo} />

          <p className="text-light-type-accent dark:text-dark-type-accent capitalize text-base-head cursor-pointer py-lg hover:text-light-type-accent-bold dark:hover:text-dark-type-accent-bold transition-all duration-300">
            open account
          </p>
        </div>
      ) : (
        <div className="px-[112px] flex flex-row items-center justify-between py-lg">
          <h2 className="text-2xl-head text-light-type-gray dark:text-dark-type-gray">
            {pageTitle}
          </h2>

          <i className="ri-search-line"></i>
        </div>
      )}
    </div>
  )
}
