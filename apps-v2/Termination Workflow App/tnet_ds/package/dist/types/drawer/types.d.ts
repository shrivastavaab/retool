/// <reference types="react" />
import type { DrawerProps as MuiDrawerProps } from "@mui/material";
export type Anchor = "top" | "left" | "bottom" | "right";
export type DrawerProps = Omit<MuiDrawerProps, "content" | "variant"> & {
    variant?: "default" | "inner";
    content: React.ReactNode;
    element?: React.ReactElement;
};
export type DrawerType = {
    header: string;
    borderHeader: string;
    body: string;
    backdrop: string;
    draggable: string;
    borderFooter: string;
};
