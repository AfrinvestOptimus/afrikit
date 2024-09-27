import React from 'react';
import { AppTextAtomProps } from '../types/atoms';
import { AppAvatarProps, AppButtonProps } from './index';
type TrailingProps = {
    type?: string;
    trailingTitle?: string;
    trailingSubtitle?: string;
    trailingTitleProps?: AppTextAtomProps;
    trailingSubtitleProps?: AppTextAtomProps;
    buttonProps?: AppButtonProps;
    linkProps?: Pick<AppTextAtomProps, 'onPress' | 'color'>;
    trailingIcon?: string;
    trailingIconColor?: string;
    trailingContent?: string | React.ReactNode;
};
type LeadingProps = {
    type?: string;
    avatarProps?: AppAvatarProps;
    leadingIcon?: string;
    leadingIconColor?: string;
    leadingContent?: string | React.ReactNode;
};
export type ListItemProps = {
    size?: '1' | '2';
    variant?: '1-line' | '2-line' | '3-line';
    density?: Density;
    leading?: 'none' | 'avatar' | 'brand' | 'icon' | 'paymentMethod' | 'flag' | 'txStatus' | 'activity' | 'productIcon' | 'check' | 'radio';
    trailing?: 'none' | 'textContent' | 'text' | 'link' | 'icon' | 'button' | 'switch';
    subTrigger?: boolean;
    state?: 'enabled' | 'hovered' | 'focused' | 'pressed' | 'dragged';
    separator?: boolean;
    isChecked?: boolean;
    title: string;
    titleProps?: AppTextAtomProps;
    subtitle?: string;
    subtitleProps?: AppTextAtomProps;
    activity?: ActivityStatus;
    topMeta?: string;
    bottomMeta?: string;
    onPress?: () => void;
} & TrailingProps & LeadingProps;
declare const activityStatusIcons: {
    default: string;
    activity: string;
    swap: string;
    moneyIn: string;
    moneyOut: string;
    directDebit: string;
    system: string;
    avatar: string;
};
declare const densitySpacing: {
    default: string;
    relaxed: string;
    compact: string;
};
type Density = keyof typeof densitySpacing;
type ActivityStatus = keyof typeof activityStatusIcons;
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
//# sourceMappingURL=list-item.d.ts.map