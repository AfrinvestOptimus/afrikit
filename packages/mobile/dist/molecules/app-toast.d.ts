import { Position } from 'react-native-flash-message';
export declare const showErrorMessage: (message?: string) => void;
export declare const showSuccessMessage: (message?: string) => void;
type AppToastMessageOptions = {
    type: 'success' | 'error' | 'neutral';
    showIcon?: boolean;
    icon?: string;
    message: string;
};
export declare const showToastMessage: ({ type, icon, showIcon, message, }: AppToastMessageOptions) => void;
type AppToastBase = {
    position: Position;
};
export declare const AppToastBase: ({ position }: AppToastBase) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=app-toast.d.ts.map