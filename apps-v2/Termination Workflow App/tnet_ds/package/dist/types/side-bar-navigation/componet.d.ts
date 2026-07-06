/// <reference types="react" />
import { SideMenuItemProps } from "./types";
export declare const StyledIconItem: import("@emotion/styled").StyledComponent<import("@mui/material").StackOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/material").StackOwnProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & {
    isSubMenu: boolean;
}, {}, {}>;
export declare const SideIconItem: ({ variant, selected, Icon, label, className, }: SideMenuItemProps) => import("react/jsx-runtime").JSX.Element;
