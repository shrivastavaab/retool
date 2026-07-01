import type { MenuItemProps as MuiMenuItemProps } from "@mui/material";
export type MenuItemProps = Omit<MuiMenuItemProps, "disableRipple" | "disableTouchRipple"> & {
    header?: boolean;
    lvl?: number;
};
declare module "@mui/material/styles" {
    interface Palette {
        menuItem: MenuItemType;
    }
    interface PaletteOptions {
        menuItem: MenuItemType;
    }
}
export type MenuItemType = {
    text: string;
    background: string;
    headerBackground: string;
    headerText: string;
    divider: string;
    hover: {
        background: string;
    };
    active: {
        background: string;
    };
    disabled: {
        text: string;
    };
};
declare module "@mui/material/styles" {
    interface Palette {
        menuItem: MenuItemType;
    }
    interface PaletteOptions {
        menuItem: MenuItemType;
    }
}
