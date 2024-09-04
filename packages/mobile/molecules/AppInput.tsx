import * as React from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import RemixIcon from 'react-native-remix-icon';
import colors from '../../shared/colors';
import AppText from '../atoms/AppText';
import { AppInputProps } from '../types/atoms';
import { AppInputBlur } from '../utilities/validation';


const AppInput: React.FC<AppInputProps> =
  ({
    onBlur,
    FloatingLabel = true,
    onFocus,
    error,
    multiline,
    type, label, numberOfLines, onChangeText: onChangeTextProp, value = '', ...props }) => {
    const textInputRef = React.useRef<TextInput>(null);
    const [localValue, setLocalValue] = React.useState<string>('');
    const [focused, setFocused] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>(value);
    const animatedIsFocused = React.useRef(new Animated.Value(value ? 1 : 0)).current;


    React.useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: focused || inputValue ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [focused, animatedIsFocused, inputValue]);

    // store init value 
    const _text = useSharedValue(value);

    // handle input field change state at every steo
    const onChangeText = React.useCallback(
      (text: string) => {
        setInputValue(text);
        onChangeTextProp?.(text);
        _text.value = text;
      },
      [_text]
    );

    // handle input not focused state
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (type) {
        AppInputBlur(localValue, onChangeText, false);
      }
      onBlur?.(e);
      setFocused(false);
    };

    // handle focus state for input field
    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(e);
      setFocused(true);
    };


    // collate all props 
    const addedProps = {
      ...props,
      onChangeText: onChangeText,
      onBlur: handleBlur,
      onFocus: handleFocus,
      placeholder: FloatingLabel ? undefined : props.placeholder,
    };

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
    };
    // handel clear input field
    const handleClear = () => {
      setInputValue('');
    };


    const getBorderStyle = () => {
      if (focused) {
        return !!error
          ? 'border-b-2 border-light-red9 rounded-t-xs' // show red bottom border when the input isn't valued
          : 'border-b-2 border-light-blue10 rounded-t-xs'; // show blue bottom border when the input is valid 
      }
      return !!error
        ? 'border-2 border-light-red9 rounded-xs' // show red border when the input isn't valued and the field isn't in a focused state
        : 'border-0 border-transparent rounded-xs'; // defaulting to rounded input when there's neither a focused state or error state on the input field
    };

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            textInputRef.current?.focus();
            //TODO: to be motified
            // props?.onPress?.();
          }}
        >
          <View
            className={`px-sm items-center w-full flex-row bg-light-surface-gray h-4xl ${getBorderStyle()}`}
          >
            <View
              className="flex-1">
              {FloatingLabel && (
                <Animated.Text style={[floatLabelStyle]} className="gap-xs color-dark-gray1" allowFontScaling={false}>
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
                multiline={multiline}
              />
            </View>
            {inputValue.length > 0 && (
              <TouchableOpacity onPress={handleClear} className='justify-center pl-2'>
                <RemixIcon name="close-circle-fill" size={24} color={colors.dark['white-to-dark']} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableWithoutFeedback>
        {!!error &&
          (typeof error === 'string' ? (
            <AppText
              size={2}
              color={"text-dark-red9"}
              weight={"regular"}
              align={"left"}
              className={"mb-5xl"}>
              {error}
            </AppText>
          ) : undefined)
        }
      </View>
    )
  }
export default AppInput
