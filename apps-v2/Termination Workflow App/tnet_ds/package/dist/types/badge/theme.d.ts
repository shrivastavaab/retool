import { Theme } from "@mui/material";
import type { BadgeType } from "./types";
export declare const badgeTheme: (theme: Theme) => BadgeType;
export declare const MuiBadge: {
    defaultProps: {
        variant: string;
    };
    styleOverrides: {
        badge: ({ theme }: {
            theme: any;
        }) => {
            color: string;
            backgroundColor: string;
            fontSize: any;
            fontFamily: any;
            lineHeight: any;
            width: number;
            height: number;
            padding: any;
            minWidth: number;
            ".MuiSvgIcon-root": {
                width: number;
                color: string;
            };
        };
        root: ({ theme }: {
            theme: any;
        }) => {
            width: string;
            height: string;
            "&:hover": {
                ".MuiBadge-dot": {
                    color: string;
                    backgroundColor: string;
                };
                ".MuiBadge-online": {
                    backgroundColor: string;
                };
            };
            variants: ({
                props: {
                    variant: string;
                };
                style: {
                    ".MuiBadge-badge": {
                        color: string;
                        backgroundColor: string;
                        width: number;
                        height: number;
                        minWidth: number;
                        transform?: undefined;
                        bottom?: undefined;
                        right?: undefined;
                        fontFamily?: undefined;
                        fontSize?: undefined;
                        lineHeight?: undefined;
                        display?: undefined;
                        alignContent?: undefined;
                        border?: undefined;
                        borderRadius?: undefined;
                        outline?: undefined;
                        ".MuiSvgIcon-root"?: undefined;
                    };
                    "&:hover"?: undefined;
                    "&.T1-badge-large"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                };
                style: {
                    ".MuiBadge-badge": {
                        backgroundColor: string;
                        color?: undefined;
                        width?: undefined;
                        height?: undefined;
                        minWidth?: undefined;
                        transform?: undefined;
                        bottom?: undefined;
                        right?: undefined;
                        fontFamily?: undefined;
                        fontSize?: undefined;
                        lineHeight?: undefined;
                        display?: undefined;
                        alignContent?: undefined;
                        border?: undefined;
                        borderRadius?: undefined;
                        outline?: undefined;
                        ".MuiSvgIcon-root"?: undefined;
                    };
                    "&:hover": {
                        ".MuiBadge-badge": {
                            backgroundColor: string;
                        };
                    };
                    "&.T1-badge-large"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                };
                style: {
                    ".MuiBadge-badge": {
                        transform: string;
                        bottom: any;
                        right: any;
                        minWidth: number;
                        width: number;
                        height: number;
                        backgroundColor: string;
                        fontFamily: any;
                        fontSize: any;
                        lineHeight: string;
                        display: string;
                        alignContent: string;
                        color: string;
                        border?: undefined;
                        borderRadius?: undefined;
                        outline?: undefined;
                        ".MuiSvgIcon-root"?: undefined;
                    };
                    "&.T1-badge-large": {
                        ".MuiBadge-badge": {
                            bottom: any;
                            right: any;
                            width: number;
                            height: number;
                            lineHeight: number;
                            fontSize: any;
                        };
                    };
                    "&:hover"?: undefined;
                };
            } | {
                props: {
                    variant: string;
                };
                style: {
                    ".MuiBadge-badge": {
                        bottom: any;
                        right: any;
                        transform: string;
                        border: string;
                        width: number;
                        height: number;
                        borderRadius: string;
                        backgroundColor: string;
                        outline: string;
                        ".MuiSvgIcon-root": {
                            color: string;
                        };
                        color?: undefined;
                        minWidth?: undefined;
                        fontFamily?: undefined;
                        fontSize?: undefined;
                        lineHeight?: undefined;
                        display?: undefined;
                        alignContent?: undefined;
                    };
                    "&:hover"?: undefined;
                    "&.T1-badge-large"?: undefined;
                };
            })[];
        };
    };
};
