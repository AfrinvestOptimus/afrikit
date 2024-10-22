import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { AppText } from '../../atoms'
import AppIcon from '../../molecules/AppIcon'

export interface AppTopBarProps {
  /**
   * The title displayed in the center of the top bar.
   */
  title?: string

  /**
   * Callback function triggered when the back button is pressed.
   */
  onBackPress?: () => void

  /**
   * An array of action buttons displayed on the right side of the top bar.
   * Each action object contains:
   * - `iconName`: Name of the icon to display.
   * - `backIconColor`: Color of the action icon.
   * - `onPress`: Callback function triggered when the action button is pressed.
   * - `accessibilityLabel` and `accessibilityHint`: Optional accessibility labels and hints.
   */
  actions?: Array<{
    iconName: string
    backIconColor: string
    onPress: () => void
    accessibilityLabel?: string
    accessibilityHint?: string
  }>

  /**
   * Name for the back icon. Defaults to `arrow-left-wide-line`.
   */
  backIconName?: string

  /**
   * Color for the back icon.
   */
  backIconColor?: string

  /**
   * Optional subtitle below the title in the center.
   */
  subtitle?: string

  /**
   * Optional title to be displayed on the left side of the top bar (typically used when a custom center component is rendered).
   */
  leftTitle?: string

  /**
   * Optional subtitle below the left title.
   */
  leftSubtitle?: string

  /**
   * Custom class name for the top bar container.
   */
  containerClassName?: string

  /**
   * Optional custom left component. If provided, it overrides the default left title/subtitle.
   */
  renderLeft?: () => React.ReactNode

  /**
   * Optional custom center component. If provided, it overrides the default title/subtitle in the center.
   */
  renderCenter?: () => React.ReactNode

  /**
   * Custom back button component. If provided, it overrides the default back icon.
   */
  customBackButton?: React.ReactNode

  /**
   * Accessibility label for the entire top bar. Defaults to `Top Bar`.
   */
  accessibilityLabel?: string

  /**
   * Accessibility hint for the entire top bar. Defaults to `Navigation bar at the top of the screen`.
   */
  accessibilityHint?: string
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  title,
  subtitle,
  containerClassName,
  leftTitle,
  leftSubtitle,
  backIconColor,
  backIconName = 'arrow-left-wide-line',
  renderLeft,
  renderCenter,
  onBackPress,
  actions,
  customBackButton,
  accessibilityLabel = 'Top Bar',
  accessibilityHint = 'Navigation bar at the top of the screen',
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // Render back button or custom back button
  const renderBackButton = () => {
    if (!onBackPress) return null

    return (
      <TouchableOpacity
        onPress={onBackPress}
        accessibilityLabel="Back"
        accessibilityHint="Go back to the previous screen">
        {customBackButton ? (
          customBackButton
        ) : (
          <AppIcon
            name={backIconName}
            size="24"
            color={backIconColor || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
            accessibilityLabel="Back"
            accessibilityHint="Go back to the previous screen"
          />
        )}
      </TouchableOpacity>
    )
  }

  // Render left section
  const renderLeftSection = () => {
    if (renderLeft) return renderLeft()

    if (leftTitle || leftSubtitle) {
      return (
        <View>
          <AppText size={4} weight="bold" color="gray" align="left">
            {leftTitle}
          </AppText>
          {leftSubtitle ? (
            <AppText size={2} weight="regular" color="gray" align="left">
              {leftSubtitle}
            </AppText>
          ) : null}
        </View>
      )
    }

    return null
  }

  // Render action buttons on the right
  const renderRightActions = () => {
    if (!actions) return null

    return actions.map((action, index) => (
      <TouchableOpacity
        key={index}
        onPress={action.onPress}
        className="ml-lg"
        accessibilityLabel={action.accessibilityLabel || `Action ${index + 1}`}
        accessibilityHint={action.accessibilityHint || `Press to activate action ${index + 1}`}>
        {' '}
        // Default accessibilityHint
        <AppIcon
          name={action.iconName}
          size="24"
          color={action.backIconColor || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
          accessibilityLabel={action.accessibilityLabel || `Action ${index + 1}`}
          accessibilityHint={action.accessibilityHint || `Press to activate action ${index + 1}`}
        />
      </TouchableOpacity>
    ))
  }

  return (
    <View
      className={`flex-row items-center justify-between h-5xl px-xs py-sm ${containerClassName}`}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}>
      <View className="flex-row items-center gap-xl">
        {renderBackButton()}
        {renderLeftSection()}
      </View>

      {renderCenter ? (
        renderCenter()
      ) : (
        <View style={styles.center}>
          <AppText size={4} weight="bold" color="gray" align="center" highContrast>
            {title}
          </AppText>
          {subtitle && (
            <AppText size={2} weight="regular" color="gray" align="center">
              {subtitle}
            </AppText>
          )}
        </View>
      )}

      <View className="flex-row items-center justify-end">{renderRightActions()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 3,
    alignItems: 'center',
  },
})
