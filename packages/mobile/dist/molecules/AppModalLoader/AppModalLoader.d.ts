import React from 'react';
export interface AppModalLoaderProps {
    /**
     * Toggles modal loader visibility(True, False).
     */
    visible: boolean;
    /**
     * Displays the modal loader loading text.
     */
    text?: string;
    /**
     * Takes different Remix icons name.
     */
    iconName?: string;
    /**
     * Type of loader (modal, mobile, default)
     */
    loaderType?: 'default' | 'modal';
    /**
     * Callback function that is triggered when close modal button is pressed.
     */
    setCloseModal?: () => void;
}
export declare const AppModalLoader: React.FC<AppModalLoaderProps>;
//# sourceMappingURL=AppModalLoader.d.ts.map