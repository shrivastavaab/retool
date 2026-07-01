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

// lib/generic-classes/index.ts
var generic_classes_exports = {};
__export(generic_classes_exports, {
  GenericClasses: () => GenericClasses,
  genericClassesTheme: () => genericClassesTheme
});
module.exports = __toCommonJS(generic_classes_exports);

// lib/layout/index.ts
var import_material = require("@mui/material");

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

// lib/generic-classes/theme.ts
var genericClassesTheme = {
  dark: {
    name: "genericClasses",
    styles: {
      backgroundColorLightBlue: COLORS.SYSTEM.DARK_70,
      backgroundColorLightGray: COLORS.SYSTEM.DARK_60,
      backgroundColorWhiteBox: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SLATE,
      depth: {
        background: {
          bg: COLORS.SYSTEM.DARK_70
        },
        depth0: {
          bg: COLORS.SYSTEM.INK,
          border: `1px solid ${COLORS.SYSTEM.SLATE}`
        },
        depth1: {
          bg: COLORS.SYSTEM.INK,
          border: `1px solid ${COLORS.SYSTEM.SLATE}`,
          shadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)"
        },
        depth2: {
          bg: COLORS.SYSTEM.INK,
          border: `1px solid ${COLORS.SYSTEM.SLATE}`,
          shadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)"
        },
        headerDepth: {
          bg: COLORS.SYSTEM.DARK_60,
          shadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.16)"
        }
      }
    }
  },
  light: {
    name: "genericClasses",
    styles: {
      backgroundColorLightBlue: COLORS.SECONDARY.BLUE_10,
      backgroundColorLightGray: COLORS.SYSTEM.OFF_WHITE,
      backgroundColorWhiteBox: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.MISTY,
      depth: {
        background: {
          bg: COLORS.SYSTEM.OFF_WHITE
        },
        depth0: {
          bg: COLORS.SYSTEM.WHITE,
          border: `1px solid ${COLORS.SYSTEM.MISTY}`
        },
        depth1: {
          bg: COLORS.SYSTEM.WHITE,
          shadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)"
        },
        depth2: {
          bg: COLORS.SYSTEM.WHITE,
          shadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)"
        },
        headerDepth: {
          bg: COLORS.SYSTEM.WHITE,
          shadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.16)"
        }
      }
    }
  }
};

// lib/generic-classes/component.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var GenericClasses = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.GlobalStyles,
    {
      styles: (theme) => ({
        ".T1-container-lightblue": {
          backgroundColor: theme.palette.genericClasses.backgroundColorLightBlue,
          border: `1px solid ${theme.palette.genericClasses.border}`
        },
        ".T1-container-lightgray": {
          backgroundColor: theme.palette.genericClasses.backgroundColorLightGray,
          border: `1px solid ${theme.palette.genericClasses.border}`
        },
        ".T1-container-whiteBox": {
          backgroundColor: theme.palette.genericClasses.backgroundColorWhiteBox,
          border: `1px solid ${theme.palette.genericClasses.border}`
        },
        ".T1-background": {
          backgroundColor: theme.palette.genericClasses.depth.background.bg
        },
        ".T1-depth-0": {
          backgroundColor: theme.palette.genericClasses.depth.depth0.bg,
          border: theme.palette.genericClasses.depth.depth0.border
        },
        ".T1-depth-1": {
          backgroundColor: theme.palette.genericClasses.depth.depth1.bg,
          border: theme.palette.genericClasses.depth.depth1.border,
          boxShadow: theme.palette.genericClasses.depth.depth1.shadow
        },
        ".T1-depth-2": {
          backgroundColor: theme.palette.genericClasses.depth.depth2.bg,
          border: theme.palette.genericClasses.depth.depth2.border,
          boxShadow: theme.palette.genericClasses.depth.depth2.shadow
        },
        ".T1-depth-header": {
          backgroundColor: theme.palette.genericClasses.depth.headerDepth.bg,
          boxShadow: theme.palette.genericClasses.depth.headerDepth.shadow
        },
        ".T1-highlight-external-component": {
          position: "relative",
          zIndex: 1001,
          backgroundColor: theme.name === "dark" ? theme.palette.t1.system.ink : theme.palette.t1.system.white
        }
      })
    }
  );
};
