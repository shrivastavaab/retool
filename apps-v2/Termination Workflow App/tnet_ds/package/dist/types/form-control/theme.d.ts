export declare const MuiFormControl: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            outline: string;
            fontFamily: any;
            width: string;
            select: {
                padding: number;
            };
            ".MuiInput-input:focus": {
                backgroundColor: any;
            };
            ".MuiSelect-outlined": {
                outline: string;
            };
            ".MuiSelect-standard,.MuiSelect-outlined:hover": {
                outline: string;
            };
            ".Mui-disabled": {
                opacity: number;
            };
            "&.MuiFormControl-fullWidth": {
                maxWidth: string;
            };
            "&.form-control-checkbox": {
                minWidth: number;
            };
            ".MuiInputBase-root": {
                "&.Mui-disabled": {
                    fieldset: {
                        pointerEvents: string;
                    };
                    cursor: string;
                };
            };
            ".MuiFormGroup-root": {
                "& .MuiFormControl-root": {
                    padding: any;
                };
            };
        };
    };
    defaultProps: {
        variant: string;
    };
};
