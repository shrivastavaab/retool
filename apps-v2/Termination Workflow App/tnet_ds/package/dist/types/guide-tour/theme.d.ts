/// <reference types="react" />
import type { GuideTourType } from "./types";
import { Theme } from "@mui/material";
export declare const guideTourTheme: (theme: Theme) => GuideTourType;
export declare const StyledPopover: import("@emotion/styled").StyledComponent<import("@mui/material").PopoverProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const Step: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    activeStep: boolean;
}, {}, {}>;
export declare const StyledOverlay: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
