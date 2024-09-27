import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { ButtonColor, ButtonSize, ButtonState, ButtonVariant } from './button';
export interface AppButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    highContrast?: boolean;
    state?: ButtonState;
    iconStart?: boolean;
    iconEnd?: boolean;
    iconName?: string;
    className?: string;
    text: string;
    onPress?: (event: GestureResponderEvent) => void;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare const AppButton: React.FC<AppButtonProps>;
export default AppButton;
//# sourceMappingURL=index.d.ts.map