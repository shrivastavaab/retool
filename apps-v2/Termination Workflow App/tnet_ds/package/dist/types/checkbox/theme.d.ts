/// <reference types="react" />
import type { CheckboxType } from "./types";
import type { Theme } from "@mui/material/styles";
import type { ThemeMap } from "../theme/types";
export declare const checkboxTheme: ThemeMap<CheckboxType>;
export declare const _checkboxTheme: (theme: Theme) => CheckboxType;
export declare const MuiCheckbox: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            width: string;
            height: string;
            padding: any;
            boxSizing: string;
            ".MuiSvgIcon-root": {
                color: string;
            };
            "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                "& .MuiSvgIcon-root": {
                    color: string;
                };
            };
            "&.Mui-disabled": {
                cursor: string;
                pointerEvents: string;
                "& .MuiSvgIcon-root": {
                    color: string;
                };
                "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                    "& .MuiSvgIcon-root": {
                        color: string;
                    };
                };
            };
            "&.Mui-focusVisible": {
                "& .MuiSvgIcon-root": {
                    color: string;
                };
                "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                    "& .MuiSvgIcon-root": {
                        color: string;
                    };
                };
            };
        };
    };
};
export declare const StyledCheckboxHelperText: import("@emotion/styled").StyledComponent<import("@mui/material").FormHelperTextOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: import("react").Ref<HTMLParagraphElement>;
}, "className" | "style" | "classes" | "margin" | "children" | "sx" | "disabled" | "required" | "filled" | "variant" | "error" | "focused"> & {
    component?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements>;
} & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
