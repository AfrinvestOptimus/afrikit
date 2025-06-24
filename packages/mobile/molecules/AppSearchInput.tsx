/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import colors from 'afrikit-shared/dist/colors'
import { useColorScheme } from 'nativewind'
import React, { useCallback } from 'react'
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
import { AppInputHandle } from 'types/molecules'
import { AppInputProps } from '../types/atoms'

interface AppSearchInputProps extends AppInputProps {
  defaultValue?: string
}

const AppSearchInput = React.forwardRef<AppInputHandle, AppSearchInputProps>(
  (
    {
      onBlur,
      floatingLabel = true,
      onFocus,
      label,
      onChangeText: onChangeTextProp,
      onClear,
      value = '',
      defaultValue = '',
      ...props
    },
    ref,
  ) => {
    const textInputRef = React.useRef<TextInput>(null)
    const { colorScheme } = useColorScheme()
    const [values, setValues] = React.useState<string>('')
    const [focused, setFocused] = React.useState<boolean>(false)

    const initialValue = value !== undefined ? value : defaultValue

    const [inputValue, setInputValue] = React.useState<string>(initialValue)
    const animatedIsFocused = React.useRef(new Animated.Value(value ? 1 : 0)).current

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
        setValues(text)
        _text.value = text
      },
      [_text],
    )

    // handle input not focused state
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(e)
      setFocused(false)
    }

    // handle focus state for input field
    const handleFocus = useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
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

    // handle Clear Input
    const handleClear = React.useCallback(() => {
      onChangeTextProp?.('')
      setInputValue('')
      onClear?.()
    }, [])

    // handle search icon
    const renderSearchIcon = () => (
      <TouchableOpacity className="justify-center align-middle px-xs">
        <RemixIcon
          name={'search-line'}
          size={20}
          color={colors[isDarkMode ? 'dark' : 'light'].gray10}
        />
      </TouchableOpacity>
    )

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            textInputRef.current?.focus()
          }}>
          <View
            className={`border-3 border-spacing-2xl border-dark-crimson10 px-md items-center w-full flex-row bg-light-surface-gray dark:bg-dark-surface-gray h-[45px] rounded-full`}>
            {renderSearchIcon()}
            <View className="flex-1 px-xs">
              <TextInput
                {...addedProps}
                ref={textInputRef}
                allowFontScaling={false}
                hitSlop={{ top: 10, bottom: 10, left: 40, right: 40 }}
                returnKeyType="done"
                autoFocus={focused}
                value={inputValue}
                placeholder="Search"
                className="text-sm-head text-light-type-gray dark:text-dark-type-gray"
              />
            </View>

            {inputValue.length > 0 && (
              <TouchableOpacity onPress={handleClear} className="justify-center pl-2 px-sm">
                <RemixIcon
                  name="close-circle-fill"
                  size={20}
                  color={colors[isDarkMode ? 'dark' : 'light'].gray10}
                />
              </TouchableOpacity>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  },
)
export default AppSearchInput
