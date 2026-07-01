/// <reference types="react" />
import type { ButtonBaseProps as MuiButtonBaseProps } from "@mui/material";
import type { MenuProps } from "../menu";
declare module "@mui/material/styles" {
    interface Palette {
        linkDropdown: LinkDropdownType;
    }
    interface PaletteOptions {
        linkDropdown: LinkDropdownType;
    }
}
export type LinkDropdownMenuItem = {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
    disabled?: boolean;
    icon?: React.ReactNode;
};
export type LinkDropdownPlacement = "bottom-left" | "bottom-right" | "bottom-center";
export type LinkDropdownSize = "extra-large" | "large" | "medium" | "small";
export type TypographyVariantKey = "paragraphMd" | "paragraphSm" | "paragraphXs";
export interface LinkSizeConfig {
    typographyVariant: TypographyVariantKey;
    iconFontSize: string;
}
export interface ButtonSizeConfig {
    width: string;
    height: string;
    typographyVariant: TypographyVariantKey;
    iconFontSize: string;
    labelPadding: string;
    iconPadding: string;
}
export type LinkDropdownProps = Omit<MuiButtonBaseProps, "children"> & {
    id?: string;
    label: string;
    triggerVariant?: "link" | "button";
    size?: LinkDropdownSize;
    href?: string;
    onLinkClick?: (event: React.MouseEvent<HTMLElement>) => void;
    menuItems: LinkDropdownMenuItem[];
    placement?: LinkDropdownPlacement;
    MenuProps?: Omit<MenuProps, "open" | "anchorEl" | "onClose">;
    contentId?: string;
    cmsOptions?: {
        key?: string;
        fallbackContent?: string;
        values?: Record<string, string>;
    };
};
export type LinkDropdownType = {
    link: {
        color: string;
        hover: {
            color: string;
        };
    };
    button: {
        bg: string;
        color: string;
        hover: {
            bg: string;
        };
        separator: string;
    };
};
