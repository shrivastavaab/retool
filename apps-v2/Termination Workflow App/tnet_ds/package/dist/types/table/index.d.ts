import type { TableProps as MuiTableProps } from "@mui/material";
export { Table, TableHead, TableBody, TableFooter, TableSortLabel, TableCell, } from "@mui/material";
export type TableProps = MuiTableProps & {
    stickyFooter?: boolean;
};
export type { TableHeadProps, TableBodyProps, TableFooterProps, TableCellProps, } from "@mui/material";
export type { TableContainerProps, TableRowProps } from "./types";
export { TableContainer, TableRow } from "./component";
