/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useColorScheme } from 'nativewind'
import * as React from 'react'
import {
  Animated,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import RemixIcon from 'react-native-remix-icon'
import colors from '../../shared/colors'
import { AppInputProps } from '../types/atoms'
import { AppInputBlur } from '../utilities/validation'
import AppHintText from './AppHintText'

export type AuthInputProps = {
  count: number
  isError?: boolean
  errorMessage?: string
  onValueChange?: (value: string) => void
  isLoading?: boolean
  keypad?: 'Custom' | 'Native'
}

const AuthInput: FC<AuthInputProps> = ({
  count,
  isError,
  errorMessage,
  onValueChange,
  isLoading,
  keypad,
}) => {
  const [value, setValue] = useState('')
  const [codeKeys, setCodeKeys] = useState<string[] | undefined>(undefined)

  const AppInput: React.FC<AppInputProps> = ({
    onBlur,
    FloatingLabel = true,
    onFocus,
    error,
    multiline,
    type,
    label,
    numberOfLines,
    onChangeText: onChangeTextProp,
    value = '',
    containerStyle,
    ...props
  }) => {
    const textInputRef = React.useRef<TextInput>(null)
    const [localValue, setLocalValue] = React.useState<string>('')
    const [focused, setFocused] = React.useState<boolean>(false)
    const [inputValue, setInputValue] = React.useState<string>(value)
    const animatedIsFocused = React.useRef(new Animated.Value(value ? 1 : 0)).current
    const { colorScheme } = useColorScheme()
    const isDarkMode = colorScheme === 'dark'

    // handle input field change state at every steo
    const onChangeText = React.useCallback(
      (text: string) => {
        setInputValue(text)
        onChangeTextProp?.(text)
        _text.value = text
      },
      [_text],
    )

    // store init value
    const _text = useSharedValue(value)

    // handle input field change state at every steo
    const onChangeText = React.useCallback(
      (text: string) => {
        setInputValue(text)
        onChangeTextProp?.(text)
        _text.value = text
      },
      [_text],
    )

    // handle input not focused state
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (type) {
        AppInputBlur(localValue, onChangeText, false)
      }
      onBlur?.(e)
      setFocused(false)
    }

    // handle focus state for input field
    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(e)
      setFocused(true)
    }

    // collate all props
    const addedProps = {
      ...props,
      onChangeText: onChangeText,
      onBlur: handleBlur,
      onFocus: handleFocus,
      placeholder: FloatingLabel ? undefined : props.placeholder,
    }

    const floatLabelStyle = {
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
      }),
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [12, 11],
      }),
      lineHeight: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [12, 20],
      }),
    }
    // handel clear input field
    const handleClear = () => {
      setInputValue('')
    }

    const getBorderStyle = () => {
      if (focused) {
        return error
          ? 'border-b-2 border-light-red9 dark:border-dark-red9 rounded-t-md' // show red bottom border when the input isn't valued
          : 'border-b-2 border-light-blue10 dark:border-dark-blue10 rounded-t-md' // show blue bottom border when the input is valid
      }
      return error
        ? 'border-2 border-light-red9 dark:border-dark-red9 rounded-md' // show red border when the input isn't valued and the field isn't in a focused state
        : 'border-0 border-transparent rounded-md' // defaulting to rounded input when there's neither a focused state or error state on the input field
    }

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            textInputRef.current?.focus()
            //TODO: to be motified
            // props?.onPress?.();
          }}>
          <View
            className={`px-sm items-center w-full flex-row bg-light-surface-gray dark:bg-dark-surface-gray h-[56px] ${getBorderStyle()} ${containerStyle}`}>
            <View className="flex-1 px-xs ">
              {FloatingLabel && (
                <Animated.Text
                  style={[floatLabelStyle]}
                  className="gap-xs  dark:text-dark-type-gray-muted text-light-type-gray-muted text-sm-title"
                  allowFontScaling={false}>
                  {label}
                </Animated.Text>
              )}
              <TextInput
                {...addedProps}
                ref={textInputRef}
                allowFontScaling={false}
                hitSlop={{ top: 10, bottom: 10, left: 40, right: 40 }}
                returnKeyType="done"
                autoFocus={focused}
                numberOfLines={numberOfLines}
                value={inputValue}
                selectionColor="text-light-type-gray"
                className="text-light-type-gray dark:text-dark-type-gray"
              />
            </View>
            {inputValue.length > 0 && (
              <TouchableOpacity onPress={handleClear} className="justify-center pl-2">
                <RemixIcon
                  name="close-circle-fill"
                  size={24}
                  color={colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
                />
              </TouchableOpacity>
            )}
          </View>
        </TouchableWithoutFeedback>
        {!!error &&
          (typeof error === 'string' ? (
            <AppHintText type="error" text={error} className="py-xs" />
          ) : undefined)}
      </View>
    )
  }

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
          <View className="animate-spin w-[40] h-[40] border-4 rounded-full border-b-[#BDC8FF17] bg-gra">
            <Text>isLoading</Text>
          </View>
        </>
      ) : (
        <>
          <TextInput className="hidden" onChangeText={onChange} ref={KeyboardRef} />
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
          {isError && (
            <Text className="text-light-type-error dark:text-dark-type-error text-body2 font-semibold mt-md">
              {errorMessage}
            </Text>
          )}
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
  pinBackgroundFilled: 'bg-light-background-accent-base bg-dark-background-accent-base',
  pinBackgroundError: 'bg-light-type-error bg-dark-type-error',
})
