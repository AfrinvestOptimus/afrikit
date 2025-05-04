import { ButtonColor, ButtonVariant } from './../molecules/AppButton/button'
/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { AppTextAtomProps } from './atoms'

export type ActionButtonProps = {
  text: string
  action: () => void
  color?: ButtonColor
  variant?: ButtonVariant
  highContrast?: boolean
  iconStart?: string
  iconEnd?: string
}

export type BottomSheetIndex = 0 | 1 | 2 | 3 | 4 | 5

export type CommonProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  backdropClose?: boolean
  actionButton?: ActionButtonProps
  backgroundStyle?: StyleProp<Omit<ViewStyle, 'position' | 'top' | 'left' | 'bottom' | 'right'>>
}

export type AppBottomSheetProps<T extends boolean> = CommonProps & {
  isDetached: T
} & (T extends true
    ? {
        title: string
        icon?: ReactNode | null
        content: string
        titleProps?: AppTextAtomProps
        subtitleProps?: AppTextAtomProps
        isSwipeable?: never
        secondaryActionButton?: ActionButtonProps
      } & ({ index: 0; height?: never } | { index?: never; height: number })
    : {
        title?: {
          text: string
          align?: 'center' | 'left'
          subtitle?: string
          titleProps?: AppTextAtomProps
          subtitleProps?: AppTextAtomProps
        }
        content?: string
        isSwipeable?: boolean
        fixedHeader?: ReactNode // Component to be fixed at the top
        children: ReactNode
      } & ({ index: BottomSheetIndex; height?: never } | { index?: never; height: number }))

export type DetachedProps = AppBottomSheetProps<true>
export type RegularProps = AppBottomSheetProps<false>
