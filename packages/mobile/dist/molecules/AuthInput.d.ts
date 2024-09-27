import { FC } from 'react';
export type AuthInputProps = {
    count: number;
    isError?: boolean;
    errorMessage?: string;
    onValueChange?: (value: string) => void;
    isLoading?: boolean;
    keypad?: 'Custom' | 'Native';
};
declare const AuthInput: FC<AuthInputProps>;
export default AuthInput;
//# sourceMappingURL=AuthInput.d.ts.map