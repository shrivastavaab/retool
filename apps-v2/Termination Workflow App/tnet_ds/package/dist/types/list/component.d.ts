import React from "react";
import type { ListItemIconProps, ListItemProps, ListItemTextProps, ListProps } from "./types";
export declare const List: React.ForwardRefExoticComponent<Omit<ListProps, "ref"> & React.RefAttributes<HTMLUListElement>>;
export declare const ListItem: React.ForwardRefExoticComponent<Omit<ListItemProps, "ref"> & React.RefAttributes<HTMLLIElement>>;
export declare const ListItemText: React.ForwardRefExoticComponent<Omit<ListItemTextProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const ListItemIcon: React.ForwardRefExoticComponent<Omit<ListItemIconProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
