import React from "react";
import { Dayjs } from "dayjs";
import type { T1CalendarEventProps, T1SelectionRange } from "./types";
export declare const calculateEndDate: (startDate: Dayjs, selectionRange: T1SelectionRange) => Dayjs;
export declare const T1CalendarEvent: React.FC<T1CalendarEventProps>;
export default T1CalendarEvent;
