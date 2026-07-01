/// <reference types="react" />
import { AvatarProps as MuiAvatarProps, AvatarGroupProps as MuiAvatarGroupProps } from "@mui/material";
import { BadgeProps } from "../badge";
import type { MakeCMSCompatible } from "../utils";
export type AvatarType = {
    text: string;
    background: {
        orange: string;
        blue: string;
        green: string;
        violet: string;
        magenta: string;
    };
    badgeBorder: string;
    borderGroup: string;
    onlineBg: string;
};
type BaseAvatarCustomProps = {
    badge?: {
        content?: string | React.ReactElement;
        props?: BadgeProps;
    };
    color?: "orange" | "blue" | "green" | "violet" | "magenta";
    size?: "small" | "medium" | "large" | "extraLarge";
};
type BaseAvatarProps = Omit<MuiAvatarProps, "variant"> & BaseAvatarCustomProps;
export type AvatarProps = MakeCMSCompatible<BaseAvatarProps>;
type BaseAvatarGroupCustomProps = {
    max?: number;
    size?: "small" | "medium" | "large" | "extraLarge";
    color?: "orange" | "blue" | "green" | "violet" | "magenta";
    spacing?: "small" | "medium" | "large";
};
export type AvatarGroupProps = Omit<MuiAvatarGroupProps, "max" | "spacing"> & BaseAvatarGroupCustomProps;
declare module "@mui/material/Avatar" {
    interface AvatarPropsVariantOverrides {
        circular: true;
        rounded: false;
        square: false;
    }
}
declare module "@mui/material/AvatarGroup" {
    interface AvatarGroupPropsSpacingOverrides {
        small: true;
        medium: true;
        large: true;
    }
}
export {};
