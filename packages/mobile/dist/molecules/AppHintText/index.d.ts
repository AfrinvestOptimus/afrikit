import React from 'react';
type AppHintTextType = 'default' | 'error';
export type AppHintTextProps = {
    type?: AppHintTextType;
    showIcon?: boolean;
    text: string;
    className?: string;
    accessibilityHintText?: string;
};
declare const AppHintText: React.FC<AppHintTextProps>;
export default AppHintText;
//# sourceMappingURL=index.d.ts.map