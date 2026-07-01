import type { MenuProps as MuiMenuProps } from "@mui/material";
type CustomMenuProps = {
    variant: "default" | "breadcrumbs";
};
export type MenuPropsWithRequireCustomProps = Omit<MuiMenuProps, "variant"> & CustomMenuProps;
export type MenuProps = Omit<MuiMenuProps, "variant"> & Partial<CustomMenuProps>;
export type MenuWithCMSProps = Omit<MenuProps, "children"> & {
    contentId: string;
};
export {};
