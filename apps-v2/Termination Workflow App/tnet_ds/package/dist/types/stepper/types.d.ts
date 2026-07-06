import type { StepProps as MuiStepProps } from "@mui/material";
export type { StepContentProps, MobileStepperProps } from "@mui/material";
import type { PropsWithChildren } from "react";
type StepThemeType = {
    text: string;
    body: string;
    iconText: string;
    iconBody: string;
    default: {
        body: string;
        border: string;
    };
    hover: {
        body: string;
        activeBody: string;
        text: string;
        activeText: string;
    };
    active: {
        body: string;
        text: string;
        activeText: string;
        iconText: string;
        iconBody: string;
    };
    blocked: {
        iconText: string;
    };
    completed: {
        iconBody: string;
    };
};
type SubStepThemeType = {
    text: string;
    iconColor: string;
    completedIconColor: string;
    hover: {
        text: string;
        activeText: string;
    };
    active: {
        text: string;
    };
    completed: {
        text: string;
    };
};
export type StepperType = {
    primary: StepThemeType;
    subStep: SubStepThemeType;
};
export type StepperStep = {
    label: string;
    action?: () => void;
    progress?: number;
    blocked?: boolean;
    completed?: boolean;
    subSteps?: Omit<StepperStep, "subSteps" | "progress">[];
};
export type StepperSteps = StepperStep[];
export type VerticalStepperProps = PropsWithChildren<Omit<VerticalStepperHeaderProps, "variant">>;
export type VerticalStepperHeaderProps = {
    header: string;
    subheader?: string;
    step: number;
    activeStepLabel: string;
    totalSteps: number;
    variant?: "mobile" | "desktop";
};
export type VerticalStepperStepProps = Omit<MuiStepProps, "disabled"> & {
    progress?: number | null;
    blocked?: boolean;
    clickable?: boolean;
};
export type VerticalStepperSubStepProps = {
    completed?: boolean;
    active?: boolean;
    blocked?: boolean;
    label: string;
};
