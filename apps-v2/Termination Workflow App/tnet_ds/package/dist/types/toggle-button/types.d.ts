import { ReactNode } from "react";
interface ToggleButtonInterface {
    text?: string;
    body?: string;
    default: {
        body?: string;
        text?: string;
        border?: string;
    };
    hover: {
        body?: string;
        text?: string;
        border?: string;
    };
    focused: {
        body?: string;
        text?: string;
        border?: string;
    };
    active: {
        body?: string;
        text?: string;
        border?: string;
    };
    disabled: {
        body?: string;
        text?: string;
        border?: string;
    };
}
export type ToggleButtonType = {
    primary: ToggleButtonInterface;
    selected: ToggleButtonInterface;
};
export interface ToggleButtonProps {
    label?: string;
    icon?: ReactNode;
    selected: boolean;
    disabled?: boolean;
    onChange?: (selected: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    "aria-label"?: string;
}
export interface ToggleButtonGroupProps {
    options: Array<{
        value: string;
        label?: string;
        icon?: ReactNode;
        disabled?: boolean;
    }>;
    value: string | string[];
    multiple?: boolean;
    onChange: (value: string | string[]) => void;
    disabled?: boolean;
}
export {};
