import { Theme } from "@mui/material/styles";
import type { ChipType } from "./types";
export declare const chipTheme: (theme: Theme) => ChipType;
export declare const MuiChip: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            padding: any;
            color: string;
            background: string;
            border: string;
            fontFamily: any;
            fontSize: any;
            lineHeight: any;
            alignItems: string;
            justifyContent: string;
            alignSelf: string;
            ":focus": {
                outline: string;
            };
            ":active, :selected": {
                border: string;
            };
            "svg:active, svg:focus, svg:visited, svg:target": {
                outline: string;
            };
            ".MuiAvatar-root": {
                margin: number;
                marginRight: any;
            };
            "&.Mui-disabled": {
                opacity: string;
                cursor: string;
            };
            ".MuiInputBase-root": {
                color: string;
                position: string;
                top: any;
                left: number;
                right: number;
                height: string;
                display: string;
                whiteSpace: string;
                fontFamily: any;
                fontSize: any;
                lineHeight: any;
                ".MuiInputBase-input": {
                    padding: any;
                };
            };
            "&.T1-chip-editing": {
                border: string;
                background: string;
            };
            ".MuiIconButton-root:focus": {
                border: string;
                boxShadow: string;
            };
            ".MuiChip-label": {
                padding: any;
                paddingRight: any;
                fontSize: any;
                fontFamily: any;
                position: string;
                ".MuiBox-root": {
                    paddingRight: any;
                };
            };
            ".MuiSvgIcon-root": {
                fontSize: any;
                marginLeft: any;
                cursor: string;
                padding: number;
            };
            ".T1-InvisibleChipLabel": {
                width: string;
                opacity: number;
                padding: string;
            };
            variants: ({
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    color: string;
                    background: string;
                    "&:hover, &.MuiChipPrimary-hover": {
                        background: string;
                    };
                    border?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    height?: undefined;
                    borderRadius?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    color: string;
                    background: string;
                    border: string;
                    "&:hover, &.MuiChipNeutral-hover": {
                        background: string;
                        border: string;
                    };
                    "&:focus, &.MuiChipNeutral-focus": {
                        outline: string;
                        border: string;
                    };
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    height?: undefined;
                    borderRadius?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    color: string;
                    border: string;
                    background: string;
                    "&:hover, &.MuiChipWarning-hover": {
                        color: string;
                        background: string;
                        border: string;
                    };
                    "&:focus, &.MuiChipWarning-focus": {
                        outline: string;
                        border: string;
                    };
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    height?: undefined;
                    borderRadius?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    color: string;
                    border: string;
                    background: string;
                    "&:hover, MuiChipError-hover": {
                        color: string;
                        background: string;
                    };
                    "&:focus, &.MuiChipError-focus": {
                        outline: string;
                        border: string;
                    };
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    height?: undefined;
                    borderRadius?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    color: string;
                    border: string;
                    background: string;
                    outline: string;
                    "&:hover, &.MuiChipInfo-hover": {
                        color: string;
                        background: string;
                    };
                    "&:focus, &.MuiChipInfo-focus": {
                        outline: string;
                        border: string;
                    };
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    height?: undefined;
                    borderRadius?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    variant: string;
                    size?: undefined;
                };
                style: {
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover": {
                        border: string;
                        color: string;
                        backgroundColor: string;
                        ".MuiChip-label": {
                            fontFamily: any;
                        };
                        "&.T1-pill-chip-selected": {
                            border: string;
                            color: string;
                            ".MuiChip-label": {
                                fontFamily: any;
                            };
                        };
                    };
                    color?: undefined;
                    background?: undefined;
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    border?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    height?: undefined;
                    borderRadius?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                };
                style: {
                    height: any;
                    borderRadius: any;
                    padding: any;
                    color?: undefined;
                    background?: undefined;
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    border?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                };
                style: {
                    height: any;
                    borderRadius: any;
                    color?: undefined;
                    background?: undefined;
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    border?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    padding?: undefined;
                    fontSize?: undefined;
                    "&.T1-chip-editable"?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                };
                style: {
                    height: any;
                    padding: any;
                    fontSize: any;
                    "&.T1-chip-editable": {
                        padding: any;
                    };
                    color?: undefined;
                    background?: undefined;
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    border?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    borderRadius?: undefined;
                    paddingLeft?: undefined;
                    paddingRight?: undefined;
                };
            } | {
                props: {
                    size: string;
                    variant?: undefined;
                };
                style: {
                    height: any;
                    padding: any;
                    paddingLeft: any;
                    paddingRight: any;
                    "&.T1-chip-editable": {
                        padding: any;
                    };
                    color?: undefined;
                    background?: undefined;
                    "&:hover, &.MuiChipPrimary-hover"?: undefined;
                    border?: undefined;
                    "&:hover, &.MuiChipNeutral-hover"?: undefined;
                    "&:focus, &.MuiChipNeutral-focus"?: undefined;
                    "&:hover, &.MuiChipWarning-hover"?: undefined;
                    "&:focus, &.MuiChipWarning-focus"?: undefined;
                    "&:hover, MuiChipError-hover"?: undefined;
                    "&:focus, &.MuiChipError-focus"?: undefined;
                    outline?: undefined;
                    "&:hover, &.MuiChipInfo-hover"?: undefined;
                    "&:focus, &.MuiChipInfo-focus"?: undefined;
                    "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover"?: undefined;
                    borderRadius?: undefined;
                    fontSize?: undefined;
                };
            })[];
        };
    };
};
