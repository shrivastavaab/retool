/// <reference types="react" />
import { Theme } from "@mui/material";
import type { BreadcrumbsType } from "./types";
export declare const breadcrumbsTheme: (theme: Theme) => BreadcrumbsType;
export declare const MuiBreadcrumbs: {
    defaultProps: {
        separator: string;
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            ".MuiBreadcrumbs-separator": {
                marginRight: any;
                marginLeft: any;
            };
        };
    };
};
export declare const StyledBreadcrumbsItem: import("@emotion/styled").StyledComponent<import("@mui/material").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, "className" | "style" | "classes" | "color" | "children" | "sx" | "tabIndex" | "href" | "disabled" | "action" | "loading" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "loadingIndicator" | "loadingPosition" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledBreadcrumbsSubItem: import("@emotion/styled").StyledComponent<Omit<import("@mui/material").MenuItemProps, "disableRipple" | "disableTouchRipple"> & {
    header?: boolean;
    lvl?: number;
} & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
