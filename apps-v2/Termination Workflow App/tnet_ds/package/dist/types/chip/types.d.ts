import type { ChipProps as MuiChipProps } from "@mui/material";
import type { MakeCMSCompatible } from "../utils";
declare module "@mui/material/styles" {
    interface Palette {
        chip: ChipType;
    }
    interface PaletteOptions {
        chip: ChipType;
    }
}
declare module "@mui/material/Chip" {
    interface ChipPropsSizeOverrides {
        large: true;
        extraLarge: true;
        extraExtraLarge: true;
    }
    interface ChipPropsVariantOverrides {
        error: true;
        warning: true;
        neutral: true;
        primary: true;
        info: true;
        pill: true;
    }
}
export type ChipType = {
    editBorder: string;
    bgEdit: string;
    primary: {
        text: string;
        background: string;
        border: string;
        hover: string;
        icon: string;
    };
    neutral: {
        text: string;
        background: string;
        border: string;
        bgHover: string;
        hover: string;
        icon: string;
    };
    warning: {
        text: string;
        border: string;
        background: string;
        bgHover: string;
        hover: string;
        icon: string;
    };
    error: {
        text: string;
        border: string;
        background: string;
        hover: string;
        icon: string;
    };
    info: {
        text: string;
        border: string;
        background: string;
        hover: string;
        icon: string;
    };
    pill: {
        text: string;
        selectedText: string;
        border: string;
        selectedBorder: string;
        background: string;
        icon: string;
    };
};
export type CustomChipProps = {
    edit?: boolean;
    alt: string;
    src?: string;
    label?: string;
    withoutAvatar?: boolean;
    variant?: "error" | "warning" | "neutral" | "primary" | "info" | "pill";
    selected?: boolean;
    onChange?: (selected: boolean) => void;
};
export type BaseChipProps = Omit<MuiChipProps, "variant" | "onChange"> & CustomChipProps;
export type ChipProps = MakeCMSCompatible<BaseChipProps, "label" | "src" | "alt">;
