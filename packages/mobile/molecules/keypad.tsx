/* eslint-disable no-unused-vars */
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import Icon from 'react-native-remix-icon'
import { h } from 'utilities/scaling'
export type KeyPadInputType = 'decimal' | 'nondecimal' | 'biometric'
export type KeyPadProps = {
  type: KeyPadInputType
  textLength?: number
  onKeyPress?: (key: string) => void
  onBiometric?: (key: string) => void
  onDone?: (value: string) => void
  onChange?: (value: string) => void
  containerClassName?: string
  containerStyle?: ViewStyle
}
export type KeyPadRef = {
  clear: () => void
  setValue: (value: string) => void
}
const KEY_BIO = 'bio'
const KEY_DECIMAL = '.'
const KEY_BACKSPACE = '←'
const KeyPad = forwardRef<KeyPadRef, KeyPadProps>(
  (
    {
      type,
      onKeyPress,
      onBiometric,
      onChange,
      onDone,
      textLength = 4,
      containerClassName,
      containerStyle,
    },
    ref,
  ) => {
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
    useImperativeHandle(ref, () => ({
      clear: () => {
        setValue('')
        onChange?.('')
      },
      setValue: (newValue: string) => {
        setValue(newValue)
        onChange?.(newValue)
        if (newValue.length === textLength) {
          onDone?.(newValue)
        }
      },
    }))
    const handleKeyPress = (key: string) => {
      onKeyPress?.(key)
      if (key === KEY_BIO) {
        onBiometric?.(key)
      } else if (key === KEY_BACKSPACE) {
        setValue(prev => {
          const newValue = prev.substring(0, prev.length - 1)
          onChange?.(newValue)
          return newValue
        })
      } else if (key) {
        setValue(prev => {
          const newValue = prev.length < textLength ? prev.concat(key) : prev
          onChange?.(newValue)
          if (newValue.length === textLength) {
            onDone?.(newValue)
          }
          return newValue
        })
      }
    }
    return (
      <View
        style={[{ maxHeight: h(296) }, containerStyle]}
        className={`justify-between h-[296] items-center ${containerClassName}`}>
        {keys.map((row, rowIndex) => (
          <View
            key={rowIndex}
            className="flex-row w-full justify-between flex-grow h-auto">
            {row.map((key, keyIndex) => (
              <TouchableOpacity
                key={'key' + keyIndex}
                onPress={() => handleKeyPress(key)}
                className={`w-[33%] h-auto justify-center items-center bg-['transparent']`}>
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
  },
)
export default KeyPad
