import type { PropsWithChildren } from "react";
export type DragAndDropElementProps = PropsWithChildren<{
    disabled?: boolean;
    index?: number;
    deletable?: boolean;
    setInnerElements: React.Dispatch<React.SetStateAction<DragAndDropElement[]>>;
    showDropTargets: boolean;
    dragIcon?: React.ElementType;
    deleteIcon?: React.ElementType;
}>;
export type DragAndDropElement = {
    label: string;
    deletable?: boolean;
};
export type DragAndDropProps = {
    elements: DragAndDropElement[];
    onChange?: (elements: DragAndDropElement[]) => void;
    dragIcon?: React.ElementType;
    deleteIcon?: React.ElementType;
};
export type DragAndDropType = {
    background: string;
    border: string;
    color: string;
    iconColor: string;
    hover: {
        border: string;
    };
};
