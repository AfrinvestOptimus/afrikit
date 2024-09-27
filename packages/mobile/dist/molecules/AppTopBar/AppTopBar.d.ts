import React from 'react';
export interface AppTopBarProps {
    /**
     * Determines the style and layout of the app bar.
     * - 'default': Standard app bar with title and optional subtitle aligned to the left.
     * - 'centered': Title and optional subtitle are centered.
     * - 'large': Larger title, usually for primary pages.
     * - 'small': Smaller title size, typically for secondary pages.
     * - 'small-centered': Small title centered on the app bar.
     * - 'large-centered': Large title centered on the app bar.
     * @default 'centered'
     */
    variant: 'default' | 'centered' | 'large' | 'large2' | 'small' | 'small-centered' | 'large-centered' | 'large2-centered';
    /**
     * The main title displayed on the app bar.
     */
    title?: string;
    /**
     * An optional subtitle displayed below the title.
     */
    subtitle?: string;
    /**
     * Toggles the visibility of the left icon on the app bar.
     * Useful for various actions like navigating back or opening a menu.
     * @default true
     */
    showLeftIcon?: boolean;
    /**
     * Toggles the visibility of the first right icon on the app bar.
     * Used for various actions like search or profile.
     * @default true
     */
    showRightIcon1?: boolean;
    /**
     * Toggles the visibility of the second right icon on the app bar.
     * Used for various actions like search or profile.
     * @default true
     */
    showRightIcon2?: boolean;
    /**
     * Toggles the visibility of the third right icon on the app bar.
     * Used for various actions like search or profile.
     * @default true
     */
    showRightIcon3?: boolean;
    /**
     * Callback function that is triggered when the left icon is pressed.
     */
    onLeftIconPress?: () => void;
    /**
     * Callback function that is triggered when the first right icon is pressed.
     */
    onRightIconPress1?: () => void;
    /**
     * Callback function that is triggered when the second right icon is pressed.
     */
    onRightIconPress2?: () => void;
    /**
     * Callback function that is triggered when the third right icon is pressed.
     */
    onRightIconPress3?: () => void;
}
export declare const AppTopBar: React.FC<AppTopBarProps>;
//# sourceMappingURL=AppTopBar.d.ts.map