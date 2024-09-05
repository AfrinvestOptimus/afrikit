import { useColorScheme } from 'nativewind'
import { FC, useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import { TextInput, View } from 'react-native'

interface OTPInputProps {
  count?: number
  secureEntry?: boolean
  isError?: boolean
  onFullCode?: (fullCode: string) => void
  keypad?: 'Custom' | 'Native'
}

const CodeInput: FC<OTPInputProps> = ({ count = 4, secureEntry, isError, onFullCode, keypad }) => {
  const [codes, setCodes] = useState<string[] | undefined>(undefined)
  const { colorScheme } = useColorScheme()

  useMemo(() => {
    setCodes(Array(count).fill(''))
  }, [count])

  useEffect(() => {
    if (keypad === 'Native') {
      refs[0]?.current?.focus()
    }
  }, [keypad])

  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      const newCodes = text.split('')
      setCodes(newCodes)
      refs[count - 1]!.current?.focus()
      return
    }
    const newCodes = [...codes!]
    newCodes[index] = text
    setCodes(newCodes)
    if (text !== '' && index < count - 1) {
      refs[index + 1]!.current?.focus()
    }

    const fullCode = newCodes?.join('')
    if (fullCode?.length === String(count)?.length) {
      onFullCode?.(fullCode)
    }
  }

  return (
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
          onKeyPress={({ nativeEvent: { key } }) => {
            if (key === 'Backspace' && index > 0) {
              onChangeCode('', index - 1)
              refs[index - 1]!.current!.focus()
            }
          }}
        />
      ))}
    </View>
  )
}

export default CodeInput
