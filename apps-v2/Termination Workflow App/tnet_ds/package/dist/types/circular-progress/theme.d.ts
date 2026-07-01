/// <reference types="react" />
import type { Theme } from "@mui/material/styles";
import type { CircularProgressType, CircularProgressWrapperProps } from "./types";
export declare const circularProgressTheme: (theme: Theme) => CircularProgressType;
export declare const StyledCircularProgressWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & CircularProgressWrapperProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledStepperCircularProgressWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & Omit<CircularProgressWrapperProps, "size">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
