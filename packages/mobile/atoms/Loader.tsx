import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { useEffect } from 'react'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import Icon from 'react-native-remix-icon'
import Svg, { Defs, LinearGradient as SvgLinearGradient, Mask, Rect, Stop } from 'react-native-svg'

export interface LoaderTypes {
  size?: number
}

const Loader: React.FC<LoaderTypes> = ({ size = 40 }) => {
  const rotate = useSharedValue(0)
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  // Start the rotation animation
  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(700, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
    )
  }, [rotate])

  // Animation for rotating the gradient icon
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    }
  })

  return (
    <Animated.View style={animatedStyle}>
      <Svg height={size} width={size} viewBox="0 0 40 40">
        <Defs>
          <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#117ACA" />
            <Stop offset="100%" stopColor="#BE93E4" />
          </SvgLinearGradient>
          <Mask id="mask">
            <Icon
              name="ri-loader-5-line"
              size={40}
              color={colors[isDarkMode ? 'dark' : 'light']['contrast-white']}
            />
          </Mask>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" mask="url(#mask)" />
      </Svg>
    </Animated.View>
  )
}

export default Loader
