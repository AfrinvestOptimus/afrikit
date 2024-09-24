import React from 'react';
export type AvatarSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type AvatarVariant = 'solid' | 'soft';
export type AvatarColor = 'accent' | 'neutral' | 'success' | 'error' | 'warning' | 'info';
export type AvatarFallback = 'image' | 'initials' | 'icon';
export type NumberOfInitials = 1 | 2;
export interface AppAvatarProps {
    size?: AvatarSize;
    variant?: AvatarVariant;
    color?: AvatarColor;
    highContrast?: boolean;
    fallBack?: AvatarFallback;
    status?: boolean;
    initials?: string;
    imageUrl?: string;
    icon?: React.ReactNode;
    numberOfInitials?: NumberOfInitials;
}
export declare const sizeStyles: Record<AvatarSize, string>;
export declare const textSizes: Record<AvatarSize, string>;
export declare const iconSizes: Record<AvatarSize, number>;
export declare const avatarColors: Record<AvatarColor, Record<AvatarVariant, string>>;
export declare const textColors: Record<AvatarColor, Record<AvatarVariant, string>>;
export declare const highContrastAvatarColors: Record<AvatarColor, Record<AvatarVariant, string>>;
export declare const highContrastTextColors: Record<AvatarColor, Record<AvatarVariant, string>>;
//# sourceMappingURL=avatar.d.ts.map