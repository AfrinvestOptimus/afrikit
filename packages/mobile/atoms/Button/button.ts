import colors from "shared/colors";

export type ButtonSize = 1 | 2 | 3 | 4;
export type ButtonVariant = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
export type ButtonColor = 'accent' | 'neutral' | 'error';
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled';

export const buttonSizes: Record<ButtonSize, object> = {
  1: { paddingVertical: 0, paddingHorizontal: 8, borderRadius: 4, height: 24 },
  2: { paddingVertical: 0, paddingHorizontal: 12, borderRadius: 6, height: 32 },
  3: { paddingVertical: 0, paddingHorizontal: 16, borderRadius: 8, height: 40 },
  4: { paddingVertical: 0, paddingHorizontal: 24, borderRadius: 10, height: 48 },
};

export const buttonVariants: Record<ButtonVariant, object> = {
  solid: {
    backgroundColor: colors.light.accent9,
    borderWidth: 0,
  },
  soft: {
    backgroundColor: colors.light.accent9,
    borderWidth: 0,
  },
  surface: {
    backgroundColor: colors.light.accent9,
    borderWidth: 1,
    borderColor: colors.light.accent9,
  },
  outline: {
    backgroundColor: colors.light.accent9,
    borderWidth: 2,
    borderColor: colors.light.accent9,
  },
  ghost: {
    backgroundColor: colors.light.accent9,
    borderWidth: 0,
  },
};

export const textVariants: Record<ButtonVariant, object> = {
  solid: {
    color: colors.light.white
  },
  soft: {
    color: colors.light.white12
  },
  surface: {
    color: colors.light.white
  },
  outline: {
    color: colors.light.white
  },
  ghost: {
    color: colors.light.white
  },
};

export const buttonColors: Record<ButtonColor, object> = {
  accent: { color: colors.light.blue9, backgroundColor:  colors.light.accent9, borderColor: colors.light.accent9 },
  neutral: { color: colors.light.neutral9, backgroundColor:  colors.light.neutral9, borderColor: colors.light.neutral9 },
  error: { color: colors.light.error9, backgroundColor: colors.light.error9, borderColor: colors.light.error9 },
};

export const buttonStates: Record<ButtonState, object> = {
  default: {},
  hover: { opacity: 0.85 },
  active: { opacity: 0.75 },
  disabled: { opacity: 0.65 },
};
