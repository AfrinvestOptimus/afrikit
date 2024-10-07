export type TAppTopBarProps = {
  theme?: 'filled' | 'ghost'
} & (
  | {
      isOnboarding: true
      pageTitle?: never
      subtitle?: never
      search?: never
      backBtn?: never
      actions?: never
    }
  | ({
      isOnboarding: false
      pageTitle: string
      subtitle?: string
      search?: boolean
      backBtn?: boolean
    } & (
      | {
          actions: true
          buttonOne?: boolean
          buttonTwo?: boolean
          buttonThree?: boolean
        }
      | {
          actions: false
        }
      | {
          actions?: undefined
        }
    ))
)
