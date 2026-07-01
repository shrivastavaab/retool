import type { IconButtonProps as MuiIconButtonProps } from "@mui/material";
type customIconButtonProps = {
    variant: "primary" | "secondary" | "tertiary" | "transparent" | "transparentReverse" | "contrast" | "contrastOutline" | "elevated" | "header" | "input";
    shape: "circle" | "square";
};
export type IconButtonPropsWithRequireCustomProps = MuiIconButtonProps & customIconButtonProps;
export type IconButtonProps = MuiIconButtonProps & Partial<customIconButtonProps>;
type IconButtonVariantState = {
    body?: string;
    border?: string;
    outline?: string;
    text?: string;
};
type IconButtonVariantTheme = {
    default: IconButtonVariantState;
    hover: IconButtonVariantState;
    focus: IconButtonVariantState;
    active: IconButtonVariantState;
    disabled: IconButtonVariantState;
};
export type IconButtonThemeType = {
    primary: IconButtonVariantTheme;
    secondary: IconButtonVariantTheme;
    tertiary: IconButtonVariantTheme;
    transparent: IconButtonVariantTheme;
    transparentReverse: IconButtonVariantTheme;
    contrast: IconButtonVariantTheme;
    contrastOutline: IconButtonVariantTheme;
    elevated: IconButtonVariantTheme;
    header: IconButtonVariantTheme;
    input: IconButtonVariantTheme;
};
export {};
