/// <reference types="react" />
import type { TablePaginationProps } from "@mui/material";
type PaginatorPropsWithCMS = TablePaginationProps & {
    contentId?: string;
    count?: string;
};
type PaginatorPropsWithoutCMS = TablePaginationProps & {
    count: number;
};
export type PaginatorProps = PaginatorPropsWithCMS | PaginatorPropsWithoutCMS;
export interface PaginatorType {
    borderColor: string;
    actionBackground: string;
    actionColor: string;
    actionBackgroundDisabled: string;
    actionColorDisabled: string;
    dropdownColor: string;
}
export type TablePaginationActionsProps = {
    count?: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
    showFirstButton: boolean;
    showLastButton: boolean;
};
export {};
