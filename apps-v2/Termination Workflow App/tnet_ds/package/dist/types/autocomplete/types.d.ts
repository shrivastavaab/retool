import type { AutocompleteProps as MuiAutocompleteProps } from "@mui/material";
export type AutocompleteType = {
    menuBackground: string;
};
export type AutocompleteProps<T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined> = MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & ({
    variant: "async";
    slotProps?: never;
} | {
    variant?: "regular";
    slotProps?: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>["slotProps"];
} | {
    variant: "tabAutofill";
    slotProps?: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>["slotProps"];
});
