import type { Theme } from "@mui/material/styles";
type ListThemeType = {
    text: string;
    secondaryText: string;
    divider: string;
    background: string;
    primary: {
        icon: string;
        iconBackground: string;
    };
    secondary: {
        icon: string;
        iconBackground: string;
    };
    hover: {
        background: string;
        iconBackground?: string;
    };
    active: {
        background: string;
    };
    focused: {
        background: string;
        iconBackground?: string;
    };
    disabled: {
        background: string;
    };
};
export declare const listTheme: (theme: Theme) => ListThemeType;
export declare const MuiList: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            boxShadow: string;
            padding: number;
            flexGrow: number;
            ".MuiListItem-root": {
                padding: string;
                position: string;
                alignItems: string;
                cursor: string;
                backgroundColor: string;
                "&:focus-visible": {
                    outline: string;
                    backgroundColor: string;
                    zIndex: number;
                    "&.T1-listItem-secondary": {
                        ".MuiListItemIcon-root": {
                            backgroundColor: string;
                        };
                    };
                };
                "&.T1-listItem-primary": {
                    ".MuiListItemIcon-root": {
                        backgroundColor: string;
                        svg: {
                            fill: string;
                        };
                    };
                };
                "&.T1-listItem-secondary": {
                    ".MuiListItemIcon-root": {
                        backgroundColor: string;
                        svg: {
                            fill: string;
                        };
                    };
                };
                ".MuiListItemIcon-root": {
                    minWidth: number;
                    width: string;
                    height: string;
                    borderRadius: string;
                    margin: string;
                    display: string;
                    justifyContent: string;
                    alignItems: string;
                    svg: {
                        width: string;
                        height: string;
                    };
                };
                ".MuiListItemText-root": {
                    padding: string;
                    margin: number;
                    ".MuiListItemText-primary": {
                        fontFamily: import("csstype").Property.FontFamily;
                        color: string;
                        fontSize: import("csstype").Property.FontSize<string | number>;
                        lineHeight: import("csstype").Property.LineHeight<string | number>;
                        height: string;
                        display: string;
                        alignItems: string;
                    };
                    ".MuiListItemText-secondary": {
                        fontFamily: import("csstype").Property.FontFamily;
                        color: string;
                        fontSize: import("csstype").Property.FontSize<string | number>;
                        lineHeight: import("csstype").Property.LineHeight<string | number>;
                        height: string;
                        display: string;
                        alignItems: string;
                    };
                };
                ".MuiListItemSecondaryAction-root": {
                    color: string;
                    position: string;
                    paddingLeft: string;
                    transform: string;
                    alignSelf: string;
                };
                "&.T1-listItem-highlight": {
                    "&:after": {
                        content: string;
                        position: string;
                        left: number;
                        top: number;
                        bottom: number;
                        width: string;
                    };
                    "&.T1-listItem-primary": {
                        "&:after": {
                            backgroundColor: string;
                        };
                    };
                    "&.T1-listItem-secondary": {
                        "&:after": {
                            backgroundColor: string;
                        };
                    };
                };
                "&:hover": {
                    backgroundColor: string;
                    "&.T1-listItem-secondary": {
                        ".MuiListItemIcon-root": {
                            backgroundColor: string;
                        };
                    };
                };
                "&:active": {
                    backgroundColor: string;
                };
                "&.Mui-disabled": {
                    opacity: number;
                    backgroundColor: string;
                };
                "&.MuiListItem-divider": {
                    borderBottom: string;
                    "&:before": {
                        content: string;
                        position: string;
                        bottom: number;
                        right: number;
                        left: number;
                        height: string;
                        backgroundColor: string;
                    };
                };
            };
            ".MuiListItem-dense": {
                padding: string;
                ".MuiListItemIcon-root": {
                    svg: {
                        width: string;
                        height: string;
                    };
                };
                ".MuiListItemText-root": {
                    padding: string;
                    margin: number;
                    ".MuiListItemText-primary": {
                        fontSize: import("csstype").Property.FontSize<string | number>;
                        lineHeight: import("csstype").Property.LineHeight<string | number>;
                    };
                    ".MuiListItemText-secondary": {
                        fontSize: import("csstype").Property.FontSize<string | number>;
                        lineHeight: import("csstype").Property.LineHeight<string | number>;
                    };
                };
            };
        };
    };
};
export {};
