import React from "react";
import { ColDef } from "ag-grid-community";
type GridBaseProps<T> = {
    rows: T[];
    cols: ColDef<T>[];
    filter?: boolean;
    resizable?: boolean;
    columnPin?: boolean;
    blockClicks?: boolean;
    pagination?: boolean;
    paginationPageSize?: number;
    style?: React.CSSProperties;
    noRowsMessage?: React.ReactNode;
};
type WithOverlay<T> = GridBaseProps<T> & {
    isOverlayVisible: true;
    overlayPosition?: "left" | "right";
    OverlayContent?: React.ReactNode;
    drawerTitle?: string;
    onCloseOverlay: () => void;
};
type WithoutOverlay<T> = GridBaseProps<T> & {
    isOverlayVisible?: false;
    overlayPosition?: never;
    OverlayContent?: never;
    onCloseOverlay?: never;
};
export type GridProps<T> = WithOverlay<T> | WithoutOverlay<T>;
export type CustomNoRowsOverlayProps = {
    noRowsMessageFunc: () => React.ReactNode;
};
export type GridType = {
    background: string;
    color: string;
    borderColor: string;
    header: {
        background: string;
        hover: {
            background: string;
        };
    };
    innerFilter: {
        background: string;
    };
};
export {};
