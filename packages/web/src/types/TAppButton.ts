// Importing button-related types like ButtonColor, ButtonSize, ButtonState, and ButtonVariant
// from the AppButton component. These are likely used to define the button's appearance and behavior.
import {
  ButtonColor,
  ButtonSize,
  ButtonState,
  ButtonVariant,
} from '../components/molecules/AppButton/button'

// Defining the AppButtonProps interface, which specifies the props for an AppButton component.
// This interface ensures that any component using these props will have predictable types and behaviors.

export interface AppButtonProps {
  // Optional size of the button, defined by the ButtonSize type
  size?: ButtonSize

  // Optional variant of the button, such as 'primary', 'secondary', etc., defined by ButtonVariant type
  variant?: ButtonVariant

  // Optional color of the button, which will be one of the values from the ButtonColor type
  color?: ButtonColor

  // Optional high contrast mode (boolean). When true, it enables a higher contrast version of the button for accessibility.
  highContrast?: boolean

  // Optional state of the button, such as 'active', 'disabled', 'loading', etc., defined by the ButtonState type
  state?: ButtonState

  // Optional boolean to show an icon at the start of the button text (e.g., left of the text)
  iconStart?: boolean

  // Optional boolean to show an icon at the end of the button text (e.g., right of the text)
  iconEnd?: boolean

  // Optional name of the icon to be displayed within the button (if applicable)
  iconName?: string

  // Optional custom class name for applying additional styles to the button
  className?: string

  // The main text to be displayed on the button, required prop
  text: string

  // Optional function to be called when the button is clicked (if not disabled)
  onClick?: () => void

  // Optional label for accessibility, to describe the button's action (used by screen readers)
  accessibilityLabel?: string

  // Optional hint for accessibility, providing additional context or information (used by screen readers)
  accessibilityHint?: string

  iconStartName?: string

  iconEndName?: string
}
