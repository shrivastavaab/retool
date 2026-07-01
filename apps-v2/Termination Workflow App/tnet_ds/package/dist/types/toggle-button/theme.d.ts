/// <reference types="react" />
import type { ThemeMap } from "../theme/types";
import type { ToggleButtonType } from "./types";
export declare const toggleButtonTheme: ThemeMap<ToggleButtonType>;
export declare const StyledToggleButton: import("@emotion/styled").StyledComponent<import("@mui/material").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, "className" | "style" | "classes" | "color" | "children" | "sx" | "tabIndex" | "href" | "disabled" | "action" | "loading" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "loadingIndicator" | "loadingPosition" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    selected: boolean;
    hasIcon: boolean;
    hasLabel: boolean;
}, {}, {}>;
export declare const StyledButtonGroup: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<import("@mui/material").Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<import("@mui/material").Theme>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
