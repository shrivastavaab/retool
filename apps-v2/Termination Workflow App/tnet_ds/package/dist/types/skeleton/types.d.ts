declare module "@mui/material/styles" {
    interface Palette {
        barChartLoadingSkeleton: BarChartLoadingSkeletonType;
    }
    interface PaletteOptions {
        barChartLoadingSkeleton: BarChartLoadingSkeletonType;
    }
}
export type BarChartLoadingSkeletonProps = {
    title?: string;
    contentId?: string;
    cmsOptions?: {
        key?: string;
        fallbackContent?: string;
        values?: Record<string, string>;
    };
    "data-testid"?: string;
};
export type BarChartLoadingSkeletonType = {
    containerBg: string;
    containerBorder: string;
    titleColor: string;
    skeletonBg: string;
    gridLineBg: string;
    shimmerGradient: string;
};
