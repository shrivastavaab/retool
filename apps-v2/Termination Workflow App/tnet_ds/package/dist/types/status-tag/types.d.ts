import type { ButtonProps } from "@mui/material";
export type StatusTagVariant = "affirmation" | "neutral" | "caution" | "negation" | "information" | "alert";
export type StatusTagProps = {
    variant?: StatusTagVariant;
    size?: "large" | "medium" | "small";
    children?: string;
} & Pick<ButtonProps, "startIcon" | "endIcon">;
type statusTag = {
    body: string;
    border: string;
    color: string;
};
export type StatusTagType = {
    affirmation: statusTag;
    neutral: statusTag;
    caution: statusTag;
    negation: statusTag;
    information: statusTag;
    alert: statusTag;
};
export interface ProductBadgeType {
    orange: {
        bgColor: string;
        color: string;
        vector: string;
    };
    blue: {
        bgColor: string;
        color: string;
        vector: string;
    };
    navy: {
        bgColor: string;
        border: string;
        color: string;
        vector: string;
    };
    green: {
        bgColor: string;
        color: string;
        vector: string;
    };
    grey: {
        color: string;
        bgColor: string;
        vector: string;
    };
    violet: {
        bgColor: string;
        color: string;
        vector: string;
    };
}
export type BadgeColor = "orange" | "blue" | "navy" | "green" | "grey" | "violet";
export type BadgeVariant = "rounded" | "ribbon" | "3d";
export type ProductBadgeProps = {
    color: BadgeColor;
    variant?: BadgeVariant;
    content: string;
};
export {};
