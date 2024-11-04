/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useColorScheme } from 'nativewind'
import { FC, useEffect, useRef, useState, type RefObject } from 'react'
import { TextInput, View } from 'react-native'
// import KeyPad from './keypad'

export interface OTPInputProps {
  count?: number
  secureEntry?: boolean
  isError?: boolean
  onFullCode?: (fullCode: string) => void
  keypad?: 'Custom' | 'Native'
  keyPadType: 'decimal' | 'nondecimal' | 'biometric'
  containerClassName?: string
  onKeyPress?: (fullCode: string) => void
  codeValue?: string
}

const CodeInput: FC<OTPInputProps> = ({
  count = 4,
  secureEntry,
  isError,
  onFullCode,
  // keypad,
  // keyPadType = 'decimal',
  containerClassName,
  onKeyPress,
  codeValue = '',
}) => {
  const [codes, setCodes] = useState<string[]>(Array(count).fill(''))
  const refs: RefObject<TextInput>[] = Array.from({ length: count }, () => useRef<TextInput>(null))
  const { colorScheme } = useColorScheme()

  useEffect(() => {
    refs[0]?.current?.focus()
  }, [])

  useEffect(() => {
    const updatedCodes = codeValue.split('').slice(0, count)
    setCodes(prevCodes => {
      const newCodes = Array(count).fill('')
      updatedCodes.forEach((char, index) => {
        newCodes[index] = char
      })
      return newCodes
    })
  }, [codeValue, count])

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
            inputMode="none"
            onChangeText={(text: string) => onChangeCode(text, index)}
            value={code}
            maxLength={index === 0 ? codes.length : 1}
            ref={refs[index]}
            editable={false}
            onKeyPress={({ nativeEvent: { key } }) => onKeyPress?.(key)}
          />
        ))}
      </View>
    </View>
  )
}

export default CodeInput
