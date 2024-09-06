import React, { useEffect, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-remix-icon'
import { SafeAreaView } from 'react-native-safe-area-context'

interface GlobalWrapperProps {
  children: React.ReactNode
  showFloatingButton?: boolean
  onFloatingButtonPress?: () => void
}

const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  showFloatingButton = true,
  onFloatingButtonPress,
}) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4">
      <ScrollView
        contentContainerStyle={{ padding: 16, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1">
          <View className="flex-1 p-4">{children}</View>
          {showFloatingButton && (
            <TouchableOpacity
              onPress={onFloatingButtonPress}
              className="absolute right-0 bottom-5 bg-black rounded-full w-14 h-14 items-center justify-center shadow-lg">
              <Icon name="add-line" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GlobalWrapper
