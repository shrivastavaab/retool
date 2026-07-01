import type { Theme } from "@mui/material/styles";
import type { DrawerType } from "./types";
export declare const drawerTheme: (theme: Theme) => DrawerType;
export declare const MuiDrawer: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            position: string;
            nav: {
                "&.T1-inner": {
                    height: string;
                    overflow: string;
                    display: string;
                    flexDirection: string;
                };
            };
            ".MuiBackdrop-root": {
                backgroundColor: string;
                opacity: string;
                position: string;
            };
            ".MuiDrawer-root": {
                background: string;
                backgroundColor: string;
                width: string;
            };
            ".MuiPaper-root": {
                [x: number]: {
                    ".MuiDrawer-header": {
                        boxSizing: string;
                        background: string;
                        width: string;
                        height: string;
                        display: string;
                        alignItems: string;
                        justifyContent: string;
                        ".draggable": {
                            width: string;
                            height: string;
                            backgroundColor: string;
                            borderRadius: string;
                        };
                    };
                    ".MuiDrawer-container": {
                        padding: any;
                        height: string;
                        overflow: string;
                        width: string;
                        ".MuiBox-root": {
                            boxSizing: string;
                            width: string;
                        };
                    };
                };
                background: string;
                borderRadius: any;
                width: string;
                outline: string;
                outlineOffset: string;
                boxShadow: any;
                ".MuiDrawer-header": {
                    background: string;
                    width: string;
                    outline: string;
                    borderRadius: string;
                    padding: string;
                    ".MuiTypography-root": {
                        fontSize: any;
                        lineHeight: any;
                    };
                    "&.T1-drawerContainer": {
                        justifyContent: string;
                        display: string;
                        position: string;
                        top: number;
                        zIndex: number;
                        svg: {
                            cursor: string;
                        };
                    };
                };
                ".MuiDrawer-container": {
                    width: string;
                    padding: any;
                    "&.T1-inner": {
                        height: string;
                        overflowY: string;
                    };
                };
                ".MuiDrawer-footer": {
                    backgroundColor: string;
                    position: string;
                    bottom: number;
                    zIndex: number;
                    padding: any;
                    borderTop: string;
                    ".MuiButtonBase-root": {
                        width: string;
                    };
                };
                ".MuiBox-root": {
                    width: string;
                };
                ".MuiDrawer-container.MuiBox-root": {
                    width: string;
                };
                "&.MuiDrawer-paper.MuiDrawer-paperAnchorBottom": {
                    width: string;
                };
            };
        };
    };
};
export declare const MuiSwipeableDrawer: {
    styleOverrides: {
        root: ({ theme }: {
            theme: any;
        }) => {
            ".MuiBackdrop-root": {
                backgroundColor: string;
                opacity: string;
            };
            ".MuiDrawer-root": {
                background: string;
                width: string;
            };
            ".MuiPaper-root": {
                [x: number]: {
                    ".MuiDrawer-header": {
                        boxSizing: string;
                        background: string;
                        width: string;
                        height: string;
                        display: string;
                        alignItems: string;
                        justifyContent: string;
                        padding: any;
                        ".draggable": {
                            width: string;
                            height: string;
                            backgroundColor: string;
                            borderRadius: string;
                        };
                    };
                    ".MuiDrawer-container": {
                        padding: any;
                        height: string;
                        overflow: string;
                        width: string;
                        ".MuiBox-root": {
                            boxSizing: string;
                            width: string;
                        };
                    };
                };
                background: string;
                borderRadius: string;
                width: string;
                top: string;
                outline: string;
                outlineOffset: string;
                ".MuiDrawer-header": {
                    background: string;
                    width: string;
                    borderRadius: string;
                    padding: string;
                    ".MuiTypography-root": {
                        fontSize: any;
                        lineHeight: any;
                    };
                };
                ".MuiDrawer-container": {
                    width: string;
                    padding: any;
                };
                ".MuiBox-root": {
                    width: string;
                };
                ".MuiDrawer-container.MuiBox-root": {
                    width: string;
                };
                "&.MuiDrawer-paper.MuiDrawer-paperAnchorBottom": {
                    width: string;
                };
            };
        };
    };
};
