/// <reference types="react" />
export type ProfileProps = {
    workerName: string;
    workerId: string;
    workerPosition: string;
    items: ProfileItem[];
};
type ProfileItem = {
    icon: React.ReactNode;
    label: string;
    action: () => void;
};
export type CompanySelectorProps = {
    companies: {
        name: string;
        code: string;
        disabled?: boolean;
    }[];
    selectedIndex?: number;
    byDefault?: number;
    onDefaultChange?: (index: number) => void;
    onSelect?: (index: number) => void;
};
type ItemNotification = {
    actions?: {
        onDeny: () => void;
        onApprove: () => void;
    };
    title: string;
    description: string;
    date: string;
    readed?: boolean;
};
export type NotificationsProps = {
    label: string;
    onViewAll: () => void;
    itemNotifications: ItemNotification[];
};
export type NavigationProfileType = {
    background: string;
    item: {
        background: string;
        border: string;
        hover: string;
        focus: string;
    };
};
export type CompanySelectorType = {
    background: string;
    item: {
        background: string;
        border: string;
        hover: string;
        focus: string;
        icon: string;
        disabled: string;
    };
};
export type NavigationNotificationType = {
    background: string;
    border: string;
    svg: {
        color: string;
        disabled: string;
    };
    hover: string;
    color: string;
    disabled: {
        background: string;
        color: string;
    };
};
export {};
