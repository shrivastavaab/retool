import { Theme } from "@mui/material/styles";
import type { IconButtonThemeType } from "./types";
export declare const iconButtonTheme: (theme: Theme) => IconButtonThemeType;
export declare const MuiIconButton: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            cursor: string;
            "&.Mui-disabled": {
                pointerEvents: string;
                cursor: string;
            };
            "&.MuiIconButton-square": {
                borderRadius: string;
            };
            "&.MuiIconButton-circle": {
                borderRadius: string;
            };
            "&.MuiIconButton-primary": {
                backgroundColor: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                };
                "&.Mui-focusVisible": {
                    outline: string;
                    backgroundColor: string;
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                };
                "&.MuiIconButton-sizeSmall": {
                    padding: string;
                    svg: {
                        width: string;
                        height: string;
                    };
                };
            };
            "&.MuiIconButton-secondary": {
                backgroundColor: string;
                border: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    borderColor: string;
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
            };
            "&.MuiIconButton-tertiary": {
                backgroundColor: string;
                outline: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    borderColor: string;
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
            };
            "&.MuiIconButton-transparent": {
                backgroundColor: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                    ":hover, :active": {
                        backgroundColor: string;
                        svg: {
                            color: string;
                        };
                    };
                };
            };
            "&.MuiIconButton-transparentReverse": {
                backgroundColor: string;
                border: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    svg: {
                        color: string;
                    };
                };
            };
            "&.MuiIconButton-contrast": {
                backgroundColor: string;
                border: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
            };
            "&.MuiIconButton-contrastOutline": {
                backgroundColor: string;
                border: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
            };
            "&.MuiIconButton-elevated": {
                boxShadow: string;
                backgroundColor: string;
                border: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                    outline: string;
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                    ":hover, :active": {
                        backgroundColor: string;
                        borderColor: string;
                        svg: {
                            color: string;
                        };
                    };
                };
            };
            "&.MuiIconButton-header, &.MuiIconButton-input": {
                backgroundColor: string;
                svg: {
                    color: string;
                };
                ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
                    backgroundColor: string;
                };
                "&.Mui-focusVisible": {
                    backgroundColor: string;
                    outline: string;
                    svg: {
                        color: string;
                    };
                };
                ":active, &.Mui-activeVisible": {
                    backgroundColor: string;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    svg: {
                        color: string;
                    };
                };
            };
            "&.MuiIconButton-header": {
                width: string;
                height: string;
            };
            "&.MuiIconButton-input": {
                padding: string;
                svg: {
                    width: string;
                    height: string;
                    color: string;
                };
                width: string;
                height: string;
                "&.MuiIconButton-sizeSmall": {
                    svg: {
                        width: string;
                        height: string;
                    };
                    width: string;
                    height: string;
                };
            };
        };
    };
};
