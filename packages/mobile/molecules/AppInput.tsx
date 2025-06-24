/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import colors from 'afrikit-shared/dist/colors'
import { AppInputHandle } from 'molecules'
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
import { AppInputProps } from '../types/atoms'
import { AppInputBlur } from '../utilities/validation'
import AppHintText from './AppHintText'

const AppInput = React.forwardRef<AppInputHandle, AppInputProps>(
  (
    {
      onBlur,
      floatingLabel = true,
      onFocus,
      onClear,
      error,
      multiline,
      type,
      label,
      numberOfLines,
      onChangeText: onChangeTextProp,
      value = '',
      hintText = '',
      containerStyle,
      className,
      ...props
    },
    ref,
  ) => {
    const textInputRef = React.useRef<TextInput>(null)
    const [localValue, setLocalValue] = React.useState<string>('')
    const [focused, setFocused] = React.useState<boolean>(false)
    const [inputValue, setInputValue] = React.useState<string>(value || '')
    const animatedIsFocused = React.useRef(new Animated.Value(value ? 1 : 0)).current
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

    React.useEffect(() => {
      if (value !== undefined) {
        setInputValue(value)
      }
    }, [value])

    React.useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: focused || inputValue ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start()
    }, [focused, animatedIsFocused, inputValue])

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
    const handleBlur = React.useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (type) {
        AppInputBlur(localValue, onChangeText, false)
      }
      onBlur?.(e)
      setFocused(false)
    }, [])

    // handle focus state for input field
    const handleFocus = React.useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(e)
      setFocused(true)
    }, [])

    // collate all props
    const addedProps = {
      ...props,
      onChangeText: onChangeText,
      onBlur: handleBlur,
      onFocus: handleFocus,
      placeholder: floatingLabel ? undefined : props.placeholder,
    }

    const floatLabelStyle = {
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [56 * 0.4, 0],
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
    const handleClear = React.useCallback(() => {
      setInputValue('')
      onChangeText('')
      onClear?.()
    }, [onChangeText, onClear])

    const getBorderStyle = React.useCallback(() => {
      if (focused) {
        return error
          ? 'border-b-2 border-light-red9 dark:border-dark-red9 rounded-t-md' // show red bottom border when the input isn't valued
          : 'border-b-2 border-light-blue10 dark:border-dark-blue10 rounded-t-md' // show blue bottom border when the input is valid
      }
      return error
        ? 'border-2 border-light-red9 dark:border-dark-red9 rounded-md' // show red border when the input isn't valued and the field isn't in a focused state
        : 'border-0 border-transparent rounded-md' // defaulting to rounded input when there's neither a focused state or error state on the input field
    }, [focused, error])

    return (
      <View className={className}>
        <TouchableWithoutFeedback
          onPress={() => {
            textInputRef.current?.focus()
            //TODO: to be motified
            // props?.onPress?.();
          }}>
          <View
            className={`px-sm items-center w-full flex-row bg-light-surface-gray dark:bg-dark-surface-gray h-[56px] ${getBorderStyle()} ${containerStyle}`}>
            <View className={`flex-1 px-xs h-[100%] ${focused ? 'justify-evenly' : ''} `}>
              {floatingLabel && (
                <Animated.Text
                  style={[floatLabelStyle]}
                  className="gap-xs dark:text-dark-type-gray-muted text-light-type-gray-muted text-sm-title"
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
        {hintText ? (
          <AppHintText text={hintText} className="mt-sm" accessibilityHintText={hintText} />
        ) : null}
      </View>
    )
  },
)
export default AppInput
