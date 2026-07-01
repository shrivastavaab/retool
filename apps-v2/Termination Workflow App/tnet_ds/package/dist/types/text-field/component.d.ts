/// <reference types="react" />
import { Theme } from "@mui/material/styles";
import type { OutlinedInputProps } from "@mui/material";
import type { TextFieldProps } from "./types";
export declare const TextField: import("react").ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const getOutlinedInputStyles: ({ theme }: {
    theme: Theme;
}) => {
    alignItems: string;
    outline: string;
    padding: number;
    height: string;
    color: string;
    fontFamily: import("csstype").Property.FontFamily;
    fontSize: import("csstype").Property.FontSize<string | number>;
    lineHeight: import("csstype").Property.LineHeight<string | number>;
    ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
        padding: string;
    };
    ".MuiIconButton-edgeEnd": {
        marginRight: string;
    };
    ".MuiIconButton-root": {
        ".MuiSvgIcon-root": {
            fill: string;
        };
    };
    "&.MuiInputBase-sizeSmall": {
        input: {
            padding: string;
        };
        height: string;
        fontSize: import("csstype").Property.FontSize<string | number>;
        lineHeight: import("csstype").Property.LineHeight<string | number>;
        fieldset: {
            span: {
                paddingRight: string;
            };
        };
    };
    "&:hover, &.T1-hover": {
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: string;
        };
        ".MuiIconButton-edgeEnd": {
            color: string;
        };
    };
    ".MuiIconButton-edgeEnd:focus-visible": {
        borderRadius: string;
        outline: string;
    };
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: string;
    };
    "&.Mui-error, &:hover.Mui-error": {
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: string;
            color: string;
        };
    };
    "&.Mui-disabled": {
        background: string;
        opacity: number;
        ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
            "-webkit-text-fill-color": string;
        };
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: string;
        };
    };
    "&.Mui-focused, &.T1-focused": {
        fieldset: {
            "&.MuiOutlinedInput-notchedOutline": {
                border: string;
            };
        };
        ".MuiIconButton-edgeEnd": {
            color: string;
        };
    };
    "&.MuiSearch": {
        backgroundColor: string;
        "&.Mui-focused": {
            backgroundColor: string;
        };
        input: {
            "&::placeholder": {
                color: string;
            };
        };
    };
    "&.MuiInputBase-multiline": {
        height: string;
    };
    input: {
        "&::-ms-reveal, &::-ms-clear": {
            display: string;
        };
    };
};
export declare const StyledOutlinedInput: import("@emotion/styled").StyledComponent<OutlinedInputProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
