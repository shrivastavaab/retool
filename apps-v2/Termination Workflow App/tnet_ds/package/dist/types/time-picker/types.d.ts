import { StackProps } from "@mui/system";
import { ReactNode } from "react";
export type TimeValuesType = {
    hours: number;
    minutes: number;
    aa: number;
    timeZone?: number;
};
export type AddZeroesType = (number: number) => string;
declare module "@mui/material/styles" {
    interface Palette {
        timePicker: TimePickerType;
    }
    interface PaletteOptions {
        timePicker: TimePickerType;
    }
}
export interface TimePickerType {
    selectionBand: string;
    background: string;
    formColumnHeader: string;
    formButtonColor: string;
}
export type ColumnTypes = "hours" | "minutes" | "aa" | "timeZone";
export type TimePickerFormColumnProps = {
    children: ReactNode[];
    type: ColumnTypes;
    selectedIndex: number;
    setTimeValues: React.Dispatch<React.SetStateAction<TimeValuesType>>;
};
export type TimePickerProps = {
    variant?: "regular" | "timezone";
    onValueChange?: (val: string) => void;
};
export type HandleSelectionFormButtonKeyDownType = (event: React.KeyboardEvent<HTMLButtonElement>, column: ColumnTypes) => void;
export type StyledColumnProps = StackProps & {
    selectedIndex: number;
};
