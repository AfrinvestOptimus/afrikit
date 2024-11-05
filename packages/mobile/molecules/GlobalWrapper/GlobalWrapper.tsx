import { FloatingButton } from 'components/molecules'
import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native'

export interface GlobalWrapperProps {
  children: React.ReactNode
  showFloatingButton?: boolean
  onFloatingButtonPress?: () => void
  floatingButtonColor?: string
  rootContainerClass?: string
  scrollContainerClass?: string
}

export const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  showFloatingButton = false,
  onFloatingButtonPress,
  floatingButtonColor = 'black',
  rootContainerClass,
  scrollContainerClass,
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
    <SafeAreaView className={`flex-1 bg-light-page-bg dark:bg-dark-page-bg ${rootContainerClass}`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className={`flex-1 max-h-screen px-lg mb-xs ${scrollContainerClass}`}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustKeyboardInsets={true}
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled">
          {/* <View className="flex-1"> */}
          {children}
          {showFloatingButton && keyboardVisible && (
            <FloatingButton
              onPress={onFloatingButtonPress!}
              backgroundColor={floatingButtonColor}
            />
          )}
        </ScrollView>
        {/* </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
