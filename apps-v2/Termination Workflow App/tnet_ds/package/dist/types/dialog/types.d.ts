/// <reference types="react" />
import type { DialogProps as MuiDialogProps } from "@mui/material";
export interface DialogType {
    text: string;
    border: string;
    background: string;
    icon: string;
}
type CloseReason = "backdropClick" | "escapeKeyDown" | "closeButtonClick";
type customDialogsProps = {
    onClose: (reason: CloseReason) => void;
    actions: JSX.Element;
};
export type DialogPropsWithRequireCustomProps = MuiDialogProps & customDialogsProps;
export type DialogProps = MuiDialogProps & Partial<customDialogsProps>;
export {};
