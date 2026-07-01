import type { BadgeProps as MuiBadgeProps } from "@mui/material";
export type BadgeType = {
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    variant: {
        color: string;
        add: {
            bgColor: string;
            hoverBgColor: string;
        };
        info: {
            bgColor: string;
            hoverBgColor: string;
        };
        remove: {
            bgColor: string;
            hoverBgColor: string;
        };
        legend: {
            bgColor: string;
            contentColor: string;
        };
        icon: {
            bgColor: string;
            borderColor: string;
            contentColor: string;
            outlineColor: string;
        };
        online: {
            bgColor: string;
            bgColorHover: string;
            border: string;
        };
    };
};
declare module "@mui/material/Badge" {
    interface BadgePropsVariantOverrides {
        add: true;
        remove: true;
        info: true;
        icon: true;
        legend: true;
        dot: true;
    }
}
export type BadgeProps = Omit<MuiBadgeProps, "color">;
