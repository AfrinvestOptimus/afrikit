/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {ReactNode} from 'react'
import {NativeSyntheticEvent, TextInputFocusEventData, TextInputProps, TextProps,} from 'react-native'
import colors from './../../shared/colors'

type TailwindColorKey = keyof typeof colors.light.type
type colorScheme = 'light' | 'dark'

console.log('TailwindColorKey', colors.dark.type)

interface AppTextOwnProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  color: `${TailwindColorKey}`
  trim?: 'normal' | 'start' | 'end' | 'both'
  weight: 'regular' | 'medium' | 'semibold' | 'bold'
  highContrast?: boolean
  align: 'left' | 'center' | 'right'
  className?: string
  children: string | ReactNode
}
type AppTextAtomProps = AppTextOwnProps & Omit<TextProps, keyof AppTextOwnProps>

export type AppTitleAtomProps = {
  title: string
  align: 'left' | 'center'
  hasSubtitle: boolean
  subtitle?: string
  titlePosition?: 'top' | 'bottom'
  spacing?: 1 | 2 | 3
} & (
  | {
      hasSubtitle: false
      subtitle: never
      titlePosition: never
      spacing: never
    }
  | {
      hasSubtitle: true
      subtitle: string
      titlePosition?: 'top' | 'bottom'
      spacing?: 1 | 2 | 3
    }
)

export type InputBlurProps = {
  text: string
  noDecimals: boolean
  onChangeText: (input: string) => void
}

export type FormData = {
  email: string
  name: string
}

export interface AppInputProps extends Omit<TextInputProps, 'placeholderTextColor' | 'style'> {
  label?: string
  placeholder?: string
  numberOfLines?: number
  type?: string
  value?: string
  FloatingLabel?: boolean
  multiline?: boolean
  error?: string | boolean
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
}

// export type FormFieldKeys = keyof FormValues;
