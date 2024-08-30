import { Text } from 'react-native'
import { AppTextAtomProps } from '../types/atoms'
import { useColorScheme } from 'nativewind'
import classNames from '../utilities/classnames'

const sizeClasses = {
  1: 'xs',
  2: 'sm',
  3: 'base',
  4: 'lg',
  5: 'xl',
  6: '2xl',
  7: '3xl',
  8: '4xl',
  9: '5xl',
}
const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const weightClasses = {
  regular: 'body',
  medium: 'title',
  semibold: 'head',
  bold: 'bold',
}

/**
 * React functional component for rendering text with customizable properties.
 *
 * @component AppText
 * @param {Object} props - The properties for customizing the text.
 * @param {number} props.size - Select the size of the text from 1-9. The default value is 3.
 * @param {string} props.color - Select the color of the text from the Tailwind color palette. The default value is
 *   black.
 * @param {string} props.trim - Select the trim of the text from normal, start, end, or both. The default value is
 *   normal.
 * @param {string} props.weight - Select the weight of the text from light, normal, medium, or bold. The default value
 *   is light.
 * @param {boolean} props.highContrast - Select the high contrast of the text. The default value is false.
 * @param {string} props.align - Select the alignment of the text from left, center, or right. The default value is
 *   left.
 * @param {ReactNode} props.children - The child elements to be rendered inside the text component.
 * @param {Object} props.rest - The rest of the props to be passed to the containing Text component.
 * @returns {ReactElement} The rendered AppText component.
 */
const AppText = ({
  size = 3,
  color = 'text-dark-slate4',
  trim = 'normal',
  weight = 'regular',
  highContrast = false,
  align = 'left',
  children,
  className,
  ...rest
}: AppTextAtomProps) => {
  const { colorScheme } = useColorScheme()

  const textSize = sizeClasses[size] || 'base'
  const textWeight = weightClasses[weight] || 'body'

  const finalClassName = classNames(
    alignmentClasses[align] || '',
    color || '',
    `text-${textSize}-${textWeight}`,
    highContrast ? `text-${colorScheme}-type-gray-muted` : '',
    className || '',
  )

  console.log('finalClassName', finalClassName)

  return (
    <Text
      className={`
        ${finalClassName}
      `}
      {...rest}>
      {children}
    </Text>
  )
}

export default AppText
