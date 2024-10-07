import React, { useMemo } from 'react' // Import React and the useMemo hook for performance optimization
import { AppButtonProps } from '../../types/TAppButton' // Import the AppButtonProps interface for TypeScript type checking
import {
  buttonColors,
  buttonSizes,
  buttonStates,
  ButtonVariant,
  highContrastButtonColors,
  highContrastTextColors,
  textColors,
  textSizes,
  textStates,
} from './button' // Import various styles and variants for button customization

// Define the AppButton functional component with props defined by AppButtonProps interface
const AppButton: React.FC<AppButtonProps> = ({
  size = 2, // Default button size is 2
  variant = 'solid', // Default variant of the button is 'solid'
  color = 'accent', // Default color of the button is 'accent'
  highContrast = false, // Flag for high contrast styles
  state = 'default', // Default state of the button
  iconStart = true, // Flag to determine if the start icon should be displayed
  iconEnd = false, // Flag to determine if the end icon should be displayed
  iconStartName = 'ri-home-line', // Class name for the start icon
  iconEndName = 'ri-home-line', // Class name for the end icon
  text, // Text to display in the button
  onClick, // Function to call on button click
}) => {
  // Get the corresponding styles based on the provided props
  const sizeStyle = buttonSizes[size] // Get size styles
  const textSize = textSizes[size] // Get text size
  const colorVariantStyle = highContrast
    ? highContrastButtonColors[color][variant] // Get high contrast color styles if enabled
    : buttonColors[color][variant] // Otherwise, get standard color styles
  const textStyle = highContrast
    ? highContrastTextColors[color][variant] // Get high contrast text styles if enabled
    : textColors[color][variant] // Otherwise, get standard text styles
  const textStateStyle = textStates[state] // Get styles based on button state

  // Memoize the button state style for performance optimization
  const buttonStateStyle = useMemo(() => {
    if (state === 'disabled') {
      return (buttonStates[state] as Record<ButtonVariant, string>)[variant] // If disabled, get the corresponding state style
    }
    return buttonStates[state] // Otherwise, return the default state style
  }, [state, variant]) // Recompute when state or variant changes

  // Combine button styles into a single string for className
  const combinedButtonStyles = useMemo(
    () => [sizeStyle, colorVariantStyle, buttonStateStyle].join(' '),
    [sizeStyle, colorVariantStyle, buttonStateStyle],
  )

  // Combine text styles into a single string for className
  const combinedTextStyle = useMemo(
    () => [textStyle, textSize, textStateStyle].join(' '),
    [textStyle, textSize, textStateStyle],
  )

  return (
    <button
      onClick={onClick}
      className={`flex items-center ${combinedButtonStyles}`} // Set combined styles
      disabled={state === 'disabled'} // Disable button based on state
    >
      <div className="flex items-center justify-between space-x-lg">
        {iconStart && ( // Conditionally render left icon
          <div>
            <i className={`${iconStartName} ${combinedTextStyle}`}></i>{' '}
          </div>
        )}
        {/* Render the center  text */}
        <p className={`font-semibold ${combinedTextStyle}`}>{text}</p>{' '}
        {iconEnd && ( // Conditionally render right icon
          <div>
            <i className={`${iconEndName} ${combinedTextStyle}`}></i> {/* Render the end icon */}
          </div>
        )}
      </div>
    </button>
  )
}

export default AppButton
