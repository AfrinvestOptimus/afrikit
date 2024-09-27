import React from 'react';
export type AppSelectProps = {
    label: string;
    options: string[];
    state?: 'default' | 'disabled';
    hasError?: boolean;
    errorText?: string;
    hintText?: string;
    className?: string;
    onValueChange?: (value: string) => void;
    renderItem?: (option: {
        value: string;
        index: number;
    }) => React.JSX.Element | null;
};
declare const AppSelect: React.FC<AppSelectProps>;
export default AppSelect;
//# sourceMappingURL=index.d.ts.map