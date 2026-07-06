// lib/toggle/component.tsx
import React from "react";
import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx } from "react/jsx-runtime";
var CursorController = (props) => {
  return /* @__PURE__ */ jsx(
    Box,
    {
      ...omitCustomProps(props, ["sx"]),
      sx: { ...props.sx, cursor: props.cursor },
      children: props.children
    }
  );
};

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

// lib/toggle/component.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var StyledToggle = styled(Switch)(({ theme }) => ({
  width: "44px",
  height: "24px",
  padding: 0,
  position: "relative",
  borderRadius: "12px",
  overflow: "visible",
  ".MuiSwitch-track": {
    opacity: 1,
    borderRadius: "12px"
  },
  ".MuiSwitch-switchBase": {
    width: "24px",
    height: "100%",
    padding: theme.spacing(0.25),
    opacity: 1,
    ".MuiTouchRipple-root": {
      display: "none"
    },
    ".MuiSwitch-thumb": {
      width: "100%",
      height: "100%",
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.toggle.thumbUnchecked
    },
    ".PrivateSwitchBase-input": {
      position: "absolute",
      top: 0,
      left: "-24px",
      bottom: 0,
      width: "300%",
      height: "100%"
    },
    "&:hover": {
      ".MuiSwitch-thumb": {
        backgroundColor: theme.palette.toggle.thumbHover
      }
    },
    "& + .MuiSwitch-track": {
      backgroundColor: theme.palette.toggle.trackUnchecked
    },
    "&.Mui-checked": {
      ".MuiSwitch-thumb:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
          theme.palette.toggle.checkIcon
        )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.toggle.trackChecked,
        opacity: 1
      }
    },
    "&.Mui-disabled": {
      ".MuiSwitch-thumb": {
        backgroundColor: theme.palette.toggle.thumbDisabled
      },
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.toggle.disabledUnchecked,
        opacity: 1
      },
      "&.Mui-checked": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        },
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.toggle.disabledChecked
        }
      }
    },
    "&.Mui-focusVisible": {
      "& + .MuiSwitch-track": {
        outline: `1px dashed ${theme.palette.outline}`
      }
    }
  },
  "&.MuiSwitch-sizeLarge": {
    width: "52px",
    height: "32px",
    borderRadius: "16px",
    ".MuiSwitch-track": {
      borderRadius: "16px"
    },
    ".MuiSwitch-switchBase": {
      width: "32px",
      "&.Mui-checked": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.checkIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      },
      "&.Mui-disabled": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      }
    },
    ".PrivateSwitchBase-input": {
      left: "-26px",
      width: "300%",
      height: "100%"
    }
  },
  "&.MuiSwitch-sizeSmall": {
    width: "38px",
    height: "18px",
    borderRadius: "9px",
    ".MuiSwitch-track": {
      borderRadius: "9px"
    },
    ".MuiSwitch-switchBase": {
      width: "18px",
      "&.Mui-checked": {
        transform: "translateX(20px)",
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.checkIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      },
      "&.Mui-disabled": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      }
    },
    ".PrivateSwitchBase-input": {
      left: "-9px",
      width: "300%",
      height: "100%"
    }
  },
  "&.MuiSwitch-sizeExtraSmall": {
    width: "26px",
    height: "13px",
    borderRadius: "6.5px",
    ".MuiSwitch-track": {
      borderRadius: "6.5px"
    },
    ".MuiSwitch-switchBase": {
      width: "13px",
      "&.Mui-checked": {
        transform: "translateX(13px)",
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.checkIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      },
      "&.Mui-disabled": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      }
    },
    ".PrivateSwitchBase-input": {
      left: "-6.5px",
      width: "300%",
      height: "100%"
    }
  }
}));
var Toggle = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx2(
      CursorController,
      {
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
        sx: props.sx,
        children: /* @__PURE__ */ jsx2(
          StyledToggle,
          {
            role: "checkbox",
            type: "checkbox",
            ref,
            ...omitCustomProps(props, ["sx"])
          }
        )
      }
    );
  }
);

// lib/toggle/theme.ts
var toggleTheme = {
  dark: {
    name: "toggle",
    styles: {
      label: COLORS.SYSTEM.SILVER,
      trackChecked: COLORS.SECONDARY.BLUE_40,
      trackUnchecked: COLORS.SYSTEM.DARK_30,
      thumbUnchecked: COLORS.SYSTEM.DARK_80,
      thumbChecked: COLORS.SECONDARY.BLUE_80,
      thumbHover: COLORS.SYSTEM.INK,
      thumbDisabled: COLORS.SYSTEM.INK,
      checkIcon: COLORS.SECONDARY.BLUE_40,
      disabledCheckIcon: COLORS.SYSTEM.INK,
      disabledChecked: COLORS.SYSTEM.DARK_80,
      disabledUnchecked: COLORS.SYSTEM.DARK_80
    }
  },
  light: {
    name: "toggle",
    styles: {
      label: COLORS.SYSTEM.DARK_30,
      trackChecked: COLORS.SECONDARY.BLUE_60,
      trackUnchecked: COLORS.SYSTEM.CLOUDY,
      thumbUnchecked: COLORS.SYSTEM.WHITE,
      thumbChecked: COLORS.SYSTEM.WHITE,
      thumbHover: COLORS.SECONDARY.BLUE_20,
      thumbDisabled: COLORS.SYSTEM.WHITE,
      checkIcon: COLORS.SECONDARY.BLUE_60,
      disabledCheckIcon: COLORS.SECONDARY.BLUE_30,
      disabledChecked: COLORS.SECONDARY.BLUE_20,
      disabledUnchecked: COLORS.SYSTEM.OFF_WHITE
    }
  }
};
export {
  Toggle,
  toggleTheme
};
