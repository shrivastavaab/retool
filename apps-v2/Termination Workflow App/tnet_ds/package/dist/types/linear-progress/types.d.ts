import type { LinearProgressProps as MuiLinearProgressProps } from "@mui/material";
declare module "@mui/material/LinearProgress" {
    interface LinearProgressPropsColorOverrides {
        default: true;
        success: true;
        error: true;
        brand: true;
        primary: false;
        secondary: false;
        inherit: false;
    }
    interface LinearProgressPropsVariantOverrides {
        buffer: false;
        query: false;
    }
}
export type LinearProgressProps = MuiLinearProgressProps & {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};
