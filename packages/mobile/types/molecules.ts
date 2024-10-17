/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export type ActionButtonProps = {
  text: string
  action: () => void
}

export type CommonProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  backdropClose?: boolean
  actionButton?: ActionButtonProps
  backgroundStyle?: StyleProp<
  Omit<ViewStyle, 'position' | 'top' | 'left' | 'bottom' | 'right'>
>;
}

export type AppBottomSheetProps<T extends boolean> = CommonProps & {
  isDetached: T
} & (T extends true
    ? {
        title: string
        icon?: ReactNode | null
        content: string
        isSwipeable?: never
        secondaryActionButton?: ActionButtonProps
      } & ({ index: 0; height?: never } | { index?: never; height: number })
      : {
        title?: {
          text: string
          align?: 'center' | 'left'
          subtitle?: string
        }
        content?: string
        isSwipeable?: boolean
        children: ReactNode
      } & ({ index: 0 | 1 | 2 | 3 | 4 | 5; height?: never } | { index?: never; height: number }))

export type DetachedProps = AppBottomSheetProps<true>
export type RegularProps = AppBottomSheetProps<false>
