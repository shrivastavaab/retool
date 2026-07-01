/// <reference types="react" />
import { Theme } from "@mui/material/styles";
import type { ButtonType } from "./types";
import type { ThemeMap } from "../theme/types";
export declare const buttonTheme: ThemeMap<ButtonType>;
export declare const _buttonTheme: (theme: Theme) => ButtonType;
export declare const MuiButton: {
    defaultProps: {
        variant: string;
    };
    styleOverrides: {
        root: ({ theme, ownerState }: {
            theme: any;
            ownerState: any;
        }) => {
            minWidth: number;
            whiteSpace: string;
            textTransform: string;
            fontFamily: any;
            fontSize: any;
            boxShadow: string;
            padding: number;
            margin: number;
            ".MuiSvgIcon-root": {
                color: string;
            };
            ".T1-CircularProgress-wrapper": {
                marginRight: any;
            };
            ".CircularProgress-background": {
                circle: {
                    opacity: number;
                    stroke: string;
                };
            };
            ".MuiCircularProgress-circle": {
                stroke: string;
            };
            "&:after": {
                content: string;
                position: string;
                left: any;
                right: any;
                bottom: any;
            };
            variants: ({
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    ".CircularProgress-background": {
                        circle: {
                            stroke: string;
                        };
                    };
                    ".MuiCircularProgress-circle": {
                        stroke: string;
                    };
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        outline?: undefined;
                    };
                    "&:active, &.isActive": {
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        outline?: undefined;
                    };
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus": {
                        outline: string;
                        backgroundColor: string;
                    };
                    "&.Mui-disabled": {
                        backgroundColor: string;
                        color: string;
                        border?: undefined;
                        outline?: undefined;
                    };
                    border?: undefined;
                    "&.Mui-focusVisible"?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        color: string;
                        backgroundColor: string;
                        border: string;
                        outline?: undefined;
                    };
                    "&:active, &.isActive": {
                        color: string;
                        border: string;
                        backgroundColor?: undefined;
                        outline?: undefined;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        color: string;
                        border: string;
                        backgroundColor?: undefined;
                        "&:after"?: undefined;
                    };
                    "&.Mui-disabled": {
                        color: string;
                        border: string;
                        backgroundColor?: undefined;
                        outline?: undefined;
                    };
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    outline: string;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        backgroundColor: string;
                        outline: string;
                        color?: undefined;
                        border?: undefined;
                    };
                    "&:active, &.isActive": {
                        backgroundColor: string;
                        outline: string;
                        color?: undefined;
                        border?: undefined;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        "&:after"?: undefined;
                    };
                    "&.Mui-disabled": {
                        backgroundColor: string;
                        color: string;
                        outline: string;
                        border?: undefined;
                    };
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    border?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    color: string;
                    backgroundColor: string;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        backgroundColor: string;
                        color: string;
                        border?: undefined;
                        outline?: undefined;
                    };
                    "&:active, &.isActive": {
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        outline?: undefined;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        "&:after"?: undefined;
                    };
                    "&.Mui-disabled": {
                        backgroundColor: string;
                        color: string;
                        border?: undefined;
                        outline?: undefined;
                    };
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    border?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        color: string;
                        backgroundColor: string;
                        outline: string;
                        border?: undefined;
                    };
                    "&:active, &.isActive": {
                        backgroundColor: string;
                        color: string;
                        outline: string;
                        border?: undefined;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        "&:after"?: undefined;
                    };
                    "&.Mui-disabled": {
                        color: string;
                        backgroundColor?: undefined;
                        border?: undefined;
                        outline?: undefined;
                    };
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    border?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    position: string;
                    outlineOffset: any;
                    minWidth: number;
                    borderRadius: string;
                    "&:after": {
                        position: string;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        "&:after": {
                            borderBottom: string;
                        };
                    };
                    "&:active": {
                        color: string;
                        "&:after": {
                            borderBottom: string;
                        };
                        backgroundColor?: undefined;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        color: string;
                        "&:after": {
                            borderBottom: string;
                        };
                        border?: undefined;
                        backgroundColor?: undefined;
                    };
                    "&.Mui-disabled": {
                        color: string;
                        backgroundColor?: undefined;
                        border?: undefined;
                        outline?: undefined;
                    };
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    border?: undefined;
                    outline?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    "&:hover": {
                        color: string;
                        backgroundColor: string;
                        "&:after"?: undefined;
                    };
                    "&:active": {
                        backgroundColor: string;
                        color?: undefined;
                        "&:after"?: undefined;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        backgroundColor: string;
                        color?: undefined;
                        border?: undefined;
                        "&:after"?: undefined;
                    };
                    "&.Mui-disabled": {
                        color: string;
                        backgroundColor: string;
                        border?: undefined;
                        outline?: undefined;
                    };
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    border?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    padding?: undefined;
                    height?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                };
                style: {
                    padding: any;
                    height: number;
                    fontSize: any;
                    ".T1-CircularProgress-wrapper": {
                        width: number;
                        height: number;
                        minWidth: number;
                        minHeight: number;
                    };
                    backgroundColor?: undefined;
                    color?: undefined;
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    "&.Mui-disabled"?: undefined;
                    border?: undefined;
                    "&.Mui-focusVisible"?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant: string;
                };
                style: {
                    padding: any;
                    height: number;
                    backgroundColor?: undefined;
                    color?: undefined;
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    "&.Mui-disabled"?: undefined;
                    border?: undefined;
                    "&.Mui-focusVisible"?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                    fontSize?: undefined;
                    ".T1-CircularProgress-wrapper"?: undefined;
                    ".MuiButton-endIcon"?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                };
                style: {
                    padding: any;
                    height: number;
                    fontSize: any;
                    ".T1-CircularProgress-wrapper": {
                        width: number;
                        height: number;
                        minWidth: number;
                        minHeight: number;
                    };
                    ".MuiButton-endIcon": {
                        ".MuiSvgIcon-root": {
                            fontSize: number;
                        };
                    };
                    backgroundColor?: undefined;
                    color?: undefined;
                    ".CircularProgress-background"?: undefined;
                    ".MuiCircularProgress-circle"?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus"?: undefined;
                    "&.Mui-disabled"?: undefined;
                    border?: undefined;
                    "&.Mui-focusVisible"?: undefined;
                    outline?: undefined;
                    position?: undefined;
                    outlineOffset?: undefined;
                    minWidth?: undefined;
                    borderRadius?: undefined;
                    "&:after"?: undefined;
                    "&:hover"?: undefined;
                    "&:active"?: undefined;
                };
            })[];
            pointerEvents: string;
            cursor: string;
        };
    };
};
export declare const MuiFab: {
    defaultProps: {
        disableRipple: boolean;
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            fontFamily: any;
            fontSize: any;
            boxShadow: any;
            textTransform: string;
            gap: any;
            ".MuiSvgIcon-root": {
                color: string;
            };
            variants: ({
                props: {
                    color: string;
                    variant?: undefined;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        backgroundColor: string;
                        color?: undefined;
                    };
                    "&:active, &.isActive": {
                        backgroundColor: string;
                    };
                    "&.Mui-focusVisible": {
                        outline: string;
                        backgroundColor: string;
                        color?: undefined;
                    };
                    "&.Mui-disabled": {
                        backgroundColor: string;
                        color: string;
                    };
                    "&:active"?: undefined;
                    width?: undefined;
                    height?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                };
            } | {
                props: {
                    color: string;
                    variant?: undefined;
                    size?: undefined;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                        color: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        color: string;
                        backgroundColor: string;
                    };
                    "&.Mui-focusVisible": {
                        backgroundColor: string;
                        color: string;
                        outline: string;
                    };
                    "&.Mui-disabled": {
                        color: string;
                        backgroundColor: string;
                    };
                    "&:active, &.isActive"?: undefined;
                    width?: undefined;
                    height?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size: string;
                    color?: undefined;
                };
                style: {
                    width: number;
                    height: number;
                    padding: any;
                    backgroundColor?: undefined;
                    color?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible"?: undefined;
                    "&.Mui-disabled"?: undefined;
                    "&:active"?: undefined;
                    fontSize?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size: string;
                    color?: undefined;
                };
                style: {
                    height: number;
                    padding: any;
                    fontSize: any;
                    backgroundColor?: undefined;
                    color?: undefined;
                    "&:hover, &.Mui-focusVisible:hover, &.isHover"?: undefined;
                    "&:active, &.isActive"?: undefined;
                    "&.Mui-focusVisible"?: undefined;
                    "&.Mui-disabled"?: undefined;
                    "&:active"?: undefined;
                    width?: undefined;
                };
            })[];
        };
    };
};
export declare const MuiButtonGroup: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            width: string;
            ".dropdownButton": {
                minWidth: string;
                "&-label": {
                    marginRight: any;
                };
                ".MuiButton-endIcon": {
                    margin: number;
                };
            };
            ".MuiButton-root": {
                borderRadius: string;
                width: string;
                "&:first-of-type": {
                    borderRadius: any;
                };
                "&:last-of-type": {
                    borderRadius: any;
                };
            };
            variants: ({
                props: {
                    variant: string;
                    orientation: string;
                    size?: undefined;
                };
                style: {
                    ".MuiButton-root:not(:last-of-type)": {
                        borderBottom: string;
                        borderRight?: undefined;
                    };
                    ".MuiButton-root": {
                        border: string;
                        borderRadius?: undefined;
                        width?: undefined;
                        "&:first-of-type"?: undefined;
                        "&:last-of-type"?: undefined;
                    };
                    ".dropdownButton"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    orientation: string;
                    size?: undefined;
                };
                style: {
                    ".MuiButton-root:not(:last-of-type)": {
                        borderRight: string;
                        borderBottom?: undefined;
                    };
                    ".MuiButton-root"?: undefined;
                    ".dropdownButton"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    orientation: string;
                    size?: undefined;
                };
                style: {
                    ".MuiButton-root:not(:last-of-type)": {
                        borderBottom: string;
                        borderRight?: undefined;
                    };
                    ".MuiButton-root"?: undefined;
                    ".dropdownButton"?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                    orientation?: undefined;
                };
                style: {
                    ".dropdownButton": {
                        padding: any;
                        width?: undefined;
                        "&-anchor"?: undefined;
                    };
                    ".MuiButton-root:not(:last-of-type)"?: undefined;
                    ".MuiButton-root"?: undefined;
                };
            } | {
                props: {
                    orientation: string;
                    variant?: undefined;
                    size?: undefined;
                };
                style: {
                    ".MuiButton-root": {
                        borderRadius: string;
                        width: string;
                        "&:first-of-type": {
                            borderRadius: any;
                        };
                        "&:last-of-type": {
                            borderRadius: any;
                        };
                        border?: undefined;
                    };
                    ".dropdownButton": {
                        width: string;
                        "&-anchor": {
                            top: string;
                        };
                        padding?: undefined;
                    };
                    ".MuiButton-root:not(:last-of-type)"?: undefined;
                };
            })[];
        };
    };
};
export declare const StyledChipButton: import("@emotion/styled").StyledComponent<import("@mui/material").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, "className" | "style" | "classes" | "color" | "children" | "sx" | "tabIndex" | "href" | "disabled" | "action" | "loading" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "loadingIndicator" | "loadingPosition" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledToggleIconButton: import("@emotion/styled").StyledComponent<import("@mui/material").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, "className" | "style" | "classes" | "color" | "children" | "sx" | "tabIndex" | "href" | "disabled" | "action" | "loading" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "loadingIndicator" | "loadingPosition" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    buttontype?: string;
    selected?: boolean;
}, {}, {}>;
export declare const StyledSimpleIconButton: import("@emotion/styled").StyledComponent<import("@mui/material").IconButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, "className" | "style" | "classes" | "color" | "children" | "sx" | "tabIndex" | "disabled" | "action" | "loading" | "size" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "loadingIndicator" | "edge"> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    variant: "heart" | "star";
    selected: boolean;
}, {}, {}>;
export declare const StyledButtonArrangement: import("@emotion/styled").StyledComponent<import("@mui/material").StackOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/material").StackOwnProps> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
