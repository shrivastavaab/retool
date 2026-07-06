/// <reference types="react" />
import { IconButtonProps } from "@mui/material";
import type { AccordionProps as MuiAccordionProps } from "@mui/material";
import type { StatusTagVariant } from "../status-tag";
import type { StatusVariant } from "../status";
import type { MakeCMSCompatible } from "../utils/types";
export type AccordionType = {
    divider: string;
    background: {
        resting: string;
        hover: string;
        active: string;
        disabled: string;
    };
    body: string;
    text: {
        regular: string;
        disabled: string;
        advancedAccordion: {
            heading: string;
            subheading: string;
        };
    };
    icons: {
        error: string;
        success: string;
        indeterminate: string;
    };
    outline: string;
};
export type AccordionStates = "indeterminate" | "success" | "error" | undefined;
type BaseAccordionCustomProps = {
    state?: AccordionStates;
    edit?: boolean;
    iconReverse?: boolean;
    summary: React.ReactNode;
    children: React.ReactNode;
    variant?: Exclude<NonNullable<MuiAccordionProps["variant"]>, "elevation"> | "noSpace" | "boxless" | "simpleLink";
};
type AdvancedAccordionCustomProps = {
    subTitle: string;
    amount: string;
    tags: {
        variant: StatusTagVariant;
        text: string;
    }[];
    menuItems: {
        text: string;
        onClick: IconButtonProps["onClick"];
    }[];
    status: {
        text: string;
        variant: StatusVariant;
    };
    error?: boolean;
} & Pick<BaseAccordionCustomProps, "summary">;
export type AdvancedAccordionProps = AdvancedAccordionCustomProps & MuiAccordionProps;
type BaseAccordionProps = Omit<MuiAccordionProps, "children" | "title" | "variant"> & BaseAccordionCustomProps;
export type AccordionProps = MakeCMSCompatible<BaseAccordionProps, "summary" | "children">;
export type AccordionContainerProps = {
    variant?: "regular" | "elevation";
};
export {};
