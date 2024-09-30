import React, { useEffect, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native'
import FloatingButton from '../../components/molecules/FloatingButton'

export interface GlobalWrapperProps {
  children: React.ReactNode
  showFloatingButton?: boolean
  onFloatingButtonPress?: () => void
  floatingButtonColor?: string
}

export const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  showFloatingButton = false,
  onFloatingButtonPress,
  floatingButtonColor = 'black',
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
          className="flex-1 h-screen">
          <View className="flex-1 p-4">{children}</View>
          {(showFloatingButton || keyboardVisible) && (
            <FloatingButton
              onPress={onFloatingButtonPress!}
              backgroundColor={floatingButtonColor}
            />
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}
