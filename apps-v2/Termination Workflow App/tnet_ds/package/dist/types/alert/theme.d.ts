export declare const MuiAlert: {
    defaultProps: {
        variant: string;
        severity: string;
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            [x: number]: {
                padding: any;
                height: string;
                display: string;
                alignItems: string;
                gap: any;
                ".MuiAlert-message": {
                    height: string;
                    flexDirection: string;
                    justifyContent: string;
                    alignItems: string;
                    gap: any;
                    ".MuiButton-root": {
                        alignSelf: string;
                        margin: number;
                    };
                };
                ".MuiAlert-action": {
                    alignItems: string;
                    padding: number;
                };
            };
            padding: any;
            boxSizing: string;
            gap: any;
            ".MuiAlert-action": {
                display: string;
                alignItems: string;
                padding: number;
                button: {
                    svg: {
                        width: string;
                        height: string;
                    };
                };
            };
            ".MuiAlert-icon": {
                padding: number;
                margin: number;
                svg: {
                    height: string;
                    width: string;
                };
            };
            ".MuiAlert-message": {
                width: string;
                display: string;
                justifyContent: string;
                alignItems: string;
                gap: any;
                padding: number;
                overflow: string;
                ".T1-alert-content": {
                    strong: {
                        fontFamily: any;
                        fontWeight: any;
                    };
                    a: {
                        textDecoration: string;
                        borderRadius: string;
                        "&:focus-visible": {
                            outline: string;
                            outlineOffset: any;
                        };
                    };
                };
            };
            variants: ({
                props: {
                    variant: string;
                    severity?: undefined;
                };
                style: {
                    borderRadius: number;
                    ".MuiAlert-message": {
                        ".T1-alert-content": {
                            ".T1-button-link": {
                                "&.Mui-disabled": {
                                    color: any;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                color?: undefined;
                                "&:after"?: undefined;
                                "&:hover"?: undefined;
                                "&:active"?: undefined;
                                "&.Mui-focusVisible"?: undefined;
                            };
                            a?: undefined;
                        };
                        ".MuiTypography-root"?: undefined;
                        ".MuiButton-contrastOutline"?: undefined;
                        ".MuiButton-link"?: undefined;
                    };
                    backgroundColor?: undefined;
                    border?: undefined;
                    ".MuiAlert-icon"?: undefined;
                    ".MuiAlert-action"?: undefined;
                    ".T1-alert-content"?: undefined;
                    ".MuiAlert-icon svg"?: undefined;
                    ".MuiAlert-action button"?: undefined;
                    "&.MuiAlert-root"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    severity: string;
                };
                style: {
                    backgroundColor: string;
                    border: string;
                    ".MuiAlert-icon": {
                        svg: {
                            color: string;
                        };
                    };
                    ".MuiAlert-action": {
                        button: {
                            "&:focus-visible": {
                                outline: string;
                                outlineOffset: any;
                            };
                            svg: {
                                color: string;
                            };
                        };
                        padding?: undefined;
                    };
                    ".MuiAlert-message": {
                        ".T1-alert-content": {
                            ".T1-button-link": {
                                color: string;
                                "&:after": {
                                    borderBottom: string;
                                };
                                "&:hover": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&:active": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&.Mui-focusVisible": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&.Mui-disabled"?: undefined;
                            };
                            a: {
                                color: string;
                                borderBottom: string;
                            };
                        };
                        ".MuiTypography-root": {
                            color: string;
                        };
                        ".MuiButton-contrastOutline": {
                            color: string;
                            borderColor: string;
                            "&:focus": {
                                outline: string;
                            };
                        };
                        ".MuiButton-link"?: undefined;
                    };
                    borderRadius?: undefined;
                    ".T1-alert-content"?: undefined;
                    ".MuiAlert-icon svg"?: undefined;
                    ".MuiAlert-action button"?: undefined;
                    "&.MuiAlert-root"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    severity?: undefined;
                };
                style: {
                    borderRadius: any;
                    border: string;
                    ".T1-alert-content": {
                        a: {
                            color: any;
                            "&:hover, &hover:focus-visible": {
                                borderColor: any;
                                color: any;
                            };
                            "&:active": {
                                color: any;
                                borderColor: any;
                            };
                            "&:focus-visible": {
                                color: any;
                                borderBottom: string;
                            };
                        };
                    };
                    ".MuiAlert-message"?: undefined;
                    backgroundColor?: undefined;
                    ".MuiAlert-icon"?: undefined;
                    ".MuiAlert-action"?: undefined;
                    ".MuiAlert-icon svg"?: undefined;
                    ".MuiAlert-action button"?: undefined;
                    "&.MuiAlert-root"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    severity: string;
                };
                style: {
                    backgroundColor: string;
                    border: string;
                    ".MuiAlert-icon svg": {
                        color: string;
                    };
                    ".MuiAlert-action button": {
                        "&:focus": {
                            outline: string;
                            borderRadius: string;
                        };
                        svg: {
                            color: string;
                        };
                    };
                    ".MuiAlert-message": {
                        ".MuiTypography-root": {
                            color: string;
                        };
                        ".MuiButton-link": {
                            color: string;
                            borderColor: string;
                            marginLeft: any;
                        };
                        ".T1-alert-content"?: undefined;
                        ".MuiButton-contrastOutline"?: undefined;
                    };
                    borderRadius?: undefined;
                    ".MuiAlert-icon"?: undefined;
                    ".MuiAlert-action"?: undefined;
                    ".T1-alert-content"?: undefined;
                    "&.MuiAlert-root"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    severity?: undefined;
                };
                style: {
                    "&.MuiAlert-root": {
                        gap: string;
                        padding: number;
                    };
                    ".MuiAlert-action": {
                        padding: string;
                        button?: undefined;
                    };
                    ".MuiAlert-message": {
                        ".T1-alert-content": {
                            ".T1-button-link": {
                                "&.Mui-disabled": {
                                    color: any;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                color?: undefined;
                                "&:after"?: undefined;
                                "&:hover"?: undefined;
                                "&:active"?: undefined;
                                "&.Mui-focusVisible"?: undefined;
                            };
                            a?: undefined;
                        };
                        ".MuiTypography-root"?: undefined;
                        ".MuiButton-contrastOutline"?: undefined;
                        ".MuiButton-link"?: undefined;
                    };
                    borderRadius?: undefined;
                    backgroundColor?: undefined;
                    border?: undefined;
                    ".MuiAlert-icon"?: undefined;
                    ".T1-alert-content"?: undefined;
                    ".MuiAlert-icon svg"?: undefined;
                    ".MuiAlert-action button"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    severity: string;
                };
                style: {
                    borderRadius: number;
                    border: string;
                    ".MuiAlert-icon": {
                        svg: {
                            color: string;
                        };
                    };
                    ".MuiAlert-action": {
                        button: {
                            "&:focus-visible": {
                                outline: string;
                                outlineOffset: any;
                            };
                            svg: {
                                color: string;
                            };
                        };
                        padding?: undefined;
                    };
                    ".MuiAlert-message": {
                        ".T1-alert-content": {
                            ".T1-button-link": {
                                color: string;
                                "&:after": {
                                    borderBottom: string;
                                };
                                "&:hover": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&:active": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&.Mui-focusVisible": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&.Mui-disabled"?: undefined;
                            };
                            a: {
                                color: string;
                                borderBottom: string;
                            };
                        };
                        ".MuiTypography-root": {
                            color: string;
                        };
                        ".MuiButton-contrastOutline": {
                            color: string;
                            borderColor: string;
                            "&:focus": {
                                outline: string;
                            };
                        };
                        ".MuiButton-link"?: undefined;
                    };
                    backgroundColor?: undefined;
                    ".T1-alert-content"?: undefined;
                    ".MuiAlert-icon svg"?: undefined;
                    ".MuiAlert-action button"?: undefined;
                    "&.MuiAlert-root"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    severity: string;
                };
                style: {
                    border: string;
                    ".MuiAlert-icon": {
                        svg: {
                            color: string;
                        };
                    };
                    ".MuiAlert-action": {
                        button: {
                            "&:focus-visible": {
                                outline: string;
                                outlineOffset: any;
                            };
                            svg: {
                                color: string;
                            };
                        };
                        padding?: undefined;
                    };
                    ".MuiAlert-message": {
                        ".T1-alert-content": {
                            ".T1-button-link": {
                                color: string;
                                "&:after": {
                                    borderBottom: string;
                                };
                                "&:hover": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&:active": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&.Mui-focusVisible": {
                                    color: string;
                                    "&:after": {
                                        borderBottom: string;
                                    };
                                };
                                "&.Mui-disabled"?: undefined;
                            };
                            a: {
                                color: string;
                                borderBottom: string;
                            };
                        };
                        ".MuiTypography-root": {
                            color: string;
                        };
                        ".MuiButton-contrastOutline": {
                            color: string;
                            borderColor: string;
                            "&:focus": {
                                outline: string;
                            };
                        };
                        ".MuiButton-link"?: undefined;
                    };
                    borderRadius?: undefined;
                    backgroundColor?: undefined;
                    ".T1-alert-content"?: undefined;
                    ".MuiAlert-icon svg"?: undefined;
                    ".MuiAlert-action button"?: undefined;
                    "&.MuiAlert-root"?: undefined;
                };
            })[];
        };
    };
};
export declare const MuiAlertTitle: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            fontFamily: any;
            lineHeight: any;
            fontSize: any;
            margin: number;
        };
    };
};
