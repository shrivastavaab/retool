import { TooltipProps as MuiTooltipProps } from "@mui/material";
export type TooltipProps = Omit<MuiTooltipProps, "placement" | "title"> & {
    variant?: "dark" | "light" | "error";
    placement: "top" | "bottom" | "left" | "right";
    contentId?: string;
    title?: string;
    underline?: boolean;
};
export type TooltipType = {
    dark: {
        bg: string;
        border: string;
        color: string;
    };
    error: {
        bg: string;
        border: string;
        color: string;
    };
    light: {
        bg: string;
        border: string;
        color: string;
    };
    popover: {
        closeBtn: string;
    };
    underline: string;
};
