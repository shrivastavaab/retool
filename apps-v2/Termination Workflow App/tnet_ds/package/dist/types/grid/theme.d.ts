import type { Theme } from "@mui/material/styles";
import { PaginatorProps } from "../paginator";
import React from "react";
export declare const gridTheme: (theme: Theme) => {
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
export declare const TableWrapperWithVariables: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const Pagination: React.FC<PaginatorProps>;
export declare const TableWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    isOverlayVisible: boolean;
}, {}, {}>;
