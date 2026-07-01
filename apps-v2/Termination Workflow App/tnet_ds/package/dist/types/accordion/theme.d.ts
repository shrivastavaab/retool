/// <reference types="react" />
import type { AccordionContainerProps } from "./types";
import { Theme } from "@mui/material";
export declare const StyledAccordion: import("@emotion/styled").StyledComponent<{
    children: NonNullable<import("react").ReactNode>;
    classes?: Partial<import("@mui/material").AccordionClasses>;
    defaultExpanded?: boolean;
    disabled?: boolean;
    disableGutters?: boolean;
    expanded?: boolean;
    onChange?: (event: import("react").SyntheticEvent<Element, Event>, expanded: boolean) => void;
    sx?: import("@mui/material").SxProps<Theme>;
    TransitionComponent?: import("react").JSXElementConstructor<import("@mui/material/transitions").TransitionProps & {
        children?: import("react").ReactElement<unknown, any>;
    }>;
    TransitionProps?: import("@mui/material/transitions").TransitionProps;
} & import("@mui/material").AccordionSlotsAndSlotProps & Omit<import("@mui/material").PaperOwnProps, "classes" | "onChange"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "sx" | "onChange" | "elevation" | "disabled" | "expanded" | "square" | "variant" | "defaultExpanded" | "disableGutters" | "TransitionComponent" | "TransitionProps" | keyof import("@mui/material").AccordionSlotsAndSlotProps> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledAccordionSummary: import("@emotion/styled").StyledComponent<import("@mui/material").AccordionSummaryOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "style" | "classes" | "children" | "sx" | "tabIndex" | "disabled" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "slots" | "slotProps" | "expandIcon"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledAccordionDetails: import("@emotion/styled").StyledComponent<import("@mui/material").AccordionDetailsProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledSummarySection: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const MuiAccordion: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            gap: any;
            boxShadow: string;
            backgroundColor: string;
            "&:hover": {
                backgroundColor: string;
            };
            "&:active": {
                backgroundColor: string;
            };
            "&:before": {
                opacity: number;
            };
            "&:focus-visible": {
                backgroundColor: string;
                outline: string;
            };
            borderBottom: string;
            "&.T1-accordion-boxless": {
                border: string;
                "&:hover": {
                    backgroundColor: string;
                };
                ".MuiAccordionSummary-root": {
                    flexDirection: string;
                    padding: number;
                    gap: any;
                    fontSize: any;
                    minHeight: string;
                    color: string;
                    svg: {
                        fontSize: any;
                        color: string;
                    };
                };
                ".MuiAccordionDetails-root": {
                    marginLeft: any;
                    padding: any;
                    borderRadius: any;
                };
            };
            "&.T1-accordion-simpleLink": {
                border: string;
                "&:hover": {
                    backgroundColor: string;
                };
                ".MuiAccordionSummary-root": {
                    padding: number;
                    fontSize: any;
                    minHeight: string;
                    color: string;
                    svg: {
                        fontSize: any;
                        color: string;
                    };
                };
                ".MuiAccordionDetails-root": {
                    borderRadius: any;
                    padding: number;
                };
            };
            "&.T1-accordion-noSpace": {
                ".MuiAccordionSummary-root": {
                    minHeight: string;
                    padding: any;
                };
                svg: {
                    color: string;
                };
                ".MuiAccordionDetails-root": {
                    padding: number;
                    backgroundColor: string;
                };
            };
            variants: {
                props: {
                    disabled: boolean;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                    cursor: string;
                };
            }[];
        };
    };
};
export declare const MuiAccordionSummary: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            gap: any;
            boxShadow: string;
            color: string;
            fontFamily: any;
            fontSize: any;
            lineHeight: any;
            padding: any;
            "&.Mui-focusVisible": {
                backgroundColor: string;
                outline: string;
                outlineOffset: string;
            };
            ".MuiAccordionSummary-content": {
                margin: number;
                "&.Mui-disabled": {
                    backgroundColor: string;
                };
                ".T1-accordionSummary-icon": {
                    marginRight: any;
                    "&.T1-accordionSummary-indeterminate-icon": {
                        color: string;
                    };
                    "&.T1-accordionSummary-success-icon": {
                        color: string;
                    };
                    "&.T1-accordionSummary-error-icon": {
                        color: string;
                    };
                };
            };
            variants: {
                props: {
                    disabled: boolean;
                };
                style: {
                    backgroundColor: string;
                    color: string;
                };
            }[];
        };
    };
};
export declare const MuiAccordionDetails: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            backgroundColor: string;
            padding: any;
        };
    };
};
export declare const AccordionContainer: import("@emotion/styled").StyledComponent<import("@mui/material").StackOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/material").StackOwnProps> & import("@mui/system").MUIStyledCommonProps<Theme> & AccordionContainerProps, {}, {}>;
