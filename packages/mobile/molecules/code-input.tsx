import { useMemo, useRef, useState, type RefObject } from "react";
import { TextInput, View } from "react-native";

interface OTPInputProps {
  count: number;
  secureEntry: boolean
  errorMessages: string[] | undefined;
  onFullCode: (code: string) => void;
}

const  CodeInput = ({
    count = 6,
    secureEntry,
    errorMessages,
    onFullCode
}: OTPInputProps
) => {

    const [codes, setCodes] = useState<string[] | undefined>(undefined);

    useMemo(() => {
        setCodes(Array(count).fill(""))
    },[count])

    const refs: RefObject<TextInput>[] = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];


    const onChangeCode = (text: string, index: number) => {
        if (text.length > 1) {
            const newCodes = text.split("");
            setCodes(newCodes);
            refs[count - 1]!.current?.focus();
            return;
        }
        const newCodes = [...codes!];
        newCodes[index] = text;
        setCodes(newCodes);
        if (text !== "" && index < count - 1) {
            refs[index + 1]!.current?.focus();
        }

        const fullCode = newCodes?.join('')
        if (fullCode?.length === String(count)?.length) {
            onFullCode(fullCode);
        }
    };

    return (
        <View className="flex flex-row justify-center gap-md">
            {codes?.map((code, index) => (
            <TextInput
                key={index}
                secureTextEntry={secureEntry}
                autoComplete="one-time-code"
                enterKeyHint="next"
                className={`text-md h-[56px] w-[43px] rounded-md bg-[#00003B0D] text-black px-md py-1 text-center focus:bg-light-optiblueA3 ${
                errorMessages !== undefined
                    ? "border border-light-error12 text-light-error11"
                : "border-0"
                }`}
                inputMode="numeric"
                onChangeText={(text: string) => onChangeCode(text, index)}
                value={code}
                maxLength={index === 0 ? codes.length : 1}
                ref={refs[index]}
                onKeyPress={({ nativeEvent: { key } }) => {
                if (key === "Backspace" && index > 0) {
                    onChangeCode("", index - 1);
                    refs[index - 1]!.current!.focus();
                }
                }}
            />
            ))}
        </View>
    );
}

export default CodeInput;
