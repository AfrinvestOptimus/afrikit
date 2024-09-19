/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Animated, NativeSyntheticEvent, Pressable, TextInput, TextInputFocusEventData, TouchableWithoutFeedback, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import RemixIcon from 'react-native-remix-icon';
import colors from 'afrikit-shared/dist/colors';
import AppText from '../atoms/AppText';
import { AppPhoneInputProps } from '../types/atoms';
import { AppInputBlur } from '../utilities/validation';
import AppHintText from './AppHintText';

const AppPhoneInput: React.FC<AppPhoneInputProps> =
    ({
        onBlur,
        FloatingLabel = true,
        onFocus,
        error,
        multiline,
        type,
        label,
        numberOfLines,
        onChangeText: onChangeTextProp,
        onCountryCodeChange: defaultCountryChange,
        value = '',
        ...props
    }) => {
        const textInputRef = React.useRef<TextInput>(null);
        const [localValue, setLocalValue] = React.useState<string>('');
        const [focused, setFocused] = React.useState<boolean>(false);
        const [inputValue, setInputValue] = React.useState<string>(value);
        const animatedIsFocused = React.useRef(new Animated.Value(value ? 1 : 0)).current;
        const [selectedCountry, setSelectedCountry] = React.useState({
            code: '+234',
            text: 'Nigeria',
            flag: '🇳🇬',
        });

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

        const getBorderStyle = () => {
            if (focused) {
                return error
                    ? 'border-b-2 border-light-red9 dark:border-dark-red9 rounded-tr-sm' // show red bottom border when the input isn't valued
                    : 'border-b-2 border-light-blue10 dark:border-dark-blue10 rounded-tr-sm'; // show blue bottom border when the input is valid 
            }
            return error
                ? 'border-2 border-light-red9 dark:border-dark-red9 rounded-r-md' // show red border when the input isn't valued and the field isn't in a focused state
                : 'border-0 border-transparent rounded-r-md'; // defaulting to rounded input when there's neither a focused state or error state on the input field
        };

        return (
            <View>
                <View className={'flex-row px-md'}>
                    <Pressable
                        className={`px-sm mr-sm items-center flex-row bg-light-surface-gray h-[56px] rounded-l-md w-[101px]`}>
                        <View className='flex-row justify-between items-center'>
                            <AppText
                                className="w-[22px] rounded-full"
                            >
                                {selectedCountry.flag}
                            </AppText>

                            <AppText className='text-light-type-gray-default px-xs' size={2} color='gray'>
                                {selectedCountry.code}
                            </AppText>
                            <RemixIcon name='arrow-down-s-fill' size={20} color={colors.dark['white-to-dark']} />
                        </View>
                    </Pressable>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            textInputRef.current?.focus();
                        }}
                    >
                        <View
                            className={`px-sm items-center w-[255px] flex-row bg-light-surface-gray h-[56px] ${getBorderStyle()}`}
                        >
                            <View
                                className="flex-1">
                                {FloatingLabel && (
                                    <Animated.Text style={[floatLabelStyle]} className="gap-xs dark:text-dark-type-gray-muted text-light-type-gray-muted" allowFontScaling={false}>
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
                                    className='text-light-type-gray-muted dark:text-dark-type-gray-muted'
                                />
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {!!error &&
                    (typeof error === "string" ? (
                        <AppHintText
                            type="error"
                            text={error}
                            className='py-xs px-lg'
                        />
                    ) : undefined)
                }
            </View>
        )
    };

export default AppPhoneInput
