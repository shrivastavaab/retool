import React from "react";
import type { TimeValuesType } from "./types";
type TimePickerFormType = {
    setInputValue: React.Dispatch<React.SetStateAction<string | null>>;
    closeMenu: () => void;
    timeValues: TimeValuesType;
    setTimeValues: React.Dispatch<React.SetStateAction<TimeValuesType>>;
    unconfirmedInputValue: string;
    setInitialTimeValues: React.Dispatch<React.SetStateAction<TimeValuesType>>;
};
export declare const TimePickerForm: React.FC<TimePickerFormType>;
export {};
