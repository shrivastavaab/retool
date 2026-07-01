import { Dayjs } from "dayjs";
import { DisabledDateEntry, DisabledDateRange } from "./types";
export declare function isDisabledDateRange(entry: DisabledDateEntry): entry is DisabledDateRange;
export declare function buildShouldDisableDate(entries: DisabledDateEntry[], existing?: (day: Dayjs) => boolean): (day: Dayjs) => boolean;
