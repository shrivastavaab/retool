import type { SwitchProps } from "@mui/material";
export type ToggleProps = SwitchProps;
declare module "@mui/material/Switch" {
    interface SwitchPropsSizeOverrides {
        large: true;
        medium: true;
        small: true;
        extraSmall: true;
    }
}
export interface ToggleType {
    label: string;
    trackChecked: string;
    trackUnchecked: string;
    thumbUnchecked: string;
    thumbChecked: string;
    thumbHover: string;
    thumbDisabled: string;
    checkIcon: string;
    disabledCheckIcon: string;
    disabledChecked: string;
    disabledUnchecked: string;
}
