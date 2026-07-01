import { DesktopDatePickerProps as MuiDatePickerProps, PickersDayProps as MuiPickersDayProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { IconButtonProps } from "../icon-button";
import { BoxProps } from "../layout";
type NewSlotProps = Omit<NonNullable<MuiDatePickerProps["slotProps"]>, "openPickerButton"> & {
    openPickerButton?: IconButtonProps;
};
export type DisabledDatePreset = "weekends" | "weekdays";
export interface DisabledDateRange {
    from: Dayjs;
    to: Dayjs;
}
export type DisabledDateEntry = DisabledDatePreset | Dayjs | DisabledDateRange;
export type DatePickerProps = Omit<MuiDatePickerProps, "slotProps"> & {
    slotProps?: NewSlotProps;
    disabledDates?: DisabledDateEntry[];
};
export type PickersDayProps = MuiPickersDayProps;
export interface StyledPickerDayProps extends MuiPickersDayProps {
    isSelected: boolean;
    isInRange: boolean;
    isHovered: boolean;
    dayA: Dayjs | null;
    dayB: Dayjs | null;
}
export interface StyledDayBoxProps extends BoxProps {
    day: Dayjs;
    isSelected: boolean;
    isInRange: boolean;
    isHovered: boolean;
    hoveredDay: Dayjs | null;
    dayA: Dayjs | null;
    dayB: Dayjs | null;
}
export interface RangeDatePickerProps {
    value: [Dayjs | null, Dayjs | null];
    startDateLabel?: string;
    endDateLabel?: string;
    onChange?: (value: [Dayjs | null, Dayjs | null]) => void;
    format?: string;
    disabled?: boolean;
    error?: boolean;
    variant?: "regular" | "singleInput" | "conjoined";
}
export {};
