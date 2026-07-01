/// <reference types="react" />
import type { ButtonProps as MuiButtonProps } from "@mui/material";
import type { NavLinkProps } from "react-router";
type BreadcrumbsSubItem = {
    title: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    active?: boolean;
    navLinkProps?: NavLinkProps;
};
type CustomBreadcrumbsItemProps = {
    title: React.ReactNode;
    icon?: React.ReactNode;
    subItems?: BreadcrumbsSubItem[];
};
export type BreadcrumbsItemProps = CustomBreadcrumbsItemProps & Omit<MuiButtonProps, "variant" | "color">;
export type BreadcrumbsType = {
    iconColor: string;
    color: string;
    externalIcon: string;
    active: {
        activeSeparator: string;
        color: string;
        iconColor: string;
    };
    hover: {
        backgroundColor: string;
        border: string;
    };
    focus: {
        border: string;
    };
    menu: {
        backgroundColor: string;
        border: string;
        color: string;
        activeBorder: string;
        activeColor: string;
    };
};
export {};
