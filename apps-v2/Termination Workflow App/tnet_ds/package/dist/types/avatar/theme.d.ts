import { Theme } from "@mui/material";
export declare const MuiAvatar: {
    styleOverrides: {
        root: ({ theme }: {
            theme: Theme;
        }) => {
            color: string;
            "&.T1-avatar-small": {
                width: number;
                height: number;
                fontSize: import("csstype").Property.FontSize<string | number>;
                fontFamily: import("csstype").Property.FontFamily;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                svg: {
                    width: number;
                    height: number;
                };
                "& + .MuiBadge-badge.T1-badge-dot": {
                    top: number;
                    width: number;
                    height: number;
                    outline: string;
                    right: number;
                    bottom: number;
                    "&, &:hover": {
                        backgroundColor: string;
                    };
                };
            };
            "&.T1-avatar-medium": {
                width: number;
                height: number;
                fontSize: import("csstype").Property.FontSize<string | number>;
                fontFamily: import("csstype").Property.FontFamily;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                svg: {
                    width: number;
                    height: number;
                };
                "& + .MuiBadge-badge.T1-badge-dot": {
                    width: number;
                    height: number;
                    borderRadius: number;
                    outline: string;
                    right: number;
                    bottom: number;
                    "&, &:hover": {
                        backgroundColor: string;
                    };
                };
            };
            "&.T1-avatar-large": {
                width: number;
                height: number;
                fontSize: import("csstype").Property.FontSize<string | number>;
                fontFamily: import("csstype").Property.FontFamily;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                svg: {
                    width: number;
                    height: number;
                };
                "& + .MuiBadge-badge.T1-badge-legend": {
                    width: number;
                    height: number;
                    lineHeight: string;
                };
                "& + .MuiBadge-badge.T1-badge-dot": {
                    width: number;
                    height: number;
                    right: number;
                    bottom: number;
                    outline: string;
                    "&, &:hover": {
                        backgroundColor: string;
                    };
                };
            };
            "&.T1-avatar-extraLarge": {
                width: number;
                height: number;
                fontSize: import("csstype").Property.FontSize<string | number>;
                fontFamily: import("csstype").Property.FontFamily;
                lineHeight: import("csstype").Property.LineHeight<string | number>;
                svg: {
                    width: number;
                    height: number;
                };
                "& + .MuiBadge-badge.T1-badge-dot": {
                    width: number;
                    height: number;
                    borderRadius: number;
                    outline: string;
                    right: number;
                    bottom: number;
                    "&, &:hover": {
                        backgroundColor: string;
                    };
                };
                "& + .MuiBadge-badge.T1-badge-legend": {
                    width: number;
                    height: number;
                    fontSize: string;
                    lineHeight: string;
                    borderRadius: string;
                    bottom: number;
                    right: number;
                    padding: number;
                };
            };
            "&.T1-avatar-orange": {
                backgroundColor: string;
            };
            "&.T1-avatar-blue": {
                backgroundColor: string;
            };
            "&.T1-avatar-green": {
                backgroundColor: string;
            };
            "&.T1-avatar-violet": {
                backgroundColor: string;
            };
            "&.T1-avatar-magenta": {
                backgroundColor: string;
            };
        };
    };
};
export declare const MuiAvatarGroup: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            alignItems: string;
            ".MuiAvatarGroup-avatar": {
                "&:first-of-type": {
                    border: number;
                };
            };
            ".MuiAvatar-root": {
                border: string;
                color: string;
            };
            ".MuiBadge-badge": {
                display: string;
            };
            "&.T1-avatarGroup-orange .MuiAvatarGroup-avatar:first-child": {
                backgroundColor: string;
            };
            "&.T1-avatarGroup-blue .MuiAvatarGroup-avatar:first-child": {
                backgroundColor: string;
            };
            "&.T1-avatarGroup-green .MuiAvatarGroup-avatar:first-child": {
                backgroundColor: string;
            };
            "&.T1-avatarGroup-violet .MuiAvatarGroup-avatar:first-child": {
                backgroundColor: string;
            };
            "&.T1-avatarGroup-magenta .MuiAvatarGroup-avatar:first-child": {
                backgroundColor: string;
            };
            "&.T1-avatarGroup-small .MuiAvatarGroup-avatar:first-child": {
                width: number;
                height: number;
                fontSize: any;
                fontFamily: any;
                lineHeight: any;
                svg: {
                    width: number;
                    height: number;
                };
            };
            "&.T1-avatarGroup-medium .MuiAvatarGroup-avatar:first-child": {
                width: number;
                height: number;
                fontSize: any;
                fontFamily: any;
                lineHeight: any;
                svg: {
                    width: number;
                    height: number;
                };
            };
            "&.T1-avatarGroup-large .MuiAvatarGroup-avatar:first-child": {
                width: number;
                height: number;
                fontSize: any;
                fontFamily: any;
                lineHeight: any;
                svg: {
                    width: number;
                    height: number;
                };
            };
            "&.T1-avatarGroup-spacing-small": {
                ".MuiAvatarGroup-avatar": {
                    marginLeft: any;
                };
            };
            "&.T1-avatarGroup-spacing-medium": {
                ".MuiAvatarGroup-avatar": {
                    marginLeft: any;
                };
            };
            "&.T1-avatarGroup-spacing-large": {
                ".MuiAvatarGroup-avatar": {
                    marginLeft: any;
                };
            };
        };
    };
};
