import { ReactNode } from 'react'
import { TextProps } from 'react-native'
import colors from './../../shared/colors'

type TailwindColorKey = keyof typeof colors.light & keyof typeof colors.dark
type colorScheme = 'light' | 'dark'

interface AppTextOwnProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  color: `text-${colorScheme}-${TailwindColorKey}`
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
