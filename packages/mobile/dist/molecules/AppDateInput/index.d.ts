import React from 'react';
export type AppDateInputProps = {
    label: string;
    state?: 'default' | 'disabled';
    hasError?: boolean;
    errorText?: string;
    hintText?: string;
    onDateChange?: (value: Date) => void;
    renderConfirmButton?: () => React.ReactNode;
};
declare const AppDateInput: React.FC<AppDateInputProps>;
export default AppDateInput;
//# sourceMappingURL=index.d.ts.map