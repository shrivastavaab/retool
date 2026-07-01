/// <reference types="react" />
import type { SnackbarProps as MuiSnackbarProps } from "@mui/material";
export interface SnackbarType {
    background: string;
    icon: string;
    text: string;
}
export type ActionProps = {
    label: string;
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant: "primary" | "secondary";
};
export type SnackbarProps = Omit<MuiSnackbarProps, "action" | "onClose"> & {
    actionProps?: ActionProps;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    showIcon?: boolean;
};
