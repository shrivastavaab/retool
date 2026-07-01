var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/time-picker/index.ts
var time_picker_exports = {};
__export(time_picker_exports, {
  TimePicker: () => TimePicker,
  timePickerTheme: () => timePickerTheme
});
module.exports = __toCommonJS(time_picker_exports);

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
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/time-picker/theme.ts
var timePickerTheme = {
  dark: {
    name: "timePicker",
    styles: {
      selectionBand: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.DARK_80,
      formColumnHeader: COLORS.SYSTEM.SILVER,
      formButtonColor: COLORS.SYSTEM.WHITE
    }
  },
  light: {
    name: "timePicker",
    styles: {
      selectionBand: COLORS.SECONDARY.BLUE_20,
      background: COLORS.SYSTEM.WHITE,
      formColumnHeader: COLORS.SYSTEM.DARK_30,
      formButtonColor: COLORS.SYSTEM.INK
    }
  }
};

// lib/time-picker/component.tsx
var import_react9 = require("react");

// lib/text-field/component.tsx
var import_react2 = require("react");
var import_styles = require("@mui/material/styles");
var import_material4 = require("@mui/material");

// lib/cms/component.tsx
var import_react = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime2 = require("react/jsx-runtime");
var createHTMLTagsMapper = () => {
  const htmlTags = [
    // Document structure
    "html",
    "head",
    "body",
    "title",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
    "base",
    // Sections
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    "footer",
    "address",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    // Grouping content
    "div",
    "p",
    "hr",
    "pre",
    "blockquote",
    "ol",
    "ul",
    "li",
    "dl",
    "dt",
    "dd",
    "figure",
    "figcaption",
    // Text-level semantics
    "a",
    "em",
    "strong",
    "small",
    "mark",
    "del",
    "ins",
    "q",
    "cite",
    "abbr",
    "dfn",
    "time",
    "code",
    "var",
    "samp",
    "kbd",
    "sub",
    "sup",
    "i",
    "b",
    "u",
    "s",
    "span",
    "br",
    "wbr",
    "bdi",
    "bdo",
    "ruby",
    "rt",
    "rp",
    // Embedded content
    "img",
    "iframe",
    "embed",
    "object",
    "param",
    "video",
    "audio",
    "source",
    "track",
    "map",
    "area",
    "svg",
    "math",
    // Tabular data
    "table",
    "caption",
    "colgroup",
    "col",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "td",
    "th",
    // Forms
    "form",
    "fieldset",
    "legend",
    "label",
    "input",
    "button",
    "select",
    "datalist",
    "optgroup",
    "option",
    "textarea",
    "output",
    "progress",
    "meter",
    // Interactive elements
    "details",
    "summary",
    "dialog",
    // Web Components
    "slot",
    "template",
    // Deprecated but still used
    "center",
    "font",
    "big",
    "small",
    "tt"
  ];
  const mapper = {};
  htmlTags.forEach((tag) => {
    mapper[tag] = (chunks) => (0, import_react.createElement)(tag, {}, chunks);
  });
  return mapper;
};
var htmlTagsMapper = createHTMLTagsMapper();
var useGetCMSContent = () => {
  const intl = (0, import_react_intl.useIntl)();
  return ({
    contentId,
    key,
    fallbackContent = "Content not found",
    values,
    enableHTMLTags = false
  }) => {
    const id = key || null;
    const messageId = `${contentId}${id}`;
    const notFoundMarker = `__CMS_NOT_FOUND__${messageId}__`;
    const formatValues = enableHTMLTags ? { ...htmlTagsMapper, ...values } : values;
    const cmsMessage = intl.formatMessage(
      {
        id: messageId,
        defaultMessage: notFoundMarker
      },
      formatValues
    );
    return cmsMessage === notFoundMarker ? fallbackContent : cmsMessage;
  };
};

// lib/input-label/component.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var InputLabel = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material2.InputLabel, { ...props });
};

// lib/form-helper-text/component.tsx
var import_material3 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_material3.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_material.WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/text-field/component.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var TextField = (0, import_react2.forwardRef)(
  ({ contentId, slotProps, ...rest }, ref) => {
    const getCMSContent = useGetCMSContent();
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_material4.TextField,
      {
        ref,
        ...rest,
        slots: {
          input: StyledOutlinedInput,
          inputLabel: InputLabel,
          formHelperText: FormHelperText
        },
        slotProps: {
          inputLabel: {
            children: contentId ? getCMSContent({
              contentId,
              key: ".label",
              fallbackContent: rest.label
            }) : rest.label
          },
          ...slotProps
        }
      }
    );
  }
);
var getOutlinedInputStyles = ({ theme }) => ({
  alignItems: "center",
  outline: "none",
  padding: 0,
  height: "3rem",
  color: theme.palette.textField.text,
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
    padding: `${theme.spacing(3)}`
  },
  ".MuiIconButton-edgeEnd": {
    marginRight: theme.spacing(1)
  },
  ".MuiIconButton-root": {
    ".MuiSvgIcon-root": {
      fill: "#242936"
    }
  },
  "&.MuiInputBase-sizeSmall": {
    input: {
      padding: `${theme.spacing(2, 3)}`
    },
    height: "2.25rem",
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    fieldset: {
      span: {
        paddingRight: theme.spacing(2.75)
      }
    }
  },
  "&:hover, &.T1-hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.hover.border
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.hover.border
    }
  },
  ".MuiIconButton-edgeEnd:focus-visible": {
    borderRadius: "2px",
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.textField.border
  },
  "&.Mui-error, &:hover.Mui-error": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.error.border,
      color: theme.palette.textField.text
    }
  },
  "&.Mui-disabled": {
    background: theme.palette.textField.disabled.background,
    opacity: 1,
    ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
      "-webkit-text-fill-color": `${theme.palette.textField.disabled.text}`
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.disabled.border
    }
  },
  "&.Mui-focused, &.T1-focused": {
    fieldset: {
      "&.MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.textField.focus.border}`
      }
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.focus.border
    }
  },
  "&.MuiSearch": {
    backgroundColor: theme.palette.textField.search.background,
    "&.Mui-focused": {
      backgroundColor: "white"
    },
    input: {
      "&::placeholder": {
        color: theme.palette.textField.search.placeholder
      }
    }
  },
  /* Text Area styles */
  "&.MuiInputBase-multiline": {
    height: "auto"
  },
  input: {
    "&::-ms-reveal, &::-ms-clear": {
      display: "none"
    }
  }
});
var StyledOutlinedInput = (0, import_styles.styled)(import_material4.OutlinedInput)(
  getOutlinedInputStyles
);

// lib/text-field/theme.ts
var textFieldTheme = {
  dark: {
    name: "textField",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.DARK_30,
      background: COLORS.SYSTEM.INK,
      icon: COLORS.SYSTEM.SILVER,
      label: {
        text: COLORS.SYSTEM.SILVER
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER,
        border: COLORS.SYSTEM.PEWTER,
        background: COLORS.SYSTEM.DARK_70
      },
      error: {
        text: COLORS.ERROR.ERROR_30,
        border: COLORS.ERROR.ERROR_30
      },
      hover: {
        border: COLORS.SYSTEM.SILVER
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_40
      },
      search: {
        background: COLORS.SYSTEM.DARK_80,
        placeholder: COLORS.SYSTEM.SILVER
      }
    }
  },
  light: {
    name: "textField",
    styles: {
      text: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SILVER,
      background: COLORS.SYSTEM.OFF_WHITE,
      icon: COLORS.SYSTEM.PEWTER,
      label: {
        text: COLORS.SYSTEM.DARK_30
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER,
        border: COLORS.SYSTEM.CLOUDY,
        background: COLORS.TRANSPARENT
      },
      error: {
        text: COLORS.ERROR.ERROR_50,
        border: COLORS.ERROR.ERROR_40
      },
      hover: {
        border: COLORS.SYSTEM.SLATE
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_60
      },
      search: {
        background: COLORS.SYSTEM.OFF_WHITE,
        placeholder: COLORS.SYSTEM.PEWTER
      }
    }
  }
};

// lib/icon-button/component.tsx
var import_material5 = require("@mui/material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconButton = (props) => {
  const propsWithDefault = {
    variant: "transparent",
    shape: "circle",
    ...props
  };
  const {
    variant = "transparent",
    shape = "circle",
    children,
    className,
    ...rest
  } = propsWithDefault;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_material5.IconButton,
    {
      className: `T1-icon-button MuiIconButton-${variant} MuiIconButton-${shape} ${className}`,
      ...omitCustomProps(rest, ["disableRipple", "disableFocusRipple"]),
      sx: props.sx,
      disableRipple: true,
      disableFocusRipple: true,
      children
    }
  );
};

// lib/menu/component.tsx
var import_react3 = __toESM(require("react"), 1);
var import_material7 = require("@mui/material");

// lib/menu-item/component.tsx
var import_styles2 = require("@mui/material/styles");
var import_material6 = require("@mui/material");
var import_jsx_runtime7 = require("react/jsx-runtime");
var StyledMenuItem = (0, import_styles2.styled)(import_material6.MenuItem)(({ theme }) => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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

// lib/menu/component.tsx
var import_styles3 = require("@mui/material/styles");
var import_jsx_runtime8 = require("react/jsx-runtime");
var StyledMenu = (0, import_styles3.styled)(import_material7.Menu)(() => ({
  padding: 0,
  ".MuiList-root": {
    padding: 0
  }
}));
var Menu = import_react3.default.forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      variant: "default",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      StyledMenu,
      {
        ...omitCustomProps(propsWithDefault, ["variant"]),
        elevation: 1,
        ref,
        className: propsWithDefault.variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: propsWithDefault.children
      }
    );
  }
);
var MenuWithCMS = import_react3.default.forwardRef(
  ({ contentId, variant, ...rest }, ref) => {
    const intl = (0, import_react_intl.useIntl)();
    const keys = Object.keys(intl.messages).filter(
      (key) => key.startsWith(`${contentId}.items`) && key.endsWith(".label")
    ).map((key) => intl.messages[key]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/time-picker/TimePickerForm.tsx
var import_react8 = require("react");
var import_styles9 = require("@mui/material/styles");

// lib/time-picker/state.tsx
var import_jotai = require("jotai");
var import_utils6 = require("jotai/utils");

// lib/time-picker/utils.tsx
var addZeroes = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};
var parseTimeObject = (timeObject) => {
  return `${addZeroes(timeObject.hours)}:${addZeroes(timeObject.minutes)} ${clockValues.aa[timeObject.aa - 1]} ${timeObject.timeZone ? clockValues.timeZone[timeObject.timeZone - 1] : ""}`;
};

// lib/time-picker/state.tsx
var import_jotai_scope = require("jotai-scope");
var import_vanilla = require("jotai/vanilla");
var { Provider, useAtom: useMyAtom } = (0, import_jotai_scope.createIsolation)();
var clockValues = {
  hours: 12,
  minutes: 60,
  aa: ["AM", "PM"],
  timeZone: ["CST", "PST", "EST", "AKST", "HST"]
};
var initialTimeValuesAtomStartingValue = {
  hours: 1,
  minutes: 0,
  aa: 1
};
var initialTimeValuesAtom_ = (0, import_jotai.atom)(
  initialTimeValuesAtomStartingValue
);
var timeValuesAtom_ = (0, import_utils6.atomWithDefault)(
  (get) => get(initialTimeValuesAtom_)
);
var unconfirmedInputValueAtom_ = (0, import_jotai.atom)(
  (get) => parseTimeObject(get(timeValuesAtom_))
);
var inputValueAtom_ = (0, import_jotai.atom)(`01:00 AM`);

// lib/buttons/component.tsx
var import_react6 = __toESM(require("react"), 1);
var import_material14 = require("@mui/material");
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);
var import_styles7 = require("@mui/material/styles");

// lib/buttons/theme.ts
var import_styles4 = require("@mui/material/styles");
var import_material8 = require("@mui/material");
var buttonTheme = {
  dark: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.SILVER,
      loadingForeground: COLORS.SYSTEM.CLOUDY,
      primary: {
        text: COLORS.PRIMARY.ORANGE_80,
        default: {
          body: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_75
        }
      },
      secondary: {
        body: COLORS.TRANSPARENT,
        default: {
          border: COLORS.PRIMARY.ORANGE_40,
          text: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_45,
          text: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_30,
          text: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_75,
          text: COLORS.PRIMARY.ORANGE_75
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.INK,
        default: {
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        active: {
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.CLOUDY
        },
        hover: { body: COLORS.SYSTEM.DARK_70 },
        active: { body: COLORS.SYSTEM.DARK_70 },
        disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.INK,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SYSTEM.SLATE },
          active: { body: COLORS.SYSTEM.DARK_60, border: COLORS.SYSTEM.WHITE },
          disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
        },
        primary: {
          text: COLORS.PRIMARY.ORANGE_80,
          default: {
            body: COLORS.PRIMARY.ORANGE_40
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_45
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_75
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_40,
            text: COLORS.SECONDARY.BLUE_80
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: { body: COLORS.SYSTEM.INK, text: COLORS.SYSTEM.PEWTER }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_40,
        default: {
          body: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.PEWTER
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          border: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.SLATE
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_40
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      }
    }
  },
  light: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.PEWTER,
      loadingForeground: COLORS.SYSTEM.PEWTER,
      primary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      secondary: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.PRIMARY.ORANGE_60,
          text: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_50,
          text: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_70,
          text: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_20,
          text: COLORS.PRIMARY.ORANGE_20
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.TRANSPARENT
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.SILVER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.TRANSPARENT
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.SYSTEM.INK,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          text: COLORS.SYSTEM.INK
        },
        hover: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70,
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.PEWTER
        },
        hover: { body: COLORS.SYSTEM.OFF_WHITE },
        active: { body: COLORS.SYSTEM.OFF_WHITE },
        disabled: { body: COLORS.TRANSPARENT, text: COLORS.SYSTEM.SILVER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.MISTY,
            text: COLORS.SYSTEM.INK
          },
          hover: { body: COLORS.SYSTEM.CLOUDY },
          active: {
            body: COLORS.SYSTEM.OFF_WHITE,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: { body: COLORS.SYSTEM.CLOUDY, text: COLORS.SYSTEM.SILVER }
        },
        primary: {
          text: COLORS.SYSTEM.WHITE,
          default: {
            body: COLORS.PRIMARY.ORANGE_60
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_50
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_20
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_60,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.SECONDARY.BLUE_20,
            text: COLORS.SYSTEM.SILVER
          }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_60,
        default: {
          body: COLORS.SECONDARY.BLUE_10
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_20
        },
        active: {
          body: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          body: COLORS.SECONDARY.BLUE_60,
          text: COLORS.SECONDARY.BLUE_60
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.SILVER
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_60
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      }
    }
  }
};
var _buttonTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        loadingBackground: theme.palette.t1.system.silver,
        loadingForeground: theme.palette.t1.system.cloudy,
        primary: {
          text: theme.palette.t1.primary.orange80,
          default: {
            body: theme.palette.t1.primary.orange40
          },
          hover: {
            body: theme.palette.t1.primary.orange45
          },
          active: {
            body: theme.palette.t1.primary.orange30
          },
          disabled: {
            body: theme.palette.t1.primary.orange75
          }
        },
        secondary: {
          body: theme.palette.t1.transparent,
          default: {
            border: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange40
          },
          hover: {
            border: theme.palette.t1.primary.orange45,
            text: theme.palette.t1.primary.orange45
          },
          active: {
            border: theme.palette.t1.primary.orange30,
            text: theme.palette.t1.primary.orange30
          },
          disabled: {
            border: theme.palette.t1.primary.orange75,
            text: theme.palette.t1.primary.orange75
          }
        },
        tertiary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        contrast: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        elevated: {
          body: theme.palette.t1.system.ink,
          default: {
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            text: theme.palette.t1.system.white
          },
          active: {
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.cloudy
          },
          hover: { body: theme.palette.t1.system.dark70 },
          active: { body: theme.palette.t1.system.dark70 },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.system.slate },
            active: {
              body: theme.palette.t1.system.dark60,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.dark60,
              text: theme.palette.t1.system.pewter
            }
          },
          primary: {
            text: theme.palette.t1.primary.orange80,
            default: {
              body: theme.palette.t1.primary.orange40
            },
            hover: {
              body: theme.palette.t1.primary.orange45
            },
            active: {
              body: theme.palette.t1.primary.orange30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.primary.orange75
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue40,
              text: theme.palette.t1.secondary.blue80
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.pewter
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue40,
          default: {
            body: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.pewter
          },
          active: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.slate
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            border: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.slate
          },
          selected: {
            body: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.system.slate
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.silver
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue40
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
    case "light":
    default: {
      return {
        loadingBackground: theme.palette.t1.system.pewter,
        loadingForeground: theme.palette.t1.system.pewter,
        primary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.primary.orange60
          },
          hover: {
            body: theme.palette.t1.primary.orange50
          },
          active: {
            body: theme.palette.t1.primary.orange70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        secondary: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.primary.orange60
          },
          hover: {
            border: theme.palette.t1.primary.orange50,
            text: theme.palette.t1.primary.orange50
          },
          active: {
            border: theme.palette.t1.primary.orange70,
            text: theme.palette.t1.primary.orange70
          },
          disabled: {
            border: theme.palette.t1.primary.orange20,
            text: theme.palette.t1.primary.orange20
          }
        },
        tertiary: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.transparent
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.silver
          }
        },
        contrast: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.transparent
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        elevated: {
          body: theme.palette.t1.system.white,
          default: {
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          active: {
            text: theme.palette.t1.secondary.blue70,
            body: theme.palette.t1.system.misty
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.pewter
          },
          hover: { body: theme.palette.t1.system.offWhite },
          active: { body: theme.palette.t1.system.offWhite },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.misty,
              text: theme.palette.t1.system.ink
            },
            hover: { body: theme.palette.t1.system.cloudy },
            active: {
              body: theme.palette.t1.system.offWhite,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.system.cloudy,
              text: theme.palette.t1.system.silver
            }
          },
          primary: {
            text: theme.palette.t1.system.white,
            default: {
              body: theme.palette.t1.primary.orange60
            },
            hover: {
              body: theme.palette.t1.primary.orange50
            },
            active: {
              body: theme.palette.t1.primary.orange70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.primary.orange20
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue60,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.secondary.blue20,
              text: theme.palette.t1.system.silver
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue60,
          default: {
            body: theme.palette.t1.secondary.blue10
          },
          hover: {
            body: theme.palette.t1.secondary.blue20
          },
          active: {
            body: theme.palette.t1.secondary.blue30
          },
          disabled: {
            body: theme.palette.t1.secondary.blue60,
            text: theme.palette.t1.secondary.blue60
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.silver
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue60
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
  }
};
var StyledChipButton = (0, import_styles4.styled)(import_material8.Button)(({
  theme
}) => {
  const palette = _buttonTheme(theme);
  return {
    ".MuiSvgIcon-root": {
      color: "inherit"
    },
    whiteSpace: "nowrap",
    textTransform: "none",
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    fontSize: theme.typography.paragraph.md.medium.fontSize,
    boxShadow: "none",
    backgroundColor: palette.chip.default.body,
    height: "20px",
    padding: theme.spacing(4),
    borderRadius: "24px",
    color: palette.chip.text,
    margin: 0,
    "&:hover": {
      backgroundColor: palette.chip.hover.body
    },
    "&:active, &.T1-chipButton-active": {
      backgroundColor: palette.chip.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: palette.chip.default.body,
      outline: `1px dashed ${palette.chip.text}`,
      "&:hover": {
        backgroundColor: palette.chip.hover.body
      },
      "&:active, &.T1-chipButton-active": {
        backgroundColor: palette.chip.active.body
      }
    },
    "&.Mui-disabled": {
      color: palette.chip.text,
      backgroundColor: palette.chip.default.body,
      opacity: "50%",
      cursor: "not-allowed",
      pointerEvents: "all"
    }
  };
});
var StyledToggleIconButton = (0, import_styles4.styled)(import_material8.Button)(({ theme, buttontype = "center", selected = false }) => {
  const getBorderRadius = () => {
    switch (buttontype) {
      case "left":
        return `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`;
      case "right":
        return `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`;
      case "top":
        return `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`;
      case "bottom":
        return `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`;
      case "center":
      default:
        return "0";
    }
  };
  return {
    minWidth: "auto",
    width: "54px",
    height: "36px",
    padding: 0,
    borderRadius: getBorderRadius(),
    position: "relative",
    boxSizing: "content-box",
    backgroundColor: selected ? theme.palette.button.toggleIcon.selected.body : theme.palette.button.toggleIcon.default.body,
    color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.text,
    border: selected ? `1px solid ${theme.palette.button.toggleIcon.selected.border}` : `1px solid ${theme.palette.button.toggleIcon.default.border}`,
    "&:hover, &.Mui-HoverVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px solid ${theme.palette.button.toggleIcon.hover.border}`
    },
    "&:active, &.isActive": {
      backgroundColor: theme.palette.button.toggleIcon.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
      outline: "none",
      "&:hover": {
        backgroundColor: theme.palette.button.toggleIcon.default.body
      }
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.button.toggleIcon.disabled.body,
      color: theme.palette.action.disabled,
      border: `1px solid ${theme.palette.button.toggleIcon.disabled.border}`,
      ".MuiSvgIcon-root": {
        color: theme.palette.button.toggleIcon.disabled.text
      }
    },
    "& .MuiSvgIcon-root": {
      fontSize: "20px",
      color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.icon.body
    }
  };
});
var StyledSimpleIconButton = (0, import_styles4.styled)(import_material8.IconButton)(({ theme, variant, selected }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: "color 0.2s ease-in-out",
  width: "24px",
  height: "24px",
  color: theme.palette.button.simpleIcon.text,
  "&:hover:not(:disabled), &.Mui-HoverVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text
  },
  ...selected && {
    color: variant === "heart" ? "#C62828" : "#FBC02D",
    "&:hover:not(:disabled)": {
      color: variant === "heart" ? "#C62828" : "#FBC02D"
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text,
    border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
    outlineOffset: "2px"
  },
  "&:disabled": {
    color: theme.palette.button.simpleIcon.disabled.text,
    cursor: "not-allowed"
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
    transition: "inherit"
  }
}));
var StyledButtonArrangement = (0, import_styles4.styled)(import_material.Stack)(({
  theme
}) => {
  return {
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "end",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      ".MuiButtonBase-root": { width: "100%" }
    }
  };
});

// lib/buttons/constants.ts
var STROKE_WIDTH = {
  large: "3px",
  medium: "4px",
  small: "5px",
  extraSmall: "5.5px"
};

// lib/circular-progress/theme.ts
var import_material9 = require("@mui/material");

// lib/circular-progress/constants.ts
var SIZE_MAP = {
  extraLarge: "90px",
  large: "60px",
  medium: "48px",
  small: "30px",
  extraSmall: "18px"
};
var STROKE_WIDTH2 = {
  extraLarge: "0.9px",
  large: "1.2px",
  medium: "1.5px",
  small: "2.4px",
  extraSmall: "4px"
};

// lib/circular-progress/theme.ts
var circularProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        default: {
          background: theme.palette.t1.system.slate,
          foreground: theme.palette.t1.system.white
        },
        brand: {
          background: theme.palette.t1.primary.orange75,
          foreground: theme.palette.t1.primary.orange30
        },
        stepper: {
          background: theme.palette.t1.system.silver,
          foreground: theme.palette.t1.secondary.blue40
        }
      };
    }
    case "light": {
      return {
        default: {
          background: theme.palette.t1.secondary.blue20,
          foreground: theme.palette.t1.secondary.blue80
        },
        brand: {
          background: theme.palette.t1.primary.orange10,
          foreground: theme.palette.t1.primary.orange50
        },
        stepper: {
          background: theme.palette.t1.secondary.blue30,
          foreground: theme.palette.t1.secondary.blue60
        }
      };
    }
  }
};
var StyledCircularProgressWrapper = (0, import_material9.styled)(
  "div"
)(({
  theme,
  size,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: `${SIZE_MAP[size]}`,
    height: `${SIZE_MAP[size]}`,
    stroke: `${palette[color].background}`,
    circle: {
      strokeWidth: `${STROKE_WIDTH2[size]}`,
      fill: "transparent"
    },
    ".MuiCircularProgress-root": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: `${palette[color].foreground}`
    }
  };
});
var StyledStepperCircularProgressWrapper = (0, import_material9.styled)("div")(({
  theme,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: "24px",
    height: "24px",
    strokeWidth: "2.5",
    stroke: palette.default.background,
    svg: {
      position: "absolute",
      left: 0
    },
    circle: {
      fill: "transparent"
    },
    "&.T1-CircularProgressWrapper-Stepper": {
      stroke: palette.stepper.background
    },
    ".T1-CircularProgress-Stepper": {
      stroke: palette.stepper.foreground
    },
    ".MuiCircularProgress-root": {
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: palette[color].foreground
    }
  };
});

// lib/circular-progress/component.tsx
var import_material10 = require("@mui/material");
var import_jsx_runtime9 = require("react/jsx-runtime");
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material10.CircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};

// lib/buttons/component.tsx
var import_icons_material2 = require("@mui/icons-material");

// lib/checkbox/theme.ts
var import_material11 = require("@mui/material");
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
var StyledCheckboxHelperText = (0, import_material11.styled)(FormHelperText)(({
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
var import_react4 = require("react");
var import_material12 = require("@mui/material");
var import_styles5 = require("@mui/material/styles");
var import_SvgIcon = __toESM(require("@mui/material/SvgIcon"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");

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
var import_material13 = require("@mui/material");
var import_styles6 = require("@mui/material/styles");
var import_react5 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
var Typography = (0, import_react5.forwardRef)(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var StyledTypography = (0, import_styles6.styled)(import_material13.Typography)(({
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

// lib/buttons/component.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var Button = ({
  size = "medium",
  loading,
  disabled,
  children,
  contentId,
  cmsOptions,
  className,
  ...props
}) => {
  const getContent = useGetCMSContent();
  const buttonChildren = contentId ? getContent({
    contentId,
    key: cmsOptions?.key || ".label",
    fallbackContent: cmsOptions?.fallbackContent || children,
    values: cmsOptions?.values || {}
  }) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_material14.Button,
    {
      disabled: disabled || loading,
      size,
      ...props,
      disableRipple: true,
      className: `T1-button ${className}`,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          CircularProgress,
          {
            "data-testid": "circular-progress",
            sx: {
              circle: {
                strokeWidth: STROKE_WIDTH[size]
              }
            }
          }
        ),
        buttonChildren
      ]
    }
  );
};

// lib/divider/component.tsx
var import_material15 = require("@mui/material");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Divider = (props) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material15.Divider, { ...props });

// lib/time-picker/TimePickerFormColumn.tsx
var import_react7 = __toESM(require("react"), 1);
var import_styles8 = require("@mui/material/styles");
var import_jsx_runtime14 = require("react/jsx-runtime");
var propsAreEqual = (oldProps, newProps) => {
  return oldProps.selectedIndex === newProps.selectedIndex;
};
var StyledColumn = (0, import_styles8.styled)(import_material.Stack, {
  shouldForwardProp: (prop) => prop !== "selectedIndex"
})(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
  overflow: "scroll",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none"
  },
  ".selectionFormColumnScroll": {
    display: "flex",
    flexDirection: "column",
    "&:before": {
      content: "''",
      height: "80px",
      width: "100%"
    },
    "&:after": {
      content: "''",
      height: "80px",
      width: "100%"
    }
  },
  ".selectionFormColumn-element": {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "transparent",
    borderRadius: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    color: theme.palette.timePicker.formButtonColor,
    outlineOffset: -1,
    "&.active": {
      fontFamily: theme.typography.paragraph.sm.medium.fontFamily
    },
    "&:focus": {
      outline: `1px dashed ${theme.palette.checkbox.outlineFocus}`
    }
  },
  ".selectionFormColumn-element.active": {
    fontFamily: theme.typography.paragraph.sm.medium.fontFamily
  }
}));
var StyledColumnHeader = (0, import_styles8.styled)(import_material.Stack)(({ theme }) => ({
  width: "100%",
  height: "40px",
  backgroundColor: theme.palette.timePicker.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".MuiTypography-root": {
    color: theme.palette.timePicker.formColumnHeader
  }
}));
var TimePickerFormColumn = (0, import_react7.memo)(
  ({
    children,
    type,
    selectedIndex,
    setTimeValues
  }) => {
    const columnRef = import_react7.default.useRef(null);
    const [scrolling, setScrolling] = import_react7.default.useState(false);
    const scrollTimeoutRef = (0, import_react7.useRef)(null);
    (0, import_react7.useEffect)(() => {
      if (!scrolling) {
        columnRef.current.scrollTo({ top: 40 * selectedIndex });
      }
    }, [selectedIndex]);
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setScrolling(false);
        if (columnRef.current.scrollTop % 40 < 20) {
          const newIndex = type === "minutes" ? columnRef.current.scrollTop / 40 : columnRef.current.scrollTop / 40 + 1;
          setTimeValues((prev) => ({
            ...prev,
            [type]: Math.floor(newIndex)
          }));
          columnRef.current.scrollTop = 40 * selectedIndex;
        } else {
          const newIndex = type === "minutes" ? columnRef.current.scrollTop / 40 + 1 : columnRef.current.scrollTop / 40 + 2;
          setTimeValues((prev) => ({
            ...prev,
            [type]: Math.floor(newIndex)
          }));
          columnRef.current.scrollTop = 40 * selectedIndex;
        }
      }, 200);
      if (!scrolling) {
        setScrolling(true);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      StyledColumn,
      {
        selectedIndex,
        flexWrap: "nowrap",
        className: `selectionFormColumn selectionFormColumn-${type}`,
        ref: columnRef,
        onScroll: handleScroll,
        "data-testid": `time-picker-form-column-${type}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "selectionFormColumnScroll", children })
      }
    );
  },
  propsAreEqual
);
var TimePickerFormColumnHeader = (0, import_react7.memo)(
  ({ label }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      StyledColumnHeader,
      {
        flexWrap: "nowrap",
        className: `selectionFormColumnHeader selectionFormColumnHeader-${label}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Typography, { variant: "paragraphSm", children: label })
      }
    );
  }
);

// lib/time-picker/TimePickerForm.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var StyledTimePickerFormContainer = (0, import_styles9.styled)(import_material.Stack)(({ theme }) => ({
  backgroundColor: theme.palette.timePicker.background,
  "&::before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "40px",
    backgroundColor: theme.palette.timePicker.selectionBand,
    top: "120px"
  }
}));
var TimePickerForm = ({
  closeMenu,
  setInputValue,
  timeValues,
  setTimeValues,
  unconfirmedInputValue,
  setInitialTimeValues
}) => {
  const selectionFormRef = (0, import_react8.useRef)();
  (0, import_react8.useLayoutEffect)(() => {
    focusNextButton("minutes");
  }, [timeValues.minutes]);
  (0, import_react8.useLayoutEffect)(() => {
    focusNextButton("aa");
  }, [timeValues.aa]);
  (0, import_react8.useLayoutEffect)(() => {
    if (timeValues.timeZone) {
      focusNextButton("timeZone");
    }
  }, [timeValues.timeZone]);
  (0, import_react8.useLayoutEffect)(() => {
    focusNextButton("hours");
  }, [timeValues.hours]);
  const handleSelectionFormKeyDown = (event) => {
    event.stopPropagation();
    if (event.key === "Tab" && document.activeElement === selectionFormRef.current) {
      const firstButton = selectionFormRef.current?.querySelector(
        ".active"
      );
      firstButton?.focus();
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  };
  const focusNextButton = (column) => {
    const currentColumn = selectionFormRef.current?.querySelector(
      `.selectionFormColumn-${column}`
    );
    const buttonToFocus = currentColumn?.querySelector(
      ".active"
    );
    buttonToFocus.focus();
  };
  const handleSelectionFormButtonKeyDown = (event, column) => {
    event.stopPropagation();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      switch (column) {
        case "hours": {
          if (timeValues.hours < clockValues.hours) {
            setTimeValues((prev) => ({ ...prev, hours: prev.hours + 1 }));
          }
          break;
        }
        case "minutes": {
          if (timeValues.minutes < clockValues.minutes - 1) {
            setTimeValues((prev) => ({ ...prev, minutes: prev.minutes + 1 }));
          }
          break;
        }
        case "aa": {
          if (timeValues.aa < clockValues.aa.length) {
            setTimeValues((prev) => ({ ...prev, aa: prev.aa + 1 }));
          }
          break;
        }
        case "timeZone": {
          if (timeValues.timeZone < clockValues.timeZone.length) {
            setTimeValues((prev) => ({
              ...prev,
              timeZone: prev.timeZone + 1
            }));
          }
          break;
        }
      }
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      switch (column) {
        case "hours": {
          if (timeValues.hours > 1) {
            setTimeValues((prev) => ({ ...prev, hours: prev.hours - 1 }));
          }
          break;
        }
        case "minutes": {
          if (timeValues.minutes > 0) {
            setTimeValues((prev) => ({ ...prev, minutes: prev.minutes - 1 }));
          }
          break;
        }
        case "aa": {
          if (timeValues.aa > 1) {
            setTimeValues((prev) => ({ ...prev, aa: prev.aa - 1 }));
          }
          break;
        }
        case "timeZone": {
          if (timeValues.timeZone > 1) {
            setTimeValues((prev) => ({
              ...prev,
              timeZone: prev.timeZone - 1
            }));
          }
          break;
        }
      }
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  };
  const handleSelectionFormButtonClick = (column, index) => {
    setTimeValues((prev) => {
      switch (column) {
        case "hours": {
          return { ...prev, hours: index + 1 };
        }
        case "minutes": {
          return { ...prev, minutes: index };
        }
        case "aa": {
          return { ...prev, aa: index + 1 };
        }
        case "timeZone": {
          return { ...prev, timeZone: index + 1 };
        }
      }
    });
  };
  const getActiveClass = (column, index) => {
    switch (column) {
      case "hours": {
        return timeValues.hours === index + 1 ? "active" : "";
      }
      case "minutes": {
        return timeValues.minutes === index ? "active" : "";
      }
      case "aa": {
        return timeValues.aa === index + 1 ? "active" : "";
      }
      case "timeZone": {
        return timeValues.timeZone === index + 1 ? "active" : "";
      }
    }
  };
  const getTabIndex = (column, index) => {
    switch (column) {
      case "hours": {
        return timeValues.hours === index + 1 ? 0 : -1;
      }
      case "minutes": {
        return timeValues.minutes === index ? 0 : -1;
      }
      case "aa": {
        return timeValues.aa === index + 1 ? 0 : -1;
      }
      case "timeZone": {
        return timeValues.timeZone === index + 1 ? 0 : -1;
      }
    }
  };
  const renderNumbers = (number, column) => {
    return Array.from({ length: number }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        onKeyDown: (e) => {
          handleSelectionFormButtonKeyDown(e, column);
        },
        className: `selectionFormColumn-element ${getActiveClass(
          column,
          index
        )}`,
        tabIndex: getTabIndex(column, index),
        onClick: () => {
          handleSelectionFormButtonClick(column, index);
        },
        children: column === "minutes" ? index < 10 ? `0${index}` : `${index}` : index < 9 ? `0${index + 1}` : `${index + 1}`
      },
      `clockNumber-${index + 1}`
    ));
  };
  const renderStringValues = (values, column) => {
    return values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        onKeyDown: (e) => {
          handleSelectionFormButtonKeyDown(e, column);
        },
        className: `selectionFormColumn-element ${getActiveClass(
          column,
          index
        )}`,
        tabIndex: getTabIndex(column, index),
        onClick: () => {
          handleSelectionFormButtonClick(column, index);
        },
        children: value
      },
      `clockValue-${value}`
    ));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(StyledTimePickerFormContainer, { "data-testid": "time-picker-menu", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_material.Stack, { direction: "row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TimePickerFormColumnHeader, { label: "Hour" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TimePickerFormColumnHeader, { label: "Minute" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TimePickerFormColumnHeader, { label: "AM/PM" }),
      timeValues.timeZone && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TimePickerFormColumnHeader, { label: "Time zone" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
      import_material.Stack,
      {
        onKeyDown: handleSelectionFormKeyDown,
        ref: selectionFormRef,
        direction: "row",
        className: "selectionForm-root",
        "data-testid": "selectionForm",
        sx: {
          overflow: "hidden",
          position: "relative",
          height: "200px",
          width: "360px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "hours",
              selectedIndex: timeValues.hours - 1,
              children: renderNumbers(clockValues.hours, "hours")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "minutes",
              selectedIndex: timeValues.minutes,
              children: renderNumbers(clockValues.minutes, "minutes")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "aa",
              selectedIndex: timeValues.aa - 1,
              children: renderStringValues(clockValues.aa, "aa")
            }
          ),
          timeValues.timeZone && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "timeZone",
              selectedIndex: timeValues.timeZone - 1,
              children: renderStringValues(clockValues.timeZone, "timeZone")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Divider, {}),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_material.Stack, { direction: "row", px: 6, py: 4, gap: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Button,
        {
          onKeyDown: (e) => {
            e.stopPropagation();
          },
          tabIndex: 0,
          size: "medium",
          fullWidth: true,
          variant: "secondary",
          onClick: () => {
            closeMenu();
          },
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Button,
        {
          tabIndex: 0,
          size: "medium",
          fullWidth: true,
          onKeyDown: (e) => {
            e.stopPropagation();
          },
          onClick: () => {
            setInitialTimeValues(timeValues);
            setInputValue(unconfirmedInputValue);
            closeMenu();
          },
          children: "Set"
        }
      )
    ] })
  ] });
};

// lib/input-adornment/component.tsx
var import_material16 = require("@mui/material");
var import_jsx_runtime16 = require("react/jsx-runtime");
var InputAdornment = (props) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material16.InputAdornment, { ...props });

// lib/time-picker/component.tsx
var import_icons_material3 = require("@mui/icons-material");
var import_utils14 = require("jotai/utils");
var import_jsx_runtime17 = require("react/jsx-runtime");
var TimePicker = ({
  variant = "regular",
  onValueChange
}) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Provider, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TimePicker_, { variant, onValueChange }) });
var TimePicker_ = (0, import_react9.memo)(
  ({ variant = "regular", onValueChange }) => {
    const timePickerRef = (0, import_react9.useRef)();
    const [inputFocused, setInputFocused] = (0, import_react9.useState)(false);
    const [anchorEl, setAnchorEl] = (0, import_react9.useState)(null);
    const [selectedRange, setSelectedRange] = (0, import_react9.useState)(0);
    const [newInteraction, setNewInteraction] = (0, import_react9.useState)(true);
    const [timeValues, setTimeValues] = useMyAtom(timeValuesAtom_);
    const [inputValue, setInputValue] = useMyAtom(inputValueAtom_);
    const [initialTimeValues, setInitialTimeValues] = useMyAtom(
      initialTimeValuesAtom_
    );
    const [unconfirmedInputValue] = useMyAtom(unconfirmedInputValueAtom_);
    (0, import_react9.useEffect)(() => {
      if (!Boolean(anchorEl)) {
        setInputValue(unconfirmedInputValue);
      }
    }, [unconfirmedInputValue]);
    (0, import_react9.useEffect)(() => {
      setInitialTimeValues(timeValues);
    }, [inputValue]);
    const handleIconClick = () => {
      setAnchorEl(timePickerRef.current);
    };
    const handleClose = () => {
      setTimeValues(import_utils14.RESET);
      setAnchorEl(null);
    };
    (0, import_react9.useEffect)(() => {
      if (variant === "timezone") {
        setInitialTimeValues({ ...initialTimeValues, timeZone: 1 });
        setTimeValues({ ...initialTimeValues, timeZone: 1 });
        setInputValue(`${inputValue} ${clockValues.timeZone[0]}`);
      }
      if (onValueChange) {
        onValueChange(inputValue);
      }
    }, []);
    (0, import_react9.useEffect)(() => {
      setNewInteraction(false);
      if (onValueChange) {
        onValueChange(inputValue);
      }
      if (inputFocused) {
        if (selectedRange === 0) {
          timePickerRef.current.setSelectionRange(0, 2);
        } else if (selectedRange === 1) {
          timePickerRef.current.setSelectionRange(3, 5);
        } else if (selectedRange === 2) {
          timePickerRef.current.setSelectionRange(6, 8);
        } else if (variant === "timezone") {
          timePickerRef.current.setSelectionRange(9, -1);
        }
      }
    }, [inputValue]);
    const handleInputTouch = (e) => {
      setNewInteraction(true);
      const inputElement = e.target;
      if (typeof e.target.className === "string" && e.target.className.includes("MuiInputBase-input")) {
        const selectionStart = inputElement.selectionStart;
        if (selectionStart < 3) {
          setSelectedRange(0);
          inputElement.setSelectionRange(0, 2);
        } else if (selectionStart < 6) {
          setSelectedRange(1);
          inputElement.setSelectionRange(3, 5);
        } else if (selectionStart < 9) {
          setSelectedRange(2);
          inputElement.setSelectionRange(6, 8);
        } else {
          setSelectedRange(3);
          inputElement.setSelectionRange(9, -1);
        }
      }
    };
    const handleKeyDown = (e) => {
      const inputElement = e.target;
      if (e.key !== "Tab" && e.key !== "Shift" && e.key !== " " && e.key !== "Enter") {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowRight": {
          if (selectedRange === 0) {
            setNewInteraction(true);
            setSelectedRange(1);
            inputElement.setSelectionRange(3, 5);
          } else if (selectedRange === 1) {
            setNewInteraction(true);
            setSelectedRange(2);
            inputElement.setSelectionRange(6, 8);
          } else if (variant === "timezone") {
            setNewInteraction(true);
            setSelectedRange(3);
            inputElement.setSelectionRange(9, -1);
          }
          break;
        }
        case "ArrowLeft": {
          if (selectedRange === 3) {
            setNewInteraction(true);
            setSelectedRange(2);
            inputElement.setSelectionRange(6, 8);
          } else if (selectedRange === 2) {
            setNewInteraction(true);
            setSelectedRange(1);
            inputElement.setSelectionRange(3, 5);
          } else {
            setNewInteraction(true);
            setSelectedRange(0);
            inputElement.setSelectionRange(0, 2);
          }
          break;
        }
        case "ArrowUp": {
          if (selectedRange === 0) {
            if (timeValues.hours < clockValues.hours) {
              setTimeValues((prev) => ({ ...prev, hours: prev.hours + 1 }));
            } else {
              setTimeValues((prev) => ({ ...prev, hours: 1 }));
            }
          } else if (selectedRange === 1) {
            if (timeValues.minutes < clockValues.minutes - 1) {
              setTimeValues((prev) => ({ ...prev, minutes: prev.minutes + 1 }));
            } else {
              setTimeValues((prev) => ({ ...prev, minutes: 0 }));
            }
          } else if (selectedRange === 2) {
            if (timeValues.aa < clockValues.aa.length) {
              setTimeValues((prev) => ({ ...prev, aa: prev.aa + 1 }));
            } else {
              setTimeValues((prev) => ({ ...prev, aa: 1 }));
            }
          } else if (selectedRange === 3) {
            if (timeValues.timeZone < clockValues.timeZone.length) {
              setTimeValues((prev) => ({
                ...prev,
                timeZone: prev.timeZone + 1
              }));
            } else {
              setTimeValues((prev) => ({ ...prev, timeZone: 1 }));
            }
          }
          break;
        }
        case "ArrowDown": {
          switch (selectedRange) {
            case 0: {
              if (timeValues.hours > 1) {
                setTimeValues((prev) => ({ ...prev, hours: prev.hours - 1 }));
              } else {
                setTimeValues((prev) => ({ ...prev, hours: 12 }));
              }
              break;
            }
            case 1: {
              if (timeValues.minutes > 0) {
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: prev.minutes - 1
                }));
              } else {
                setTimeValues((prev) => ({ ...prev, minutes: 59 }));
              }
              break;
            }
            case 2: {
              if (timeValues.aa > 1) {
                setTimeValues((prev) => ({ ...prev, aa: prev.aa - 1 }));
              } else {
                setTimeValues((prev) => ({
                  ...prev,
                  aa: clockValues.aa.length
                }));
              }
              break;
            }
            case 3: {
              if (timeValues.timeZone > 1) {
                setTimeValues((prev) => ({
                  ...prev,
                  timeZone: prev.timeZone - 1
                }));
              } else {
                setTimeValues((prev) => ({
                  ...prev,
                  timeZone: clockValues.timeZone.length
                }));
              }
              break;
            }
          }
          break;
        }
        case "Tab": {
          setSelectedRange(4);
          setNewInteraction(true);
          break;
        }
        case "0": {
          switch (selectedRange) {
            case 0: {
              if (!newInteraction && timeValues.hours === 1) {
                setTimeValues((prev) => ({ ...prev, hours: 10 }));
                setSelectedRange(1);
                inputElement.setSelectionRange(3, 5);
                setNewInteraction(true);
              }
              break;
            }
            case 1: {
              if (newInteraction) {
                setTimeValues((prev) => ({ ...prev, minutes: 0 }));
              } else {
                switch (timeValues.minutes) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5: {
                    const newMinutes = `${timeValues.minutes}${e.key}`;
                    setTimeValues((prev) => ({
                      ...prev,
                      minutes: parseInt(newMinutes)
                    }));
                    setSelectedRange(2);
                    inputElement.setSelectionRange(6, 8);
                    setNewInteraction(true);
                    break;
                  }
                }
              }
              break;
            }
          }
          break;
        }
        case "1":
        case "2": {
          switch (selectedRange) {
            case 0: {
              if (newInteraction) {
                setTimeValues((prev) => ({ ...prev, hours: parseInt(e.key) }));
                setNewInteraction(false);
                if (e.key !== "1") {
                  setSelectedRange(1);
                  inputElement.setSelectionRange(3, 5);
                  setNewInteraction(true);
                }
              } else {
                if (timeValues.hours === 1) {
                  const newHours = `${timeValues.hours}${e.key}`;
                  setTimeValues((prev) => ({
                    ...prev,
                    hours: parseInt(newHours)
                  }));
                  setSelectedRange(1);
                  inputElement.setSelectionRange(3, 5);
                  setNewInteraction(true);
                }
              }
              break;
            }
            case 1: {
              if (newInteraction) {
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: parseInt(e.key)
                }));
                setNewInteraction(false);
              } else {
                if (timeValues.minutes < 6) {
                  const newMinutes = `${timeValues.minutes}${e.key}`;
                  setTimeValues((prev) => ({
                    ...prev,
                    minutes: parseInt(newMinutes)
                  }));
                  if (parseInt(newMinutes) > 3) {
                    setSelectedRange(2);
                    inputElement.setSelectionRange(6, 8);
                    setNewInteraction(true);
                  }
                }
              }
              break;
            }
          }
          break;
        }
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          switch (selectedRange) {
            case 0: {
              setTimeValues((prev) => ({ ...prev, hours: parseInt(e.key) }));
              setSelectedRange(1);
              inputElement.setSelectionRange(3, 5);
              setNewInteraction(true);
              break;
            }
            case 1: {
              if (timeValues.minutes > 0 && timeValues.minutes < 6) {
                const newMinutes = `${timeValues.minutes}${e.key}`;
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: parseInt(newMinutes)
                }));
                setSelectedRange(2);
                inputElement.setSelectionRange(6, 8);
                setNewInteraction(true);
              } else {
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: parseInt(e.key)
                }));
                if (parseInt(e.key) > 5) {
                  setSelectedRange(2);
                  inputElement.setSelectionRange(6, 8);
                  setNewInteraction(true);
                }
              }
              break;
            }
          }
          break;
        }
        case "a":
        case "A": {
          switch (selectedRange) {
            case 2: {
              setTimeValues((prev) => ({ ...prev, aa: 1 }));
              if (variant === "timezone") {
                setSelectedRange(3);
                inputElement.setSelectionRange(9, -1);
              }
              break;
            }
            case 3: {
              setTimeValues((prev) => ({ ...prev, timeZone: 4 }));
              break;
            }
          }
          break;
        }
        case "c":
        case "C": {
          if (selectedRange === 3) {
            setTimeValues((prev) => ({ ...prev, timeZone: 1 }));
          }
          break;
        }
        case "e":
        case "E": {
          if (selectedRange === 3) {
            setTimeValues((prev) => ({ ...prev, timeZone: 3 }));
          }
          break;
        }
        case "h":
        case "H": {
          if (selectedRange === 3) {
            setTimeValues((prev) => ({ ...prev, timeZone: 5 }));
          }
          break;
        }
        case "p":
        case "P": {
          switch (selectedRange) {
            case 2: {
              setTimeValues((prev) => ({ ...prev, aa: 2 }));
              if (variant === "timezone") {
                setSelectedRange(3);
                inputElement.setSelectionRange(9, -1);
              }
              break;
            }
            case 3: {
              setTimeValues((prev) => ({ ...prev, timeZone: 2 }));
              break;
            }
          }
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Provider, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        TextField,
        {
          className: "timePicker",
          value: Boolean(anchorEl) ? unconfirmedInputValue : inputValue,
          onKeyDown: handleKeyDown,
          placeholder: "Select a time",
          InputProps: {
            onClick: (e) => {
              handleInputTouch(e);
            },
            onFocus: (e) => {
              timePickerRef.current = e.target;
              setInputFocused(true);
              handleInputTouch(e);
            },
            onBlur: () => {
              setInputFocused(false);
              setSelectedRange(4);
            },
            ref: timePickerRef,
            endAdornment: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              IconButton,
              {
                variant: "input",
                shape: "circle",
                onClick: () => {
                  handleIconClick();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_icons_material3.AccessTime, {})
              }
            ) })
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        Menu,
        {
          onClose: handleClose,
          open: Boolean(anchorEl),
          anchorEl,
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            TimePickerForm,
            {
              closeMenu: handleClose,
              setInputValue,
              timeValues,
              setTimeValues,
              unconfirmedInputValue,
              setInitialTimeValues
            }
          )
        }
      )
    ] });
  }
);
