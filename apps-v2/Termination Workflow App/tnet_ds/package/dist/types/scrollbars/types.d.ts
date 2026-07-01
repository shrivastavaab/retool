declare module "@mui/material/styles" {
    interface Palette {
        scrollbars: ScrollbarsType;
    }
    interface PaletteOptions {
        scrollbars: ScrollbarsType;
    }
}
export interface ScrollbarsType {
    background: string;
    color: string;
    hover: {
        background: string;
    };
    active: {
        background: string;
    };
}
