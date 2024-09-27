import React from 'react';
declare const variantStyles: {
    readonly centered: "flex-1 items-center justify-center";
    readonly large: "flex-col items-start justify-center";
    readonly large2: "flex-col";
    readonly menu: "flex-1 items-start justify-center";
    readonly small: "flex-1 items-start justify-center";
    readonly 'small-centered': "flex-1 items-center justify-center";
    readonly 'large-centered': "flex-1 items-center justify-center";
    readonly 'large2-centered': "flex-col items-center";
    readonly default: "flex-1 items-start justify-center";
};
interface TopBarTitleProps {
    variant: keyof typeof variantStyles;
    title?: string;
    subtitle?: string;
}
declare const TopBarTitle: React.FC<TopBarTitleProps>;
declare const TopBarTitle2: React.FC<TopBarTitleProps>;
export declare const topBarTitle: (props: TopBarTitleProps) => false | import("react/jsx-runtime").JSX.Element;
export declare const topBarTitle2: (props: TopBarTitleProps) => false | import("react/jsx-runtime").JSX.Element;
export default TopBarTitle;
export { TopBarTitle2 };
//# sourceMappingURL=TopBarTitle.d.ts.map