export type ThemeNames = "dark" | "light";
export type ThemeMap<T> = {
    [key in ThemeNames]: {
        name: string;
        styles: T;
    };
};
export type OutlineType = string;
export type BrandType = object;
