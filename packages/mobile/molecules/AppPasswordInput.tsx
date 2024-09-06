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


const AppPasswordInput: React.FC<AppInputProps> =
    ({
        onBlur,
        FloatingLabel = true,
        onFocus,
        error,
        multiline,
        type, label, numberOfLines, onChangeText: onChangeTextProp, value = '', ...props }) => {
        const textInputRef = React.useRef<TextInput>(null);
        const [values, setValues] = React.useState<string>('');
        const [focused, setFocused] = React.useState<boolean>(false);
        const [inputValue, setInputValue] = React.useState<string>(value);
        const [passwordVisible, setIsPasswordVisible] = React.useState<boolean>()
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
        // handel toogle password visibility
        const togglePasswordVisibility = () =>
            setIsPasswordVisible(prevState => !prevState);

        // handle Clear Input
        const handleClear = () => {
            setInputValue('');
        };


        const getBorderStyle = () => {
            if (focused) {
                return !error
                    ? 'border-b-2 border-light-edge-error-strong rounded-t-md' // show red bottom border when the input isn't valued
                    : 'border-b-2 border-light-edge-accent-strong rounded-t-md'; // show blue bottom border when the input is valid 
            }
            return !error
                ? `border-2 border-light-edge-error-strong rounded-md` // show red border when the input isn't valued and the field isn't in a focused state
                : 'border-0 border-transparent rounded-md'; // defaulting to rounded input when there's neither a focused state or error state on the input field
        };

        // handle Password Icon
        const rednerPasswordIcon = () => (
            <TouchableOpacity onPress={togglePasswordVisibility} className='justify-center pl-2'>
                <RemixIcon name={passwordVisible ? 'eye-close-line' : 'eye-line'} size={20} color={colors.dark['white-to-dark']} />
            </TouchableOpacity>
        )

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
                        className={`px-sm items-center w-full flex-row bg-light-surface-gray h-[56px] ${getBorderStyle()}`}
                    >
                        <View
                            className="flex-1 px-xs">
                            {FloatingLabel && (
                                <Animated.Text style={[floatLabelStyle]} className="gap-xs color-dark-gray1 text-xs-body" allowFontScaling={false}>
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
                                secureTextEntry={passwordVisible}
                                className='text-sm-head text-light-type-gray'
                            />
                        </View>

                        {inputValue.length > 0 && (
                            <TouchableOpacity onPress={handleClear} className='justify-center pl-2 px-sm'>
                                <RemixIcon name="close-circle-fill" size={20} color={'#60646C'} />
                            </TouchableOpacity>
                        )}
                        {rednerPasswordIcon()}
                    </View>
                </TouchableWithoutFeedback>
                {!error &&
                    (typeof error === 'string' ? (
                        <AppText
                            size={2}
                            color={"text-light-edge-error-strong"}
                            weight={"regular"}
                            align={"left"}
                            className={"text-xs-title my-sm"}>
                            {error}
                        </AppText>
                    ) : undefined)
                }
            </View>
        )
    }
export default AppPasswordInput;