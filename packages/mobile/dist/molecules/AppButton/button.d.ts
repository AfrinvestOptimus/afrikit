export type ButtonSize = 1 | 2 | 3 | 4;
export type ButtonVariant = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
export type ButtonColor = 'accent' | 'neutral' | 'error';
export type ButtonState = 'default' | 'active' | 'disabled';
export declare const buttonSizes: Record<ButtonSize, string>;
export declare const textSizes: Record<ButtonSize, string>;
export declare const buttonColors: Record<ButtonColor, Record<ButtonVariant, string>>;
export declare const highContrastButtonColors: Record<ButtonColor, Record<ButtonVariant, string>>;
export declare const textColors: Record<ButtonColor, Record<ButtonVariant, string>>;
export declare const highContrastTextColors: Record<ButtonColor, Record<ButtonVariant, string>>;
export declare const disabledColors: Record<ButtonVariant, string>;
export declare const activeStateColors: Record<ButtonVariant, string>;
export declare const buttonStates: Record<ButtonState, string | Record<ButtonVariant, string>>;
export declare const textStates: Record<ButtonState, string>;
//# sourceMappingURL=button.d.ts.map