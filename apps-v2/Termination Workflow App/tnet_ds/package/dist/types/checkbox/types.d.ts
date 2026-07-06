/// <reference types="react" />
import type { CheckboxProps as MuiCheckboxProps } from "@mui/material";
export type CheckboxProps = MuiCheckboxProps & {
    setFocused?: React.Dispatch<React.SetStateAction<boolean>>;
};
declare module "@mui/material/styles" {
    interface Palette {
        checkbox: CheckboxType;
    }
    interface PaletteOptions {
        checkbox: CheckboxType;
    }
}
export interface CheckboxType {
    outlineFocus: string;
    subheading: string;
    svgColor: string;
    default: {
        checked: string;
        unchecked: string;
        label: string;
    };
    hover: {
        checked: string;
        unchecked: string;
        label: string;
    };
    focus: {
        checked: string;
        unchecked: string;
        label: string;
    };
    error: {
        checked: string;
        unchecked: string;
        label: string;
    };
    disabled: {
        checked: string;
        unchecked: string;
        label: string;
    };
}
