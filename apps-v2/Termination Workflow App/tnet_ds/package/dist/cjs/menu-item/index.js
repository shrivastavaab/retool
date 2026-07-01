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

// lib/menu-item/index.ts
var menu_item_exports = {};
__export(menu_item_exports, {
  MenuItem: () => MenuItem,
  menuItemTheme: () => menuItemTheme
});
module.exports = __toCommonJS(menu_item_exports);

// lib/menu-item/component.tsx
var import_styles = require("@mui/material/styles");
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var StyledMenuItem = (0, import_styles.styled)(import_material.MenuItem)(({ theme }) => ({
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  padding: theme.spacing(3),
  color: theme.palette.menuItem.text,
  backgroundColor: theme.palette.menuItem.background,
  minWidth: 220,
  "&.MuiAutocomplete-option.Mui-focused": {
    backgroundColor: theme.palette.menuItem.background
  },
  "&.MuiMenuItem-divider": {
    borderBottom: `1px solid ${theme.palette.menuItem.divider}`
  },
  "&.menuItemLvl-1": {
    paddingLeft: theme.spacing(9)
  },
  "&.menuItemLvl-2": {
    paddingLeft: theme.spacing(15)
  },
  "&:hover, &.Mui-selected:hover, &.Mui-focusVisible:hover, &.Mui-selected.Mui-focusVisible:hover, &.MuiAutocomplete-option:hover, &.MuiAutocomplete-option[aria-selected=true]:hover": {
    backgroundColor: theme.palette.menuItem.hover.background
  },
  "&:active, &.Mui-selected:active, &.Mui-selected.Mui-focusVisible:active, &.Mui-focusVisible:active, &.MuiAutocomplete-option:active, &.MuiAutocomplete-option[aria-selected=true], &.MuiAutocomplete-option[aria-selected=true].Mui-focused": {
    backgroundColor: `${theme.palette.menuItem.active.background}`
  },
  "&.Mui-focusVisible, &.Mui-selected.Mui-focusVisible": {
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`,
    outlineOffset: "-1px",
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-selected": {
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-disabled": {
    color: theme.palette.menuItem.disabled.text,
    opacity: 1,
    cursor: "not-allowed"
  },
  "&.menuItemHeader": {
    fontSize: theme.typography.paragraph.xs.medium.fontSize,
    lineHeight: theme.typography.paragraph.xs.medium.lineHeight,
    fontFamily: theme.typography.paragraph.xs.medium.fontFamily,
    textTransform: "uppercase",
    tabIndex: "-1",
    pointerEvents: "none",
    backgroundColor: theme.palette.menuItem.headerBackground,
    color: theme.palette.menuItem.headerText
  }
}));
var MenuItem = ({
  children,
  className = "",
  header,
  lvl = 0,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    StyledMenuItem,
    {
      ...rest,
      disableRipple: true,
      disableTouchRipple: true,
      className: `${className} ${header ? "menuItemHeader" : ""} menuItemLvl-${lvl}`,
      children
    }
  );
};

// lib/layout/index.ts
var import_material2 = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");

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

// lib/menu-item/theme.ts
var menuItemTheme = {
  dark: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      background: COLORS.SYSTEM.DARK_60,
      headerBackground: COLORS.SYSTEM.INK,
      headerText: COLORS.SYSTEM.SILVER,
      divider: COLORS.SYSTEM.SLATE,
      hover: {
        background: COLORS.SYSTEM.DARK_70
      },
      active: {
        background: COLORS.SYSTEM.DARK_80
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.WHITE,
      headerBackground: COLORS.SYSTEM.OFF_WHITE,
      headerText: COLORS.SYSTEM.DARK_30,
      divider: COLORS.SYSTEM.MISTY,
      hover: {
        background: COLORS.SECONDARY.BLUE_10
      },
      active: {
        background: COLORS.SECONDARY.BLUE_20
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER
      }
    }
  }
};
