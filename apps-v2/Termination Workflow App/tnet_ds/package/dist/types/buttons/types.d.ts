/// <reference types="react" />
import { ButtonProps as MuiButtonProps, ButtonGroupProps as MuiButtonGroupProps, FabProps as MuiFabProps } from "@mui/material";
import { MenuProps } from "../menu";
import type { MakeCMSCompatible, MakeOptional } from "../utils";
declare module "@mui/material/styles" {
    interface Palette {
        button: ButtonType;
    }
    interface PaletteOptions {
        button: ButtonType;
    }
}
interface ButtonThemeInterface {
    text?: string;
    body?: string;
    default: {
        body?: string;
        text?: string;
        border?: string;
    };
    hover: {
        body?: string;
        text?: string;
        border?: string;
    };
    active: {
        body?: string;
        text?: string;
        border?: string;
    };
    disabled: {
        body?: string;
        text?: string;
        border?: string;
    };
    selected?: {
        body?: string;
        text?: string;
        border?: string;
    };
    focused?: {
        body?: string;
        text?: string;
        border?: string;
    };
    icon?: {
        body?: string;
        text?: string;
        border?: string;
    };
}
export type ButtonType = {
    loadingBackground: string;
    loadingForeground: string;
    primary: ButtonThemeInterface;
    secondary: ButtonThemeInterface;
    tertiary: ButtonThemeInterface;
    transparent: ButtonThemeInterface;
    transparentReverse: ButtonThemeInterface;
    contrast: ButtonThemeInterface;
    contrastOutline: ButtonThemeInterface;
    contrastReverse: ButtonThemeInterface;
    contrastOutlineReverse: ButtonThemeInterface;
    link: ButtonThemeInterface;
    elevated: ButtonThemeInterface;
    header: ButtonThemeInterface;
    fab: {
        default: ButtonThemeInterface;
        primary: ButtonThemeInterface;
        secondary: ButtonThemeInterface;
    };
    chip: ButtonThemeInterface;
    toggleIcon: ButtonThemeInterface;
    simpleIcon: ButtonThemeInterface;
};
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        transparent: true;
        contrast: true;
        contrastOutline: true;
        contrastReverse: true;
        contrastOutlineReverse: true;
        header: true;
        link: true;
    }
    interface ButtonPropsSizeOverrides {
        large: true;
        medium: true;
        small: true;
        extraSmall: true;
    }
}
declare module "@mui/material/ButtonGroup" {
    interface ButtonGroupPropsVariantOverrides {
        primary: true;
        secondary: true;
        contrastOutline: true;
    }
    interface ButtonGroupPropsSizeOverrides {
        large: true;
        medium: true;
        small: true;
        extraSmall: true;
    }
}
declare module "@mui/material/Fab" {
    interface FabPropsColorOverrides {
        default: true;
        primary: true;
        secondary: true;
        tertiary: false;
        error: false;
        info: false;
        warning: false;
        success: false;
        inherit: false;
    }
}
export type ButtonSizes = "large" | "medium" | "small" | "extraSmall";
type CustomButtonProps = {
    loading?: boolean;
};
type LinkButtonProps = CustomButtonProps & Omit<MuiButtonProps, "variant" | "color" | "size"> & {
    variant?: Extract<MuiButtonProps["variant"], "link">;
    size?: Exclude<MuiButtonProps["size"], "extraSmall">;
};
type RegularButtonProps = CustomButtonProps & Omit<MuiButtonProps, "variant" | "color" | "size"> & {
    variant?: Exclude<MuiButtonProps["variant"], "link">;
    size?: MuiButtonProps["size"];
};
type BaseButtonProps = LinkButtonProps | RegularButtonProps;
export type ButtonProps = MakeCMSCompatible<BaseButtonProps>;
export type FabProps = MuiFabProps;
type CustomChipButtonProps = {
    startIcon: React.ReactNode;
};
export type ChipButtonProps = Omit<MuiButtonProps, "size" | "variant" | "color" | "endIcon"> & CustomChipButtonProps;
type CustomButtonGroupProps = {
    variant: "primary" | "secondary" | "contrastOutline";
    size: ButtonSizes;
};
export type ButtonGroupWithOptionalProps = Omit<MuiButtonGroupProps, "disableRipple" | "color" | "disableElevation" | "disableFocusRipple" | "variant" | "size"> & CustomButtonGroupProps;
export type ButtonGroupProps = Omit<MuiButtonGroupProps, "disableRipple" | "color" | "disableElevation" | "disableFocusRipple" | "variant" | "size"> & MakeOptional<CustomButtonGroupProps, "variant" | "size">;
export type STROKE_WIDTH_TYPE = {
    large: string;
    medium: string;
    small: string;
    extraSmall: string;
};
export type DropdownHeaderItem = {
    type: "header";
    label: string;
};
export type DropdownSelectableItem = {
    type?: "item";
    value: string;
    label: string;
    hint?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
    lvl?: 0 | 1 | 2;
    children?: DropdownSelectableItem[];
};
export type DropdownMenuItem = DropdownHeaderItem | DropdownSelectableItem;
export type DropdownButtonProps = RegularButtonProps & {
    id?: string;
    label: string;
    MenuProps?: MenuProps;
    menuItems: DropdownMenuItem[];
    multiple?: boolean;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    defaultValue?: string | string[];
};
type ButtonArrangementButtonProps = MakeCMSCompatible<{
    label: string;
    action: () => void;
}, "label">;
export type ButtonArrangementProps = MakeCMSCompatible<{
    primary: ButtonArrangementButtonProps;
    secondary?: ButtonArrangementButtonProps;
    tertiary?: ButtonArrangementButtonProps;
}>;
export type ButtonTypeDirection = "left" | "center" | "right" | "top" | "bottom";
export interface ToggleIconButtonProps extends Omit<MuiButtonProps, "variant"> {
    buttonType?: ButtonTypeDirection;
    selected?: boolean;
    children: React.ReactNode;
}
export interface SimpleIconButtonProps {
    variant: "heart" | "star";
    selected?: boolean;
    defaultSelected?: boolean;
    onChange?: (selected: boolean) => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    "aria-label"?: string;
}
export {};
