import type { InputLabelProps as MuiInputLabelProps } from "@mui/material";
export type InputLabelProps = Omit<MuiInputLabelProps, "color" | "variant">;
