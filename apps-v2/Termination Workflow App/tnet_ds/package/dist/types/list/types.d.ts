import { ListItemProps as MuiListItemProps, ListItemTextProps as MuiListItemTextProps, ListProps as MuiListProps } from "@mui/material";
export type { ListItemIconProps } from "@mui/material";
export type ListProps = Omit<MuiListProps, "subheader" | "disablePadding"> & {
    contentId?: string;
};
export type ListItemProps = Omit<MuiListItemProps, "divider"> & {
    highlight?: boolean;
    variant?: "primary" | "secondary";
};
export type ListItemTextProps = Omit<MuiListItemTextProps, "inset" | "disableTypography" | "children">;
