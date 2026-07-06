import { SliderProps as SliderPropsMui } from "@mui/material";
export type SliderProps = Pick<SliderPropsMui, "value" | "onChange" | "defaultValue" | "disabled" | "min" | "max">;
type SliderStyle = {
    thumb: {
        color: string;
        border: string;
    };
    rail: {
        color: string;
    };
    track: {
        color: string;
    };
    label: {
        color: string;
        background: string;
    };
};
export type SliderType = {
    default: SliderStyle;
    disabled: SliderStyle;
};
export {};
