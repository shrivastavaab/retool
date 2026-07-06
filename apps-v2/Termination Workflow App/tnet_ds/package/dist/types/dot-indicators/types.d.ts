export interface DotIndicatorsProps {
    count: number;
    activeIndex: number;
    onChange: (index: number) => void;
    variant?: "primary" | "secondary";
    showBorder?: boolean;
    ariaLabel?: string;
    enableKeyboardNav?: boolean;
    testIdPrefix?: string;
    classNamePrefix?: string;
}
export type DotIndicatorsTheme = {
    primary: {
        color: string;
    };
    secondary: {
        color: string;
    };
    focus: string;
};
