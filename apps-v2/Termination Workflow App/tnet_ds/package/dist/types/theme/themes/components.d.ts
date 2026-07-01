import type { OutlineType, BrandType, ThemeMap, ThemeNames } from "../types";
declare module "@mui/material/styles" {
    interface Palette {
        brand: BrandType;
        outline: OutlineType;
    }
    interface PaletteOptions {
        brand: BrandType;
        outline: OutlineType;
    }
    interface Theme {
        name: ThemeNames;
    }
}
export declare const components: (ThemeMap<object> | ThemeMap<string>)[];
