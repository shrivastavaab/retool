import type { FormHelperTextProps as MuiFormHelperTextProps } from "@mui/material";
export type FormHelperTextType = {
    text: string;
};
export type FormHelperTextProps = Omit<MuiFormHelperTextProps, "variant">;
