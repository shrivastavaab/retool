import type { Theme } from "@mui/material/styles";
export declare const MuiLinearProgress: {
    defaultProps: {
        variant: "indeterminate";
        color: "default";
    };
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            backgroundColor: string;
            "&.T1-linearProgress": {
                "&-xs": {
                    height: string;
                    borderRadius: string;
                    "& .MuiLinearProgress-bar": {
                        borderRadius: string;
                    };
                };
                "&-sm": {
                    height: string;
                    borderRadius: string;
                    "& .MuiLinearProgress-bar": {
                        borderRadius: string;
                    };
                };
                "&-md": {
                    height: string;
                    borderRadius: string;
                    "& .MuiLinearProgress-bar": {
                        borderRadius: string;
                    };
                };
                "&-lg": {
                    height: string;
                    borderRadius: string;
                    "& .MuiLinearProgress-bar": {
                        borderRadius: string;
                    };
                };
                "&-xl": {
                    height: string;
                    borderRadius: string;
                    "& .MuiLinearProgress-bar": {
                        borderRadius: string;
                    };
                };
                "&-xxl": {
                    height: string;
                    borderRadius: string;
                    "& .MuiLinearProgress-bar": {
                        borderRadius: string;
                    };
                };
            };
        };
        bar: ({ theme, ownerState, }: {
            theme: Theme;
            ownerState: {
                color?: string;
            };
        }) => {
            backgroundColor: string;
        };
    };
};
