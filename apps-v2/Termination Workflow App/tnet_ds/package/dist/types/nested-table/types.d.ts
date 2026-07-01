import type { TableBodyProps as MuiTableBodyProps } from "@mui/material";
declare module "@mui/material/styles" {
    interface Palette {
        nestedTable: NestedTableType;
    }
    interface PaletteOptions {
        nestedTable: NestedTableType;
    }
}
export type NestedTableType = {
    text: string;
    background: string;
    border: string;
};
export type CustomNestedTableBodyProps = {
    divider?: boolean;
};
export type NestedTableBodyWithRequireCustomProps = MuiTableBodyProps & CustomNestedTableBodyProps;
export type NestedTableBodyProps = MuiTableBodyProps & Partial<CustomNestedTableBodyProps>;
