import colors from 'afrikit-shared/dist/colors'
import { AppText } from 'atoms'
import AppIcon from 'molecules/AppIcon'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export interface AppTopBarProps {
  title: string
  onBackPress?: () => void
  actions?: Array<{ iconName: string; backIconColor: string; onPress: () => void }>
  backIconName?: string // Name for the back icon
  backIconColor?: string // Color for the back icon
  subtitle?: string // Optional subtitle below the title
  leftTitle?: string // Optional title on the left side
  leftSubtitle?: string // Optional subtitle on the left side
  containerClassName?: string // Custom class name for the top bar container
  renderLeft?: () => React.ReactNode // Optional custom left component
  renderCenter?: () => React.ReactNode // Optional custom center component
  customBackButton?: React.ReactNode // Custom back button component
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
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // Render back button or custom back button
  const renderBackButton = () => {
    if (!onBackPress) return null

    return (
      <TouchableOpacity onPress={onBackPress}>
        {customBackButton ? (
          customBackButton
        ) : (
          <AppIcon
            name={backIconName}
            size="24"
            color={backIconColor || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
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
      <TouchableOpacity key={index} onPress={action.onPress} className="ml-lg">
        <AppIcon
          name={action.iconName}
          size="24"
          color={action.backIconColor || colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
        />
      </TouchableOpacity>
    ))
  }

  return (
    <View
      className={`flex-row items-center justify-between h-5xl px-xs py-sm ${containerClassName}`}>
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
