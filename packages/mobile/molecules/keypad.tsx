/* eslint-disable no-unused-vars */
import { useColorScheme } from 'nativewind'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-remix-icon'
import colors from 'afrikit-shared/dist/colors';

export type KeyPadProps = {
  type: 'decimal' | 'nondecimal' | 'biometric'
  textLength?: number
  onKeyPress?: (key: string) => void
  onBiometric?: (key: string) => void
  onDone?: (value: string) => void
  onChange?: (value: string) => void
  containerClassName?: string
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
  containerClassName,
}) => {
  const [value, setValue] = useState('')

  const { colorScheme } = useColorScheme()
  const mode = colorScheme === 'dark' ? 'dark' : 'light'

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    type === 'decimal' ? [KEY_DECIMAL, '0', KEY_BACKSPACE] : ['', '0', KEY_BACKSPACE],
  ]

  if (type === 'biometric') {
    keys[3] = [KEY_BIO, '0', KEY_BACKSPACE]
  }

  useEffect(() => {
    if (value.length === textLength) {
      onDone?.(value)
    }
    onChange?.(value)
  }, [value])

  const handleKeyPress = (key: string) => {
    if (key === KEY_BIO) {
      onBiometric?.(key)
    } else if (key === KEY_BACKSPACE) {
      setValue(prev => prev.substring(0, prev.length - 1))
    } else if (key) {
      //TODO: Check against textLength
      setValue(prev => prev.concat(key))
      onKeyPress?.(key)
    }
  }

  return (
    <View className={`p-xs bg-white dark:bg-black ${containerClassName}`}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row w-full justify-between mb-btn-hg-1">
          {row.map((key, keyIndex) => (
            <TouchableOpacity
              key={'key' + keyIndex}
              onPress={() => handleKeyPress(key)}
              className={`w-[32%] h-5xl p-lg rounded-full justify-center items-center bg-['transparent']`}>
              {key === KEY_BIO ? (
                <Icon name="fingerprint-fill" color={colors.dark.type.accent.DEFAULT} size={20} />
              ) : key === KEY_BACKSPACE ? (
                <Icon name="arrow-left-line" color={colors[mode].type.gray.DEFAULT} size={20} />
              ) : (
                <Text className={`text-2xl-head text-light-type-gray dark:text-dark-type-gray`}>
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
