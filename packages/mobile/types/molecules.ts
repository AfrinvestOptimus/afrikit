import { ButtonColor, ButtonVariant } from './../molecules/AppButton/button'
/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { StyleProp, TextInput, ViewStyle } from 'react-native'
import { AppTextAtomProps } from './atoms'

export type ActionButtonProps = {
  text: string
  action: () => void
  color?: ButtonColor
  variant?: ButtonVariant
  highContrast?: boolean
  iconStart?: string
  iconEnd?: string
  className?: string
  accessibilityLabel?: string
  accessibilityHint?: string
  isLoading?: boolean
  textClassName?: string
}

export type BottomSheetIndex = 0 | 1 | 2 | 3 | 4 | 5

export type CommonProps = {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  backdropClose?: boolean
  actionButton?: ActionButtonProps
  contentContainerStyle?: StyleProp<ViewStyle>
  backgroundStyle?: StyleProp<Omit<ViewStyle, 'position' | 'top' | 'left' | 'bottom' | 'right'>>
}

export type AppBottomSheetProps<T extends boolean> = CommonProps & {
  isDetached: T
} & (T extends true
    ? {
        title: string | ReactNode
        icon?: ReactNode | null
        content: string | ReactNode
        titleProps?: AppTextAtomProps
        subtitleProps?: AppTextAtomProps
        isSwipeable?: never
        isContentSwipeable?: never
        secondaryActionButton?: ActionButtonProps
      } & ({ index: 0; height?: never } | { index?: never; height: number })
    : {
        title?: {
          text: string | ReactNode
          align?: 'center' | 'left'
          subtitle?: string | ReactNode
          titleProps?: AppTextAtomProps
          subtitleProps?: AppTextAtomProps
        }
        content?: string | ReactNode
        /**
         * Whether the sheet can be dragged. Defaults to true.
         *
         * This controls the handle. It is also the fallback for content
         * panning, so setting it alone keeps the previous all-or-nothing
         * behaviour.
         */
        isSwipeable?: boolean
        /**
         * Whether dragging the sheet's *content* moves the sheet.
         * Defaults to `isSwipeable`, so existing callers are unaffected.
         *
         * Set to false when `children` scroll: @gorhom/bottom-sheet claims
         * every vertical drag on the content for the sheet, so a
         * BottomSheetScrollView or BottomSheetFlatList never reaches its last
         * items. Turning this off while leaving `isSwipeable` on lets the
         * content scroll and still allows the handle to resize or close the
         * sheet.
         */
        isContentSwipeable?: boolean
        /**
         * Whether the sheet wraps `children` in a BottomSheetScrollView.
         * Defaults to true.
         *
         * Set to false when `children` already provide their own scrolling -
         * a BottomSheetFlatList, for example. Nesting a VirtualizedList inside
         * a ScrollView defeats virtualization and makes React Native warn.
         */
        scrollable?: boolean
        fixedHeader?: ReactNode // Component to be fixed at the top
        children: ReactNode
      } & ({ index: BottomSheetIndex; height?: never } | { index?: never; height: number }))

export type DetachedProps = AppBottomSheetProps<true>
export type RegularProps = AppBottomSheetProps<false>

export interface AppInputHandle extends Partial<TextInput> {
  setValue: (value: string) => void
  clear: () => void
}
