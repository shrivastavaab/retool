import type { Theme } from "@mui/material/styles";
export declare const linkTheme: (theme: Theme) => {
    default: string;
    hover: string;
    active: string;
    disabled: string;
};
export declare const MuiLink: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            color: string;
            fontFamily: import("csstype").Property.FontFamily;
            fontSize: import("csstype").Property.FontSize<string | number>;
            textDecoration: string;
            cursor: string;
            display: string;
            padding: string;
            borderRadius: string;
            position: string;
            height: import("csstype").Property.LineHeight<string | number>;
            whiteSpace: string;
            "&:after": {
                content: string;
                position: string;
                left: string;
                right: string;
                bottom: string;
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
            "&:focus": {
                color: string;
                outline: string;
                "&:after": {
                    borderBottom: string;
                };
            };
            "&.T1-link-disabled": {
                color: string;
                pointerEvents: string;
                cursor: string;
                "&:hover, &:active, &:focus": {
                    color: string;
                    "&:after": {
                        borderBottom: string;
                    };
                };
            };
            "&.T1-link-medium": {
                fontSize: import("csstype").Property.FontSize<string | number>;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                padding: string;
                height: import("csstype").Property.LineHeight<string | number>;
                "&:after": {
                    left: string;
                    right: string;
                    bottom: string;
                };
            };
            "&.T1-link-small": {
                fontSize: import("csstype").Property.FontSize<string | number>;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                padding: string;
                height: import("csstype").Property.LineHeight<string | number>;
                "&:after": {
                    left: string;
                    right: string;
                    bottom: string;
                };
            };
        };
    };
};
