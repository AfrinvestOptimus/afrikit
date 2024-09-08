import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FloatingButton from './FloatingButton'

interface GlobalWrapperProps {
  children: React.ReactNode
  showFloatingButton?: boolean
  onFloatingButtonPress?: () => void
  floatingButtonColor?: string
}

const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  showFloatingButton = true,
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
          className="flex-1">
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

export default GlobalWrapper
