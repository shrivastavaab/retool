/// <reference types="react" />
import type { TypographyType, TypographyProps } from "./types";
declare module "@mui/material/styles" {
    interface Palette {
        typography: TypographyType;
    }
    interface PaletteOptions {
        typography: TypographyType;
    }
}
export declare const Typography: import("react").ForwardRefExoticComponent<Omit<TypographyProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
