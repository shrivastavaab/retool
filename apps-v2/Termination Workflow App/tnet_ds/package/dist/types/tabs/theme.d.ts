export declare const MuiTab: {
    defaultProps: {
        disableRipple: boolean;
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            textTransform: string;
            fontSize: any;
            fontFamily: any;
            padding: any;
            height: number;
            background: string;
            color: string;
            "&:hover": {
                background: string;
                color: string;
            };
            "&:active": {
                background: string;
                color: string;
            };
            "&.Mui-disabled": {
                background: string;
                color: string;
            };
            "&.Mui-focusVisible": {
                border: string;
            };
            "&.Mui-selected": {
                background: string;
                color: string;
                fontFamily: any;
                "&:hover": {
                    background: string;
                    color: string;
                };
            };
        };
    };
};
export declare const MuiTabs: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            ".MuiTabs-indicator": {
                backgroundColor: string;
            };
        };
    };
};
