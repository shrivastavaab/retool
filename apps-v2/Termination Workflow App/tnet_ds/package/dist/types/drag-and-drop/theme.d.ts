/// <reference types="react" />
import { Theme } from "@mui/material";
import type { DragAndDropType } from "./types";
export declare const dragAndDropTheme: (theme: Theme) => DragAndDropType;
export declare const StyledDragAndDropElement: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & {
    dragging: boolean;
    index: number;
    disabled: boolean;
}, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export declare const StyledDragAndDropContainer: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
