/// <reference types="react" />
export interface Step {
    selector: string;
    content: React.ReactNode;
}
export interface GuideTourProps {
    steps: Step[];
    onClose?: () => void;
}
export type GuideTourType = {
    background: string;
    border: string;
    icon: {
        color: {
            active: string;
            inactive: string;
        };
        border: string;
    };
    overlay: {
        background: string;
    };
};
