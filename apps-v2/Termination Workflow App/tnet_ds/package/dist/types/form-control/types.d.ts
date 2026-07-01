import type { FormControlProps as MuiFormControlProps } from "@mui/material";
export type FormControlProps = Omit<MuiFormControlProps, "variant" | "color">;
