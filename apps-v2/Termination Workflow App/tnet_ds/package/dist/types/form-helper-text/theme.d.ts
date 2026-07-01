import { Theme } from "@mui/material/styles";
import type { FormHelperTextType } from "./types";
export declare const formHelperTextTheme: (theme: Theme) => FormHelperTextType;
export declare const MuiFormHelperText: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            marginLeft: number;
            color: any;
            outline: string;
            fontFamily: any;
            minWidth: string;
            paddingTop: any;
            svg: {
                fontSize: string;
                marginRight: any;
                verticalAlign: string;
            };
            "&.Mui-error": {
                color: string;
            };
        };
    };
};
