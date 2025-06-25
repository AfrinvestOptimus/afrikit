import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Animated,
  NativeSyntheticEvent,
  Platform,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import RemixIcon from 'react-native-remix-icon'
import { AppInputProps } from '../types/atoms'
import AppHintText from './AppHintText'

export interface AppInputHandle {
  setValue: (value: string) => void
  clear: () => void
}

const AppPasswordInput = React.forwardRef<AppInputHandle, AppInputProps>(
  (
    {
      onBlur,
      floatingLabel = true,
      onFocus,
      error,
      multiline,
      className,
      label,
      numberOfLines,
      onChangeText: onChangeTextProp,
      value = '',
      hintText,
      ...props
    },
    ref,
  ) => {
    const textInputRef = useRef<TextInput>(null)
    const [values, setValues] = useState<string>('')
    const [focused, setFocused] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(value)
    const [passwordVisible, setIsPasswordVisible] = useState<boolean>(true)
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current
    const { colorScheme } = useColorScheme()
    const isDarkMode = colorScheme === 'dark'

    React.useImperativeHandle(ref, () => ({
      setValue: (newValue: string) => {
        setInputValue(newValue)
        onChangeTextProp?.(newValue)
      },
      clear: () => {
        setInputValue('')
        onChangeTextProp?.('')
      },
      focus: () => {
        textInputRef.current?.focus()
      },
      blur: () => {
        textInputRef.current?.blur()
      },
      isFocused: () => textInputRef.current?.isFocused() || false,
      getValue: () => inputValue,
    }))

    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: focused || inputValue ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start()
    }, [focused, inputValue])

    // Store initial value
    const _text = useSharedValue(value)

    // handle input field change state at every steo
    const onChangeText = useCallback(
      (text: string) => {
        setInputValue(text)
        onChangeTextProp?.(text)
        setValues(text)
        _text.value = text
      },
      [_text, onChangeTextProp],
    )

    // handle input not focused state
    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(e)
        setFocused(false)
      },
      [onBlur],
    )

    // Handle focus state
    const handleFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocus?.(e)
        setFocused(true)
      },
      [onFocus],
    )

    const floatLabelStyle = {
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        // outputRange: [10, 0],
        outputRange: [Platform.select({ ios: 10, android: 56 * 0.3, default: 56 * 0.2 }), 0],
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
    // handle toggle password visibility
    const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev)

    const handleClear = useCallback(() => {
      setInputValue('')
      onChangeText('')
    }, [onChangeText])

    const getBorderStyle = useCallback(() => {
      if (focused) {
        return error
          ? 'border-b-2 border-light-edge-error-strong dark:border-dark-edge-error-strong rounded-t-md'
          : 'border-b-2 border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-t-md'
      }
      return error
        ? 'border-2 border-light-edge-error-strong dark:border-dark-edge-error-strong rounded-md'
        : 'border-0 border-transparent rounded-md'
    }, [error, focused])

    const renderPasswordIcon = useCallback(
      () => (
        <TouchableOpacity onPress={togglePasswordVisibility} className="justify-center pl-2">
          <RemixIcon
            name={passwordVisible ? 'eye-close-line' : 'eye-line'}
            size={20}
            color={colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
          />
        </TouchableOpacity>
      ),
      [passwordVisible, isDarkMode],
    )

    return (
      <View className={className}>
        <TouchableWithoutFeedback onPress={() => textInputRef.current?.focus()}>
          <View
            className={`px-sm items-center w-full flex-row bg-light-surface-gray dark:bg-dark-surface-gray h-[56px] ${getBorderStyle()}`}>
            <View className="flex-1 px-xs ">
              {floatingLabel && (
                <Animated.Text
                  style={[floatLabelStyle]}
                  className=" text-sm-title dark:text-dark-type-gray-muted text-light-type-gray-muted"
                  allowFontScaling={false}>
                  {label}
                </Animated.Text>
              )}
              <TextInput
                {...props}
                ref={textInputRef}
                onChangeText={onChangeText}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={inputValue}
                secureTextEntry={passwordVisible}
                className="text-sm-head text-light-type-gray dark:text-dark-type-gray-muted"
                returnKeyType="done"
                allowFontScaling={false}
                hitSlop={{ top: 10, bottom: 10, left: 40, right: 40 }}
                autoFocus={focused}
                numberOfLines={numberOfLines}
                placeholder={floatingLabel ? undefined : props.placeholder}
              />
            </View>

            {inputValue.length > 0 && (
              <TouchableOpacity onPress={handleClear} className="justify-center pl-2 px-sm">
                <RemixIcon
                  name="close-circle-fill"
                  size={20}
                  color={colors[isDarkMode ? 'dark' : 'light'].type.gray.DEFAULT}
                />
              </TouchableOpacity>
            )}
            {renderPasswordIcon()}
          </View>
        </TouchableWithoutFeedback>
        {!!error && typeof error === 'string' && (
          <AppHintText type="error" text={error} className="py-xs" />
        )}
        {hintText && (
          <AppHintText text={hintText} className="mt-sm" accessibilityHintText={hintText} />
        )}
      </View>
    )
  },
)

export default AppPasswordInput
