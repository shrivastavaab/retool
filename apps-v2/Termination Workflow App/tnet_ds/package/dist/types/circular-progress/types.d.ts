import type { CircularProgressProps as MuiCircularProgressProps } from "@mui/material";
declare module "@mui/material/styles" {
    interface Palette {
        circularProgress: CircularProgressType;
    }
    interface PaletteOptions {
        circularProgress: CircularProgressType;
    }
}
export type CircularProgressType = {
    default: {
        background: string;
        foreground: string;
    };
    brand: {
        background: string;
        foreground: string;
    };
    stepper: {
        background: string;
        foreground: string;
    };
};
export type SIZE_MAP_TYPE = {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
    extraSmall: string;
};
type Colors = "brand" | "default";
type Sizes = keyof SIZE_MAP_TYPE;
export type CircularProgressProps = Omit<MuiCircularProgressProps, "size" | "color" | "variant"> & {
    variant?: "determinate" | "indeterminate";
    size?: Sizes;
    color?: Colors;
};
export type CircularProgressWrapperProps = {
    size: Sizes;
    color: Colors;
};
export {};
