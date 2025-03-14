/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { AppText } from '../atoms'
import Loader from '../atoms/Loader'
import classNames from '../utilities/classnames'
import AppHintText from './AppHintText'

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
  onClear?: () => void
}

const AuthInput: FC<AuthInputProps> = ({
  count,
  isError,
  errorMessage,
  onValueChange,
  isLoading,
  customValue,
  keypad = 'Native',
  actionLabel,
  onActionPress,
  onClear,
}) => {
  const [value, setValue] = useState('')
  const [codeKeys, setCodeKeys] = useState<string[] | undefined>(undefined)

  const KeyboardRef = useRef<TextInput>(null)

  useEffect(() => {
    if (customValue !== undefined) {
      onChange(customValue)
    }
  }, [customValue])

  useEffect(() => {
    if (keypad === 'Native') {
      KeyboardRef?.current?.focus()
    }
  }, [keypad])

  useMemo(() => {
    setCodeKeys(Array(count).fill(''))
  }, [count])

  const onChange = (code: string) => {
    const updateEmptyIndex = codeKeys?.map(function (num, index) {
      if (num === '' && index === code.length - 1) {
        return code.length > 1 ? code.slice(-1) : code
      }
      return code.length > index ? num : ''
    })

    setValue(code)
    setCodeKeys(updateEmptyIndex)
    onValueChange?.(updateEmptyIndex?.join('') || '')
  }

  const clearInput = () => {
    setValue('')
    setCodeKeys(Array(count).fill(''))
    onValueChange?.('')
    onClear?.()

    if (keypad === 'Native') {
      KeyboardRef?.current?.focus()
    }
  }

  /* eslint-disable */
  useEffect(() => {
    if (onClear) {
      const originalOnClear = onClear
      ;(onClear as any).clear = clearInput
    }
  }, [onClear])
  /* eslint-disable */

  const styles = getDesignClasses()

  const handlePress = () => {
    if (keypad === 'Native') {
      KeyboardRef?.current?.focus()
    }
  }

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <TextInput className="hidden" onChangeText={onChange} ref={KeyboardRef} value={value} />
          <Pressable className="flex justify-center" onPress={handlePress}>
            <View
              className={`flex items-center justify-between w-fit h-[40] flex-row p-lg rounded-xs-max ${isError ? `${styles.backgroundError}` : `${styles.backgroundDefault}`}`}>
              {codeKeys?.map((row, rowIndex) => (
                <View
                  key={`${rowIndex + 1}`}
                  className={classNames(
                    `w-sm h-sm rounded-sm-max ${rowIndex == codeKeys.length - 1 ? 'mr-none' : 'mr-md'}`,
                    `${row !== '' ? `${styles.pinBackgroundFilled}` : isError ? `${styles.pinBackgroundError}` : `${styles.pinBackgroundDefault}`}`,
                  )}></View>
              ))}
            </View>
          </Pressable>
          {isError ? (
            <View className="flex-row items-center gap-sm justify-center">
              <AppHintText text={errorMessage as string} type="error" />
              <View className="w-xs h-xs rounded-full bg-light-background-neutral-transparent-pressed dark:bg-dark-background-neutral-transparent-pressed" />
              <AppText size={2} weight="semibold" color="accent" onPress={onActionPress}>
                {actionLabel}
              </AppText>
            </View>
          ) : null}
        </>
      )}
    </>
  )
}

export default AuthInput

const getDesignClasses = () => ({
  backgroundDefault: 'bg-light-surface-gray dark:bg-dark-surface-gray',
  backgroundError: 'bg-light-background-error-light dark:bg-dark-background-error-light',
  pinBackgroundDefault: 'bg-light-neutral8 dark:bg-dark-neutral8',
  pinBackgroundFilled: 'bg-light-background-accent-base dark:bg-dark-background-accent-base',
  pinBackgroundError: 'bg-light-type-error dark:bg-dark-type-error',
})
