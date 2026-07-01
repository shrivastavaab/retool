import { Dayjs } from "dayjs";
import { PickersDayProps } from "@mui/x-date-pickers";
export type T1SelectionRange = "weekly" | "biweekly" | "bimonthly" | "monthly";
export type T1CalendarEvents = "pay-period" | "pay-period-end-date" | "pay-date" | "changes-due" | "approve-by-date" | "no-benefits-deduction" | "holiday";
export type T1CalendarExtendedEvents = T1CalendarEvents | {
    type: T1CalendarEvents;
    label: string;
};
export interface T1SelectedDay {
    date: Date | Dayjs;
    events: T1CalendarExtendedEvents[];
}
export interface T1CalendarEventProps {
    startDate: Dayjs;
    endDate: Dayjs;
    selectionRange: T1SelectionRange;
    selectedDays?: T1SelectedDay[];
    onMonthChange?: (date: Dayjs) => void;
    onYearChange?: (date: Dayjs) => void;
}
export type CalendarEventType = {
    background: string;
    border: string;
    range: {
        active: {
            background: string;
            text: string;
        };
        inactive: {
            background: string;
        };
    };
    dayOutsideMonth: string;
    events: {
        "pay-period": {
            background: string;
            border: string;
            text: string;
        };
        "pay-period-end-date": {
            background: string;
            text: string;
        };
        "pay-date": {
            background: string;
            border: string;
            text: string;
        };
        "changes-due": {
            background: string;
            border: string;
            text: string;
        };
        "approve-by-date": {
            background: string;
            border: string;
            text: string;
        };
        "no-benefits-deduction": {
            background: string;
            border: string;
            dot: string;
            text: string;
        };
        holiday: {
            background: string;
            text: string;
        };
    };
};
export interface CustomDayProps extends PickersDayProps {
    startDate: Dayjs;
    endDate: Dayjs;
    selectionRange: T1SelectionRange;
    selectedDays?: T1SelectedDay[];
}
