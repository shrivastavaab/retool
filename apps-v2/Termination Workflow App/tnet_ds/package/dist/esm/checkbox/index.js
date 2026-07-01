// lib/checkbox/theme.ts
import { styled } from "@mui/material";

// lib/form-helper-text/component.tsx
import {
  FormHelperText as MuiFormHelperText
} from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";
import { jsx, jsxs } from "react/jsx-runtime";
var FormHelperText = (props) => {
  return /* @__PURE__ */ jsxs(MuiFormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ jsx(WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx as jsx2 } from "react/jsx-runtime";

// lib/utils/index.ts
var COLORS = {
  TRANSPARENT: "transparent",
  BRAND: {
    TRINET_ORANGE: "#E14700",
    TRINET_NAVY: "#0B0134"
  },
  PRIMARY: {
    ORANGE_10: "#FFF1EB",
    ORANGE_20: "#FFD4C7",
    ORANGE_30: "#FFB199",
    ORANGE_40: "#FF8064",
    ORANGE_45: "#FA6C4D",
    ORANGE_50: "#E14700",
    ORANGE_60: "#D14200",
    ORANGE_70: "#a83706",
    ORANGE_75: "#75443F",
    ORANGE_80: "#2F120E"
  },
  SECONDARY: {
    BLUE_10: "#F8FAFF",
    BLUE_20: "#F0F5FF",
    BLUE_30: "#D0E4FF",
    BLUE_40: "#94BEFD",
    BLUE_50: "#5C9DFF",
    BLUE_60: "#0A62E6",
    BLUE_70: "#044DBB",
    BLUE_80: "#0B0134"
  },
  SYSTEM: {
    WHITE: "#FFFFFF",
    OFF_WHITE: "#F8F9FA",
    MISTY: "#EEF0F2",
    CLOUDY: "#DDE1E6",
    SILVER: "#B3BDC7",
    PEWTER: "#6E7789",
    DARK_30: "#646C7D",
    SLATE: "#444C5C",
    INK: "#242936",
    DARK_60: "#20242F",
    DARK_70: "#191D26",
    DARK_80: "#07080B",
    BLACK: "#000000"
  },
  INFO: {
    INFO_10: "#F3F6FF",
    INFO_20: "#AECFFF",
    INFO_30: "#56ABFF",
    INFO_40: "#0070E0",
    INFO_50: "#012596"
  },
  SUCCESS: {
    SUCCESS_10: "#F2FBF5",
    SUCCESS_20: "#B7E9C9",
    SUCCESS_30: "#33E173",
    SUCCESS_40: "#008531",
    SUCCESS_50: "#044E1F"
  },
  WARNING: {
    WARNING_10: "#FFF7ED",
    WARNING_20: "#FDD7B5",
    WARNING_30: "#FFB258",
    WARNING_40: "#FF8C22",
    WARNING_50: "#682F03"
  },
  ERROR: {
    ERROR_10: "#FFF2F2",
    ERROR_20: "#FFB4B4",
    ERROR_30: "#FF6359",
    ERROR_40: "#E01021",
    ERROR_50: "#AF0A0A"
  },
  ACCENT: {
    VIOLET_10: "#F2ECFB",
    VIOLET_20: "#C3AFEF",
    VIOLET_30: "#875FDE",
    VIOLET_40: "#661CC8",
    VIOLET_50: "#3F0066",
    TEAL_10: "#DBE4F6",
    TEAL_20: "#9BAFD4",
    TEAL_30: "#587AB8",
    TEAL_40: "#355287",
    TEAL_50: "#213762",
    GREEN_10: "#F2FBF5",
    GREEN_20: "#A5EDD3",
    GREEN_30: "#45D8B4",
    GREEN_40: "#02936F",
    GREEN_50: "#00434A",
    MAGENTA_10: "#FFE8F5",
    MAGENTA_20: "#FF8DCB",
    MAGENTA_30: "#D95188",
    MAGENTA_40: "#DB0661",
    MAGENTA_50: "#6B003D",
    YELLOW_10: "#FEF9E7",
    YELLOW_20: "#FFEEB2",
    YELLOW_30: "#FFD649",
    YELLOW_40: "#F4C006",
    YELLOW_50: "#CB7A00"
  }
};
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/checkbox/theme.ts
var checkboxTheme = {
  dark: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_40,
      subheading: COLORS.SYSTEM.SILVER,
      svgColor: COLORS.SYSTEM.DARK_70,
      default: {
        checked: COLORS.SECONDARY.BLUE_40,
        unchecked: COLORS.SYSTEM.MISTY,
        label: COLORS.SYSTEM.WHITE
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      error: {
        checked: COLORS.ERROR.ERROR_20,
        unchecked: COLORS.ERROR.ERROR_20,
        label: COLORS.SYSTEM.WHITE
      },
      disabled: {
        checked: COLORS.SYSTEM.PEWTER,
        unchecked: COLORS.SYSTEM.PEWTER,
        label: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_60,
      subheading: COLORS.SYSTEM.DARK_30,
      svgColor: COLORS.SYSTEM.WHITE,
      default: {
        checked: COLORS.SECONDARY.BLUE_60,
        unchecked: COLORS.SYSTEM.SLATE,
        label: COLORS.SYSTEM.INK
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      error: {
        checked: COLORS.ERROR.ERROR_40,
        unchecked: COLORS.ERROR.ERROR_40,
        label: COLORS.SYSTEM.INK
      },
      disabled: {
        checked: COLORS.SYSTEM.SILVER,
        unchecked: COLORS.SYSTEM.SILVER,
        label: COLORS.SYSTEM.SILVER
      }
    }
  }
};
var _checkboxTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue40,
        subheading: theme.palette.t1.system.silver,
        svgColor: theme.palette.t1.system.dark70,
        default: {
          checked: theme.palette.t1.secondary.blue40,
          unchecked: theme.palette.t1.system.misty,
          label: theme.palette.t1.system.white
        },
        hover: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        focus: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        error: {
          checked: theme.palette.t1.error.error20,
          unchecked: theme.palette.t1.error.error20,
          label: theme.palette.t1.system.white
        },
        disabled: {
          checked: theme.palette.t1.system.pewter,
          unchecked: theme.palette.t1.system.pewter,
          label: theme.palette.t1.system.pewter
        }
      };
    }
    case "light": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue60,
        subheading: theme.palette.t1.system.dark30,
        svgColor: theme.palette.t1.system.white,
        default: {
          checked: theme.palette.t1.secondary.blue60,
          unchecked: theme.palette.t1.system.slate,
          label: theme.palette.t1.system.ink
        },
        hover: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        focus: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        error: {
          checked: theme.palette.t1.error.error40,
          unchecked: theme.palette.t1.error.error40,
          label: theme.palette.t1.system.ink
        },
        disabled: {
          checked: theme.palette.t1.system.silver,
          unchecked: theme.palette.t1.system.silver,
          label: theme.palette.t1.system.silver
        }
      };
    }
  }
};
var StyledCheckboxHelperText = styled(FormHelperText)(({
  theme
}) => {
  const palette = _checkboxTheme(theme);
  return {
    fontWeight: theme.typography.fontWeightRegular,
    margin: 0,
    padding: 0,
    transform: `translateX(${theme.spacing(8.5)})`,
    color: palette.subheading,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight
  };
});

// lib/checkbox/component.tsx
import { useMemo } from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function CustomIcon(props) {
  const theme = useTheme();
  const palette = useMemo(() => _checkboxTheme(theme), [theme]);
  return /* @__PURE__ */ jsxs2(SvgIcon, { ...props, children: [
    /* @__PURE__ */ jsx3("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }),
    /* @__PURE__ */ jsx3("rect", { width: "12", height: "12", fill: palette.svgColor, x: "6", y: "6" })
  ] });
}
var Checkbox = ({ setFocused, ...props }) => {
  return /* @__PURE__ */ jsx3(
    MuiCheckbox,
    {
      disableTouchRipple: true,
      disableFocusRipple: true,
      icon: /* @__PURE__ */ jsx3(CustomIcon, {}),
      onFocus: () => {
        setFocused?.(true);
      },
      onBlur: () => {
        setFocused?.(false);
      },
      ...omitCustomProps(props, ["className"]),
      className: `T1-checkbox ${props.className ?? ""}`
    }
  );
};
var CheckboxHelperText = (props) => {
  const { className, ...rest } = props;
  return /* @__PURE__ */ jsx3(
    StyledCheckboxHelperText,
    {
      className: `checkboxHelper ${className}`,
      ...rest
    }
  );
};
export {
  Checkbox,
  CheckboxHelperText,
  checkboxTheme
};
