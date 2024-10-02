import clsx from 'clsx'
export interface ITopBarContentProps {
  user?: boolean
  search?: boolean
  notification?: boolean
}

const BtnIcon = ({ icon, className }: { icon: string; className?: string }) => (
  <button className={clsx('py-sm px-md cursor-pointer', className)}>
    <i className={clsx('text-2xl text-light-type-gray dark:text-dark-type-gray', icon)} />
  </button>
)

const UserItem = () => (
  <div className="cursor-pointer bg-light-background-neutral-base/5 dark:bg-dark-background-neutral-base/5 hover:bg-light-background-neutral-base/20 dark:hover:bg-dark-background-neutral-base/20 rounded-full space-x-xs p-xs md:space-x-sm  md:px-lg md:py-sm flex flex-row items-center transition-all duration-500">
    <div className="rounded-full w-xl h-xl bg-light-tomato9" />
    <i className="ri-arrow-down-s-line text-light-type-gray dark:text-dark-type-gray text-2xl" />
  </div>
)

export function TopBarContent({ user, search, notification }: ITopBarContentProps) {
  return (
    <div className="flex flex-row items-center">
      {search && <BtnIcon icon="ri-search-line" className="hidden md:inline-block" />}
      {notification && <BtnIcon icon="ri-notification-line" />}
      {user && <UserItem />}
    </div>
  )
}
