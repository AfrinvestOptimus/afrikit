/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useColorScheme } from 'nativewind'
import React, { useEffect } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import Icon from 'react-native-remix-icon'
import Svg, { Defs, Mask, Rect, Stop, LinearGradient as SvgLinearGradient } from 'react-native-svg'

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
   * Callback function that is triggered when close modal button is pressed.
   */
  setCloseModal?: () => void
}

export const AppModalLoader: React.FC<AppModalLoaderProps> = ({
  visible,
  text = 'Loading...',
  iconName = 'ri-loader-4-line',
  setCloseModal,
}) => {
  const { colorScheme } = useColorScheme()
  const rotate = useSharedValue(0)

  // Animation for rotating the gradient icon
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    }
  })

  // Start the rotation animation
  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
    )
  }, [rotate])

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View className="flex-1 justify-center items-center bg-light-overlay-black11 ">
        <View className="bg-white p-6 rounded-lg w-[94px] h-[90px] justify-center items-center">
          <Animated.View style={animatedStyle}>
            <Svg width={40} height={40}>
              <Defs>
                <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <Stop offset="0%" stopColor="#117ACA" />
                  <Stop offset="100%" stopColor="#BE93E4" />
                </SvgLinearGradient>
                <Mask id="mask">
                  <Icon name={iconName} size={40} color="#FFF" />
                </Mask>
              </Defs>
              <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" mask="url(#mask)" />
            </Svg>
          </Animated.View>
          <Text className="mt-4 text-sm text-center text-light-type-gray dark:text-gray-300">
            {text}
          </Text>
        </View>
        <Pressable onPress={setCloseModal} className="px-4 py-2 bg-blue-600 rounded-lg mt-2xl">
          <Text className="text-black font-bold">Close Modal</Text>
        </Pressable>
      </View>
    </Modal>
  )
}
