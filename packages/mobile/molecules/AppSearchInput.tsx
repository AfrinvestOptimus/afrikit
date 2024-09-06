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
import { AppInputProps } from '../types/atoms';
import { AppInputBlur } from '../utilities/validation';


const AppSearchInput: React.FC<AppInputProps> =
    ({
        onBlur,
        FloatingLabel = true,
        onFocus,
        error,
        type,
        label,
        onChangeText: onChangeTextProp,
        value = '',
        ...props
    }) => {
        const textInputRef = React.useRef<TextInput>(null);
        const [values, setValues] = React.useState<string>('');
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
                setValues(text)
                _text.value = text;
            },
            [_text]
        );

        // handle input not focused state
        const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            if (type) {
                AppInputBlur(values, onChangeText, false);
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

        // handle Clear Input
        const handleClear = () => {
            setInputValue('');
        };

        // handle Password Icon
        const renderSearchIncon = () => (
            <TouchableOpacity className='justify-center align-middle px-xs'>
                <RemixIcon name={'search-line'} size={20} color={colors.dark['white-to-dark']} />
            </TouchableOpacity>
        )

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        textInputRef.current?.focus();
                    }}
                >
                    <View
                        className={`border-3 border-spacing-2xl border-dark-crimson10 px-md items-center w-full flex-row bg-light-surface-gray h-[45px] rounded-full`}
                    >
                        {renderSearchIncon()}
                        <View
                            className="flex-1 px-xs">
                            <TextInput
                                {...addedProps}
                                ref={textInputRef}
                                allowFontScaling={false}
                                hitSlop={{ top: 10, bottom: 10, left: 40, right: 40 }}
                                returnKeyType="done"
                                autoFocus={focused}
                                value={inputValue}
                                placeholder="Search"
                                className='text-sm-head text-light-type-gray'
                            />
                        </View>

                        {inputValue.length > 0 && (
                            <TouchableOpacity onPress={handleClear} className='justify-center pl-2 px-sm'>
                                <RemixIcon name="close-circle-fill" size={20} color={'#60646C'} />
                            </TouchableOpacity>
                        )}
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
export default AppSearchInput;
