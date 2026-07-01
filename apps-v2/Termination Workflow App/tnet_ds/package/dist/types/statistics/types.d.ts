/// <reference types="react" />
import type { LinkProps } from "@mui/material";
export type StatisticsIconProps = {
    variant?: "default" | "add" | "remove";
    icon: React.ReactNode;
};
export interface PayRunsType {
    color: string;
}
export interface ReportsType {
    title: string;
    subtitle?: string;
    percentagePill: {
        rise: {
            background: string;
            text: string;
        };
        stagnant: {
            background: string;
            text: string;
        };
        down: {
            background: string;
            text: string;
        };
    };
}
export type LabeledIconType = {
    icon: {
        success: string;
        neutral: string;
    };
    primaryText: string;
    secondaryText: string;
};
export interface TimeOffCardType {
    container: {
        border: string;
        background: string;
    };
    accordion: {
        iconColor: string;
        link: string;
    };
    totalHoursContainer: {
        color: string;
        availableHoursColor: string;
        maxHoursColor: string;
    };
    toolTip: {
        background: string;
    };
}
export interface HolidayType {
    container: {
        border: string;
        background: string;
        color: string;
    };
    icon: {
        background: string;
        color: string;
    };
}
export type PayRunsProps = {
    label: string;
    number: number;
    linkProps: {
        href: string;
        label: string;
    } & Partial<Pick<LinkProps, "target">>;
    variant?: "regular" | "filled";
};
export type StatisticsIconType = {
    background: string;
    icon: string;
};
export type StatisticsOverviewType = {
    background: string;
    title: string;
    content: string;
    icon: {
        up: string;
        flat: string;
        down: string;
    };
};
export type StatisticsOverviewProps = {
    title: string;
    trend?: "up" | "flat" | "down";
    trendInfo?: string;
    content?: string;
    StatisticsIconProps: StatisticsIconProps;
    className?: string;
};
export type ReportProps = {
    value: string;
    percentage: string;
    percentageType: "rise" | "stagnant" | "down";
    subtitle?: string;
};
export type ReportsProps = {
    reports: ReportProps[];
    title: string;
    subtitle?: string;
    linkProps: {
        href: string;
        label: string;
    } & Partial<Pick<LinkProps, "target">>;
};
export type TimeOffCardProps = {
    availableHours: number;
    maximumHours: number;
    breakdown: {
        label: string;
        hours: number;
    }[];
};
export type LabeledIconProps = {
    icon: React.ReactNode;
    label: string;
    secondaryLabel?: string;
    iconColor?: "success" | "neutral";
};
export type HolidayCardProps = {
    name: string;
    date: string;
};
