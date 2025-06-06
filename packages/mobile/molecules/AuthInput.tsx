/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { AppText } from '../atoms'
import Loader from '../atoms/Loader'
import AppHintText from './AppHintText'

export type AuthInputRef = {
  clearInput: () => void
  focus: () => void
}

export type KeyboardType = 'Custom' | 'Native'
export type AuthInputProps = {
  count: number
  isError?: boolean
  errorMessage?: string
  onValueChange?: (value: string) => void
  onActionPress?: () => void
  isLoading?: boolean
  customValue?: string
  keypad?: KeyboardType
  actionLabel?: string
}

const styles = {
  backgroundDefault: 'bg-light-surface-gray dark:bg-dark-surface-gray',
  backgroundError: 'bg-light-background-error-light dark:bg-dark-background-error-light',
}

const AuthInput = memo(
  forwardRef<AuthInputRef, AuthInputProps>(
    (
      {
        count,
        isError,
        errorMessage,
        onValueChange,
        isLoading,
        customValue,
        keypad = 'Native',
        actionLabel,
        onActionPress,
      },
      ref,
    ) => {
      const [value, setValue] = useState('')
      const [codeKeys, setCodeKeys] = useState<string[]>([])
      const { colorScheme } = useColorScheme()
      const isDarkMode = colorScheme === 'dark'

      const KeyboardRef = useRef<TextInput>(null)

      const currentThemeColors = useMemo(() => {
        return colors[isDarkMode ? 'dark' : 'light']
      }, [isDarkMode])

      useEffect(() => {
        setCodeKeys(Array(count).fill(''))
      }, [count])

      useEffect(() => {
        if (customValue !== undefined && customValue !== value) {
          setValue(customValue)
          const updatedCodeKeys = Array(count).fill('')
          customValue.split('').forEach((char, index) => {
            if (index < count) {
              updatedCodeKeys[index] = char
            }
          })
          setCodeKeys(updatedCodeKeys)
          onValueChange?.(customValue)
        } else if (customValue === '' && value !== '') {
          setValue('')
          setCodeKeys(Array(count).fill(''))
          onValueChange?.('')
        }
      }, [customValue, count, value, onValueChange])

      useEffect(() => {
        if (keypad === 'Native') {
          KeyboardRef?.current?.focus()
        }
      }, [keypad])

      const onChange = useCallback(
        (code: string) => {
          const currentCodeKeys = codeKeys || Array(count).fill('')

          const updateEmptyIndex = currentCodeKeys.map((num, index) => {
            if (num === '' && index === code.length - 1) {
              return code.length > 1 ? code.slice(-1) : code
            }
            return code.length > index ? code[index] : ''
          })

          setValue(code)
          setCodeKeys(updateEmptyIndex)
          onValueChange?.(updateEmptyIndex.join('') || '')
        },
        [count, codeKeys, onValueChange],
      )

      const clearInput = useCallback(() => {
        setValue('')
        setCodeKeys(Array(count).fill(''))
        onValueChange?.('')
        if (keypad === 'Native') {
          KeyboardRef?.current?.focus()
        }
      }, [count, keypad, onValueChange])

      useImperativeHandle(
        ref,
        () => ({
          clearInput,
          focus: () => KeyboardRef?.current?.focus(),
        }),
        [clearInput],
      )

      const handlePress = useCallback(() => {
        if (keypad === 'Native') {
          KeyboardRef?.current?.focus()
        }
      }, [keypad])

      return (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <View className="w-full items-center">
              <TextInput
                className="hidden"
                onChangeText={onChange}
                ref={KeyboardRef}
                value={value}
                keyboardType="number-pad"
                maxLength={count}
              />
              <Pressable className="flex justify-center" onPress={handlePress}>
                <View
                  className={`flex items-center justify-between max-w-[160px] w-auto h-[40] flex-row p-lg rounded-xs-max gap-2xl ${isError ? `${styles.backgroundError}` : `${styles.backgroundDefault}`}`}>
                  {codeKeys?.map((row, rowIndex) => {
                    let pinBackgroundColor
                    if (row !== '' && !isError) {
                      pinBackgroundColor = currentThemeColors.background.accent.base.DEFAULT
                    } else if (isError) {
                      pinBackgroundColor = currentThemeColors.type.error.DEFAULT
                    } else {
                      // @ts-expect-error - Access to dynamically named property from colors theme
                      pinBackgroundColor = currentThemeColors.neutral8
                    }

                    return (
                      <View
                        key={`${rowIndex + 1}`}
                        style={{
                          backgroundColor: pinBackgroundColor,
                        }}
                        className="w-sm h-sm rounded-sm-max"
                      />
                    )
                  })}
                </View>
              </Pressable>
              {isError ? (
                <View className="flex-row items-center justify-center mt-sm px-lg gap-sm w-[80%]">
                  <View>
                    <AppHintText
                      text={errorMessage as string}
                      type="error"
                      className="text-center"
                    />
                  </View>
                  {actionLabel && (
                    <View className="flex-row items-center gap-sm">
                      <View className="w-xs h-xs rounded-full bg-light-background-neutral-transparent-pressed dark:bg-dark-background-neutral-transparent-pressed" />
                      <AppText size={2} weight="semibold" color="accent" onPress={onActionPress}>
                        {actionLabel}
                      </AppText>
                    </View>
                  )}
                </View>
              ) : null}
            </View>
          )}
        </>
      )
    },
  ),
)

export default AuthInput
