import { useColorScheme } from 'nativewind'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-remix-icon'
import colors from '../../shared/colors'

type KeyPadProps = {
  type: 'decimal' | 'nondecimal' | 'biometric'
  textLength?: number
  onKeyPress?: (key: string) => void
  onBiometric?: (key: string) => void
  onDone?: (value: string) => void
  onChange?: (value: string) => void
}

const KEY_BIO = 'bio' //👆
const KEY_DECIMAL = '.'
const KEY_BACKSPACE = '←'
const KeyPad: React.FC<KeyPadProps> = ({
  type,
  onKeyPress,
  onBiometric,
  onChange,
  onDone,
  textLength = 4,
}) => {
  const { colorScheme } = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const [value, setValue] = useState('')


  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    type === 'decimal' ? [KEY_DECIMAL, '0', KEY_BACKSPACE] : ['', '0', KEY_BACKSPACE],
  ]

  if (type === 'biometric') {
    keys[3] = [KEY_BIO, '0', KEY_BACKSPACE]
  }

  return (
    <View className={`p-xs ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row w-full justify-between mb-btn-hg-1">
          {row.map((key, keyIndex) => (
            <TouchableOpacity
              key={'key' + keyIndex}
              className={`w-[32%] h-5xl p-lg rounded-full justify-center items-center bg-['transparent']`}
            >
              {key === KEY_BIO ? (
                <Icon name="fingerprint-fill" color={colors.dark.type.accent.DEFAULT} size={20} />
              ) : (
                <Text
                  className={`text-h2 ${!isDarkMode ? 'text-black' : 'text-dark-contrast-white'}`}>
                  {key}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  )
}

export default KeyPad
