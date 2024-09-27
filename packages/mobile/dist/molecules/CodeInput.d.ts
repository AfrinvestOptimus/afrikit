import { FC } from 'react';
interface OTPInputProps {
    count?: number;
    secureEntry?: boolean;
    isError?: boolean;
    onFullCode?: (fullCode: string) => void;
    keypad?: 'Custom' | 'Native';
}
declare const CodeInput: FC<OTPInputProps>;
export default CodeInput;
//# sourceMappingURL=CodeInput.d.ts.map