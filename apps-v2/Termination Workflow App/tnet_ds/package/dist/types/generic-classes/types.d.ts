declare module "@mui/material/styles" {
    interface Palette {
        genericClasses: GenericClassesType;
    }
    interface PaletteOptions {
        genericClasses: GenericClassesType;
    }
}
export interface GenericClassesType {
    backgroundColorLightBlue: string;
    backgroundColorLightGray: string;
    backgroundColorWhiteBox: string;
    border: string;
    depth: {
        background: {
            bg: string;
        };
        depth0: {
            bg: string;
            border: string;
        };
        depth1: {
            bg: string;
            border?: string;
            shadow: string;
        };
        depth2: {
            bg: string;
            border?: string;
            shadow: string;
        };
        headerDepth: {
            bg: string;
            shadow: string;
        };
    };
}
