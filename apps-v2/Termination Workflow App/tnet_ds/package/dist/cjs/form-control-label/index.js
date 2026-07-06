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

// lib/form-control-label/index.ts
var form_control_label_exports = {};
__export(form_control_label_exports, {
  FormControlLabel: () => FormControlLabel
});
module.exports = __toCommonJS(form_control_label_exports);

// lib/form-control-label/component.tsx
var import_react2 = __toESM(require("react"), 1);
var import_material4 = require("@mui/material");
var import_styles = require("@mui/material/styles");

// lib/cms/component.tsx
var import_react = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime = require("react/jsx-runtime");
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

// lib/checkbox/theme.ts
var import_material3 = require("@mui/material");

// lib/form-helper-text/component.tsx
var import_material = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_material.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons_material.WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/layout/index.ts
var import_material2 = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");

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
var StyledCheckboxHelperText = (0, import_material3.styled)(FormHelperText)(({
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

// lib/form-control-label/component.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var StyledFormControlLabel = (0, import_styles.styled)(import_material4.FormControlLabel)(
  ({ theme }) => {
    const checkboxPalette = _checkboxTheme(theme);
    return {
      margin: 0,
      color: theme.palette.typography.color,
      gap: theme.spacing(3),
      ".MuiSwitch-root + .MuiFormControlLabel-label": {
        fontSize: theme.typography.paragraph.sm.regular.fontSize,
        fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
        lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
        color: theme.palette.toggle.label
      },
      "&:focus-visible": {
        color: theme.palette.textField.focus.border,
        borderWidth: "1px!important"
      },
      ".MuiCheckbox-root": {
        paddingRight: theme.spacing(0)
      },
      "&.T1-formControlLabel-checkbox": {
        height: "24px",
        ".MuiFormControlLabel-label": {
          fontSize: theme.typography.paragraph.md.regular.fontSize,
          fontFamily: theme.typography.paragraph.md.regular.fontFamily,
          lineHeight: theme.typography.paragraph.md.regular.lineHeight,
          padding: theme.spacing(0, 1, 0, 0)
        },
        "&.Mui-error": {
          "&>.MuiCheckbox-root": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.error.unchecked
            }
          },
          "&>.Mui-checked, &>.MuiCheckbox-indeterminate": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.error.checked
            }
          },
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.error.label
            }
          }
        },
        "&>.Mui-disabled.MuiFormControlLabel-label": {
          "& .MuiSvgIcon-root": {
            color: checkboxPalette.disabled.label
          }
        },
        "&:hover:not(.Mui-disabled, .Mui-error), &.hoverStories:not(.Mui-disabled, .Mui-error)": {
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.hover.label
            }
          },
          "&>.MuiCheckbox-root": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.hover.unchecked
            }
          },
          "&>.Mui-checked, &>.MuiCheckbox-indeterminate": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.hover.checked
            }
          }
        },
        "&.T1-formControlLabel-checkbox-focused": {
          outline: `dashed 1px ${checkboxPalette.outlineFocus}`,
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.focus.label
            }
          }
        }
      },
      "&.T1-formControlLabel-radio-checked": {
        outline: `dashed 1px ${checkboxPalette.outlineFocus}`
      },
      "&.T1-formControlLabel-radio": {
        gap: theme.spacing(1.5),
        paddingRight: theme.spacing(0.75),
        width: "fit-content",
        ".MuiFormControlLabel-label": {
          fontSize: theme.typography.paragraph.md.regular.fontSize,
          fontFamily: theme.typography.paragraph.md.regular.fontFamily,
          lineHeight: theme.typography.paragraph.md.regular.lineHeight
        },
        "&.Mui-error": {
          ".MuiRadio-root": {
            ".MuiSvgIcon-root, .MuiSvgIcon-root:nth-of-type(2)": {
              color: theme.palette.radioButton.error.color
            }
          }
        },
        "&>.Mui-disabled.MuiFormControlLabel-label": {
          color: theme.palette.radioButton.disabled.label,
          ".MuiRadio-root .MuiSvgIcon-root": {
            color: theme.palette.radioButton.disabled.color
          }
        },
        "&:hover:not(.Mui-disabled, .Mui-error), &.hoverStories:not(.Mui-disabled, .Mui-error)": {
          ".MuiRadio-root .MuiSvgIcon-root": {
            color: theme.palette.radioButton.hover.color
          }
        },
        "&.T1-formControlLabel-radio-focused": {
          outline: `dashed 1px ${theme.palette.radioButton.outlineFocus}`,
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: theme.palette.radioButton.focus.color
            }
          }
        }
      }
    };
  }
);
var FormControlLabel = (props) => {
  const propsWithDefault = {
    ...props
  };
  const { control, contentId, label: labelProp } = props;
  const [focused, setFocused] = import_react2.default.useState(false);
  const [checked, setChecked] = import_react2.default.useState(false);
  const [isFocusedByClick, setIsFocusedByClick] = import_react2.default.useState(false);
  const getCMSContent = useGetCMSContent();
  const label = contentId ? getCMSContent({
    contentId,
    key: ".label",
    fallbackContent: labelProp?.toString() || ""
  }) : labelProp;
  const clonedControl = import_react2.default.cloneElement(
    control,
    {
      setFocused,
      setChecked
    }
  );
  let classes = "";
  if (control.type.displayName === "Checkbox" || control.type.name === "Checkbox") {
    classes = "T1-formControlLabel-checkbox";
  } else if (control.type.displayName === "Radio" || control.type.name === "Radio") {
    classes = "T1-formControlLabel-radio";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    StyledFormControlLabel,
    {
      ...propsWithDefault,
      label,
      className: `${props.className ?? ""} ${classes} ${!isFocusedByClick && focused ? `${classes}-focused` : ""} ${checked ? `${classes}-checked` : ""}`,
      control: clonedControl,
      onBlur: () => {
        setIsFocusedByClick(false);
      },
      onClick: () => {
        setIsFocusedByClick(true);
      }
    }
  );
};
