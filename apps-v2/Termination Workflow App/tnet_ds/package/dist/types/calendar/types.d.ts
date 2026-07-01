import { DateCalendarProps as MuiDateCalendarProps } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
export type DateRangeValue = {
    start: Dayjs | null;
    end: Dayjs | null;
};
export type CalendarType = {
    background: string;
    typography: string;
    typographySecondary: string;
    typographyButtons: string;
    weekBorder: string;
    selectionButton: {
        text: {
            default: string;
            current: string;
            selected: string;
        };
        background: {
            active: string;
            selected: string;
            current: string;
        };
    };
};
export type CalendarThemeType = CalendarType & {
    outsideMonthText: string;
};
type BaseCalendarProps = Omit<MuiDateCalendarProps, "onChange">;
type DefaultCalendarProps = BaseCalendarProps & {
    enableRange?: false;
    enableWeek?: false;
    onChange?: (value: Dayjs | null) => void;
};
type RangeCalendarProps = Omit<BaseCalendarProps, "value"> & {
    enableRange: true;
    enableWeek?: never;
    value?: DateRangeValue | null;
    onChange?: (value: DateRangeValue) => void;
};
type WeekCalendarProps = BaseCalendarProps & {
    enableWeek: true;
    enableRange?: never;
    onChange?: (value: DateRangeValue) => void;
};
export type DateCalendarProps = DefaultCalendarProps | RangeCalendarProps | WeekCalendarProps;
export {};
