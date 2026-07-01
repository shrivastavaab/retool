/// <reference types="react" />
import { NotificationsProps } from "./types";
import dayjs from "dayjs";
export declare function timeAgo(date: string | Date | dayjs.Dayjs): string;
export declare const NotificationBell: React.FC<NotificationsProps>;
