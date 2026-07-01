var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/toggle-button/index.ts
var toggle_button_exports = {};
__export(toggle_button_exports, {
  ToggleButton: () => ToggleButton,
  ToggleButtonGroup: () => ToggleButtonGroup,
  toggleButtonTheme: () => toggleButtonTheme
});
module.exports = __toCommonJS(toggle_button_exports);

// lib/toggle-button/component.tsx
var import_react2 = require("react");

// lib/toggle-button/theme.tsx
var import_material2 = require("@mui/material");

// lib/layout/index.ts
var import_material = require("@mui/material");

// lib/toggle-button/theme.tsx
var import_styles = require("@mui/material/styles");

// lib/utils/components.tsx
var import_jsx_runtime = require("react/jsx-runtime");

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

// lib/toggle-button/theme.tsx
var toggleButtonTheme = {
  dark: {
    name: "toggleButton",
    styles: {
      primary: {
        text: COLORS.PRIMARY.ORANGE_80,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.TRANSPARENT
        },
        hover: {
          body: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SYSTEM.INK
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      selected: {
        text: COLORS.SYSTEM.DARK_80,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.SYSTEM.INK
        },
        hover: {
          body: COLORS.SYSTEM.DARK_60
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SYSTEM.DARK_60
        },
        active: {
          body: COLORS.SYSTEM.DARK_70
        },
        disabled: {
          body: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.PEWTER
        }
      }
    }
  },
  light: {
    name: "toggleButton",
    styles: {
      primary: {
        text: COLORS.SYSTEM.WHITE,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SYSTEM.WHITE
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        disabled: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.SILVER
        }
      },
      selected: {
        text: COLORS.SYSTEM.WHITE,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SECONDARY.BLUE_10
        },
        active: {
          body: COLORS.SECONDARY.BLUE_20
        },
        disabled: {
          body: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.SILVER
        }
      }
    }
  }
};
var StyledToggleButton = (0, import_styles.styled)(import_material2.Button)(({ theme, selected, hasIcon, hasLabel }) => {
  return {
    borderRadius: "100px",
    textTransform: "none",
    fontWeight: theme.typography.button.fontWeight,
    fontFamily: theme.typography.button.fontFamily,
    fontSize: theme.typography.button.fontSize,
    lineHeight: theme.typography.button.lineHeight,
    padding: theme.spacing(0, 3),
    width: "50%",
    minWidth: hasIcon && !hasLabel ? theme.spacing(5) : "auto",
    height: "28px",
    whiteSpace: "nowrap",
    border: "none",
    position: "relative",
    gap: hasIcon && hasLabel ? theme.spacing(1) : 0,
    backgroundColor: theme.palette.toggleButton.primary.body,
    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.paragraph.xs,
      color: theme.palette.typography.color
    },
    "&.Mui-focusVisible": {
      outline: `2px dashed ${theme.palette.toggleButton.primary.focused.border}`,
      outlineOffset: "2px",
      backgroundColor: theme.palette.toggleButton.primary.focused.body
    },
    "&:disabled": {
      backgroundColor: theme.palette.toggleButton.primary.disabled.body,
      p: {
        color: theme.palette.toggleButton.primary.disabled.text
      },
      cursor: "not-allowed"
    },
    "&:hover": {
      backgroundColor: theme.palette.toggleButton.primary.hover.body
    },
    "&:active": {
      backgroundColor: theme.palette.toggleButton.primary.active.body
    },
    ...selected && {
      backgroundColor: theme.palette.toggleButton.selected.default.body,
      boxShadow: theme.shadows[3],
      "&:hover:not(:disabled)": {
        backgroundColor: theme.palette.toggleButton.selected.hover.body
      },
      "&:active:not(:disabled)": {
        backgroundColor: theme.palette.toggleButton.selected.active.body
      },
      "&.Mui-focusVisible": {
        outline: `2px dashed ${theme.palette.toggleButton.selected.focused.border}`,
        outlineOffset: "2px",
        backgroundColor: theme.palette.toggleButton.selected.focused.body
      },
      "&:disabled": {
        backgroundColor: theme.palette.toggleButton.selected.disabled.body,
        p: {
          color: theme.palette.toggleButton.primary.disabled.text
        },
        cursor: "not-allowed"
      },
      "&:hover": {
        backgroundColor: theme.palette.toggleButton.selected.hover.body
      },
      "&:active": {
        backgroundColor: theme.palette.toggleButton.selected.active.body
      }
    }
  };
});
var StyledButtonGroup = (0, import_styles.styled)(import_material.Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  backgroundColor: theme.palette.toggleButton.primary.body,
  padding: theme.spacing(1),
  gap: theme.spacing(1.5)
}));

// lib/typography/theme.ts
var typographyTheme = {
  dark: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.WHITE,
      disabledColor: COLORS.SYSTEM.PEWTER
    }
  },
  light: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.INK,
      disabledColor: COLORS.SYSTEM.SILVER
    }
  }
};

// lib/typography/component.tsx
var import_material3 = require("@mui/material");
var import_styles2 = require("@mui/material/styles");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var getHeadingStyles = (theme, heading) => {
  return {
    fontSize: theme.typography[heading].regular.fontSize,
    lineHeight: theme.typography[heading].regular.lineHeight,
    fontFamily: theme.typography[heading].regular.fontFamily,
    [theme.breakpoints.down("smTypo")]: {
      fontSize: theme.typography[`${heading}sm`].regular.fontSize,
      lineHeight: theme.typography[`${heading}sm`].regular.lineHeight,
      fontFamily: theme.typography[`${heading}sm`].regular.fontFamily
    },
    "&.medium": {
      fontSize: theme.typography[heading].medium.fontSize,
      lineHeight: theme.typography[heading].medium.lineHeight,
      fontFamily: theme.typography[heading].medium.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].medium.fontSize,
        lineHeight: theme.typography[`${heading}sm`].medium.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].medium.fontFamily
      }
    },
    "&.bold": {
      fontSize: theme.typography[heading].bold.fontSize,
      lineHeight: theme.typography[heading].bold.lineHeight,
      fontFamily: theme.typography[heading].bold.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].bold.fontSize,
        lineHeight: theme.typography[`${heading}sm`].bold.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].bold.fontFamily
      }
    }
  };
};
var getParagraphStyles = (theme, size) => ({
  fontSize: theme.typography.paragraph[size].regular.fontSize,
  lineHeight: theme.typography.paragraph[size].regular.lineHeight,
  fontFamily: theme.typography.paragraph[size].regular.fontFamily,
  "&.medium": {
    fontSize: theme.typography.paragraph[size].medium.fontSize,
    lineHeight: theme.typography.paragraph[size].medium.lineHeight,
    fontFamily: theme.typography.paragraph[size].medium.fontFamily
  },
  "&.bold, & strong": {
    fontSize: theme.typography.paragraph[size].bold.fontSize,
    lineHeight: theme.typography.paragraph[size].bold.lineHeight,
    fontFamily: theme.typography.paragraph[size].bold.fontFamily
  }
});
var Typography = (0, import_react.forwardRef)(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      StyledTypography,
      {
        ref,
        className: `T1-typography T1-typography-${propsWithDefault.variant} ${propsWithDefault.weight} ${propsWithDefault.className ?? ""}`,
        ...omitCustomProps(propsWithDefault, [
          "className",
          "weight",
          "variant"
        ])
      }
    );
  }
);
var StyledTypography = (0, import_styles2.styled)(import_material3.Typography)(({
  theme
}) => {
  return {
    "&.T1-typography-h1": getHeadingStyles(theme, "h1"),
    "&.T1-typography-h2": getHeadingStyles(theme, "h2"),
    "&.T1-typography-h3": getHeadingStyles(theme, "h3"),
    "&.T1-typography-h4": getHeadingStyles(theme, "h4"),
    "&.T1-typography-h5": getHeadingStyles(theme, "h5"),
    "&.T1-typography-h6": getHeadingStyles(theme, "h6"),
    "&.T1-typography-caption": {
      fontSize: theme.typography.caption.regular.fontSize,
      lineHeight: theme.typography.caption.regular.lineHeight,
      fontFamily: theme.typography.caption.regular.fontFamily,
      "&.medium": {
        fontSize: theme.typography.caption.medium.fontSize,
        lineHeight: theme.typography.caption.medium.lineHeight,
        fontFamily: theme.typography.caption.medium.fontFamily
      },
      "&.bold": {
        fontSize: theme.typography.caption.bold.fontSize,
        lineHeight: theme.typography.caption.bold.lineHeight,
        fontFamily: theme.typography.caption.bold.fontFamily
      }
    },
    "&.T1-typography-paragraphXl": getParagraphStyles(theme, "xl"),
    "&.T1-typography-paragraphLg": getParagraphStyles(theme, "lg"),
    "&.T1-typography-paragraphMd": getParagraphStyles(theme, "md"),
    "&.T1-typography-paragraphSm": getParagraphStyles(theme, "sm"),
    "&.T1-typography-paragraphXs": getParagraphStyles(theme, "xs"),
    // TO-DO - Check if this line of code is necessary. Removed temporarily because of conflicts in Tile component.
    color: theme.palette.typography.color
  };
});

// lib/toggle-button/component.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ToggleButton = ({
  label,
  icon,
  selected,
  disabled = false,
  onChange,
  className,
  style,
  "aria-label": ariaLabel,
  ...rest
}) => {
  const handleToggle = (0, import_react2.useCallback)(() => {
    if (!disabled && onChange) {
      onChange(!selected);
    }
  }, [selected, disabled, onChange]);
  const handleKeyDown = (0, import_react2.useCallback)(
    (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle]
  );
  const hasIcon = Boolean(icon);
  const hasLabel = Boolean(label);
  const defaultAriaLabel = ariaLabel || (label ? `Toggle ${label}` : "Toggle button");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    StyledToggleButton,
    {
      selected,
      hasIcon,
      hasLabel,
      disabled,
      onClick: handleToggle,
      onKeyDown: handleKeyDown,
      className,
      style,
      "aria-pressed": selected,
      "aria-label": defaultAriaLabel,
      tabIndex: disabled ? -1 : 0,
      disableRipple: true,
      ...rest,
      children: [
        icon,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Typography,
          {
            variant: "paragraphSm",
            weight: selected ? "medium" : "regular",
            children: label
          }
        )
      ]
    }
  );
};
var ToggleButtonGroup = ({
  options,
  value,
  onChange,
  disabled = false
}) => {
  const handleChange = (0, import_react2.useCallback)(
    (optionValue) => {
      if (!disabled && optionValue !== value) {
        onChange(optionValue);
      }
    },
    [value, onChange, disabled]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StyledButtonGroup, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ToggleButton,
    {
      label: option.label,
      icon: option.icon,
      selected: value === option.value,
      disabled: disabled || option.disabled,
      onChange: () => handleChange(option.value)
    },
    option.value
  )) });
};
