/// <reference types="react" />
import { RadioProps as MuiRadioProps, RadioGroupProps as MuiRadioGroupProps } from "@mui/material";
export type RadioProps = Omit<MuiRadioProps, "size"> & {
    setFocused?: React.Dispatch<React.SetStateAction<boolean>>;
    setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
};
export type RadioGroupProps = Omit<MuiRadioGroupProps, "size">;
export type RadioWithCMSProps = Omit<RadioProps, "children"> & {
    contentId: string;
};
declare module "@mui/material/styles" {
    interface Palette {
        radioButton: RadioButtonType;
    }
    interface PaletteOptions {
        radioButton: RadioButtonType;
    }
}
export type RadioButtonType = {
    outlineFocus: string;
    default: {
        checked: string;
        unchecked: string;
        label: string;
    };
    hover: {
        color: string;
    };
    focus: {
        color: string;
    };
    error: {
        color: string;
    };
    disabled: {
        color: string;
        label: string;
    };
};
