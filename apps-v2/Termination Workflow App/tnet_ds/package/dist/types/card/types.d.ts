import React from "react";
import { CardContentProps as MuiCardContentProps, CardHeaderProps as MuiCardHeaderProps, CardProps as MuiCardProps } from "@mui/material";
import { ButtonArrangementProps } from "../buttons";
import { MakeCMSCompatible } from "../utils";
export interface CardType {
    background: string;
    backgroundTinted: string;
    border: string;
    divider: string;
    dividerTinted: string;
    borderCardPaper: string;
    icon: string;
}
declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
        regular: true;
        tinted: true;
        published: true;
        draft: true;
        greenPublished: true;
        action: true;
    }
}
type CardProps = Omit<MuiCardProps, "raised" | "variant" | "elevation"> & {
    variant?: "regular" | "tinted";
};
type CardActionsProps = {
    ButtonArrangementProps?: MakeCMSCompatible<ButtonArrangementProps>;
    children?: React.ReactNode;
};
type CardHeaderCustomProps = {
    divider?: boolean;
};
type BaseCardHeaderProps = MuiCardHeaderProps & CardHeaderCustomProps;
type CardHeaderProps = MakeCMSCompatible<BaseCardHeaderProps, "title">;
type CardContentProps = MakeCMSCompatible<MuiCardContentProps, "children">;
type CardWithCMSProps = {
    contentId: string;
    primaryCallback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    iconCallback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & CardProps;
export { CardActionsProps, CardContentProps, CardHeaderProps, CardProps, CardWithCMSProps, };
export type EventCardProps = Omit<MuiCardProps, "raised" | "variant" | "elevation"> & {
    variant?: "published" | "draft" | "greenPublished";
    onDeleteShift: () => void;
};
export type EventCardContentProps = CardContentProps & {
    content: string;
};
export type EventCardActionsProps = {
    content: string;
};
export type EventCellProps = {
    action: () => void;
};
type EventStyle = {
    background: string;
    border?: string;
    color?: string;
};
type Event = {
    background: string;
    border: string;
    color: string;
    hover: EventStyle;
};
export type EventCardType = {
    published: Event;
    draft: Event;
    publishedGreen: Event;
};
type ActionCardHeaderVariant = {
    background: string;
};
export type ActionCardHeaderType = {
    neutral: ActionCardHeaderVariant;
    success: ActionCardHeaderVariant;
    info: ActionCardHeaderVariant;
    promotion: ActionCardHeaderVariant;
    error: ActionCardHeaderVariant;
    warning: ActionCardHeaderVariant;
};
export interface ActionCardProps extends Omit<MuiCardProps, "variant"> {
    title: string;
    description?: string | React.ReactNode;
    statusLabel?: string;
    statusVariant?: "neutral" | "success" | "info" | "promotion" | "error" | "warning";
    checkboxLabel?: string;
    checked?: boolean;
    onCheckChange?: (checked: boolean) => void;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    primaryLabel?: string;
    secondaryLabel?: string;
    disableCheckbox?: boolean;
    disablePrimary?: boolean;
    disableSecondary?: boolean;
    hideCheckbox?: boolean;
    hideFooter?: boolean;
    className?: string;
}
export type InfoCardType = {
    container: {
        background: string;
        border: string;
    };
    icon: {
        background: string;
        color: string;
    };
};
export interface InfoCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}
