/// <reference types="react" />
import type { AlertProps as MuiAlertProps } from "@mui/material";
import { MakeCMSCompatible } from "../utils";
declare module "@mui/material/Alert" {
    interface AlertPropsVariantOverrides {
        filled: true;
        outlined: true;
        unfilled: true;
        standard: false;
    }
    interface AlertPropsColorOverrides {
        promotion: true;
    }
}
export type BaseAlertProps = Omit<MuiAlertProps, "color" | "iconMapping" | "action"> & {
    title?: string;
    action?: {
        text?: string;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
};
export type AlertProps = MakeCMSCompatible<BaseAlertProps>;
interface AlertVariants {
    link: string;
    closeIcon: string;
    icon: string;
    text: string;
    border: string;
    background: string;
}
export interface AlertType {
    filled: {
        error: AlertVariants;
        warning: AlertVariants;
        info: AlertVariants;
        success: AlertVariants;
        promotion: AlertVariants;
    };
    outlined: {
        error: AlertVariants;
        warning: AlertVariants;
        info: AlertVariants;
        success: AlertVariants;
        promotion: AlertVariants;
    };
    unfilled: {
        error: AlertVariants;
        warning: AlertVariants;
        info: AlertVariants;
        success: AlertVariants;
        promotion: AlertVariants;
    };
}
export {};
