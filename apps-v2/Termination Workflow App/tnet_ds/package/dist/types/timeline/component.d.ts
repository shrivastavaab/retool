/// <reference types="react" />
import { TimelineItem as MuiTimelineItem, TimelineSeparator as MuiTimelineSeparator, TimelineDot as MuiTimelineDot, TimelineConnector as MuiTimelineConnector } from "@mui/lab";
import type { TimelineContentProps } from "./types";
export declare const TimelineContent: (props: TimelineContentProps) => import("react/jsx-runtime").JSX.Element;
export declare const Timeline: import("@emotion/styled").StyledComponent<import("@mui/lab").TimelineProps & import("react").RefAttributes<HTMLUListElement> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const TimelineItem: typeof MuiTimelineItem;
export declare const TimelineSeparator: typeof MuiTimelineSeparator;
export declare const TimelineDot: typeof MuiTimelineDot;
export declare const TimelineConnector: typeof MuiTimelineConnector;
