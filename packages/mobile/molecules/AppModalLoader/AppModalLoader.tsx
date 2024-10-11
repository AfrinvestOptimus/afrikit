/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import Loader from '../../atoms/Loader'

export interface AppModalLoaderProps {
  /**
   * Toggles modal loader visibility(True, False).
   */
  visible: boolean
  /**
   * Displays the modal loader loading text.
   */
  text?: string
  /**
   * Takes different Remix icons name.
   */
  iconName?: string

  /**
   * Type of loader (modal, mobile, default)
   */
  loaderType?: 'default' | 'modal'

  /**
   * Callback function that is triggered when close modal button is pressed.
   */
  onDismiss?: () => void
}

export const AppModalLoader: React.FC<AppModalLoaderProps> = ({
  visible,
  text = 'Loading...',
  loaderType = 'modal',
  onDismiss,
}) => {
  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss()
    }
  }, [])

  const appLoader = () => {
    return (
      <View className="bg-white p-6 rounded-lg w-[94px] h-[90px] justify-center items-center">
        <Loader />
        {text && (
          <Text className="mt-4 text-sm text-center text-light-type-gray dark:text-dark-type-gray">
            {text}
          </Text>
        )}
      </View>
    )
  }

  const appModalLoader = () => {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={visible}
        onRequestClose={handleDismiss}>
        <View className="flex-1 justify-center items-center bg-light-overlay-black11 ">
          <View className="bg-white p-6 rounded-lg w-[94px] h-[90px] justify-center items-center">
            <Loader />
            {text && (
              <Text className="mt-4 text-sm text-center text-light-type-gray dark:text-dark-type-gray">
                {text}
              </Text>
            )}
          </View>
          {onDismiss ? (
            <Pressable onPress={onDismiss} className="px-4 py-2 bg-blue-600 rounded-lg mt-2xl">
              <Text className="text-light-type-gray dark:text-dark-type-gray font-bold">
                Close Modal
              </Text>
            </Pressable>
          ) : null}
        </View>
      </Modal>
    )
  }

  return loaderType === 'default' ? appLoader() : appModalLoader()
}
