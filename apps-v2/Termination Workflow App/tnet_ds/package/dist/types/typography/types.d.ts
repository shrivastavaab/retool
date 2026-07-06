import type { TypographyProps as MuiTypographyProps } from "@mui/material";
export type TypographyType = {
    color: string;
    disabledColor: string;
};
type TypographyVariants = "input" | "cardTitle" | "tooltip" | "success" | "breadcrumbs" | "calendarHeader" | "calendarWeekIndicators?" | "paragraph" | "caption" | "overline" | "paragraphXl" | "paragraphLg" | "paragraphMd" | "paragraphSm" | "paragraphXs" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TypographyOptionalProps = {
    weight: "regular" | "medium" | "bold";
    variant: TypographyVariants;
};
export type TypographyWithOptionalProps = Omit<MuiTypographyProps, "variant"> & TypographyOptionalProps;
export type TypographyProps = Omit<MuiTypographyProps, "variant"> & Partial<TypographyOptionalProps>;
export {};
