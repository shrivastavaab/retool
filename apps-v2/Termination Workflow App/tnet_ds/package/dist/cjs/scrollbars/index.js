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

// lib/scrollbars/index.ts
var scrollbars_exports = {};
__export(scrollbars_exports, {
  ScrollBars: () => ScrollBars,
  scrollBarsTheme: () => scrollBarsTheme
});
module.exports = __toCommonJS(scrollbars_exports);

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

// lib/scrollbars/theme.ts
var scrollBarsTheme = {
  dark: {
    name: "scrollbars",
    styles: {
      background: COLORS.SYSTEM.DARK_80,
      color: COLORS.SYSTEM.SLATE,
      hover: {
        background: COLORS.SYSTEM.DARK_30
      },
      active: {
        background: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "scrollbars",
    styles: {
      background: COLORS.SYSTEM.MISTY,
      color: COLORS.SYSTEM.SILVER,
      hover: {
        background: COLORS.SYSTEM.PEWTER
      },
      active: {
        background: COLORS.SYSTEM.DARK_30
      }
    }
  }
};

// lib/scrollbars/component.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ScrollBars = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.GlobalStyles,
    {
      styles: (theme) => ({
        "*::-webkit-scrollbar": {
          borderRadius: "50px",
          background: theme.palette.scrollbars.background,
          width: "13px",
          height: "13px"
        },
        "*::-webkit-scrollbar-button": {
          width: "0px",
          height: "0px"
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "50px",
          background: theme.palette.scrollbars.color,
          backgroundClip: "padding-box",
          border: `3px solid ${theme.palette.scrollbars.background}`
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.scrollbars.hover.background
        },
        "*::-webkit-scrollbar-thumb:active": {
          background: theme.palette.scrollbars.active.background
        },
        "*::-webkit-scrollbar-track": {
          borderWidth: "0px",
          borderStyle: "none",
          borderRadius: "50px"
        }
      })
    }
  );
};
