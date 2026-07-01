import { LinkProps, TooltipProps as MuiPopoverProps } from "@mui/material";
export type PopoverProps = Omit<MuiPopoverProps, "title"> & {
    content?: string;
    linkText?: string;
    linkProps?: LinkProps;
    contentId?: string;
    title?: string;
};
export type PopoverType = {
    background: string;
    border: string;
    color: string;
    iconColor: string;
};
