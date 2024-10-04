/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import colors from 'afrikit-shared/dist/colors'
import { ReactNode } from 'react'
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  TextProps,
  ViewStyle,
} from 'react-native'

type TailwindColorKey = keyof typeof colors.light.type

interface AppTextOwnProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  color?: `${TailwindColorKey}`
  trim?: 'normal' | 'start' | 'end' | 'both'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  highContrast?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
  children?: string | ReactNode
}
export type AppTextAtomProps = AppTextOwnProps & Omit<TextProps, keyof AppTextOwnProps>

export type AppTitleAtomProps = {
  title: string
  align?: 'left' | 'center'
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
  floatingLabel?: boolean
  multiline?: boolean
  error?: string | boolean
  className?: string
  containerStyle?: ViewStyle
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
}

export interface AppPhoneInputProps extends Omit<TextInputProps, 'placeholderTextColor' | 'style'> {
  label?: string
  placeholder?: string
  numberOfLines?: number
  type?: string
  value?: string
  floatingLabel?: boolean
  multiline?: boolean
  error?: string | boolean
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onCountryCodeChange?: () => void
}
export interface CountryItem {
  dialCode: string
  text: string
  flag: string
  value: string
}
// export type FormFieldKeys = keyof FormValues;
