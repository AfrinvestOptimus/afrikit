export type ButtonSize = 1 | 2 | 3 | 4;
export type ButtonVariant = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
export type ButtonColor = 'accent' | 'neutral' | 'error';
export type ButtonState = 'default' | 'active' | 'disabled';

export const buttonSizes: Record<ButtonSize, string> = {
  1: "h-xl rounded-xs-max px-sm",
  2: "h-2xl rounded-xs-max px-md",
  3: "h-3xl rounded-xs-max px-xl py-sm",
  4: "h-4xl rounded-xs-max px-2xl",
};

export const textSizes: Record<ButtonSize, string> = {
  1: "text-subtitle3",
  2: "text-subtitle2",
  3: "text-subtitle1",
  4: "text-four",
};

export const buttonColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: "bg-light-background-accent-base dark:bg-dark-background-accent-base",
    soft: "bg-light-background-accent-light dark:bg-dark-background-accent-light",
    surface: "bg-light-background-accent-light dark:bg-dark-background-accent-light border border-light-edge-accent",
    outline:  "bg-transparent border border-light-edge-accent",
    ghost: "bg-transparent",
  },
  neutral: {
    solid: "bg-light-background-neutral-base dark:bg-dark-background-neutral-base",
    soft: "bg-light-background-neutral-light dark:bg-dark-background-neutral-light",
    surface: "bg-light-background-neutral-light dark:bg-dark-background-neutral-light border border-light-background-neutral-light",
    outline:"bg-transparent border border-light-edge-neutral",
    ghost: "bg-transparent",
  },
  error: {
    solid: "bg-light-background-error-base dark:bg-dark-background-error-base",
    soft: "bg-light-background-error-light dark:bg-dark-background-error-light",
    surface: "bg-transparent dark:bg-dark-background-error-light border border-light-edge-error",
    outline:"bg-transparent border border-light-edge-error",
    ghost: "bg-transparent",
  },
};

export const highContrastButtonColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: "bg-light-background-accent-bold-pressed dark:bg-dark-background-accent-bold-pressed",
    soft: "bg-light-background-accent-light-pressed dark:bg-dark-background-accent-light-pressed",
    surface: "bg-light-background-accent-light border border-light-edge-accent dark:border-dark-edge-accent",
    outline:  "bg-light-background-accent-light border border-light-edge-gray-strong dark:border-dark-edge-gray-strong",
    ghost: "bg-light-background-accent-transparent-pressed dark:bg-dark-background-accent-transparent-pressed",
  },
  neutral: {
    solid: "bg-light-background-neutral-bold dark:bg-dark-background-neutral-bold",
    soft: "bg-light-background-neutral-light-pressed  dark:bg-light-background-neutral-light-pressed",
    surface: "bg-light-background-neutral-light border border-light-edge-gray-hover dark:border-dark-edge-gray-hover",
    outline:"bg-light-background-neutral-light border border-light-edge-gray-strong dark:border-dark-edge-gray-strong",
    ghost: "bg-light-background-neutral-transparent-pressed dark:bg-dark-background-neutral-transparent-pressed",
  },
  error: {
    solid: "bg-light-background-error-bold-pressed dark:bg-dark-background-error-bold-pressed",
    soft: "bg-light-background-error-light-pressed dark:bg-dark-background-error-light-pressed",
    surface: "bg-light-background-error-light border border-dark-edge-error dark:border-dark-edge-error",
    outline:"bg-light-background-error-light border border-dark-edge-error-strong dark:border-dark-edge-error-strong",
    ghost: "bg-light-background-error-transparent-pressed dark:bg-light-background-error-transparent-pressed",
  },
};


export const textColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: "text-light-contrast-white",
    soft: "text-light-type-accent dark:text-dark-type-accent",
    surface: "text-light-type-accent dark:text-dark-type-accent",
    outline: "text-light-type-accent dark:text-dark-type-accent",
    ghost: "text-light-type-accent dark:text-dark-type-accent",
  },
  neutral: {
    solid: "text-light-contrast-white",
    soft: "text-light-type-neutral dark:text-dark-type-neutral",
    surface: "text-light-type-neutral dark:text-dark-type-neutral",
    outline: "text-light-type-neutral dark:text-dark-type-neutral",
    ghost: "text-light-type-neutral dark:text-dark-type-neutral",
  },
  error: {
    solid: "text-light-contrast-white",
    soft: " text-light-type-error-bold dark:text-dark-type-error-bold",
    surface: " text-light-type-error-bold dark:text-dark-type-error-bold",
    outline:  " text-light-type-error-bold dark:text-dark-type-error-bold",
    ghost:  " text-light-type-error-bold dark:text-dark-type-error-bold",
  },
};
export const highContrastTextColors: Record<ButtonColor, Record<ButtonVariant, string>> = {
  accent: {
    solid: "text-light-type-accent-inverse dark:text-light-type-accent-inverse",
    soft: "text-light-type-accent-bold dark:text-dark-type-accent-bold",
    surface: "text-light-type-accent dark:text-dark-type-accent ",
    outline: "text-light-type-accent dark:text-dark-type-accent",
    ghost: "text-light-type-accent-bold dark:text-dark-type-accent-bold",
  },
  neutral: {
    solid: "text-light-type-gray-inverse dark:text-light-type-gray-inverse",
    soft: "text-light-type-gray dark:text-dark-type-gray",
    surface: "text-light-type-gray dark:text-dark-type-gray",
    outline: "text-light-type-gray dark: text-dark-type-gray",
    ghost: "text-light-type-gray dark:text-dark-type-gray",
  },
  error: {
    solid: "text-light-type-error-inverse dark:text-light-type-error-inverse",
    soft: "text-light-type-error-bold dark:text-dark-type-error-bold",
    surface: "text-light-type-error-bold dark:text-dark-type-error-bold",
    outline: "text-light-type-error-bold dark:text-dark-type-error-bold",
    ghost:  "text-light-type-error-bold dark:text-dark-type-error-bold",
  },
};
export const disabledColors:  Record<ButtonVariant, string> = {
  solid:  "bg-light-background-disable2 border border-light-edge-disable",
  soft: "bg-light-background-disable2 border border-light-edge-disable",
  surface: "bg-transparent border border-light-edge-disable",
  outline: "bg-transparent border border-light-edge-disable",
  ghost: "bg-transparent border-none",
}


export const buttonStates: Record<ButtonState, string | Record<ButtonVariant, string>> = {
  default: "",
  active: "opacity-70",
  disabled: disabledColors,
};



export const textStates: Record<ButtonState, string> = {
  default: "",
  active: "opacity-70",
  disabled: "text-light-type-gray-disabled",
};
