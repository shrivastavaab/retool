import React from "react";
import { BoxProps, StackProps } from "@mui/system";
export type TileProps = Omit<BoxProps, "title" | "onClick"> & {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    title?: React.ReactNode;
    selected?: boolean;
    error?: boolean;
    disabled?: boolean;
    elevated?: boolean;
    variant?: "default" | "badge" | "checkbox" | "radio";
    primaryAction?: {
        label: string;
        action: () => void;
    };
    secondaryAction?: {
        label: string;
        action: () => void;
    };
};
export type TileInputProps = StackProps & {
    tilePosition?: "right" | "left" | "top" | "bottom" | "middle";
    label?: string;
    disabled?: boolean;
    selected?: boolean;
};
export type InputScaleProps = StackProps & {
    options: TileInputProps[];
    onChange?: (value: string) => void;
    value?: string;
    variant: "row" | "column";
};
export interface TileType {
    background: string;
    border: string;
    text: string;
    badgeBackground: string;
    hover: {
        border: string;
    };
    active: {
        border: string;
    };
    selected: {
        border: string;
    };
    disabled: {
        background: string;
        border: string;
        text: string;
    };
    error: {
        border: string;
    };
}
export interface InputTileType {
    border: string;
    hover: {
        border: string;
    };
    active: {
        border: string;
    };
    focus: {
        border: string;
    };
    selected: {
        border: string;
        background: string;
        text: string;
    };
    disabled: {
        border: string;
        background: string;
        text: string;
    };
}
