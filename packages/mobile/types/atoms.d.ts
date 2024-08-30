import { ReactNode } from "react";
import { TextProps } from "react-native";
import colors from "./../../shared/colors";

type TailwindColorKey = keyof typeof colors.light & keyof typeof colors.dark;
type colorScheme = "light" | "dark";

interface AppTextOwnProps {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  color: `text-${colorScheme}-${TailwindColorKey}`;
  trim?: "normal" | "start" | "end" | "both";
  weight: "light" | "normal" | "medium" | "bold";
  highContrast?: boolean;
  align: "left" | "center" | "right";
  children: string | ReactNode;
}

type AppTextAtomProps = AppTextOwnProps &
  Omit<TextProps, keyof AppTextOwnProps>;

/*export interface AppTextAtomProps extends TextProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  color?: TailwindColorKey;
  trim?: "normal" | "start" | "end" | "both";
  weight?: "light" | "normal" | "medium" | "bold";
  highContrast?: boolean;
  align?: "left" | "center" | "right";
  children: string | ReactNode;
}*/
