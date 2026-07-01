import type { ReactNode } from "react";
export interface ColorsType {
    TRANSPARENT: string;
    BRAND: {
        TRINET_ORANGE: string;
        TRINET_NAVY: string;
    };
    PRIMARY: {
        ORANGE_10: string;
        ORANGE_20: string;
        ORANGE_30: string;
        ORANGE_40: string;
        ORANGE_45: string;
        ORANGE_50: string;
        ORANGE_60: string;
        ORANGE_70: string;
        ORANGE_75: string;
        ORANGE_80: string;
    };
    SECONDARY: {
        BLUE_10: string;
        BLUE_20: string;
        BLUE_30: string;
        BLUE_40: string;
        BLUE_50: string;
        BLUE_60: string;
        BLUE_70: string;
        BLUE_80: string;
    };
    SYSTEM: {
        WHITE: string;
        OFF_WHITE: string;
        MISTY: string;
        CLOUDY: string;
        SILVER: string;
        PEWTER: string;
        DARK_30: string;
        SLATE: string;
        INK: string;
        DARK_60: string;
        DARK_70: string;
        DARK_80: string;
        BLACK: string;
    };
    INFO: {
        INFO_10: string;
        INFO_20: string;
        INFO_30: string;
        INFO_40: string;
        INFO_50: string;
    };
    SUCCESS: {
        SUCCESS_10: string;
        SUCCESS_20: string;
        SUCCESS_30: string;
        SUCCESS_40: string;
        SUCCESS_50: string;
    };
    WARNING: {
        WARNING_10: string;
        WARNING_20: string;
        WARNING_30: string;
        WARNING_40: string;
        WARNING_50: string;
    };
    ERROR: {
        ERROR_10: string;
        ERROR_20: string;
        ERROR_30: string;
        ERROR_40: string;
        ERROR_50: string;
    };
    ACCENT: {
        VIOLET_10: string;
        VIOLET_20: string;
        VIOLET_30: string;
        VIOLET_40: string;
        VIOLET_50: string;
        TEAL_10: string;
        TEAL_20: string;
        TEAL_30: string;
        TEAL_40: string;
        TEAL_50: string;
        GREEN_10: string;
        GREEN_20: string;
        GREEN_30: string;
        GREEN_40: string;
        GREEN_50: string;
        MAGENTA_10: string;
        MAGENTA_20: string;
        MAGENTA_30: string;
        MAGENTA_40: string;
        MAGENTA_50: string;
        YELLOW_10: string;
        YELLOW_20: string;
        YELLOW_30: string;
        YELLOW_40: string;
        YELLOW_50: string;
    };
}
export interface T1ColorsType {
    transparent: string;
    brand: {
        trinetOrange: string;
        trinetNavy: string;
    };
    primary: {
        orange10: string;
        orange20: string;
        orange30: string;
        orange40: string;
        orange45: string;
        orange50: string;
        orange60: string;
        orange70: string;
        orange75: string;
        orange80: string;
    };
    secondary: {
        blue10: string;
        blue20: string;
        blue30: string;
        blue40: string;
        blue50: string;
        blue60: string;
        blue70: string;
        blue80: string;
    };
    system: {
        white: string;
        offWhite: string;
        misty: string;
        cloudy: string;
        silver: string;
        pewter: string;
        dark30: string;
        slate: string;
        ink: string;
        dark60: string;
        dark70: string;
        dark80: string;
        black: string;
    };
    info: {
        info10: string;
        info20: string;
        info30: string;
        info40: string;
        info50: string;
    };
    success: {
        success10: string;
        success20: string;
        success30: string;
        success40: string;
        success50: string;
    };
    warning: {
        warning10: string;
        warning20: string;
        warning30: string;
        warning40: string;
        warning50: string;
    };
    error: {
        error10: string;
        error20: string;
        error30: string;
        error40: string;
        error50: string;
    };
    accent: {
        violet10: string;
        violet20: string;
        violet30: string;
        violet40: string;
        violet50: string;
        teal10: string;
        teal20: string;
        teal30: string;
        teal40: string;
        teal50: string;
        green10: string;
        green20: string;
        green30: string;
        green40: string;
        green50: string;
        magenta10: string;
        magenta20: string;
        magenta30: string;
        magenta40: string;
        magenta50: string;
        yellow10: string;
        yellow20: string;
        yellow30: string;
        yellow40: string;
        yellow50: string;
    };
}
export type OmitCustomProps = <T extends object, K extends keyof T>(obj: T, keys: K[]) => Omit<T, K>;
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type MakeCMSCompatible<T, K extends keyof T = keyof T> = Omit<T, K> & (({
    contentId: string;
} & {
    [P in K]?: T[P];
} & {
    cmsOptions?: {
        key?: string;
        fallbackContent?: string;
        values?: Record<string, string | ((chunks: ReactNode) => ReactNode)>;
        enableHTMLTags?: boolean;
    };
}) | ({
    contentId?: never;
} & {
    [P in K]: T[P];
} & {
    cmsOptions?: never;
}));
