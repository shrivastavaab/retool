import type { OutlinedTextFieldProps } from "@mui/material";
export type TextFieldType = {
    text: string;
    border: string;
    background: string;
    icon: string;
    label: {
        text: string;
    };
    disabled: {
        text: string;
        border: string;
        background: string;
    };
    error: {
        text: string;
        border: string;
    };
    hover: {
        border: string;
    };
    focus: {
        border: string;
    };
    search: {
        background: string;
        placeholder: string;
    };
};
export type TextFieldProps = Omit<OutlinedTextFieldProps, "variant" | "color" | "fullWidth" | "margin"> & {
    contentId?: string;
};
