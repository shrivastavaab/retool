/// <reference types="react" />
import { StackProps } from "@mui/material";
export type SideMenuItemProps = StackProps & {
    variant: "main" | "sub" | "icon";
    selected?: boolean;
    Icon: React.ElementType;
    label: string;
    isSubMenu?: boolean;
};
export type SideMenuItemType = {
    color: string;
    hover: {
        color: string;
    };
    focus: {
        border: string;
    };
    selected: {
        background: string;
        icon: {
            color: string;
        };
    };
};
