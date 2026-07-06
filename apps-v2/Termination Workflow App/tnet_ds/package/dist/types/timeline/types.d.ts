import type { TimelineProps as MuiTimelineProps, TimelineContentProps as MuiTimelineContentProps } from "@mui/lab";
export type TimelineProps = MuiTimelineProps;
export type TimelineContentProps = Omit<MuiTimelineContentProps, "children"> & {
    primaryContent: string;
    secondaryContent?: string;
    tertiaryContent?: string;
};
export type TimelineType = {
    regular: string;
    active: string;
    hover: string;
    primaryContent: string;
    secondaryContent: string;
};
