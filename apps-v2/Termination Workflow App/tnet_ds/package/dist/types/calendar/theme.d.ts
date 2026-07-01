import type { Theme } from "@mui/material/styles";
import type { CalendarThemeType, CalendarType } from "./types";
import type { ThemeMap } from "../theme/types";
export declare const getCalendarPalette: (theme: Theme) => CalendarThemeType;
export declare const MuiPickersDay: {
    defaultProps: {
        disableRipple: boolean;
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            fontFamily: import("csstype").Property.FontFamily;
            fontSize: import("csstype").Property.FontSize<string | number>;
            width: string;
            height: string;
            margin: number;
            color: string;
            "&.week-enabled": {
                borderRadius: number;
            };
            "&.Mui-focusVisible": {
                backgroundColor: string;
                outline: string;
            };
            "&.Mui-selected": {
                backgroundColor: string;
                color: string;
                "&.week-enabled": {
                    backgroundColor: string;
                };
            };
            "&:hover": {
                backgroundColor: string;
                "&.week-enabled": {
                    backgroundColor: string;
                };
            };
            "&.MuiPickersDay-today": {
                border: string;
                backgroundColor: string;
                backgroundImage: string;
                color: string;
            };
            "&.MuiPickersDay-dayOutsideMonth": {
                color: string;
            };
            "&.range-start": {
                position: string;
                zIndex: number;
                borderRadius: string;
                "& > *": {
                    position: string;
                    zIndex: number;
                };
            };
            "&.range-start::before": {
                content: string;
                position: string;
                top: number;
                left: string;
                right: number;
                height: string;
                width: string;
                backgroundColor: string;
                zIndex: number;
                pointerEvents: string;
            };
            "&.range-start::after": {
                content: string;
                position: string;
                inset: number;
                borderRadius: string;
                backgroundColor: string;
                zIndex: number;
                pointerEvents: string;
            };
            "&.range-end": {
                position: string;
                zIndex: number;
                borderRadius: string;
                "& > *": {
                    position: string;
                    zIndex: number;
                };
                "&:before": {
                    content: string;
                    position: string;
                    top: number;
                    right: string;
                    left: number;
                    height: string;
                    width: string;
                    backgroundColor: string;
                    zIndex: number;
                    pointerEvents: string;
                };
                "&:after": {
                    content: string;
                    position: string;
                    inset: number;
                    borderRadius: string;
                    backgroundColor: string;
                    zIndex: number;
                    pointerEvents: string;
                };
            };
            "&.range-between": {
                borderRadius: string;
                backgroundColor: string;
                color: string;
                "&:hover": {
                    backgroundColor: string;
                    color: string;
                };
            };
        };
    };
};
export declare const MuiDateCalendar: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            [x: string]: string | number | {
                position: string;
                "&.week-hovers, &:has(.Mui-focusVisible)": {
                    "&:before": {
                        backgroundColor: string;
                        borderRadius: string;
                        content: string;
                        position: string;
                        top: number;
                        left: number;
                        right: number;
                        bottom: number;
                        pointerEvents: string;
                    };
                };
                "&.week-selected": {
                    "&:before": {
                        backgroundColor: string;
                        borderRadius: string;
                        content: string;
                        position: string;
                        top: number;
                        left: number;
                        right: number;
                        bottom: number;
                        pointerEvents: string;
                    };
                };
                padding?: undefined;
                "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit"?: undefined;
                borderTop?: undefined;
                borderBottom?: undefined;
                ".MuiDayCalendar-weekDayLabel"?: undefined;
                ".MuiButtonBase-root"?: undefined;
                ".MuiPickersCalendarHeader-labelContainer"?: undefined;
                ".MuiPickersArrowSwitcher-root"?: undefined;
                fontFamily?: undefined;
                fontSize?: undefined;
                margin?: undefined;
                color?: undefined;
                '&[tabindex="0"]:not(.Mui-selected)'?: undefined;
                "&.Mui-selected"?: undefined;
                "&:hover"?: undefined;
                "&.MuiPickersYear-currentYear:not(.Mui-selected)"?: undefined;
            } | {
                padding: string;
                position: string;
                "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit": {
                    position: string;
                };
                "&.week-hovers, &:has(.Mui-focusVisible)"?: undefined;
                "&.week-selected"?: undefined;
                borderTop?: undefined;
                borderBottom?: undefined;
                ".MuiDayCalendar-weekDayLabel"?: undefined;
                ".MuiButtonBase-root"?: undefined;
                ".MuiPickersCalendarHeader-labelContainer"?: undefined;
                ".MuiPickersArrowSwitcher-root"?: undefined;
                fontFamily?: undefined;
                fontSize?: undefined;
                margin?: undefined;
                color?: undefined;
                '&[tabindex="0"]:not(.Mui-selected)'?: undefined;
                "&.Mui-selected"?: undefined;
                "&:hover"?: undefined;
                "&.MuiPickersYear-currentYear:not(.Mui-selected)"?: undefined;
            } | {
                borderTop: string;
                borderBottom: string;
                ".MuiDayCalendar-weekDayLabel": {
                    color: string;
                };
                position?: undefined;
                "&.week-hovers, &:has(.Mui-focusVisible)"?: undefined;
                "&.week-selected"?: undefined;
                padding?: undefined;
                "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit"?: undefined;
                ".MuiButtonBase-root"?: undefined;
                ".MuiPickersCalendarHeader-labelContainer"?: undefined;
                ".MuiPickersArrowSwitcher-root"?: undefined;
                fontFamily?: undefined;
                fontSize?: undefined;
                margin?: undefined;
                color?: undefined;
                '&[tabindex="0"]:not(.Mui-selected)'?: undefined;
                "&.Mui-selected"?: undefined;
                "&:hover"?: undefined;
                "&.MuiPickersYear-currentYear:not(.Mui-selected)"?: undefined;
            } | {
                ".MuiButtonBase-root": {
                    "&.Mui-focusVisible": {
                        outline: string;
                    };
                };
                ".MuiPickersCalendarHeader-labelContainer": {
                    ".MuiPickersCalendarHeader-label": {
                        color: string;
                    };
                    ".MuiPickersCalendarHeader-switchViewButton": {
                        color: string;
                        ".MuiTouchRipple-root": {
                            display: string;
                        };
                    };
                };
                ".MuiPickersArrowSwitcher-root": {
                    ".MuiPickersArrowSwitcher-spacer": {
                        display: string;
                    };
                    ".MuiPickersArrowSwitcher-button": {
                        margin: number;
                        color: string;
                        ".MuiTouchRipple-root": {
                            display: string;
                        };
                    };
                };
                position?: undefined;
                "&.week-hovers, &:has(.Mui-focusVisible)"?: undefined;
                "&.week-selected"?: undefined;
                padding?: undefined;
                "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit"?: undefined;
                borderTop?: undefined;
                borderBottom?: undefined;
                ".MuiDayCalendar-weekDayLabel"?: undefined;
                fontFamily?: undefined;
                fontSize?: undefined;
                margin?: undefined;
                color?: undefined;
                '&[tabindex="0"]:not(.Mui-selected)'?: undefined;
                "&.Mui-selected"?: undefined;
                "&:hover"?: undefined;
                "&.MuiPickersYear-currentYear:not(.Mui-selected)"?: undefined;
            } | {
                fontFamily: import("csstype").Property.FontFamily;
                fontSize: import("csstype").Property.FontSize<string | number>;
                margin: string;
                color: string;
                '&[tabindex="0"]:not(.Mui-selected)': {
                    backgroundColor: string;
                    outline: string;
                };
                "&.Mui-selected": {
                    backgroundColor: string;
                    color: string;
                    '&[tabindex="0"]': {
                        outline: string;
                    };
                };
                "&:hover": {
                    backgroundColor: string;
                    color: string;
                };
                "&.MuiPickersYear-currentYear:not(.Mui-selected)": {
                    backgroundColor: string;
                    color: string;
                };
                position?: undefined;
                "&.week-hovers, &:has(.Mui-focusVisible)"?: undefined;
                "&.week-selected"?: undefined;
                padding?: undefined;
                "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit"?: undefined;
                borderTop?: undefined;
                borderBottom?: undefined;
                ".MuiDayCalendar-weekDayLabel"?: undefined;
                ".MuiButtonBase-root"?: undefined;
                ".MuiPickersCalendarHeader-labelContainer"?: undefined;
                ".MuiPickersArrowSwitcher-root"?: undefined;
            };
            ".MuiDayCalendar-weekContainer": {
                position: string;
                "&.week-hovers, &:has(.Mui-focusVisible)": {
                    "&:before": {
                        backgroundColor: string;
                        borderRadius: string;
                        content: string;
                        position: string;
                        top: number;
                        left: number;
                        right: number;
                        bottom: number;
                        pointerEvents: string;
                    };
                };
                "&.week-selected": {
                    "&:before": {
                        backgroundColor: string;
                        borderRadius: string;
                        content: string;
                        position: string;
                        top: number;
                        left: number;
                        right: number;
                        bottom: number;
                        pointerEvents: string;
                    };
                };
            };
            height: string;
            minHeight: string;
            maxHeight: string;
            backgroundColor: string;
            margin: number;
            ".MuiDayCalendar-monthContainer": {
                padding: string;
                position: string;
                "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit": {
                    position: string;
                };
            };
            ".MuiDayCalendar-header": {
                borderTop: string;
                borderBottom: string;
                ".MuiDayCalendar-weekDayLabel": {
                    color: string;
                };
            };
            ".MuiPickersCalendarHeader-root": {
                ".MuiButtonBase-root": {
                    "&.Mui-focusVisible": {
                        outline: string;
                    };
                };
                ".MuiPickersCalendarHeader-labelContainer": {
                    ".MuiPickersCalendarHeader-label": {
                        color: string;
                    };
                    ".MuiPickersCalendarHeader-switchViewButton": {
                        color: string;
                        ".MuiTouchRipple-root": {
                            display: string;
                        };
                    };
                };
                ".MuiPickersArrowSwitcher-root": {
                    ".MuiPickersArrowSwitcher-spacer": {
                        display: string;
                    };
                    ".MuiPickersArrowSwitcher-button": {
                        margin: number;
                        color: string;
                        ".MuiTouchRipple-root": {
                            display: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const calendarTheme: ThemeMap<CalendarType>;
