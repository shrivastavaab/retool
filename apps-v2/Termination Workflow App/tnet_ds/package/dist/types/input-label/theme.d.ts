import type { Theme } from "@mui/material/styles";
export declare const getInputLabelStyles: ({ theme }: {
    theme: Theme;
}) => {
    color: string;
    fontFamily: import("csstype").Property.FontFamily;
    fontSize: import("csstype").Property.FontSize<string | number>;
    lineHeight: import("csstype").Property.LineHeight<string | number>;
    background: string;
    whiteSpace: string;
    overflow: string;
    textOverflow: string;
    maxWidth: string;
    paddingRight: string;
    top: string;
    right: string;
    "&.Mui-focused": {
        right: string;
        top: string;
        transform: string;
    };
    "&.MuiInputLabel-sizeSmall": {
        fontFamily: import("csstype").Property.FontFamily;
        fontSize: import("csstype").Property.FontSize<string | number>;
        lineHeight: import("csstype").Property.LineHeight<string | number>;
        top: number;
    };
    "&.MuiInputLabel-shrink": {
        fontFamily: import("csstype").Property.FontFamily;
        fontSize: import("csstype").Property.FontSize<string | number>;
        lineHeight: import("csstype").Property.LineHeight<string | number>;
        top: number;
        height: import("csstype").Property.LineHeight<string | number>;
        paddingLeft: string;
        transform: string;
        background: string;
        "&.Mui-error": {
            color: string;
            "&.Mui-focused": {
                color: string;
            };
        };
        "&.MuiInputLabel-sizeSmall": {};
    };
    "&.Mui-error": {
        color: string;
    };
    "&.Mui-disabled": {
        opacity: number;
        color: string;
        background: string;
    };
    "&.Mui-focused.Mui-readOnly": {
        color: string;
    };
    zIndex: number;
};
export declare const MuiInputLabel: {
    defaultProps: {
        variant: "outlined";
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            color: string;
            fontFamily: import("csstype").Property.FontFamily;
            fontSize: import("csstype").Property.FontSize<string | number>;
            lineHeight: import("csstype").Property.LineHeight<string | number>;
            background: string;
            whiteSpace: string;
            overflow: string;
            textOverflow: string;
            maxWidth: string;
            paddingRight: string;
            top: string;
            right: string;
            "&.Mui-focused": {
                right: string;
                top: string;
                transform: string;
            };
            "&.MuiInputLabel-sizeSmall": {
                fontFamily: import("csstype").Property.FontFamily;
                fontSize: import("csstype").Property.FontSize<string | number>;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                top: number;
            };
            "&.MuiInputLabel-shrink": {
                fontFamily: import("csstype").Property.FontFamily;
                fontSize: import("csstype").Property.FontSize<string | number>;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                top: number;
                height: import("csstype").Property.LineHeight<string | number>;
                paddingLeft: string;
                transform: string;
                background: string;
                "&.Mui-error": {
                    color: string;
                    "&.Mui-focused": {
                        color: string;
                    };
                };
                "&.MuiInputLabel-sizeSmall": {};
            };
            "&.Mui-error": {
                color: string;
            };
            "&.Mui-disabled": {
                opacity: number;
                color: string;
                background: string;
            };
            "&.Mui-focused.Mui-readOnly": {
                color: string;
            };
            zIndex: number;
        };
    };
};
