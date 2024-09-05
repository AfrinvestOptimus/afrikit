import { Text } from 'react-native'
import { AppTextAtomProps } from '../types/atoms'
import { useColorScheme } from 'nativewind'
import { tv } from 'tailwind-variants'

const textVariants = tv({
  base: 'text-left',
  variants: {
    size: {
      1: 'text-xs leading-xs',
      2: 'text-sm leading-sm',
      3: 'text-base leading-base',
      4: 'text-lg leading-lg',
      5: 'text-xl leading-xl',
      6: 'text-2xl leading-2xl',
      7: 'text-3xl leading-3xl',
      8: 'text-4xl leading-4xl',
      9: 'text-5xl leading-5xl',
    },
    weight: {
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    contrast: {
      true: 'text-opacity-100',
      false: 'text-opacity-50',
    },
  },
})

const AppText = ({
  size = 3,
  color = 'gray',
  trim = 'normal',
  weight = 'regular',
  highContrast = false,
  align = 'left',
  children,
  className,
  ...rest
}: AppTextAtomProps) => {
  const { colorScheme } = useColorScheme()

  const appColor = `text-${colorScheme}-type-${color}`

  //console.log("appColor", appColor);
  const highContrastClass = highContrast ? `${appColor}-bold` : `${appColor}`

  const variantClasses = textVariants({ size, weight, align } as any)

  return (
    <Text className={`${variantClasses} ${highContrastClass} ${className || ''}`} {...rest}>
      {children}
    </Text>
  )
}

export default AppText
