/// <reference types="react" />
import { Theme } from "@mui/material/styles";
import type { CardType, EventCardType, ActionCardHeaderType, InfoCardType } from "./types";
export declare const StyledInfoCard: import("@emotion/styled").StyledComponent<import("@mui/material").CardOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "style" | "classes" | "children" | "sx" | "elevation" | "square" | "variant" | "raised"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledInfoIconContainer: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledInfoTextContainer: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const infoCardTheme: (theme: Theme) => InfoCardType;
export declare const cardTheme: (theme: Theme) => CardType;
export declare const eventCardTheme: (theme: Theme) => EventCardType;
export declare const actionCardHeaderTheme: (theme: Theme) => ActionCardHeaderType;
export declare const MuiCard: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            backgroundColor: string;
            borderRadius: string;
            border: string;
            display: string;
            flexDirection: string;
            boxShadow: string;
            "&.MuiPaper-elevation1": {
                boxShadow: any;
            };
            "&.MuiPaper-elevation2": {
                boxShadow: any;
            };
            variants: ({
                props: {
                    variant: string;
                };
                style: {
                    ".MuiCardHeader-root": {
                        backgroundColor: string;
                        outline: string;
                        padding: any;
                        "&.T1-cardHeader-withDivider"?: undefined;
                    };
                };
            } | {
                props: {
                    variant: string;
                };
                style: {
                    ".MuiCardHeader-root": {
                        "&.T1-cardHeader-withDivider": {
                            outline: string;
                            padding: any;
                        };
                        backgroundColor?: undefined;
                        outline?: undefined;
                        padding?: undefined;
                    };
                };
            })[];
        };
    };
};
export declare const MuiCardHeader: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            display: string;
            padding: any;
            alignItems: string;
            alignSelf: string;
            borderRadius: any;
            ".MuiCardHeader-title": {
                fontFamily: any;
                fontSize: any;
                lineHeight: any;
                color: any;
            };
            ".MuiCardHeader-action": {
                padding: number;
                margin: number;
                display: string;
                justifyContent: string;
                alignItems: string;
                button: {
                    padding: number;
                    svg: {
                        color: string;
                        height: string;
                        width: string;
                    };
                };
            };
        };
    };
};
export declare const MuiCardActions: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            display: string;
            justifyContent: string;
            alignItems: string;
            alignSelf: string;
            flexDirection: string;
            padding: any;
            borderTop: string;
            ".T1-cardActions-primaryActionsContainer": {
                display: string;
                justifyContent: string;
                alignItems: string;
                gap: any;
            };
        };
    };
};
export declare const MuiCardContent: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            padding: any;
            margin: string;
            fontFamily: any;
            fontSize: any;
            lineHeight: any;
            ".CMS-content": {
                fontFamily: any;
            };
        };
    };
};
export declare const StyledEventCard: import("@emotion/styled").StyledComponent<import("@mui/material").CardOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "style" | "classes" | "children" | "sx" | "elevation" | "square" | "variant" | "raised"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventCardContent: import("@emotion/styled").StyledComponent<import("@mui/material").CardContentOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "style" | "classes" | "children" | "sx"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventCardActions: import("@emotion/styled").StyledComponent<import("@mui/material").CardActionsProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventMenu: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventEmptyCell: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventHeaderCell: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventFooterCell: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledEventCardHeader: import("@emotion/styled").StyledComponent<import("@mui/material").CardHeaderOwnProps<"span", "span"> & import("@mui/material").CardHeaderSlotsAndSlotProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "style" | "classes" | "sx" | "title" | "action" | "slots" | "slotProps" | "subheader" | "avatar" | "disableTypography" | "subheaderTypographyProps" | "titleTypographyProps"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledActionCard: import("@emotion/styled").StyledComponent<import("@mui/material").CardOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, "className" | "style" | "classes" | "children" | "sx" | "elevation" | "square" | "variant" | "raised"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledActionCardHeader: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    variant?: "neutral" | "success" | "info" | "promotion" | "error" | "warning";
}, {}, {}>;
export declare const StyledActionCardContent: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledActionCardFooter: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledActionCardFooterLeft: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const StyledActionCardFooterRight: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
