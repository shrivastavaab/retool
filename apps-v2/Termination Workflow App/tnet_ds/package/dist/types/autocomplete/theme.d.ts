export declare const MuiAutocomplete: {
    styleOverrides: {
        root: {
            minWidth: number;
        };
    };
};
export declare const MuiPaper: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            "&.MuiAutocomplete-paper": {
                padding: number;
                ".MuiAutocomplete-listbox": {
                    backgroundColor: string;
                    padding: number;
                };
            };
        };
    };
};
