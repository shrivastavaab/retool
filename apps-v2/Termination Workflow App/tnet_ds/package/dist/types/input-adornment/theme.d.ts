import type { Theme } from "@mui/material/styles";
export declare const inputAdornmentTheme: (theme: Theme) => {
    resting: string;
    disabled: string;
};
export declare const MuiInputAdornment: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            height: string;
            padding: string;
            boxSizing: string;
            margin: number;
            "&& .MuiTypography-root": {
                color: string;
            };
            "&& .MuiSvgIcon-root": {
                fill: string;
            };
            "&& .MuiIconButton-root .MuiSvgIcon-root": {
                fill: string;
            };
            ".Mui-disabled &": {
                "&& .MuiTypography-root": {
                    color: string;
                };
                "&& .MuiSvgIcon-root": {
                    fill: string;
                };
                "&& .MuiIconButton-root .MuiSvgIcon-root": {
                    fill: string;
                };
            };
        };
    };
};
