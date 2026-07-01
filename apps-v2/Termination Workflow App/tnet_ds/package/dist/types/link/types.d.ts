import type { LinkProps as MuiLinkProps } from "@mui/material";
export type LinkProps = Omit<MuiLinkProps, "underline"> & {
    disabled?: boolean;
    size?: "large" | "medium" | "small";
};
