import React from "react";
import { LinkProps, TooltipProps as MuiPopoverProps } from "@mui/material";
export type PopoverProps = Omit<MuiPopoverProps, "title"> & {
    content?: string;
    linkText?: string;
    linkProps?: LinkProps;
    contentId?: string;
    title?: string;
};
export declare const Popover: React.ForwardRefExoticComponent<Omit<PopoverProps, "ref"> & React.RefAttributes<unknown>>;
