/// <reference types="react" />
import { Theme } from "@mui/material/styles";
import type { DotIndicatorsTheme } from "./types";
export declare const dotIndicatorsTheme: (theme: Theme) => DotIndicatorsTheme;
export declare const StyledDotIndicatorsContainer: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledDot: import("@emotion/styled").StyledComponent<(import("../buttons").ButtonProps & import("@mui/system").MUIStyledCommonProps<Theme>) & {
    variant?: "primary" | "secondary";
    isActive: boolean;
    showBorder?: boolean;
}, {}, {}>;
