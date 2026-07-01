import type { Theme } from "@mui/material/styles";
export declare const datePickerTheme: (theme: Theme) => {
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
    content: {
        background: string;
        typography: string;
        typographySecondary: string;
        weekBorder: string;
    };
};
export declare const MuiPickersLayout: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            [x: string]: {
                [x: string]: string | {
                    height: string;
                    minHeight: string;
                    maxHeight: string;
                    padding?: undefined;
                    position?: undefined;
                    borderTop?: undefined;
                    borderBottom?: undefined;
                    ".MuiPickersArrowSwitcher-spacer"?: undefined;
                    ".MuiPickersArrowSwitcher-button"?: undefined;
                } | {
                    [x: string]: string | {
                        position: string;
                    };
                    padding: string;
                    position: string;
                    height?: undefined;
                    minHeight?: undefined;
                    maxHeight?: undefined;
                    borderTop?: undefined;
                    borderBottom?: undefined;
                    ".MuiPickersArrowSwitcher-spacer"?: undefined;
                    ".MuiPickersArrowSwitcher-button"?: undefined;
                } | {
                    [x: string]: string | {
                        color: string;
                    };
                    borderTop: string;
                    borderBottom: string;
                    height?: undefined;
                    minHeight?: undefined;
                    maxHeight?: undefined;
                    padding?: undefined;
                    position?: undefined;
                    ".MuiPickersArrowSwitcher-spacer"?: undefined;
                    ".MuiPickersArrowSwitcher-button"?: undefined;
                } | {
                    [x: string]: {
                        color: string;
                    };
                    height?: undefined;
                    minHeight?: undefined;
                    maxHeight?: undefined;
                    padding?: undefined;
                    position?: undefined;
                    borderTop?: undefined;
                    borderBottom?: undefined;
                    ".MuiPickersArrowSwitcher-spacer"?: undefined;
                    ".MuiPickersArrowSwitcher-button"?: undefined;
                } | {
                    ".MuiPickersArrowSwitcher-spacer": {
                        display: string;
                    };
                    ".MuiPickersArrowSwitcher-button": {
                        [x: string]: string | number | {
                            display: string;
                        };
                        margin: number;
                        color: string;
                    };
                    height?: undefined;
                    minHeight?: undefined;
                    maxHeight?: undefined;
                    padding?: undefined;
                    position?: undefined;
                    borderTop?: undefined;
                    borderBottom?: undefined;
                };
                boxShadow: string;
                backgroundColor: string;
                ".MuiPickersArrowSwitcher-root": {
                    ".MuiPickersArrowSwitcher-spacer": {
                        display: string;
                    };
                    ".MuiPickersArrowSwitcher-button": {
                        [x: string]: string | number | {
                            display: string;
                        };
                        margin: number;
                        color: string;
                    };
                };
                fontFamily?: undefined;
                fontSize?: undefined;
                margin?: undefined;
                color?: undefined;
                '&[tabindex="0"]:not(.Mui-selected)'?: undefined;
                "&.Mui-selected"?: undefined;
                "&:hover"?: undefined;
                "&[aria-current='date']:not(.Mui-selected)"?: undefined;
            } | {
                fontFamily: import("csstype").Property.FontFamily;
                fontSize: import("csstype").Property.FontSize<string | number>;
                margin: number;
                color: string;
                '&[tabindex="0"]:not(.Mui-selected)': {
                    backgroundColor: string;
                    color: string;
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
                "&[aria-current='date']:not(.Mui-selected)": {
                    backgroundColor: string;
                    color: string;
                };
                boxShadow?: undefined;
                backgroundColor?: undefined;
                ".MuiPickersArrowSwitcher-root"?: undefined;
            };
        };
    };
};
