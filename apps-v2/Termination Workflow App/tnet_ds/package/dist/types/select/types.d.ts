import type { SelectProps as MuiSelectProps } from "@mui/material";
export type { SelectChangeEvent } from "@mui/material";
export type SelectProps = MakeCMSCompatible<Omit<MuiSelectProps, "variant" | "IconComponent">, "label"> & {
    variant?: "regular" | "boxless";
};
import type { AvatarProps } from "../avatar";
import { MakeCMSCompatible } from "../utils";
declare module "@mui/material/styles" {
    interface Palette {
        multiSelect: MultiSelectType;
    }
    interface PaletteOptions {
        multiSelect: MultiSelectType;
    }
}
export type MultiSelectType = {
    border: string;
    color: string;
};
export type ArrowedSelectType = {
    border: string;
    disabled: {
        border: string;
        background: string;
    };
    error: {
        border: string;
    };
    hover: {
        border: string;
    };
    item: {
        title: string;
        background: string;
        content: string;
        hover: {
            background: string;
        };
        active: {
            background: string;
        };
        disabled: {
            text: string;
        };
    };
};
export type MultiSelectData = {
    id: string;
    value: string;
    selected?: boolean;
};
export type MultiSelectProps = {
    options: MultiSelectData[];
    selectAll?: boolean;
    onChange: (options: string[]) => void;
    disabled?: boolean;
    error?: boolean;
    readonly?: boolean;
    search?: boolean;
};
export type ArrowedSelectItemProps = {
    avatarProps?: AvatarProps;
    title: string;
    content: [string, string];
};
export type ArrowedSelectProps = {
    onChange?: (item: ArrowedSelectItemProps) => void;
    value?: ArrowedSelectItemProps;
    items: ArrowedSelectItemProps[];
    disabled?: boolean;
    error?: boolean;
    variant?: "regular" | "boxless";
    helpText?: string;
};
