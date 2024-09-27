import React from 'react';
export type KeyPadProps = {
    type: 'decimal' | 'nondecimal' | 'biometric';
    textLength?: number;
    onKeyPress?: (key: string) => void;
    onBiometric?: (key: string) => void;
    onDone?: (value: string) => void;
    onChange?: (value: string) => void;
    containerClassName?: string;
};
declare const KeyPad: React.FC<KeyPadProps>;
export default KeyPad;
//# sourceMappingURL=keypad.d.ts.map