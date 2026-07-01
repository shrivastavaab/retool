import { Theme } from "@mui/material/styles";
import type { ThemeMap, ThemeNames } from "./types.ts";
export { ThemeProvider } from "./themeProvider.tsx";
export declare const getTheme: (themeName: ThemeNames, components: ThemeMap<unknown>[]) => Theme;
export declare const light: Theme;
export declare const dark: Theme;
