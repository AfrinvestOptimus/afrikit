import { useColorScheme } from "nativewind";
import React from "react";
import { Text, TextProps } from "react-native";
import { tv } from "tailwind-variants";

// Define the types for the variants
type Size = keyof typeof textVariants.variants.size;
type Weight = keyof typeof textVariants.variants.weight;
type Align = keyof typeof textVariants.variants.align;

// Define the prop types
export interface AppTextAtomProps extends TextProps {
  size?: Size;
  color?: string;
  trim?: string;
  weight?: Weight;
  highContrast?: boolean;
  align?: Align;
  className?: string;
  children?: React.ReactNode;
}

const textVariants = tv({
  base: "text-left",
  variants: {
    size: {
      1: "text-xs leading-xs",
      2: "text-sm leading-sm",
      3: "text-base leading-base",
      4: "text-lg leading-lg",
      5: "text-xl leading-xl",
      6: "text-2xl leading-2xl",
      7: "text-3xl leading-3xl",
      8: "text-4xl leading-4xl",
      9: "text-5xl leading-5xl",
    },
    weight: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});

const AppText: React.FC<AppTextAtomProps> = ({
  size = 3,
  color = "text-dark-slate4",
  trim = "normal",
  weight = "regular",
  highContrast = false,
  align = "left",
  children,
  className,
  ...rest
}) => {
  const { colorScheme } = useColorScheme();

  const highContrastClass = highContrast
    ? `text-${colorScheme}-type-gray-muted`
    : "";

  const variantClasses = textVariants({ size, weight, align });

  return (
    <Text
      className={`${variantClasses} ${color} ${highContrastClass} ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;
