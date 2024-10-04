/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useColorScheme } from 'nativewind'
import { FC, useEffect, useRef, useState, type RefObject } from 'react'
import { TextInput, View } from 'react-native'
import KeyPad from './keypad'

export interface OTPInputProps {
  count?: number
  secureEntry?: boolean
  isError?: boolean
  onFullCode?: (fullCode: string) => void
  keypad?: 'Custom' | 'Native'
  KeyPadType: 'decimal' | 'nondecimal' | 'biometric'
  containerClassName?: string
}

const CodeInput: FC<OTPInputProps> = ({
  count = 4,
  secureEntry,
  isError,
  onFullCode,
  keypad,
  KeyPadType = 'decimal',
  containerClassName,
}) => {
  const [codes, setCodes] = useState<string[]>(Array(count).fill(''))
  const refs: RefObject<TextInput>[] = Array.from({ length: count }, () => useRef<TextInput>(null))
  const { colorScheme } = useColorScheme()

  useEffect(() => {
    refs[0]?.current?.focus()
  }, [keypad])

  const onChangeCode = (text: string, index: number) => {
    const newCodes = [...codes]

    if (text.length <= 1) {
      newCodes[index] = text
      setCodes(newCodes)

      if (text !== '' && index < count - 1) {
        refs[index + 1]!.current?.focus()
      }

      const fullCode = newCodes.join('')
      if (fullCode.length === count) {
        onFullCode?.(fullCode)
      }
    }
  }

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace') {
      if (codes[index] === '') {
        if (index > 0) {
          refs[index - 1]!.current!.focus()
        }
      } else {
        onChangeCode('', index)
        if (index > 0) {
          refs[index - 1]!.current!.focus()
        }
      }
    }
  }

  const handleKeyPressFromKeyPad = (key: string) => {
    const nextEmptyIndex = codes.findIndex(code => code === '')

    if (key === '←') {
      const filledIndex =
        codes.length -
        1 -
        codes
          .slice()
          .reverse()
          .findIndex(code => code !== '')

      if (filledIndex < count) {
        onChangeCode('', filledIndex)
        refs[filledIndex]!.current!.focus()
      }
    } else if (nextEmptyIndex !== -1) {
      onChangeCode(key, nextEmptyIndex)
    }
  }

  return (
    <View className={`flex flex-col ${containerClassName}`}>
      <View className="flex flex-row justify-center gap-md">
        {codes?.map((code, index) => (
          <TextInput
            key={index}
            secureTextEntry={secureEntry}
            autoComplete="one-time-code"
            enterKeyHint="next"
            className={`text-lg-head h-[56px] w-[43px] px-md py-1 text-center rounded-md focus:bg-light-optiblueA3 ${
              isError
                ? 'text-light-type-error dark:text-dark-type-error bg-light-background-error-light dark:bg-dark-background-error-light'
                : 'text-light-type-gray dark:text-dark-type-gray bg-light-surface-gray dark:bg-dark-surface-gray'
            }`}
            inputMode="numeric"
            onChangeText={(text: string) => onChangeCode(text, index)}
            value={code}
            maxLength={index === 0 ? codes.length : 1}
            ref={refs[index]}
            onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(key, index)}
          />
        ))}
      </View>
      <KeyPad
        type={KeyPadType}
        textLength={count}
        onKeyPress={handleKeyPressFromKeyPad}
        onDone={onFullCode}
      />
    </View>
  )
}

export default CodeInput
